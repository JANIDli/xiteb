import React from 'react';
import image1 from '../img/im1.jpg';
import image2 from '../img/im2.jpeg';
import image3 from '../img/im3.jpeg';
import image4 from '../img/im4.jpeg';

const PostCard = () => {
  const posts = [
    {
      id: 1,
      date: '26 May',
      title: 'Curabitur Lorem uisM quis',
      image: image1,
      description: 'Pellentesque habitant morbi tristique sene ctus et netus et malesuada fames turpis egestas. Aenean non donec...',
    },
    {
      id: 2,
      date: '22 May',
      title: 'Curabitur Lorem uisM quis',
      image: image2,
      description: 'Pellentesque habitant morbi tristique sene ctus et netus et malesuada fames turpis egestas. Aenean non donec...',
    },
    {
      id: 3,
      date: '20 May',
      title: 'Curabitur Lorem uisM quis',
      image: image3,
      description: 'Pellentesque habitant morbi tristique sene ctus et netus et malesuada fames turpis egestas. Aenean non donec...',
    },
    {
      id: 4,
      date: '15 May',
title: 'Curabitur Lorem uisM quis',
      image: image4,
      description: 'Pellentesque habitant morbi tristique sene ctus et netus et malesuada fames turpis egestas. Aenean non donec...',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">LATEST NEWS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-row mb-4">
            <img src={post.image} alt={post.title} className="w-1/2 h-48 object-cover" />
            <div className="w-1/2 bg-white p-4">
              <span className="text-sm text-gray-600">{post.date}</span>
              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard; 