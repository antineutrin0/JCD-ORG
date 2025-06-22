import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export const useGlobalDataQuery = () => {
  const q = useQuery({
    queryKey: ["globalData"],
    queryFn: async () => {
      const data = await getDoc(doc(db, "data", "data"));
      return data.exists()
        ? {
            centralProfile: data.data()?.centralProfile ?? "",
          }
        : {};
    },
  });

  return q;
};
