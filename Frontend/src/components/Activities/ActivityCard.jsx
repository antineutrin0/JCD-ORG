// src/components/ActivityCard.js

import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const ActivityCard = ({ title, date, imageUrl, linkTo }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link to={linkTo} style={{ textDecoration: 'none' }}>
        <Card
          sx={{
            marginBottom: 2,
            boxShadow: 3,
            borderRadius: 3,
            overflow: 'hidden',
          }}
        >
          <CardMedia
            component="img"
            sx={{ height: 200, objectFit: 'cover' }}
            image={imageUrl}
            alt={title}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ActivityCard;
