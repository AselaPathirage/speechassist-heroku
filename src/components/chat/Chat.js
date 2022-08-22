import React,{useEffect} from 'react';

const Chat = (props) => {

  useEffect(() => {
    props.itemSelected('Messages');
  })



  return (
    <div>chat
    
    </div>
  )
}

export default Chat