import { client } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { simplifiedProduct } from "@/app/interface";

async function getData(category: string) {
  const query = `*[_type == "product" && category->name == "${category}"]{
        _id,
        "imageUrl": images[0].asset->url,
        price,
        name,
        "slug": slug.current,
        "categoryName": category->name
    }`;

  const data = await client.fetch(query);
  return data;
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: simplifiedProduct[] = await getData(params.category);

  return (
    <div className="relative justify-between mx-auto px-3 py-14">
      <div className="flex justify-between items-start">
        <h2 className="text-xs font-base tracking-tight text-gray-900">
          {params.category}
        </h2>
      </div>

      <div className="flex mt-6 gap-x-3 gap-y-10 overflow-auto">
        {data.map((product) => (
          <div key={product._id} className="group relative">
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

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm font-medium text-gray-900">
                    £{product.price}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
