import React from "react";
import NoticeCard from "./NoticeCard";
import { Link } from "react-router";
import { useNoticesQuery } from "../../hooks/useNotices";
import Loader from "../Loader";
import QueryError from "../QueryError";
import useScrollToTop from "../../hooks/useScrollToTop";

export default function AllNotices() {
  const { noticesQuery, notices } = useNoticesQuery();
  useScrollToTop();

  if (noticesQuery.isError) {
    <div className="max-w-6xl mx-auto my-20 h-screen px-4 flex items-center justify-center">
      <QueryError error={"Error fetching notices"} />
    </div>;
  }
  return (
    <div className="max-w-6xl mx-auto my-20 px-4 h-screen">
      <h2 className="text-3xl font-bold mb-6 text-green-800">📢 Notices</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {notices.map((notice, index) => (
          <NoticeCard key={notice?.id} notice={notice} />
        ))}
      </div>

      {noticesQuery.isLoading ||
        (noticesQuery.isPending && (
          <div className="max-w-6xl mx-auto my-20 px-4 flex items-center justify-center">
            <Loader />
          </div>
        ))}

      {noticesQuery?.hasNextPage && (
        <div className="mt-6 text-center">
          <button
            disabled={!noticesQuery.hasNextPage || noticesQuery.isLoading}
            onClick={() => noticesQuery.fetchNextPage()}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg shadow"
          >
            Load More Notices
          </button>
        </div>
      )}
      {!noticesQuery?.hasNextPage && !noticesQuery?.isLoading &&!noticesQuery.isPending  && (
        <div className="mt-6 text-center">
          <p className="text-gray-500">No more notices to load.</p>
        </div>
      )}
    </div>
  );
}
