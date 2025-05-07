import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/script-tag">
              Using script tag directly in the body
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/next-script">Using Next.js Script Component</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/">Using Head Component</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
