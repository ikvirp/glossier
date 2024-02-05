import Image from "next/image";
import { client, urlFor } from "../../lib/sanity";
import styles from "./categoryPromo.module.css";
import { simplifiedCatergory } from "@/app/interface";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Импорт схемы данных Sanity

async function getData() {
  const query = `*[_type == 'categoryPromo'] {
    _id,
    name,
    "slug": slug.current,
    "imageURL": categoryImage.asset->url,
    button
  }`;
  const data = await client.fetch(query);
  return data;
}

// Интерфейс для типизации данных категории

export default async function categoryPromo() {
  const data: simplifiedCatergory[] = await getData();

  return (
    <div className="p-3 gap-4 py-14 lg:flex w-full">
      {data.map((category) => (
        <div
          key={category._id}
          className="relative flex flex-col items-left w-full"
        >
          <div>
            {" "}
            <h2 className="text-xs font-regular text-black mb-3">
              {category?.name}
            </h2>
          </div>
          <div className="aspect-square relative flex flex-col justify-center w-full">
            <div className="w-full flex ">
              <Image
                src={urlFor(category.imageURL).url()}
                alt="Hero Image 2"
                layout="fill"
                objectFit="cover"
                className={styles.heroImage}
              />
            </div>

            <div className="relative items-center justify-center">
              <div className="text-black rounded-lg text-center items-center">
                <Link
                  href={category.slug}
                  className="flex items-center justify-center"
                >
                  <Button variant="catalog" className="w-[100px]">
                    {category?.button}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
