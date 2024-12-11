import React from "react";

function JobCategories() {
  return (
    <div className="py-16 px-8 ">
      <h2 className="text-3xl font-bold text-center mb-6">
        Browse by Category
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Find the job that’s perfect for you. About 800+ new jobs every day.
      </p>
      <div className="flex space-x-8 w-11/12 mx-auto justify-center overflow-x-auto pb-4">
        <div className="flex-none w-64 hover:scale-110 translate-2 transition hover:bg-blue-300 hover:rounded-2xl bg-white border-2 rounded-lg shadow-lg p-4 text-center">
          <div className="text-4xl text-blue-600 mb-4">
            <i className="fas fa-chart-line"></i> {/* Use appropriate icons */}
          </div>
          <h3 className="font-semibold text-lg">Management</h3>
          <p className="text-gray-500">965 Jobs Available</p>
        </div>
        <div className="flex-none w-64 hover:scale-110 translate-2 transition hover:bg-blue-300 hover:rounded-2xl bg-white border-2 rounded-lg shadow-lg p-4 text-center">
          <div className="text-4xl text-blue-600 mb-4">
            <i className="fas fa-store"></i>
          </div>
          <h3 className="font-semibold text-lg">Retail & Products</h3>
          <p className="text-gray-500">563 Jobs Available</p>
        </div>
        <div className="flex-none w-64 hover:scale-110 translate-2 transition hover:bg-blue-300 hover:rounded-2xl bg-white border-2 rounded-lg shadow-lg p-4 text-center">
          <div className="text-4xl text-blue-600 mb-4">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3 className="font-semibold text-lg">Security Analyst</h3>
          <p className="text-gray-500">254 Jobs Available</p>
        </div>
        <div className=" hover:scale-110 translate-2 transition hover:bg-blue-300 hover:rounded-2xlflex-none w-64 bg-white border-2 rounded-lg shadow-lg p-4 text-center">
          <div className="text-4xl text-blue-600 mb-4">
            <i className="fas fa-pencil-alt"></i>
          </div>
          <h3 className="font-semibold text-lg">Content Writer</h3>
          <p className="text-gray-500">142 Jobs Available</p>
        </div>
        <div className="hover:scale-110 translate-2 transition hover:bg-blue-300 hover:rounded-2xl flex-none w-64 bg-white border-2 rounded-lg shadow-lg p-4 text-center">
          <div className="text-4xl text-blue-600 mb-4">
            <i className="fas fa-search"></i>
          </div>
          <h3 className="font-semibold text-lg">Market Research</h3>
          <p className="text-gray-500">532 Jobs Available</p>
        </div>
      </div>
    </div>
  );
}

export default JobCategories;
