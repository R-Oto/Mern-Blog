import React, { useState } from 'react'
import PostItem from './PostItem';

const dummyPosts = [
    {
      id: 1,
      thumbnail: "https://example.com/image1.jpg",
      category: "Technology",
      title: "The Future of AI",
      description: "An in-depth look at the advancements in AI technology and what the future holds.",
      authorId: 101
    },
    {
      id: 2,
      thumbnail: "https://example.com/image2.jpg",
      category: "Health",
      title: "Healthy Eating Habits",
      description: "Discover the best practices for maintaining a balanced diet.",
      authorId: 102
    },
    {
      id: 3,
      thumbnail: "https://example.com/image3.jpg",
      category: "Travel",
      title: "Top 10 Travel Destinations",
      description: "Explore the most breathtaking places to visit around the world.",
      authorId: 103
    },
    {
      id: 4,
      thumbnail: "https://example.com/image4.jpg",
      category: "Finance",
      title: "Investing 101",
      description: "A beginner's guide to investing and building wealth.",
      authorId: 104
    },
    {
      id: 5,
      thumbnail: "https://example.com/image5.jpg",
      category: "Lifestyle",
      title: "Minimalism: A Way of Life",
      description: "Learn how minimalism can transform your life for the better.",
      authorId: 105
    },
    {
      id: 6,
      thumbnail: "https://example.com/image6.jpg",
      category: "Education",
      title: "The Importance of Lifelong Learning",
      description: "Why you should never stop learning and how it benefits your career.",
      authorId: 106
    }
];
  
const Posts = () => {

    const [posts, setPosts] = useState(dummyPosts)

  return (
    <section className='posts'>
        {
            posts.map(
                (id, thumbnail, category, title, description, authorId) => <PostItem 
                    key={id} postId={id} thumbnail={thumbnail} category={category} title={title} description={description} authorId={authorId} 
                />
            )
        }
    </section>
  )
}

export default Posts;