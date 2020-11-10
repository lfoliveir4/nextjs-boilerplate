import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { client } from "@/lib/prismic";
import { Document } from "prismic-javascript/types/documents";
import PrismicDom from "prismic-dom";

import { Container, ContainerDetailProduct } from "@/styles/pages/Catalog";

interface ProductProps {
  product: Document;
}

export default function Product({ product }: ProductProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>carregrando........</p>;
  }

  return (
    <Container>
      <img src={product.data.thumbnail.url} width={300} alt="" />

      <ContainerDetailProduct>
        <h1>{PrismicDom.RichText.asText(product.data.title)}</h1>

        <div
          dangerouslySetInnerHTML={{
            __html: PrismicDom.RichText.asHtml(product.data.description),
          }}
        ></div>

        <p>Price R${product.data.price}</p>
      </ContainerDetailProduct>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps<ProductProps> = async (context) => {
  const { slug } = context.params;

  console.log(slug);

  const product = await client().getByUID("product", String(slug), {});

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
};
