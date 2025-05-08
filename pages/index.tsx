import { GetServerSidePropsContext } from "next";
import Head from "next/head";

export default function Home({ nonce }: { nonce: string }) {
  return (
    <>
      <Head>
        <script src="https://www.googletagmanager.com/gtag/js" nonce={nonce} />

        {/* This script will not be executed because the nonce is not present */}
        <script src="https://www.googletagmanager.com/gtag/js" />

        {/* This script will be executed because the nonce is present */}
        <script nonce={nonce}>console.log("Safe script!");</script>

        {/* This script will not be executed because the nonce is not present */}
        <script>console.log("XSS Attack!");</script>

        {/* This style will be applied because the nonce is present */}
        <style nonce={nonce}>
          {`
            body {
              background-color: white;
            }
          `}
        </style>

        {/* This style will not be applied because the nonce is not present and 'unsafe-inline' is not an allowed source */}
        <style>
          {`
            body {
              background-color: red !important;
            }
          `}
        </style>
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
