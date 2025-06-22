import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useProfile } from "../../hooks/useProfile";
import { useBlogsOfCommitteQuery } from "../../hooks/usePressRelease";
import { useCommitteMembersQuery } from "../../hooks/useMembers";
import QueryError from "../QueryError";
import Loader from "../Loader";
import BlogCard from "../blog_activity/BlogCard";

export default function SingleCommittee() {
  const { id } = useParams();

  // Queries
  const profileQuery = useProfile(id);
  const { blogsQuery } = useBlogsOfCommitteQuery(id);
  const { membersQuery } = useCommitteMembersQuery(id);
  const [blogsCurrentPage, setBlogsCurrentPage] = React.useState(0);
  const [membersCurrentPage, setMembersCurrentPage] = React.useState(0);

  const allBlogs = useMemo(() => {
    const blogs = blogsQuery?.data?.pages[blogsCurrentPage].docs?.map((p) => ({
      ...p.data(),
      id: p.id,
    }));

    return blogs;
  }, [blogsCurrentPage, blogsQuery?.data]);

  const allMembers = useMemo(() => {
    const blogs = membersQuery?.data?.pages[membersCurrentPage].docs?.map(
      (p) => ({ ...p.data(), id: p.id })
    );

    return blogs;
  }, [membersCurrentPage, membersQuery?.data]);

  // Handle loading state
  if (
    profileQuery.isLoading ||
    blogsQuery.isLoading ||
    membersQuery.isLoading
  ) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  

  // Handle error state
  if (profileQuery.isError) {
    return <QueryError error={profileQuery.error} />;
  }

  if (blogsQuery.isError) {
    return <QueryError error={blogsQuery.error} />;
  }

  if (membersQuery.isError) {
    return <QueryError error={membersQuery.error} />;
  }

  const committee = profileQuery.data;

  // console.log("members: ", allMembers)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Committee Basic Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <div className="flex items-center mb-4">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-green-800">
                {committee?.committeeName}
              </h1>
              <p className="text-lg text-gray-600">
                {committee?.committeeType}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-2">District</h3>
              <p className="text-gray-900">{committee?.district}</p>
            </div>
            {committee?.instituteName && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Institute</h3>
                <p className="text-gray-900">{committee?.instituteName}</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* PDF Viewer for Committee Formation Notice */}
        {committee?.committeeFormationNoticeUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Committee Formation Notice
            </h2>
            <div className="w-full h-96 border rounded-lg overflow-hidden">
              <iframe
                src={committee.committeeFormationNoticeUrl}
                className="w-full h-full"
                title="Committee Formation Notice"
              />
            </div>
          </motion.div>
        )}

        {/* Members Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Committee Members
          </h2>

          {allMembers.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No members found.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allMembers.map((member) => (
                  <motion.div
                    key={member.userId}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 rounded-lg p-4 border"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={member.imageUrl || "/logo.png"}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          {member.name}
                        </h3>
                        <p className="text-sm text-green-600">
                          {member.designation}
                        </p>
                        {member.bloodGroup && (
                          <p className="text-xs text-gray-500">
                            Blood Group: {member.bloodGroup}
                          </p>
                        )}
                        {member.mobile && member.mobile !== "#" && (
                          <p className="text-xs text-gray-500">
                            Mobile: {member.mobile}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Members Load More Button */}
              {membersQuery.hasNextPage && (
                <div className="flex items-center justify-center mt-6">
                  <motion.button
                    onClick={() => membersQuery.fetchNextPage()}
                    disabled={membersQuery.isFetchingNextPage}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.05 }}
                  >
                    {membersQuery.isFetchingNextPage ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Loading...</span>
                      </div>
                    ) : (
                      "Load More Members"
                    )}
                  </motion.button>
                </div>
              )}
            </>
          )}
        </motion.div>

        {/* Blogs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Recent Blogs
          </h2>

          {allBlogs.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No blogs found.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allBlogs.map((blog) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <BlogCard blog={blog} />
                  </motion.div>
                ))}
              </div>

              {/* Blogs Load More Button */}
              {blogsQuery.hasNextPage && (
                <div className="flex items-center justify-center mt-6">
                  <motion.button
                    onClick={() => blogsQuery.fetchNextPage()}
                    disabled={blogsQuery.isFetchingNextPage}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.05 }}
                  >
                    {blogsQuery.isFetchingNextPage ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Loading...</span>
                      </div>
                    ) : (
                      "Load More Blogs"
                    )}
                  </motion.button>
                </div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
