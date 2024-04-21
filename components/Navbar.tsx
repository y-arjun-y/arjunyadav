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
          <Link href="/blog/">Blog (<Link href="https://yarjuny.substack.com/subscribe">subscribe!</Link>)</Link>
          <Link href="/series">Series</Link>
          <Link href="/projects/">Projects</Link>
          <br />
          <Link href="/notebook">Notebook</Link>
          <Link href="/profiles">Profiles</Link>
          <Link href="/resume">Résumé</Link>
        </p>
      </nav>
    </header>
  );
}
