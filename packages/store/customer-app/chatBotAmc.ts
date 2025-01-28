import { envConfig } from '@core/envconfig';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { chatArray, ChatBotAmcInterface, questionInterface, sendChatBotInterface } from '../interface';
import { enqueueSnackbar } from 'notistack';
const nowDate = new Date().getTime();
export const chatBotAmcStore = create<ChatBotAmcInterface>((set, get) => ({

  chatBotState: [],
  chatBotHistoryState: [],
  chatBotAssistance: [
    {
      title: 'Do you need any further assistance?',
      content: [
        'Yes, I have other queries',
        'No, my query is solved'
      ],
      date: nowDate,
      role: 'assistent',
    },
  ],
  chatBotThanksRespond: [
    {
      title: 'Thanks for your response!',
      content: [
        "Start conversation again",
        "End conversation"
      ],
      date: nowDate,
      role: 'assistent'
    },
  ],
  questionsValue: '',
  chatBotMessageLoading: false,
  productLoading: false,
  setUpdateQuestionsValue: (value: string) => {
    set({ questionsValue: value });
  },
  updateInitialQuestionsState: (questions: questionInterface[]) => {
    const nowDate = new Date().getTime();
    const { chatBotState } = get();

    let all_chat;
    if (chatBotState?.length === 0) {
      all_chat = [{
        message: 'Hi there! Please let me know how can i assist you?',
        type: 'pre-defined-questions',
        questions: questions,
        from: 'system',
        to: 'user_id',
        date: nowDate,
      }]
    } else {
      all_chat = chatBotState
    }
    set({
      chatBotHistoryState: all_chat
    });
  },



  sendMessage: (message: any | chatArray) => {

    if (Array.isArray(message)) {
      set({ chatBotHistoryState: [...get().chatBotHistoryState, ...message] });

    } else {
      set({ chatBotHistoryState: [...get().chatBotHistoryState, message] });

    }
  },


  setLoadingMessage: (value: boolean) => {
    set({ chatBotMessageLoading: value });
  },

  emptyUpdateState: () => {
    set({ questionsValue: '' });
  },

  // sentRequestChatBot: async (payload: sendChatBotInterface) => {
  //   set({ chatBotMessageLoading: true });
  //   const chatBotAssistanceQus = get().chatBotAssistance
  //   try {
  //     await httpRequest('post', `${envConfig.api_url}/ai/chat_bot`, payload, true)
  //       .then((res) => {
  //         const nowDate = new Date().getTime();
  //         const systemMessage = {
  //           message: res?.data?.data?.answer,
  //           type: 'text',
  //           questions: [],
  //           from: 'system',
  //           to: 'user_id',
  //           dateTime: nowDate,
  //         };

  //         get().sendMessage(systemMessage);
  //         setTimeout(() => {
  //           get().sendMessage({ ...chatBotAssistanceQus[0], dateTime: nowDate });
  //         }, 5000)

  //       })
  //       .catch((err) => {
  //         console.log('err', err);
  //       });
  //   } catch (error) {
  //     set({});
  //   } finally {
  //     set({ chatBotMessageLoading: false });
  //   }
  // },




  productBot: async (payload: any, callback: any = () => false) => {
    set({ productLoading: true });
    const chatBotAssistanceQus = get().chatBotAssistance;
    const { chatBotHistoryState } = get()
    

    try {
      await httpRequest('post', `${envConfig.api_url}/ai/product_bot`, payload, true)
        .then((res) => {
          const nowDate = new Date().getTime();
          const systemMessage = [
            {
              message: res?.data?.data?.answer,
              type: 'text',
              questions: [],
              from: 'assistent',
              to: 'user',
              date: nowDate,
            },
          ]
          if (!payload?.no_query) {
            get().sendMessage(systemMessage);
            setTimeout(() => {
              get().sendMessage({ ...chatBotAssistanceQus[0], date: nowDate });
            }, 5000)
          }
          if (payload?.other_query) {
            get().sendMessage({ ...chatBotHistoryState[0], date: nowDate });
          }
          callback();
        })
        .catch((err) => {
          console.log('err', err);
        });
    } catch (error) {
      set({});
    } finally {
      set({ productLoading: false });
    }
  },

  chatBotHistory: async (payload: any) => {
    const { chatBotState } = get();
    try {
      await httpRequest('post', `${envConfig.api_url}/chat/history`, payload, true)
        .then((res) => {
          set({
            chatBotHistoryState:
              res?.data?.data ?? []
          });
          return res?.data?.status
        })
        .catch((err) => {
          console.log('err', err);
        });
    } catch (error) {
      set({});
    } finally {
      set({ productLoading: false });
    }
  },

  clearChatBotHistory: () => {
    set({ chatBotState: [] });
  },

  getDefaultQuestion: (val: any) => {

    set({ chatBotHistoryState: val })
  }
}));
