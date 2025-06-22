import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query as FirebaseQuery,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { useMemo } from "react";

export const useCommitteMembersQuery = (id) => {
  const q = useInfiniteQuery({
    queryKey: ["members", id],
    queryFn: async ({ pageParam }) => {
      try {
        let query = FirebaseQuery(
          collection(db, "members"),
          where("userId", "==", id),
          orderBy("position", "asc")
        );
        if (pageParam) {
          query = FirebaseQuery(query, startAfter(pageParam));
        }
        query = FirebaseQuery(query, limit(20));

        const snapshot = await getDocs(query);
        return snapshot;
      } catch (error) {
        console.error("Error fetching PressReleases:", error);
        return [];
      }
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 20) {
        return undefined; // No more pages to fetch
      }
      const lastDoc = lastPage[lastPage.length - 1];
      return lastDoc;
    },

    enabled: !!id,
  });

  const members = useMemo(() => {
    if (!q.data) return [];
    return q.data.pages.flatMap(
      (page) =>
        page?.docs?.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) || []
    );
  }, [q.data]);
  return { membersQuery: q, members };
};
