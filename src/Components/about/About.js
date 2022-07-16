import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './about.css'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const About = () => {
    const theme = useTheme();
  return (
    <div className="main1"> 
<div className='main'>
<div className='about'>
<CardMedia
      component="img"
      sx={{ width: 300, position: "relative",
        top: 0,
        left: 0, borderRadius:1}}
      className="img3"
      image="https://images.unsplash.com/photo-1586596436603-cb5e2445b06d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
      alt="Live from space album cover"
    />

 <Card sx={{ display: 'flex' }}>
        <CardMedia
      component="img"
      sx={{ width: 270, position: "absolute",
        top: 25,
        left: -20,borderRadius:1,}}
      className='img2'
      image="https://images.unsplash.com/photo-1573052775154-df4d35b5b5ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      alt="Live from space album cover"
    />
    </Card>
  </div>
</div >
<Card sx={{ minWidth: 275, height: 447,marginTop: 19, boxShadow:'none' }}>
<CardContent style={{padding:40}}>
        <Typography variant="h4" component="div">
           Welcome To <br/>Sushobhit Printers
        </Typography>
        <Typography variant="body2" style={{paddingTop: 30}}>
          One of the pioneer printing and packaging 
          <br/>
          firm in India, we have attained prominance as  
          <br/>
          the leader of the field of printing and 
          <br/> packging through, competivness and timely <br/>
          delivery with highest 
          quality standards and <br/>recorgnized safety performance. 
          <br/><br/><br/>
          In the era of advanced technology and new <br/>techniques, 
          we continously
          strive for innovation <br/>and enhanced efficiency. 
        </Typography>
      </CardContent>
    </Card>
    </div>
    
  )
}

export default About