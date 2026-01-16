import BannerSlider from "../components/BannerSlider";
import LatestProducts from "../components/LatestProducts";
import { getProducts } from "../lib/api";

export default async function HomePage() {
const data = await getProducts({ limit: 4 });
const products = data.products;


  return (
    <div className="space-y-20">
      <BannerSlider />
      <LatestProducts products={products} />
    </div>
  );
}


 