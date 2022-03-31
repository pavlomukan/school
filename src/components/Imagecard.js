import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImageCard() {
  return (
    <Card sx={{ maxWidth: 356 }}>
      <CardMedia
        component="img"
        height="180"
        image="https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2018/10/Robert%20002_d.jpg?itok=ZCbVEg2s"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Private School
        </Typography>
        <Typography variant="body2" color="text.secondary">
        An independent school is independent in its finances and governance. Also known as private schools, non-governmental, privately funded, or non-state schools, they are not administered by local, state or national governments. In British English, an independent school usually refers to a school which is endowed, i.e. held by a trust, charity, or foundation, whilst a private school is one which is privately owned.
        </Typography>
      </CardContent>
      
    </Card>
  );
}