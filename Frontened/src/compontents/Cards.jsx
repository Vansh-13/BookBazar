import React from 'react';

function Cards({ item }) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl dark:bg-slate-900 dark:text-white dark:border">
      <figure className="h-40 flex items-center justify-center overflow-hidden mb-4">
        <img
          src={item.image}
          alt={item.title}
          className="object-contain h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          <div className="bg-green-700 text-white rounded-full px-3 py-1 text-sm ml-3">{item.category}</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions justify-between mt-4">
          <div className="badge badge-outline">${item.price}</div>
          <div className="badge badge-outline hover:bg-green-700 hover:duration-200 hover:text-white">Buy Now</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
