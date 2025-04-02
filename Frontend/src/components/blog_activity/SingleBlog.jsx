import React from "react";

const SingleBlog = () => {

    const blog={

            "id": 10,
            "title": "Berry Smoothie Bowl",
            "author": "D",
            "date": "February 20, 2024",
            "image": "https://images.unsplash.com/photo-1722706049551-e4d948146375?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sed mollitia sit velit non quod ex excepturi doloremque, distinctio nisi ipsa nobis in repudiandae impedit exercitationem suscipit, officia debitis? Velit fuga recusandae enim nostrum temporibus eaque dolor omnis aliquid veritatis voluptatem quos ex aliquam quo, debitis quisquam? Reprehenderit obcaecati, aliquid corrupti voluptatibus voluptates exercitationem itaque delectus ut quibusdam, iste, laborum cum laboriosam aperiam corporis blanditiis sequi ducimus ratione excepturi! Repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nisi blanditiis nemo architecto esse nobis quasi non, quod consectetur maiores quidem ipsa necessitatibus, magnam veritatis saepe tempora? Cupiditate assumenda fuga eius rerum delectus animi provident odit dolorem nesciunt ad itaque, tempore dolorum corporis, reprehenderit dicta voluptates amet aspernatur quod, eveniet quo ipsum harum eligendi accusamus! A facilis, harum architecto necessitatibus nostrum animi placeat qui nam fuga nobis, sit sed aut.",
            "method": "Blend berries with yogurt, pour into a bowl, and add toppings."
    }
  return (
    <div className="max-w-4xl mx-auto bg-green-900 text-white rounded-lg shadow-lg overflow-hidden  flex flex-col md:flex-row justify-center items-center mb-8 mt-4">
      {/* Left Content: Title, Date, Description */}
      <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-300 text-sm mb-4">{blog.date}</p>
        <p className="text-gray-200 text-lg overflow-y-auto h-60 md:h-96">{blog.description}</p>
      </div>

      {/* Right Content: Image & Buttons */}
      <div className="md:w-1/2 relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        {/* Reaction and Share Buttons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button className="text-red-500 hover:text-red-600 text-2xl">❤️</button>
          <button className="text-blue-500 hover:text-blue-600 text-2xl">🔗</button>
        </div>
      </div>
    </div>

  );
};

export default SingleBlog;
