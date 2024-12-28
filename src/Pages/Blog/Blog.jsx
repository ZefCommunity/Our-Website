import React, { lazy } from 'react';

import image1 from '../../assets/img/post/post_1.png';
import image2 from '../../assets/img/post/post_2.png';
import image3 from '../../assets/img/post/post_3.png';
import image4 from '../../assets/img/post/post_4.png';
import image5 from '../../assets/img/post/post_5.png';
import image6 from '../../assets/img/post/post_6.png';
import image7 from '../../assets/img/post/post_7.png';
import image8 from '../../assets/img/post/post_8.png';
import image9 from '../../assets/img/post/post_9.png';
import image10 from '../../assets/img/post/post_10.png';
import blogs from './blogs';
import { FaUser, FaComment, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Blog() {
  const recentPost = [
    {
      id: 1,
      image: image1,
      title: 'From life was you fish...',
      date: 'January 12, 2019',
    },
    {
      id: 2,
      image: image2,
      title: 'The Amazing Hubble',
      date: '03 Hours ago',
    },
    {
      id: 3,
      image: image3,
      title: 'Astronomy Or Astrology',
      date: 'January 12, 2019',
    },
    {
      id: 4,
      image: image4,
      title: 'From life was you fish...',
      date: 'January 12, 2019',
    },
  ];

  const feeds = [
    {
      id: 1,
      img: image5,
    },
    {
      id: 2,
      img: image6,
    },
    {
      id: 3,
      img: image7,
    },
    {
      id: 4,
      img: image8,
    },
    {
      id: 5,
      img: image9,
    },
    {
      id: 6,
      img: image10,
    },
  ];
  return (
    <div>
      <div className="w-full">
        {/* header */}
        <div className="flex items-center justify-center h-[300px]">
          <h2 className="text-5xl font-bold text-blue-950">Blogs</h2>
        </div>

        {/* Body */}
        <div className="w-[90%] mx-auto flex justify-between">
          <div>
            {blogs.map((blog, index) => (
              <div
                key={index}
                className=" mb-14 pb-10 shadow-lg flex flex-col gap-[50px]"
              >
                <div className="relative">
                  <img
                    src={blog.img}
                    alt="blog image"
                    loading={lazy}
                    className=""
                  />
                  <div className="absolute bg-green-500 flex flex-col p-4 -bottom-6 rounded-md left-10">
                    <span className="text-3xl text-white font-bold rounded-md">
                      {' '}
                      {blog.date}{' '}
                    </span>
                    <span className="text-3xl text-white font-bold rounded-md">
                      {' '}
                      {blog.month}{' '}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-3xl font-semibold text-blue-950 hover:text-green600 px-2"
                  >
                    {' '}
                    {blog.title}{' '}
                  </Link>
                  <p className="px-4 w-[700px]"> {blog.content} </p>
                </div>
                <div className="flex px-4 text-gray-600">
                  <div className="flex items-center gap-1 ">
                    <FaUser />
                    <p>Travel, Lifestyle</p>
                  </div>
                  <p className="mx-4">|</p>
                  <div className="flex items-center gap-1 ">
                    <FaComment />
                    <p>03 Comments</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className=" ">
            <div className="bg-gray-100 p-5 mb-14">
              <div className="flex bg-green-500 items-center mb-5">
                <input
                  type="text"
                  placeholder="Search Keyword"
                  className="py-3 px-2 w-full outline-none"
                />
                <FaSearch className="text-white text-2xl mx-5 cursor-pointer" />
              </div>
              <button className="w-full border border-gray-600 hover:bg-green-500 hover:text-white py-3 text-3xl">
                Search
              </button>
            </div>

            <div className="w-full bg-gray-100 pb-5 mb-14 ">
              <h2 className="py-5 text-center text-2xl font-semibold">
                Category
              </h2>
              <hr />
              <div className=" ">
                <p className="py-2 l px-4 hover:text-green-500">
                  Restaurant(37){' '}
                </p>{' '}
                <hr />
                <p className="py-2 px-4 hover:text-green-500">
                  Travel news(10){' '}
                </p>{' '}
                <hr />
                <p className="py-2 px-4 hover:text-green-500">
                  Modern technology(03){' '}
                </p>{' '}
                <hr />
                <p className="py-2 px-4 hover:text-green-500">
                  Products(11){' '}
                </p>{' '}
                <hr />
                <p className="py-2 px-4 hover:text-green-500">
                  Inspiration(21){' '}
                </p>{' '}
                <hr />
                <p className="py-2 px-4 hover:text-green-500">
                  Health Care(09){' '}
                </p>
              </div>
            </div>

            <div className="w-full bg-gray-100 pb-5 mb-14 px-4 ">
              <h2 className="py-5 text-2xl font-semibold">Recent Feeds</h2>
              <hr />

              <div className="pt-4">
                {recentPost.map((post) => (
                  <div className="flex items-center gap-4 mb-5 ">
                    <div>
                      <img src={post.image} alt="post image" />
                    </div>
                    <div>
                      <h2 className="font-semibold"> {post.title} </h2>
                      <p> {post.date} </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 w-full mb-14">
              <h2 className="py-5 px-4 text-2xl font-semibold">Tag Clouds</h2>
              <hr />

              <div className="grid grid-cols-3 gap-3 px-5 py-5">
                <p className="bg-white w-max p-1 border">Project</p>
                <p className="bg-white w-max p-1 border">Love</p>
                <p className="bg-white w-max p-1 border">Technology</p>
                <p className="bg-white w-max p-1 border">Travel</p>
                <p className="bg-white w-max p-1 border">Restaurant</p>
                <p className="bg-white w-max p-1 border">Life Style</p>
                <p className="bg-white w-max p-1 border">Design</p>
                <p className="bg-white w-max p-1 border">Illustration</p>
              </div>
            </div>

            <div className="w-full bg-gray-50 pb-4 mb-14">
              <h2 className="py-5 px-4 text-2xl font-semibold">
                Instagram Feeds
              </h2>
              <hr />

              <div className="grid grid-cols-3 gap-2 px-2">
                {feeds.map((feed) => (
                  <div key={feed.id} className=" ">
                    <img
                      src={feed.img}
                      alt="feed image"
                      className=" bg-green-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50">
              <h2 className="py-5 px-4 text-2xl ">News Letter</h2>
              <hr />

              <div className="flex flex-col py-4">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="py-4 px-5 mx-3 border-none outline-none"
                />
                <button className="py-5 border mx-4 mt-5 hover:bg-green-500">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
