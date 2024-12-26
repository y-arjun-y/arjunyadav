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
          <Link href="/subscribe">Subscribe</Link>
          <Link href="/cv">CV</Link>
          <br />
          <Link href="https://linktr.ee/yarjuny">Profiles</Link>
          <Link href="/poetry">Poetry</Link>
          <Link href="/projects/">Projects</Link>
          <Link href="/notebook">Notebook</Link>
        </p>
      </nav>
    </header>
  );
}
