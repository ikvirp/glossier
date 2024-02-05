import AddToBag from "@/app/components/AddToBag/AddToBag";
import ImageGallery from "@/app/components/imageGalley/imageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { get } from "http";
import { Ghost, Star, Truck } from "lucide-react";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current=="${slug}"][0]{
        _id,
        images,
        price,
        name,
        description,
        "slug": slug.current,
        price_id
    }`;
  const data = await client.fetch(query);

  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);
  return (
    <div className="bg-white">
      <div className="mx-auto px-3">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <h3 className="text-sm">{data.description}</h3>

              <div className="flex items-center gap-3">
                <Button variant={"ghost"} className="p-0 rounded-full gap-x-2">
                  <Star fill="black" className="h-4 w-4" />
                </Button>

                <span className="text-sm text-gray-500 transition duration-100">
                  (56)
                </span>
              </div>
            </div>

            <div className="flex justify-between w-full">
              <div className="w-[145px]">
                <AddToBag
                  currency="USD"
                  description={data.description}
                  image={data.images[0]}
                  key={data._id}
                  name={data.name}
                  price={data.price}
                  price_id={data.price_id}
                />
              </div>
            </div>
          </div>
          <ImageGallery images={data.images} />
        </div>
      </div>
    </div>
  );
}