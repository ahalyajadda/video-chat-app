import React from 'react'
import {Button } from "@mui/material";
import { SocketContext } from '../SocketContext';
import { useContext } from 'react';

import MediaQuery from "react-responsive";
export default function Notifications() {
  const {answerCall,call,callAccepted}=useContext(SocketContext);

  return (
    <>
      {call.isReceivedCall && !callAccepted && (
          <div style={{display:'flex',justifyContent:'center'}}>
            <h1>{call.name} is calling:</h1>
            <Button color="primary" onClick={answerCall}>
              Answer
            </Button>

          </div>
      )}
    </>
  )
}
