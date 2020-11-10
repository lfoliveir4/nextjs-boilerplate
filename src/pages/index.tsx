import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Prismic from "prismic-javascript";
import { client } from "@/lib/prismic";
import { Document } from "prismic-javascript/types/documents";
import PrismicDom from "prismic-dom";

import SEO from "@/components/SEO";

import { Container } from "@/styles/pages/Home";

interface HomeProps {
  recommendedProducts: Document[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  const router = useRouter();

  return (
    <Container>
      <SEO title="Dev Commerce, yout best ecommerce" shouldExcludeTitleSuffix />

      <button onClick={() => router.push(`/search`)}>Pesquisar</button>

      <section>
        <ul>
          {recommendedProducts.map((recommendedProduct) => {
            return (
              <li key={recommendedProduct.id}>
                <Link href={`/catalog/products/${recommendedProduct.uid}`}>
                  <a>
                    {PrismicDom.RichText.asText(recommendedProduct.data.title)}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at("document.type", "product"),
  ]);

  return {
    props: {
      recommendedProducts: recommendedProducts.results,
    },
  };
};
