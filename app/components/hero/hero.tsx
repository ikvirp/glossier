import Image from "next/image";

import { client, urlFor } from "../../lib/sanity";
import styles from "./hero.module.css";
import { Button } from "@/components/ui/button";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);
  return data;
}

export default async function Hero() {
  const data = await getData();

  return (
    <section className={styles.heroContainer}>
      {/* Мобильная версия */}
      <div className={styles.hiddenlg}>
        <Image
          src={urlFor(data.image2).url()}
          alt="Hero Image 2"
          layout="fill"
          objectFit="cover"
          className={styles.heroImage}
        />
      </div>

      {/* PC версия */}
      <div className={styles.hiddenmobile}>
        <Image
          src={urlFor(data.image1).url()}
          alt="Hero Image 1"
          layout="fill"
          objectFit="cover"
          className={styles.heroImage}
        />
      </div>

      <div className="absolute top-0 mb-8 flex flex-wrap w-full">
        <div className="bg-transperent text-black px-3 pt-8 rounded-lg text-left lg:left-0">
          <h2 className="text-lg font-regular text-black mb-2">{data?.name}</h2>
          <p className="text-gray-500 text-sm mb-4">{data?.description}</p>
          <Button className="w-[100px]">{data?.button}</Button>
        </div>
      </div>
    </section>
  );
}
export async function getStaticProps() {
  const data = await getData();

  return {
    props: { data },
  };
}
