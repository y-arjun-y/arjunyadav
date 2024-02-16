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
          <Link href="/projects/">Projects</Link>
          <br />
          <Link href="/notebook">Notebook</Link>
          <Link href="/profiles">Profiles</Link>
          <Link href="/resume">Résumé</Link>
          <Link href="/misc/">Misc.</Link>
        </p>
      </nav>
    </header>
  );
}