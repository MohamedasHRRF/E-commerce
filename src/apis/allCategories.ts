export async function getCategories() {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories", {
    cache: "no-store", 
    next: { revalidate: 0 }, 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const json = await res.json();
  return json.data; 
}
