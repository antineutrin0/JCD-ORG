import React from "react";
import { useParams } from "react-router";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const SingleActivity = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL

  // Dummy single activity data
  const activity = {
    id: id || 1, // Default to 1 if no valid ID is provided
    title: "Hackathon 2025 - The Ultimate Coding Marathon coding marathon where innovators, developers",
    description: `
      The ultimate 48-hour coding marathon where innovators, developers, and designers collaborate 
      to solve real-world challenges. Join us to build next-gen solutions, compete for prizes, and network 
      with industry leaders!

      🌟 **Why Join?**
      - 🏆 Win exciting prizes & job opportunities
      - 🚀 Gain hands-on experience with top tech stacks
      - 🍕 Enjoy unlimited snacks, drinks, and fun activities
      - 🎤 Learn from industry experts in exclusive workshops
      
      Whether you're a beginner or a pro, Hackathon 2025 is the place to showcase your skills! Register now! 🚀
    `,
    date: "May 1, 2025",
    imageUrl: "https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh4.googleusercontent.com/VQyrPPyh-FGdV2BJtlcwDphesnxERD6SLWvGtARygLDVNSsXhFF0kzG_yXvLyiARZbKIG3VYF_CIbF4_B-Wy3Eu7kKhHKKR3pq_2ob2pdZgxt_Wz_uqXjRMrhIBKREQnJo--Ui9b",
  };

  return (
    <div className="max-w-3xl mx-auto text-start bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden p-6 my-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <span className="text-blue-600 cursor-pointer">Home</span> &gt; 
        <span className="text-blue-600 cursor-pointer"> Activities</span> &gt; 
        <span className="text-gray-900 font-semibold"> {activity.title}</span>
      </nav>

      {/* Title & Social Media */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <div className="col-span-10">
          <h2 className="text-2xl font-bold leading-tight">{activity.title}</h2>
        </div>

        {/* Social Media Icons */}
        <div className="col-span-2 flex justify-start space-x-3 text-gray-600 text-xl">
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          <FaGooglePlusG className="hover:text-red-500 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
          <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
        </div>
      </div>
      
      {/* Activity Date */}
      <p className="text-gray-500 text-sm mb-4">{activity.date}</p>

      {/* Image */}
      <div className="mb-4">
        <img src={activity.imageUrl} alt={activity.title} className="w-full rounded-lg shadow-sm" />
      </div>

      {/* Description */}
      <p className="text-gray-700 whitespace-pre-line leading-relaxed">{activity.description}</p>
    </div>
  );
};

export default SingleActivity;
