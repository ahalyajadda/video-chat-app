import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from "@mui/material";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";
// import { makeStyles } from '@material-ui/core/styles';
import MediaQuery from "react-responsive";
import { SocketContext } from '../SocketContext';
const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  // const classes = useStyles();

  return (
    <>
    <MediaQuery  maxWidth={768} >
    <Container style={{ width:'280px', margin:'20px 0px',padding:0}} >
      <Paper elevation={8} style={{padding:"5px 10px", border:"1px solid black"}}>
        <form style={{ display:"flex", flexDirection:"column"}} noValidate autoComplete="off">
       
          <Grid container style={{  width:"100%"}}>
            <Grid item xs={12} md={6} style={{padding:3}}>
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me} style={{marginTop:10}}>
                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} style={{ padding:3}}>
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall}  style={{ marginTop: 10}}>
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} style={{ marginTop: 10}}>
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
           </form>
           {children}
           </Paper>
        </Container>
          </MediaQuery>
          <MediaQuery  minWidth={769} >
          <Container style={{ width:'600px', margin:'35px 0px',padding:0}} >
      <Paper elevation={10} style={{padding:"10px 20px", border:"2px solid black"}}>
        <form style={{ display:"flex", flexDirection:"column"}} noValidate autoComplete="off">
       
          <Grid container style={{  width:"100%"}}>
            <Grid item xs={12} md={6} style={{padding:20}}>
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me} style={{marginTop:20}}>
                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} style={{ padding:20}}>
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall}  style={{ marginTop: 20}}>
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} style={{ marginTop: 20}}>
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
          </form>
          {children}
          </Paper>
    </Container>
          </MediaQuery>
       
      </> 
    
  );
};

export default Options;
