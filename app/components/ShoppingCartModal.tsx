"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LucideSmile, Smile, SmileIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    incrementItem,
    decrementItem,
    addItem,
    redirectToCheckout,
  } = useShoppingCart();

  async function handleCheckoutClick(event: any) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("result");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="p-0 w-full flex flex-col">
        <SheetHeader>
          <div className="py-[10px] px-3 flex justify-between pr-12 items-center">
            {" "}
            <Link href="/">
              <div className="italic text-[18px] font-bold">Glossier.</div>
            </Link>
            <SheetTitle className="text-xs text-left font-normal">
              Bag
            </SheetTitle>
          </div>
        </SheetHeader>

        {cartCount === 0 ? (
          <div className="flex flex-col flex-grow justify-between px-3 py-4 bg-[#F7F7F7]">
            <SheetDescription className="text-left text-xl text-gray-900">
              Your bag is empty, but you still look good.
            </SheetDescription>
            <div className="flex justify-center">
              <Smile className="w-[243px] h-[243px] text-[#E0E0E0]" />
            </div>
            <Button className="bg-white font-normal text-sm">Shop Now</Button>
          </div>
        ) : (
          <>
            <SheetDescription className="p-3 pb-5 text-left text-xs text-gray-900">
              SHOPPING BAG
            </SheetDescription>
            <div className="flex flex-col flex-1">
              {Object.values(cartDetails ?? {}).map((entry) => (  
                <li
                  key={entry.id}
                  className="flex px-3 py-3 border-[0] border-t-[1px] border-black"
                >
                  <div className="h-31 w-24 rounded-md">
                    <Image
                      src={entry.image as string}
                      alt="Product image"
                      width={97}
                      height={121}
                      className="object-cover"
                    />
                  </div>

                  <div className="ml-4 w-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between text-sm font-normal text-gray-900">
                        <h3>{entry.name}</h3>
                        <p>£{entry.price * entry.quantity}</p>
                      </div>
                    </div>

                    <div className="flex flex-row items-end justify-between text-sm">
                      <div className="flex flex-row items-end justify-between text-sm">
                        <button
                          type="button"
                          onClick={() => decrementItem(entry.id)}
                          className="font-normal text-primary hover:text-primary/80"
                        >
                          -
                        </button>

                        <p className="text-gray-900">{entry.quantity}</p>

                        <button
                          type="button"
                          onClick={() => incrementItem(entry.id)}
                          className="font-normal text-primary hover:text-primary/80"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          onClick={() => removeItem(entry.id)}
                          className="font-normal text-primary hover:text-primary/80"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </div>
            <div className=" border-t flex justify-end flex-col border-gray-200 px-3 py-2 sm:px-6">
              <div className="flex flex-col justify-between text-base font-normal text-gray-900">
                <div className="flex justify-between">
                  <p>Subtotal:</p>
                  <p>£{totalPrice}</p>
                </div>

                <div className="mt-3 w-full">
                  <Button onClick={handleCheckoutClick} className="w-full">
                    Checkout
                  </Button>
                </div>
              </div>
              <div className="flex justify-center font-normal text-center text-sm text-gray-500">
                <p>
                  OR{""}
                  <Button onClick={() => handleCartClick()} variant="ghost">
                    Continue Shopping
                  </Button>
                </p>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
