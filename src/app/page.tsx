
import getAllProducts from "@/apis/allProducts"
import MainSlider from "./_Components/MainSlider/MainSlider"
import HomeCard from"./_Components/HomeCard/HomeCard";

import CategorySlide from "./_Components/CategorySlide/CategorySlide"
import { Product } from "@/types/product.type";


export default async function Home() {
const data:Product[] = await getAllProducts()



  return (
   <section className="px-5 md:px-0 my-10 w-full md:w-[80%] mx-auto">
      <MainSlider/>
      <CategorySlide/>
   <div className="flex flex-wrap">

    {data.map((product:Product , idx:number) => <HomeCard key={idx} product={product}/> )}

   </div>



   </section>
  );
}
