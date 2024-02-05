"use client";

import { urlFor } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick, cartDetails } = useShoppingCart();

  const existingProduct = cartDetails ? cartDetails[price_id] : undefined;

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <Button
      onClick={() => {
        if (existingProduct) {
          // Если товар уже есть в корзине, увеличиваем его количество на 1
          addItem({ ...product, quantity: existingProduct.quantity + 1 });
        } else {
          // Иначе добавляем товар в корзину с начальным количеством 1
          addItem({ ...product, quantity: 1 });
        }

        handleCartClick();
      }}
    >
      Add to Cart
    </Button>
  );
}
