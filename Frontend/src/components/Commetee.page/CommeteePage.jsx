import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCommitteeSearch } from "../../hooks/useCommitteSearch";
import Loader from "../Loader";
import QueryError from "../QueryError";
import { Search, MapPin, Building, Users, Eye } from "lucide-react";
import useScrollToTop from "../../hooks/useScrollToTop";

//Committee Data Structure
// committeeFormationNoticeUrl
// ""
// (string)

// committeeName
// "শাবিপ্রবি ছাত্রদল - SUST Chatrodol "
// (string)

// committeeType
// "University Unit"
// (string)

// createdAt
// 23 June 2025 at 01:56:19 UTC+6
// (timestamp)

// district
// "Sylhet"
// (string)

// id
// "Kz5tQ1Ca9QVwpSI85xNq05TAsAw2"
// (string)

// instituteName
// "Shahjalal University of Science and Technology"
// (string)

// updatedAt
// 23 June 2025 at 01:56:18 UTC+6
// (timestamp)

// userId
// "Kz5tQ1Ca9QVwpSI85xNq05TAsAw2"

const districts = [
  "All", "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal", 
  "Rangpur", "Mymensingh", "Comilla", "Feni", "Brahmanbaria", "Lakshmipur",
  "Noakhali", "Chandpur", "Manikganj", "Munshiganj", "Narayanganj", "Gazipur",
  "Shariatpur", "Pirojpur", "North Chittagong"
];

const committeeTypes = [
  "All", "Central Committee", "District Committee", "University Unit", 
  "College Unit", "School Unit", "Ward Committee", "Union Committee"
];

export default function CommeteePage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [district, setDistrict] = useState("All");
  const [committeeType, setCommitteeType] = useState("All");

  const committeeQuery = useCommitteeSearch(district, committeeType);
  useScrollToTop();

  const filteredCommittees = useMemo(() => {
    if (!committeeQuery.data) return [];
    return committeeQuery.data.filter((committee) =>
      committee.committeeName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      committee.instituteName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      committee.district?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [committeeQuery.data, searchTerm]);

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const searchDistrict = search.get("district") || "All";
    const searchType = search.get("type") || "All";
    const searchQuery = search.get("query") || "";

    setDistrict(searchDistrict);
    setCommitteeType(searchType);
    setSearchTerm(searchQuery);
  }, [])  

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center my-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find and explore committee information across different districts and types. 
            Search by name, institution, or location.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search committees, institutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* District Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
              >
                {districts.map((dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
              </select>
            </div>

            {/* Committee Type Filter */}
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={committeeType}
                onChange={(e) => setCommitteeType(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
              >
                {committeeTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          {(searchTerm || district !== "All" || committeeType !== "All") && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setDistrict("All");
                  setCommitteeType("All");
                }}
                className="text-sm text-gray-600 hover:text-gray-800 underline transition-colors duration-200"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Search Results Counter */}
          {!committeeQuery.isLoading && filteredCommittees.length > 0 && (
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="text-sm text-gray-600">
                Found {filteredCommittees.length} committee{filteredCommittees.length !== 1 ? 's' : ''}
              </div>
              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {searchTerm && `Searching for: "${searchTerm}"`}
                {district !== "All" && ` • District: ${district}`}
                {committeeType !== "All" && ` • Type: ${committeeType}`}
              </div>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {/* Loading State */}
          {committeeQuery.isLoading && (
            <div className="flex justify-center items-center py-20">
              <Loader />
            </div>
          )}

          {/* Error State */}
          {committeeQuery.isError && (
            <QueryError error={committeeQuery.error} />
          )}

          {/* Success State - No Results */}
          {!committeeQuery.isLoading && !committeeQuery.isError && filteredCommittees.length === 0 && (
            <div className="text-center py-20">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No committees found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or filters to find committees.
              </p>
            </div>
          )}

          {/* Success State - Results */}
          {!committeeQuery.isLoading && !committeeQuery.isError && filteredCommittees.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCommittees.map((committee) => (
                <div
                  key={committee.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="p-6">
                    {/* Logo and Committee Name */}
                    <div className="flex items-start gap-3 mb-4">
                      <img
                        src="/logo.png"
                        alt="Committee Logo"
                        className="w-12 h-12 object-contain flex-shrink-0 mt-1"
                      />
                      <h3 className="text-xl font-bold text-gray-900 line-clamp-2 flex-1">
                        {committee.committeeName || "Committee Name Not Available"}
                      </h3>
                    </div>

                    {/* Institution Name */}
                    {committee.instituteName && (
                      <div className="flex items-center text-gray-600 mb-2">
                        <Building className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-sm line-clamp-2">{committee.instituteName}</span>
                      </div>
                    )}

                    {/* Location */}
                    {committee.district && (
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-sm">{committee.district}</span>
                      </div>
                    )}

                    {/* Committee Type */}
                    {committee.committeeType && (
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {committee.committeeType}
                        </span>
                      </div>
                    )}

                    {/* Details Button */}
                    <div className="pt-4 border-t border-gray-100">
                      <button
                        onClick={() => navigate(`/committe/${committee.id}`)}
                        className="w-full inline-flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-800 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details & Works
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
