import React, { useEffect, useState, useCallback } from 'react';
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import Box from '@mui/material/Box';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, ConversationHeader } from '@chatscope/chat-ui-kit-react';
import Avatar from '@mui/material/Avatar';

function mainChat(props) {
    const [myEvents, setEvents] = useState({ messages: [] });
    const [fullName, setFullName] = useState('');
    const [CurrentMessage, setCurrentMessage] = useState('');
    const [chatId, setChatId] = useState(0);
    const [chtcht, setChtcht] = useState(0);
    const therapistId = localStorage.getItem('userName');
    const patientIdAA = localStorage.getItem('patientId');
    const axiosPrivate = useAxiosPrivate();


    const getPatientName = async (patientId) => {
        const controller = new AbortController();
        try {
            const response2 = await axiosPrivate.get(`/patient/${patientId}`, {
                signal: controller.signal
            });
            // console.log(typeof(JSON.stringify(response2.data.fullName)));
            return response2.data.fullName;

        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        console.log("useEffect");
        let isMounted = true;
        const controller = new AbortController();


        const getEvents = async () => {
            try {
                console.log(props.patientId);
                const response = await axiosPrivate.get(`/chat/patient/${patientIdAA}`, {
                    signal: controller.signal
                });
                console.log(response.data);
                setFullName(await getPatientName(response.data.patientId));
                setChatId(response.data.chatId);

                isMounted && setEvents(response.data);
                // setUsers(response.data);
            } catch (err) {
                console.error(err);
                // navigate('/', { state: { from: location }, replace: true });
            }
        }

        getEvents();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [chtcht]);

    const handleChange = (event) => {
        console.log(event);

        setCurrentMessage(event);


    }

    const handleSend = async (e) => {

        const message = {
            id: chatId,
            message: CurrentMessage,
            senderType: "therapist",
            senderId: therapistId,
            receiverId: patientIdAA,
        };

        try {
            const response = await axiosPrivate.post(
                `/chat/message/${chatId}`,
                JSON.stringify(message
                )
            );
            console.log("ss");

            console.log(response?.data);

            setChtcht(1);
            setCurrentMessage('');

        }catch(err){
            console.log(err);
        }
    };






    return (
        <Box
            sx={{ width: 350, paddingTop: 10 }}
            role="presentation"
        >
            <div style={{ position: "relative", height: "85vh" }}>



                <MainContainer>
                    <ChatContainer>
                        <ConversationHeader>
                            <Avatar sx={{ height: '100px', width: '100px' }}>A</Avatar>
                            <ConversationHeader.Content>
                                <span style={{
                                    alignSelf: "flex-center"
                                }}>{fullName}</span>
                            </ConversationHeader.Content>
                        </ConversationHeader>
                        <MessageList>

                            {myEvents.messages.map((s, index) => (

                                <Message style={{ marginTop: '15px' }} model={{
                                    message: s.message,
                                    sentTime: "just now",
                                    sender: "Joe",

                                    direction: s.senderType === "therapist" ? "outgoing" : "",
                                }} />

                            ))}





                        </MessageList>


                        <MessageInput value={CurrentMessage} onChange={handleChange} onSend={handleSend} attachButton={false} placeholder="Type here..." />


                    </ChatContainer>
                </MainContainer>
            </div>
        </Box>
    )
}

export default mainChat