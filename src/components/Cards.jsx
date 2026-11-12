
import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="w-full min-w-0 p-3 mt-4 my-3">
        <div className="card w-full bg-white text-gray-900 shadow-sm hover:scale-105 duration-200 dark:bg-gray-800 dark:text-white">

          <figure>
            <img
              src={item.image}
              alt={item.title || item.name}
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-gray-900 dark:text-white">
              {item.name}
              <div className="badge badge-secondary">
                {item.category}
              </div>
            </h2>

            <p className="text-gray-700 dark:text-gray-200">
              {item.title}
            </p>

            <div className="card-actions justify-between">
              <div className="badge badge-outline">
                {item.price}
              </div>

              <div className="cursor-pointer px-2 py-1 rounded-full badge badge-outline hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Cards;
