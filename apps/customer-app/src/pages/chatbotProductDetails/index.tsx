import { chatBotAmcStore, useProductDetails, useUserProfileDetails } from '@core/store';
import { BackCircleIcon, PageHeader } from '@core/ui/atoms';
import { ChatBotMessageBox, CustomChatBot } from '@core/ui/components';
import { ChatBotData } from '@core/ui/components/customChatBot';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { track } from '@amplitude/analytics-browser';

export default function ChatBotProductDetails() {
    const { product_id } = useParams();
    const {
        chatBotHistoryState,
        chatBotState,
        sendMessage,
        setLoadingMessage,
        emptyUpdateState,
        questionsValue,
        chatBotMessageLoading,
        productLoading,
        updateInitialQuestionsState,
        chatBotAssistance,
        chatBotThanksRespond,
        sentRequestChatBot,
        setUpdateQuestionsValue,
        productBot,
        chatBotHistory,
        getDefaultQuestion
    } = chatBotAmcStore();
    const { product_details, getProductDetails } = useProductDetails();
    const { profileDetails, getProfileDetails } = useUserProfileDetails();
    const navigate = useNavigate();
    const [timerMessage, setTimerMessage] = useState(false)

    const initialQuestionsSubmit = (val: ChatBotData) => {

        // Amplitude Track  pre-listed question 
        track('User Interacts with bot for the first time', { name: 'customer-app' })

        const afterSet = () => {

            if (val.id === 'queries') {

                setTimeout(() => {
                    setLoadingMessage(false);
                    sendMessage({ ...chatBotHistoryState[0], date: nowDate });
                    setTimerMessage(false)
                }, 1000);
            } else if (val.val === "No, my query is solved") {
                setTimeout(() => {
                    setLoadingMessage(false);
                    sendMessage({ ...chatBotThanksRespond[0], date: nowDate });
                    setTimerMessage(true)
                }, 1000);
            }
            else if (val.val === 'End conversation') {
                setLoadingMessage(false);
                setTimerMessage(false)
                navigate(`/productDetails/${product_id}`)
            } else {
                setLoadingMessage(false);
                setTimerMessage(false)
            }

        }
        const nowDate = new Date().getTime();
        const userMessage = {
            message: val?.val,
            type: 'pre-defined-questions',
            questions: [],
            from: 'user',
            to: 'assistent',
            date: nowDate,
            role: "user",
        };
        sendMessage(userMessage);
        setLoadingMessage(true);

        productBot({
            id: product_details?.product_id || '',
            type: 'product_details',
            messages: [
                {
                    title: val?.header,
                    role: 'assistent',
                    content: val?.message?.map((i: any) => i)
                },
                {
                    title: "",
                    role: 'user',
                    content: val?.val
                }
            ],
            no_query: val.val === "No, my query is solved" ? true : false,
            other_query: (val.val === "Yes, I have other queries" || val.val === 'Start conversation again') ? true : false,
        }, () => {
            afterSet()
        }
        )
    };

    const askQuestions = () => {

        // Amplitude Track send
        track('User Interacts with bot for the first time', { name: 'customer-app' })

        const callBackLoader = () => {
            setLoadingMessage(false);
        }

        if (questionsValue.length > 0) {
            setTimerMessage(false)
            emptyUpdateState();

            productBot({
                id: product_details?.product_id || '',
                type: 'product_details',
                messages: [
                    {
                        title: "",
                        role: 'user',
                        content: [questionsValue]
                    }
                ],
            }, () => { callBackLoader() });
            const nowDate = new Date().getTime();
            const userMessage = {
                message: questionsValue || '',
                type: 'text',
                questions: [],
                from: 'user',
                to: 'assistent',
                date: nowDate,
                role: 'user',
                title: ''
            };
            sendMessage(userMessage);
            setLoadingMessage(true);

        }
    };

    const initialData = async () => {
        getProfileDetails();
        await getProductDetails((product_id) || '')
            chatBotHistory({
                id: product_id || '',
                type: 'product_details',
            })

    };

    useEffect(() => {
        initialData();
    }, []);


    const constructData = (data: any) => {
        
        const nowDate = new Date().getTime();
        return [{
            title: 'Hi there! Please let me know how can i assist you?',
            content: Array.isArray(data) && data?.length > 0 ? data?.map(v => v.qus) : [],
            role: 'assitent',
            date: nowDate,
        }]
    }


    const initialDataCheck = async() => {
        if (chatBotHistoryState?.length === 0) {
            await getProductDetails(product_id)
                const res = constructData(product_details?.standard_qus_and_ans)
                getDefaultQuestion(res)
    
        } 
    }

    useEffect(() => {
        initialDataCheck();
    }, [chatBotHistoryState?.length === 0])

    // Amplitude tracking
    useEffect(() => {
        track('Product detail chat page', {
            name: 'customer-app',
        });
    }, []);

    return (
        <Box sx={{ padding: 2.5, backgroundColor: 'primary.900', height: '100vh' }}>
            <PageHeader
                subRootStyle={{ width: '90%' }}
                icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />}
                showIcon
                header
                headerText="Your Friendly Assistance"
            // useBackBtnClick
            // onBackBtnClick={onBackButtonClick}
            />

            <Box mt={2.5}>
                <ChatBotMessageBox
                    height="calc(100vh - 182px)"
                    placeholder="Type your query..."
                    handleClick={askQuestions}
                    value={questionsValue}
                    showMessageTimer={timerMessage}
                    onChange={(e) => setUpdateQuestionsValue(e?.target?.value)}
                >
                    {chatBotHistoryState?.map((val: any, index: number) => {
                        return (
                            <>
                                <CustomChatBot
                                    url={profileDetails?.profile_image}
                                    altText={profileDetails?.first_name}
                                    key={index}
                                    message={val?.content || val?.message}
                                    messageTime={val?.date || val?.dateTime}
                                    isUser={val?.role === "user" ? true : false}
                                    isInitialMessage={val?.title}
                                    data={val?.content}
                                    onClickMessage={initialQuestionsSubmit}
                                    header={val?.title}
                                />
                            </>
                        )
                    })
                    }

                    {chatBotMessageLoading && (
                        <CustomChatBot
                            message={'Typing....'}
                            isUser={false}
                            isInitialMessage={false}
                            data={[]}
                            onClickMessage={() => false}
                            loadingMessage={chatBotMessageLoading}
                        />
                    )}
                </ChatBotMessageBox>
            </Box>
        </Box>
    );
}
