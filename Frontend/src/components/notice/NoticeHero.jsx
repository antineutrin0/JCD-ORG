import React, { useState } from 'react';

function NoticeHero() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // The search is already handled by the filteredNotices calculation
    // This function is kept for the button click event
  };

  const notices = [
    {
      title: 'Upcoming Event: Tech Conference',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      date: '2024-12-15',
      details: 'Join us for a day of innovation and networking at our annual Tech Conference. Explore the latest trends and connect with industry leaders.',
    },
    {
      title: 'System Maintenance Scheduled',
      image: 'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
      date: '2024-11-20',
      details: 'Please note that our systems will be undergoing maintenance on November 20th. Services may be temporarily unavailable.',
    },
    {
      title: 'Holiday Office Closure',
      image: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
      date: '2024-12-25',
      details: 'Our offices will be closed on December 25th for the Christmas holiday. We will resume normal operations on December 26th.',
    },
    {
      title: 'Town Hall Meeting: City Budget Proposal',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      date: '2024-11-05',
      details: 'All residents are invited to attend the town hall meeting to discuss the proposed city budget for 2025. Your input is valuable in shaping our community priorities.',
    },
    {
      title: 'Voter Registration Deadline Approaching',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      date: '2024-10-15',
      details: 'The deadline to register to vote in the upcoming municipal elections is October 15th. Visit your local election office or register online to ensure your voice is heard.',
    }
  ];

  // Filter notices based on search term
  const filteredNotices = notices.filter(notice => 
    notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notice.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notice.date.includes(searchTerm)
  );

  return (
    <div className="flex flex-col items-center w-full p-5">
      {/* Search Box */}
      <div className="mb-5 w-4/5 max-w-lg flex">
        <input
          type="text"
          placeholder="Search Notices..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="flex-1 p-2 border border-[#01523c] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-[#01523c]"
        />
        <button 
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-[#01523c] text-white rounded-md hover:bg-[#013a2c] transition"
        >
          Search
        </button>
      </div>

      {/* Hero Notice Section */}
      <div className="text-center  max-w-full">
        <h1 className="text-3xl font-bold mb-3 text-gray-800">Important Notices</h1>
        <p className="text-lg text-gray-600">
          Welcome to our notice board. Stay updated with the latest announcements and important information.
        </p>

        {/* Notices */}
        <div className="mt-6">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice, index) => (
              <div
                key={index}
                className="border border-gray-200 p-5 mb-4 rounded-lg shadow-md hover:shadow-lg transition flex items-center"
              >
                {notice.image && (
                  <a href={notice.image} target="_blank" rel="noopener noreferrer" className="w-1/3">
                    <img src={notice.image} alt={notice.title} className="w-full h-auto object-contain rounded" />
                  </a>
                )}
                <div className="w-2/3 pl-5">
                  <h3 className="text-[#01523c] font-semibold text-xl">{notice.title}</h3>
                  <p className="font-bold text-gray-700">Date: {notice.date}</p>
                  <p className="text-gray-600 mt-2">{notice.details}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-xl text-gray-600">No notices found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NoticeHero;