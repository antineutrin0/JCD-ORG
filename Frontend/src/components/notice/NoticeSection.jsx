import React from 'react';
import NoticeCard from './NoticeCard';
import { Link } from 'react-router';

const notices = [
  {
    title: 'Orientation Program',
    date: '2025-04-08',
    description: 'Orientation for new semester students will be held in the auditorium.',
  },
  {
    title: 'Emergency Holiday',
    date: '2025-04-05',
    description: 'Due to unforeseen weather, classes are suspended for the day.',
  },
  {
    title: 'AI Workshop Registration',
    date: '2025-04-10',
    description: 'Register before April 12 to join the exciting hands-on workshop on AI.',
  },
  {
    title: 'Library Closed for Maintenance',
    date: '2025-04-09',
    description: 'Library will remain closed on April 11 for system upgrades.',
  },
  {
    title: 'Hackathon 2025 Info Session',
    date: '2025-04-11',
    description: 'An info session will be conducted about Hackathon 2025 and its opportunities.',
  },
  {
    title: 'Hackathon 2025 Info Session',
    date: '2025-04-11',
    description: 'An info session will be conducted about Hackathon 2025 and its opportunities.',
  },
];

export default function NoticeSection() {
  return (
    <div className="max-w-6xl mx-auto my-20 px-4">
      <h2 className="text-3xl font-bold mb-6 text-green-800">📢 Notices</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {notices.slice(0, 6).map((notice, index) => (
          <NoticeCard key={index} {...notice} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link to="/all-notices">
          <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg shadow">
            View All Notices
          </button>
        </Link>
      </div>
    </div>
  );
}
