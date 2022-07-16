import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typewriter from "typewriter-effect";
import './jumbotrone.css'
import { Typography } from '@mui/material';


const Jumbotrone = () => {
  return (
    <Card sx={{ maxWidth: 10000 }}>
        <div style={{position:"relative"}}>
            <div className='img'>
            <CardMedia
      component="img"
      height="500"
      image="https://images.unsplash.com/photo-1517675997237-8ce16dd96850?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="green iguana"
    />
            </div>
      
     <div  style={{position: "absolute", color: "white",top: 150,left: "50%",transform: "translateX(-50%)",}} >
        
     <Typography variant="h4" fontFamily={'Roboto'}>PRINTING AND PACKGING</Typography>
     </div>

    <div  style={{position: "absolute", color: "white",top: 250,left: "50%",transform: "translateX(-50%)",}} >
        
        <div className='typewriter'>
        <Typewriter 
  options={{
    strings: ["Individually We Are One Drop, But Together We Are An Ocean."],
    autoStart: true,
    loop: true,
  }}
/>
        </div>
 
    </div>
        </div>
   
   
  </Card>
  )
}

export default Jumbotrone