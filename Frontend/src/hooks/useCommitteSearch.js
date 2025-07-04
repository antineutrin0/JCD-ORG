import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../lib/firebase";

export const useCommitteeSearch = (district, type) => {
  const q = useQuery({
    queryKey: ["committeeSearch", district, type],
    queryFn: async () => {
      try {
        let qq = query(collection(db, "profiles"));
        if (district !== "All") {
          qq = query(qq, where("district", "==", district));
        }
        if (type !== "All") {
          qq = query(qq, where("committeeType", "==", type));
        }

        const snapshot = await getDocs(qq);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        return data;
      } catch (error) {
        console.error("Error fetching committee search data:", error);
        return [];
      }
    },
  });

  return q;
};
