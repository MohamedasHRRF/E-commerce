import { Brands } from "@/types/brands";

interface BrandsResponse {
  data: Brands[];
}

export default async function getAllBrands(): Promise<Brands[]> {
  const response = await fetch("https://ecommerce.routemisr.com/api/v1/brands", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch brands");
  }

  const { data }: BrandsResponse = await response.json();
  return data;
}
