import { GetServerSidePropsContext } from "next";

export default function Home({
  message,
  nonce,
}: {
  message: string;
  nonce: string;
}) {
  return (
    <div>
      <h1>{message}</h1>
      <p>Nonce: {nonce}</p>
      <script nonce={`${nonce}`} src="/script.js"></script>
    </div>
  );
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  const nonce = context.req.headers["x-nonce"] || "";

  return {
    props: {
      message: "Hello World",
      nonce,
    },
  };
}
