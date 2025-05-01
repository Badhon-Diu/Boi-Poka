import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link to={`/home/book/${book.id}`} className="cursor-pointer">
      {" "}
      <div className="w-[370px] p-6 border border-gray-200  mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden ">
        {/* Book Image */}
        <div className="flex bg-[#F3F3F3] rounded-2xl justify-center mb-4">
          <img
            src={book.image} // Placeholder image; replace with actual book cover URL
            alt="Book Cover"
            className="h-48 rounded-2xl my-2 py-3 w-auto object-cover"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-4">
          <span className="bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-200 text-xs font-semibold px-2.5 py-0.5 rounded">
            {book.categories[0]}
          </span>
          <span className="bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-200 text-xs font-semibold px-2.5 py-0.5 rounded">
            {book.categories[1]}
          </span>
        </div>

        {/* Book Title */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {book.title}
        </h2>

        {/* Author */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          By : {book.author}
        </p>
        <div className="border border-gray-200 my-3 w-[99%] mx-auto border-dotted"></div>
        {/* Genre and Rating */}
        <div className="flex justify-between items-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            {book.genre}
          </span>
          <div className="flex items-center">
            <span className="text-gray-900 dark:text-white font-semibold mr-1">
              {book.rating}
            </span>
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
