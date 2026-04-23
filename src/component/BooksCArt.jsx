import React from 'react';

const BooksCArt = ({book}) => {
    return (
        <div>
            <div
            className="border bg-base-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-600 text-sm mb-1">✍️ {book.author}</p>
              <span className="inline-block text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full mb-3">
                {book.category}
              </span>

              <p className="text-yellow-500 font-medium">⭐ {book.rating}</p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-green-600">
                ৳{book.price}
              </span>
              <button className="bg-black text-white px-4 py-2 rounded-xl text-sm hover:bg-gray-800">
                Buy Now
              </button>
            </div>
          </div>
        </div>
    );
};

export default BooksCArt;