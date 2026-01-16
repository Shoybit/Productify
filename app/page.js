import HowItWorks from "../components/HowItWorks";
import BannerSlider from "../components/BannerSlider";
import LatestProducts from "../components/LatestProducts";
import { getProducts } from "../lib/api";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

export default async function HomePage() {
const data = await getProducts({ limit: 4 });
const products = data.products;


  return (
    <div className="space-y-20">
      <BannerSlider />
      <LatestProducts products={products} />
      <HowItWorks></HowItWorks>
      <Features></Features>
      <FAQ></FAQ>
      <Testimonials></Testimonials>
    </div>
  );
}


 