import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://img.choice.com.au/-/media/d31f5f6929994cce8e537fbec957dc6b.ashx"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        We understand the riskiness of Internet scams
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Phishing scams are a very dangerous form of cybercrime that aims to trick people into entering sensitive personal 
        information such as account numbers, passwords, bank card numbers, social security numbers, etc. 
        by spoofing legitimate websites.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Lern More About internet fraud</Button>
        <Button size="small">Detect Web URL for free</Button>
      </CardActions>
    </Card>
  );
}