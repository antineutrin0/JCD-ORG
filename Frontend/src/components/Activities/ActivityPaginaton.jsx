// src/components/ActivityPagination.js

import React, { useState, useEffect } from 'react';
import { Pagination, CircularProgress } from '@mui/material';
import Activities from './Activities';


const ActivityPagination = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2); // Assuming there are 2 pages of data
  const activitiesPerPage = 5;

  // Dummy JSON data
  const dummyActivities = [
    {
      "id": 1,
      "title": "Hackathon 2025",
      "description": "Join our exciting hackathon event where developers will compete to solve real-world problems in 24 hours.",
      "date": "2025-05-01",
      "imageUrl": "https://via.placeholder.com/150"
    },
    {
      "id": 2,
      "title": "AI Workshop",
      "description": "Learn about artificial intelligence, machine learning, and deep learning in this hands-on workshop.",
      "date": "2025-06-15",
      "imageUrl": "https://via.placeholder.com/150"
    },
    {
      "id": 3,
      "title": "Startup Pitch Event",
      "description": "Present your startup idea to potential investors and entrepreneurs at this pitch event.",
      "date": "2025-07-20",
      "imageUrl": "https://via.placeholder.com/150"
    },
    {
      "id": 4,
      "title": "Coding Bootcamp",
      "description": "An intensive coding bootcamp where you will learn the fundamentals of web development in 10 days.",
      "date": "2025-08-10",
      "imageUrl": "https://via.placeholder.com/150"
    },
    {
      "id": 5,
      "title": "Product Design Sprint",
      "description": "Join a design sprint to prototype and test a new product idea with a cross-functional team.",
      "date": "2025-09-05",
      "imageUrl": "https://via.placeholder.com/150"
    },
    {
      "id": 6,
      "title": "Blockchain Conference",
      "description": "Explore the latest trends and innovations in blockchain technology at this conference.",
      "date": "2025-10-12",
      "imageUrl": "https://via.placeholder.com/150"
    },
    {
      "id": 7,
      "title": "Cybersecurity Summit",
      "description": "Attend workshops and talks on the latest developments in cybersecurity and network protection.",
      "date": "2025-11-01",
      "imageUrl": "https://via.placeholder.com/150"
    },
    {
      "id": 8,
      "title": "IoT Expo",
      "description": "Discover cutting-edge Internet of Things solutions and meet industry leaders in this expo.",
      "date": "2025-12-15",
      "imageUrl": "https://via.placeholder.com/150"
    },
    {
      "id": 9,
      "title": "Game Development Workshop",
      "description": "Learn the fundamentals of game development and start creating your own game in this workshop.",
      "date": "2026-01-20",
      "imageUrl": "https://via.placeholder.com/150"
    },
    {
      "id": 10,
      "title": "Tech Career Fair",
      "description": "Connect with top tech companies and explore career opportunities in this exciting career fair.",
      "date": "2026-02-10",
      "imageUrl": "https://via.placeholder.com/150"
    }
  ];

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      try {
        // Simulate fetching data for the current page
        const startIndex = (currentPage - 1) * activitiesPerPage;
        const endIndex = currentPage * activitiesPerPage;
        const paginatedActivities = dummyActivities.slice(startIndex, endIndex);

        setActivities(paginatedActivities);
        setTotalPages(Math.ceil(dummyActivities.length / activitiesPerPage));
      } catch (error) {
        console.error('Error fetching activities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [currentPage]);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      {loading ? (
        <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />
      ) : (
        <>
          <Activities activities={activities} />
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChangePage}
            color="primary"
            sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
          />
        </>
      )}
    </div>
  );
};

export default ActivityPagination;
