import { GetServerSidePropsContext } from "next";
import Script from "next/script";

export default function Home({ nonce }: { nonce: string }) {
  return (
    <div>
      <Script src="https://www.googletagmanager.com/gtag/js" nonce={nonce} />

      <p>Nonce: {nonce}</p>
    </div>
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
