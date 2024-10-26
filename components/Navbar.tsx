import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <Link href="/" passHref>
        <h1>Arjun Yadav</h1>
      </Link>
      <nav>
        <p>
          <Link href="/">Home</Link>
          <Link href="/blog/">Blog</Link>
          <Link href="/series">Series</Link>
          <Link href="/poetry">Poetry</Link>
          <Link href="/subscribe">Subscribe</Link>
          <br />
          <Link href="https://github.com/y-arjun-y/">Projects</Link>
          <Link href="/notebook">Notebook</Link>
          <Link href="/profiles">Profiles</Link>
          <Link href="/cv">CV</Link>
        </p>
      </nav>
    </header>
  );
}
