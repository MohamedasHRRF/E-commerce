import { Category } from "@/types/category.type";
import Image from "next/image";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="w-full  p-3">
      <div className="bg-white rounded-lg shadow hover:shadow-2xl transition-shadow duration-400 overflow-hidden">
        <div className="relative w-full h-72">
          <Image
            src={category.image || category.imageCover}
            alt={category.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <p className="text-lg font-medium text-green-700">{category.name}</p>
        </div>
      </div>
    </div>
  );
}
