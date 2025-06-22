import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  collection,
  doc,
  getDoc,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../lib/firebase";


export const useSinglePressReleaseQuery = (id) => {
  const q = useQuery({
    queryKey: ["PressRelease", id],
    queryFn: async () => {
      const d = await getDoc(doc(db, "blogs", id));
      if (!d.exists()) {
        throw new Error("Press Release not found");
      }
      const data = d.data();
      return {
        id: d.id,
        ...data,
      };
    },
    enabled: !!id,
  });

  return q;
};
