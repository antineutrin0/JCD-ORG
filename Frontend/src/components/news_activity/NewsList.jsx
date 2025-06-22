import React, { useState, useEffect } from "react";
import newsData from "./newsData.json"; // Assuming you have a JSON file with blog data
import NewsCard from "./NewsCard";
import { usePressReleasesQuery } from "../../hooks/usePressRelease";
import Loader from "../Loader";
const NewsList = () => {
  const { pressReleases, pressReleasesQuery } = usePressReleasesQuery();

  return (
    <div className="w-full mx-auto p-4 mt-4 max-w-7xl">
      <h1 className="text-3xl font-bold text-center text-green-800 my-6">
        Latest News & Press Releases
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4">
        {pressReleases?.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>

      {pressReleasesQuery.isLoading ||
        (pressReleasesQuery.isPending && (
          <div className="flex items-center justify-center h-64">
            <Loader />
          </div>
        ))}

      {pressReleasesQuery.hasNextPage && (
        <div className="mt-6 text-center">
          <button
            disabled={
              !pressReleasesQuery.hasNextPage || pressReleasesQuery.isLoading
            }
            onClick={() => pressReleasesQuery.fetchNextPage()}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg shadow"
          >
            Load More News
          </button>
        </div>
      )}

      {!pressReleasesQuery.hasNextPage &&
        !pressReleasesQuery.isLoading &&
        !pressReleasesQuery.isPending && (
          <div className="mt-6 text-center">
            <p className="text-gray-500">No more news to load.</p>
          </div>
        )}

      {pressReleasesQuery.isError && (
        <div className="text-red-500 text-center mt-4">
          Error loading news. Please try again later.
        </div>
      )}
    </div>
  );
};

export default NewsList;
