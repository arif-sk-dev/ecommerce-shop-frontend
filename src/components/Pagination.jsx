import React from "react";

const Pagination = ({ page, pageHandler, dynamicPage }) => {
  const pages = [...Array(dynamicPage)].map((_, i) => i + 1);

  return (
    <div className="mt-10 flex flex-wrap gap-2 justify-center items-center">
      {/* Prev Button */}
      <button
        onClick={() => pageHandler(page - 1)}
        disabled={page === 1}
        className={`px-3 py-1 rounded-[6px] cursor-pointer transition ${
          page === 1 ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-zinc-400 hover:bg-zinc-500 text-white"
        }`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((pg) => (
        <button
          key={pg}
          onClick={() => pageHandler(pg)}
          className={`px-3 py-1 rounded-[6px] cursor-pointer transition ${
            page === pg ? "bg-green-500 text-white font-bold" : "bg-zinc-400 hover:bg-zinc-500 text-white"
          }`}
        >
          {pg}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => pageHandler(page + 1)}
        disabled={page === dynamicPage}
        className={`px-3 py-1 rounded-[6px] cursor-pointer transition ${
          page === dynamicPage ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-zinc-400 hover:bg-zinc-500 text-white"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
