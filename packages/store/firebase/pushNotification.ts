import { envConfig } from '@core/envconfig';
import { httpRequest, localStorageKeys } from '@core/utils';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import {
  getMessaging,
  getToken,
  isSupported,
  onMessage,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging.js';
import { enqueueSnackbar } from 'notistack';
import { create } from 'zustand';

import { PushNotificationProps } from './firebaseInterface';

export const usePushNotification = create<PushNotificationProps>((set, get) => ({
  app: {},
  messaging: {},
  deviceToken: '',
  initialize: async () => {
    try {
      const firebaseConfig = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        /* eslint-disable no-undef */
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
      };
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      // Initialize Firebase Cloud Messaging and get a reference to the service
      const messaging = getMessaging(app);
      // when a push message is received and the user is currently on a page for your origin,
      // the message is passed to the page and an onMessage() event is dispatched with
      // the payload of the push message.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onMessage(messaging, async (payload: any) => {
        enqueueSnackbar(payload?.notification?.title, {
          variant: 'success',
        });
        // toast(payload?.notification?.title);
        // toast(
        //     () => (
        //   <span>
        //     {payload?.notification?.title}
        //     {payload?.notification?.body && <p>{payload?.notification?.body}</p>}
        //     <button
        //       style={{
        //         color: 'white',
        //         backgroundColor: '#007965',
        //         border: 'none',
        //         padding: '6px 16px',
        //         fontFamily: 'poppins,Roboto,-apple-system,sans-serif',
        //         fontWeight: 500,
        //         cursor: 'pointer',
        //         textDecoration: 'none',
        //         borderRadius: '8px',
        //         textTransform: 'none',
        //         fontSize: '12px',
        //       }}
        //       onClick={() =>
        //         payload?.data?.is_actionable === 'true' &&
        //         payload?.fcmOptions?.link?.length > 0 &&
        //         payload?.fcmOptions?.link === '/familymembers'
        //           ? routeTo(useRouting, payload?.fcmOptions?.link, {
        //               fromNotification: payload?.data?.is_actionable ?? false,
        //               senderUserId: payload?.data?.sender_profile_user_id ?? '',
        //               senderUserName: payload?.data?.sender_profile_name ?? '',
        //               receiverUserId: payload?.data?.reciever_profile_user_id ?? '',
        //               familyMemberId: payload?.data?.family_member_id ?? '',
        //               notificationId: payload?.data?.notification_id ?? '',
        //             })
        //           : payload?.data?.is_actionable === 'false' && payload?.fcmOptions?.link === '/referral=true'
        //           ? routeTo(useRouting, payload?.fcmOptions?.link, {
        //               fromNotification: 'referral',
        //             })
        //           : payload?.data?.is_actionable === 'false' && payload?.fcmOptions?.link === '/appointments=true'
        //           ? routeTo(useRouting, payload?.fcmOptions?.link, {
        //               fromNotification: 'appointments',
        //             })
        //           : payload?.data?.is_actionable === 'true' && payload?.fcmOptions?.link?.length > 0
        //           ? routeTo(useRouting, payload?.fcmOptions?.link)
        //           : payload?.data?.is_actionable === 'false' && payload?.fcmOptions?.link?.length > 0
        //           ? payload?.data?.is_actionable === 'false' && payload?.fcmOptions?.link === '/?verificationDone=true'
        //             ? null
        //             : softDeleteNotification(payload?.data?.notification_id, payload?.fcmOptions?.link)
        //           : softDeleteNotification(payload?.data?.notification_id)
        //       }
        //     >
        //       {payload?.fcmOptions?.link?.length > 0 && payload?.fcmOptions?.link !== '/?verificationDone=true'
        //         ? 'View'
        //         : 'Got it'}
        //     </button>
        //   </span>
        // ));
        // if (
        //   payload?.fcmOptions?.link === '/?verificationDone=true' ||
        //   payload?.fcmOptions?.link === '/?referral=true' ||
        //   payload?.fcmOptions?.link === '/?appointments=true'
        // ) {
        //   softDeleteNotification(payload?.data?.notification_id, payload?.fcmOptions?.link);
        // }
      });
      set({ messaging: messaging, app: app });
    } catch (err) {
      console.log(err);
    }
  },
  enableNotification: async () => {
    try {
      // Check if the browser supports notifications
      if (!('Notification' in window)) {
        console.log('This browser does not support notification');
        return false;
      }
      // If already denied the notification permission
      if (Notification.permission === 'denied') {
        console.log('Notification permission is blocked. Kindly allow it to receive notification');
        return 'denied';
      }
      // checks if the browser is supported for firebase messaging
      const support = await isSupported();
      if (!support) {
        return false;
      }
      const status = await Notification.requestPermission();
      if (status && status === 'granted') {
        // getToken
        const { handleToken } = get();
        handleToken();
        return 'granted';
      }
      return status;
    } catch (error) {
      console.log(error);
    }
  },
  handleToken: async () => {
    try {
      const { messaging } = get();
      getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPIDKEY,
      })
        .then(async (currentToken: string) => {
          set({ deviceToken: currentToken });
          const storedToken = localStorage.getItem(localStorageKeys.deviceToken);
          if (!storedToken || currentToken !== storedToken) {
            const { upsertDeviceToken } = get();
            upsertDeviceToken(currentToken);
            localStorage.setItem(localStorageKeys.deviceToken, currentToken);
          }
        })
        .catch((err: string) => {
          console.log('An error occurred while retrieving token. ', err);
        });
    } catch (error) {
      console.log(error);
    }
  },
  upsertDeviceToken: (token: string) => {
    try {
      const data = {
        device_token_id: token ?? '',
      };
      httpRequest(
        'post',
        `${envConfig.api_url}/user/save_device_token`,
        {
          ...data,
        },
        true,
      );
    } catch (err) {
      console.log(err);
    }
  },
  deleteDeviceToken: (token: string) => {
    try {
      const data = {
        device_token_id: token ?? '',
      };
      httpRequest(
        'post',
        `${envConfig.api_url}/user/device_log_out`,
        {
          ...data,
        },
        true,
      );
    } catch (err) {
      console.log(err);
    }
  },
}));
