import { GetServerSidePropsContext } from "next";
import Head from "next/head";

export default function Home({ nonce }: { nonce: string }) {
  return (
    <>
      <Head>
        <script src="https://www.googletagmanager.com/gtag/js" nonce={nonce} />
      </Head>
      <div>
        <p>Nonce: {nonce}</p>
      </div>
    </>
  );
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  const nonce = context.req.headers["x-nonce"] || "";

  return {
    props: {
      nonce,
    },
  };
}
