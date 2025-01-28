export interface PushNotificationProps {
  app: object;
  messaging: object;
  deviceToken: string;
  initialize: () => void;
  enableNotification: () => void;
  handleToken: () => void;
  upsertDeviceToken: (token: string) => void;
  deleteDeviceToken: (token: string) => void;
}
