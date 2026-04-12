import { Cat } from "@/types/cat";

const API_KEY = process.env.NEXT_PUBLIC_CAT_API_KEY || "";
const BASE_URL = "https://api.thecatapi.com/v1";

export const fetchCats = async (
  page: number,
  limit: number = 10,
): Promise<Cat[]> => {
  const res = await fetch(
    `${BASE_URL}/images/search?limit=${limit}&page=${page}&order=ASC`,
    {
      headers: { "x-api-key": API_KEY },
    },
  );
  if (!res.ok) throw new Error("Ошибка при загрузке котов");
  return res.json();
};
