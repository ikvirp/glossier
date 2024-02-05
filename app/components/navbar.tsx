"use client";
import Image from "next/image";
import { client, urlFor } from "../lib/sanity";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  { name: "SKINCARE", href: "/skincare" },
  { name: "MAKEUP", href: "/makeup" },
  { name: "BALMS", href: "/balms" },
  { name: "BODY", href: "/body" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  return (
    <header className="mb-0 border-b">
      <div className="flex items-center justify-between mx-auto max-w-full px-4 sm:px- lg:max-w-full">
        <Link href="/">
          <div className="italic text-[18px] font-bold">Glossier.</div>
        </Link>

        <nav className="hidden gap-4 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-xs font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-xs font-semobild text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button onClick={() => handleCartClick()}>
            <span>BAG</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
