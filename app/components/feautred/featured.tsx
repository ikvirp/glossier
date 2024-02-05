import Link from "next/link";
import { client, urlFor } from "../../lib/sanity";
import Image from "next/image";
import { simplifiedProduct } from "@/app/interface";
import AddToBag from "../AddToBag/AddToBag";

async function getData() {
  const query = `*[_type == 'product'][0..1] {
    _id,
    price,
    name,
    description,
    "slug": slug.current,
    "imageUrl": images[0].asset->url
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Featured() {
  const data: simplifiedProduct[] = await getData();
  return (
    <div className="relative justify-between mx-auto px-3 py-14">
      <div className="flex justify-between items-start">
        <h2 className="text-xs font-base tracking-tight text-gray-900">
          FEATURED PRDOUCTS
        </h2>

        <Link
          className="text-sm flex items-center gap-x-1 h-[48px] border-black px-6 border-solid border-1 border-b border-r"
          href="/all"
        >
          Shop all products{""}
        </Link>
      </div>

      <div className="flex mt-6 gap-x-3 gap-y-10 overflow-auto">
        {data.map((product) => (
          <div
            key={product._id}
            className="group flex flex-col justify-between"
          >
            <Link href={`/product/${product.slug}`}>
              <div className="aspect-[3/4] h-[364px] rounded-md bg-gray-200 group-hover:opacity-75 lg:h-[426px]">
                <Image
                  src={product.imageUrl}
                  alt="Product Image"
                  className="w-full h-full object-cover object-center"
                  width={300}
                  height={400}
                />
              </div>

              <div className="mt-4 mb-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {product.description}
                  </p>
                  <p className="text-sm font-medium text-gray-900 mt-4">
                    £{product.price}
                  </p>
                </div>
              </div>
            </Link>
            <div className="flex w-full">
              <AddToBag
                currency="USD"
                description={product.description}
                image={product.imageUrl}
                key={product._id}
                name={product.name}
                price={product.price}
                price_id={product.price_id}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
