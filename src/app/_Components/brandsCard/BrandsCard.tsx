import { Brands } from "@/types/brands";
import Image from "next/image";

interface BrandCardProps {
  brand: Brands;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="w-full p-3">
      <div className="bg-white rounded-lg shadow hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
        <div className="relative w-full h-48">
          <Image
            src={brand.image}
            alt={brand.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <p className="text-lg font-medium text-green-700">{brand.name}</p>
        </div>
      </div>
    </div>
  );
}
