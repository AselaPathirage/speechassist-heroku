import React from 'react';
import Box from '@mui/material/Box';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput,ConversationHeader} from '@chatscope/chat-ui-kit-react';
import Avatar from '@mui/material/Avatar';

function Chat() {
    return (
        <Box
            sx={{ width: 350, paddingTop: 10 }}
            role="presentation"
        >
            <div style={{ position: "relative", height: "85vh" }}>
                <MainContainer>
                    <ChatContainer>
                        <ConversationHeader>
                            <Avatar sx={{height:'100px',width:'100px'}}>A</Avatar>
                            <ConversationHeader.Content>
                                <span style={{
                                    alignSelf: "flex-center"
                                }}>Asela Pathirage</span>
                            </ConversationHeader.Content>
                        </ConversationHeader>
                        <MessageList>
                            <Message style={{marginTop:'15px'}} model={{
                                message: "Hello Good Morning",
                                sentTime: "just now",
                                sender: "Joe",
                                direction: "outgoing",
                            }} />
                            <Message style={{marginTop:'15px'}} model={{
                                message: "Good morning",
                                sentTime: "just now",
                                sender: "Akane",

                            }} />
                            <Message style={{marginTop:'15px'}} model={{
                                message: "Lets schedule a meeting tommorrow to check the progress",
                                sentTime: "just now",
                                sender: "Joe",
                                direction: "outgoing",
                            }} />
                            <Message style={{marginTop:'15px'}} model={{
                                message: "Sure doctor, I'm available tommorrow",
                                sentTime: "just now",
                                sender: "Akane",

                            }} />
                            <Message style={{marginTop:'15px'}} model={{
                                message: "Fine. I'll add a appointment session ",
                                sentTime: "just now",
                                sender: "Joe",
                                direction: "outgoing",
                            }} />
                        </MessageList>
                        <MessageInput placeholder="Type message here" attachButton="false" />
                    </ChatContainer>
                </MainContainer>
            </div>
        </Box>
    )
}

export default Chat