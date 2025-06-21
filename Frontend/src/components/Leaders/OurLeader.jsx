import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const leaders = [
  {
    name: 'shaheed-president-ziaur-rahman',
    img: '/z.jpg',
  },
  {
    name: 'chairperson-begum-khaleda-zia',
    img: '/k.jpg',
  },
  {
    name: 'acting-chairman-tarique-rahman',
    img: '/t.jpg',
  },
];

export default function OurLeaders() {
  return (
    <section className="max-w-6xl mx-auto my-20 px-4 flex flex-col lg:flex-row items-center gap-10">
      {/* Text Section */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-green-800 mb-4">Our Leaders</h2>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Valiant freedom fighters and Bangladeshi Nationalists founded the party under the leadership
          of President Ziaur Rahman in 1978
        </p>
        <Link to="/leaders/shaheed-president-ziaur-rahman" className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition">
          Learn More
        </Link>
      </motion.div>

      {/* Images Section */}
      <motion.div 
        className="flex gap-4"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {leaders.map((leader, index) => (
          <Link
            key={index}
            to={`/leaders/${leader.name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <img
              src={leader.img}
              alt={leader.name}
              className="w-36 h-44 rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
