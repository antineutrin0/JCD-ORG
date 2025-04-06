import React from 'react';
import SectionTitle from '../SectionTitle';
import ActivityPagination from './ActivityPaginaton';
import Activities from './Activities';
import { motion } from 'framer-motion';

const activities = [
  {
    id: 1,
    title: "Hackathon 2025",
    description:
      "Participate in an exciting hackathon to showcase your coding skills and collaborate with others.",
    date: "2025-05-01",
    imageUrl:
      "https://studyingreece.edu.gr/wp-content/uploads/2024/12/Hackathon-25-Greece-Turkiye.jpg",
  },
  {
    id: 2,
    title: "AI Workshop",
    description:
      "Learn about artificial intelligence, machine learning, and deep learning in this hands-on workshop.",
    date: "2025-06-15",
    imageUrl:
      "https://artificialpaintings.com/wp-content/uploads/2024/06/410_how_to_host_an_AI_workshop.webp",
  },
  {
    id: 3,
    title: "Startup Pitch Event",
    description:
      "Present your startup idea to potential investors and entrepreneurs at this pitch event.",
    date: "2025-07-20",
    imageUrl:
      "https://startupshiksha.in/wp-content/uploads/2025/02/tedttalk3_159131.webp",
  },
  {
    id: 4,
    title: "Coding Bootcamp",
    description:
      "An intensive coding bootcamp where you will learn the fundamentals of web development in 10 days.",
    date: "2025-08-10",
    imageUrl: "https://www.hubspot.com/hubfs/how-to-start-coding-1.jpg",
  },
];

export default function ActitvityHome() {
  return (
    <motion.div
      className="mx-auto max-w-7xl my-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <SectionTitle title="Recent Activity" />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <Activities activities={activities} />
      </motion.div>
    </motion.div>
  );
}
