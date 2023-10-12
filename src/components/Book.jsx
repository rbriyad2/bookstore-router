import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`/book/${book.isbn13}`}>
      <div className="book overflow-hidden shadow-lg hover:shadow-2xl relative transition duration-200 transform hover:translate-y-2">
        <img
          className="object-cover w-full h-56 md:h-64 xl: h-80"
          src={book.image}
          alt=""
        />
        <div className="flex flex-col transition-opacity duration-200 absolute inset-0 opacity-0 hover:opacity-100 overly bg-black bg-opacity-50 text-white p-5 rounded-md">
          <p>{book.title}</p>
          <p className="mt-6">{book.subtitle.substring(0, 50)}...</p>
          <p className="mt-auto">Price: {book.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
