import React from "react";
import NoticeCard from "./NoticeCard";
import { Link } from "react-router";
import { useNoticesQuery } from "../../hooks/useNotices";
import Loader from "../Loader";
import QueryError from "../QueryError";

export default function NoticeSection() {
  const { noticesQuery, notices } = useNoticesQuery();
  if (noticesQuery.isLoading || noticesQuery.isPending) {
    return (
      <div className="max-w-6xl mx-auto my-20 px-4">
        <Loader />
      </div>
    );
  }

  if (noticesQuery.isError) {
    return (
      <div className="max-w-6xl mx-auto my-20 px-4">
        <QueryError error={"Error fetching notices"} />
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto my-20 px-4">
      <h2 className="text-3xl font-bold mb-6 text-green-800">📢 Notices</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {notices.map((notice, index) => (
          <NoticeCard key={notice?.id} notice={notice} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link to="/all-notices">
          <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg shadow">
            View All Notices
          </button>
        </Link>
      </div>
    </div>
  );
}
