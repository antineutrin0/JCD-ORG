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

export const usePressReleasesQuery = () => {
  const globalData = useGlobalDataQuery();

  const q = useInfiniteQuery({
    queryKey: ["PressReleases", globalData.data?.centralProfile],
    queryFn: async ({ pageParam }) => {
      try {
        let query = FirebaseQuery(
          collection(db, "blogs"),
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
        console.error("Error fetching PressReleases:", error);
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

  const pressReleases = useMemo(() => {
    if (!q.data) return [];
    return q.data.pages.flatMap(
      (page) =>
        page?.docs?.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) || []
    );
  }, [q.data]);
  return { pressReleasesQuery: q, pressReleases };
};

export const useBlogsOfCommitteQuery = (id) => {
  const q = useInfiniteQuery({
    queryKey: ["PressReleases", id],
    queryFn: async ({ pageParam }) => {
      try {
        let query = FirebaseQuery(
          collection(db, "blogs"),
          where("userId", "==", id),
          orderBy("createdAt", "desc")
        );
        if (pageParam) {
          query = FirebaseQuery(query, startAfter(pageParam));
        }
        query = FirebaseQuery(query, limit(10));

        const snapshot = await getDocs(query);
        return snapshot;
      } catch (error) {
        console.error("Error fetching PressReleases:", error);
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
    enabled: !!id,
  });

  const blogs = useMemo(() => {
    if (!q.data) return [];
    return q.data.pages.flatMap(
      (page) =>
        page?.docs?.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) || []
    );
  }, [q.data]);
  return { blogsQuery: q, blogs };
};

export const useRecentBlogsQuery = () => {
  const globalData = useGlobalDataQuery();
  const q = useInfiniteQuery({
    queryKey: ["PressReleases", "Recent"],
    queryFn: async ({ pageParam }) => {
      try {
        let query = FirebaseQuery(
          collection(db, "blogs"),
          where("userId", "!=", globalData?.data?.centralProfile),
          orderBy("createdAt", "desc")
        );
        if (pageParam) {
          query = FirebaseQuery(query, startAfter(pageParam));
        }
        query = FirebaseQuery(query, limit(10));

        const snapshot = await getDocs(query);
        return snapshot;
      } catch (error) {
        console.error("Error fetching PressReleases:", error);
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
    enabled: !!globalData?.data?.centralProfile,
  });

  const blogs = useMemo(() => {
    if (!q.data) return [];
    return q.data.pages.flatMap(
      (page) =>
        page?.docs?.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) || []
    );
  }, [q.data]);
  return { blogsQuery: q, blogs };
};
