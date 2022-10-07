import React from "react";
import { AppBar, Typography } from '@mui/material'
import Videoplayer from "./components/Videoplayer";
import MediaQuery from "react-responsive";
import Notifications from "./components/Notifications";
import Options from "./components/Options";


export function App () {
    return (
      <>
      <MediaQuery minWidth={300} maxWidth={768} >
      <div
          style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:' center',
        width: '100%'
        }}>
          <AppBar 
          style={{
            borderRadius: 50,
             margin:'5px 0px ',
            display: 'flex',
            fleXDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '200px',
            fontSize:'20px',
            border: '1px solid black',
          }} position="static" color="inherit">
            <Typography variant="h5" align="center">Video Chat</Typography>

          </AppBar>
          <Videoplayer/>
          <Options>
            <Notifications />
          </Options>
    
      </div>
      </MediaQuery>
      <MediaQuery  minWidth={769} >
        <div
            style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent:'center',
          alignItems:' center',
          width: '100%'
          }}>
            <AppBar 
            style={{
              borderRadius: 50,
              margin:'30px 100px',
              display: 'flex',
              fleXDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '400px',
              border: '2px solid black',
            }} position="static" color="inherit">
              <Typography variant="h2" align="center">Video Chat</Typography>

            </AppBar>
            <Videoplayer/>
            <Options>
              <Notifications />
            </Options>
      
        </div>
        </MediaQuery>
        </>
    );
  }

export default App;