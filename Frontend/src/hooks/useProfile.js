import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export const useProfile = (id) => {
  const q = useQuery({
    queryKey: ["profile", id],
    queryFn: async () => {
      const d = await getDoc(doc(db, "profiles", id));
      if (!d.exists()) {
        throw new Error("Profile not found");
      }
      return {
        id: d.id,
        ...d.data(),
      };
    },
    enabled: !!id, // Only run the query if id is provided
  });

  return q;
};
