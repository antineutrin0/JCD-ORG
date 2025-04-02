// src/pages/ActivityPage.js

import React from 'react';
import { Typography } from '@mui/material';
import ActivityPagination from './ActivityPaginaton';


const ActivityPage = () => {
  return (
    <div  style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Activity Feed
      </Typography>
      <ActivityPagination />
    </div>
  );
};

export default ActivityPage;
