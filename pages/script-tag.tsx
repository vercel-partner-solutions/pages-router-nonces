import { GetServerSidePropsContext } from "next";

export default function Home({ nonce }: { nonce: string }) {
  return (
    <div>
      <script src="https://www.googletagmanager.com/gtag/js" nonce={nonce} />
      <h1>Using script tag directly in the body</h1>
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
