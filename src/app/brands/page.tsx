import BrandCard from "@/app/_Components/brandsCard/BrandsCard";
import getAllBrands from "@/apis/getAllBrands";
import { Brands } from "@/types/brands";

export default async function BrandsPage() {
  const brands: Brands[] = await getAllBrands();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
}
