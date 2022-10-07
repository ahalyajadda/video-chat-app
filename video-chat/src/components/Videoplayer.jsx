import React from 'react'
import {Grid,Typography,Pages} from "@mui/material";
import {SocketContext} from "../SocketContext";
import { useContext } from 'react';
import MediaQuery from "react-responsive";
export default function Videoplayer() {
  const context=useContext(SocketContext);
  console.log(context);
  const {name,callAccepted,myVideo,userVideo,callEnded,stream,call}=useContext(SocketContext);
  return (
    <>

   <MediaQuery  maxWidth={768} >
      <Grid container style={{justifyContent:'center', marginTop:'10px'}}>
        {/* our own video */}
        { stream &&(
            <paper style={{ padding:'10px',border:'2px solid black',backgroundColor:'white'}}>
            <Grid item xs={12} md={6}>
                <Typography variant='h5' gutterBottom>{name || "Name"}</Typography>
                <video playsInline muted ref={myVideo} autoPlay style={{width:"250px"}}/>
            </Grid>
          </paper>

          )}
  
            {/* users video */}
            {
              callAccepted && !callEnded &&(
                <paper style={{ padding:'10px',border:'2px solid black',backgroundColor:'white'}}>
                <Grid item xs={12} md={6}>
                    <Typography variant='h5' gutterBottom>{call.name || "Name"}</Typography>
                    <video playsInline  ref={userVideo} autoPlay style={{width:"250px"}}/>
                </Grid>
              </paper>
              )}
          </Grid> 
  
  </MediaQuery>
  
  <MediaQuery minWidth={769} >
      <Grid container style={{justifyContent:'center'}}>
        {/* our own video */}
        { stream &&(
            <paper style={{ padding:'10px',border:'2px solid black',backgroundColor:'white'}}>
            <Grid item xs={12} md={6}>
                <Typography variant='h5' gutterBottom>{name || "Name"}</Typography>
                <video playsInline muted ref={myVideo} autoPlay style={{width:"400px"}}/>
            </Grid>
          </paper>

          )}
      
        {/* users video */}
        {
          callAccepted && !callEnded &&(
            <paper style={{ padding:'10px',border:'2px solid black',backgroundColor:'white'}}>
            <Grid item xs={12} md={6}>
                <Typography variant='h5' gutterBottom>{call.name || "Name"}</Typography>
                <video playsInline  ref={userVideo} autoPlay style={{width:"400px"}}/>
            </Grid>
          </paper>
          )}
      </Grid>
      </MediaQuery>  
   </>
  )
}
