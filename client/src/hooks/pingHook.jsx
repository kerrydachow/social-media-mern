import { useQuery } from "react-query";
import { API_BASE_URL } from "lib/constants";

export const usePing = () => {
  return useQuery("ping", async () => {
    const res = await fetch(`${API_BASE_URL}/ping`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  });
};
