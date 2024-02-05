import styles from "./promoBar.module.css";
import { client } from "../../lib/sanity";

async function getData() {
  const query = "*[_type == 'promoBar'][0]";
  const data = await client.fetch(query);
  return data;
}

export default async function promoBar() {
  const data = await getData();

  return (
    <section className={styles.promoBar}>
      <p className="text-white font-regular tracking-wider text-xs">
        {data?.Text}
      </p>
    </section>
  );
}
export async function getStaticProps() {
  const data = await getData();

  return {
    props: { data },
  };
}
