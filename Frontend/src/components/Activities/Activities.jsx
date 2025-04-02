// src/components/Activities.js

import React from 'react';
import ActivityCard from './ActivityCard';

const Activities = ({ activities }) => {
  return (
    <div>
    <div className="grid grid-cols-4 gap-5">
    {activities.map((activity, index) => (
        <ActivityCard key={index} {...activity} />
      ))}
    </div>
      
    </div>
  );
};

export default Activities;