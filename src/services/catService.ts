import { Cat } from "@/types/cat";

const API_KEY = process.env.NEXT_PUBLIC_CAT_API_KEY || "";

export const fetchCats = async (
  page: number,
  limit: number = 10,
): Promise<Cat[]> => {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=ASC`,
    {
      headers: { "x-api-key": API_KEY },
    },
  );
  if (!res.ok) throw new Error("Ошибка при загрузке котов");
  return res.json();
};
