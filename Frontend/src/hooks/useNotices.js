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
import { useGlobalDataQuery } from "./useGlobalData";
import { useMemo } from "react";

export const useNoticesQuery = () => {
  const globalData = useGlobalDataQuery();

  const q = useInfiniteQuery({
    queryKey: ["notices"],
    queryFn: async ({ pageParam }) => {
      try {
        let query = FirebaseQuery(
          collection(db, "notices"),
          where("userId", "==", globalData.data?.centralProfile),
          orderBy("createdAt", "desc")
        );
        if (pageParam) {
          query = FirebaseQuery(query, startAfter(pageParam));
        }
        query = FirebaseQuery(query, limit(10));

        const snapshot = await getDocs(query);
        return snapshot;
      } catch (error) {
        console.error("Error fetching notices:", error);
        return [];
      }
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) {
        return undefined; // No more pages to fetch
      }
      const lastDoc = lastPage[lastPage.length - 1];
      return lastDoc;
    },
    enabled: globalData.isSuccess && globalData.data?.centralProfile !== "",
  });

  const notices = useMemo(() => {
    if (!q.data) return [];
    return q.data.pages.flatMap((page) =>
      page?.docs?.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  }, [q.data]);
  return { noticesQuery: q, notices };
};
