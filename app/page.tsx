import Image from "next/image";
import Hero from "./components/hero/hero";
import CategoryPromo from "./components/categoryPromo/categoryPromo";
import Featured from "./components/feautred/featured";
import { Button } from "antd";
import { useShoppingCart } from "use-shopping-cart";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategoryPromo />

      <Featured />
    </div>
  );
}
