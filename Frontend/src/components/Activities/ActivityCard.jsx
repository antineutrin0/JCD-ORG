// src/components/ActivityCard.js

import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Typography, Button } from '@mui/material';

const ActivityCard = ({ title, description, date, imageUrl }) => {
  return (
    <Card sx={{ marginBottom: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="textSecondary">{date}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ActivityCard;
