import { getCategories } from "@/apis/allCategories";
import CategoryCard from "../_Components/CategoryCard/CategoryCard";
import { Category } from "@/types/category.type";


export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2">
        {categories.map((cat: Category) => (
          <CategoryCard key={cat._id} category={cat} />
        ))}
      </div>
    </div>
  );
}
