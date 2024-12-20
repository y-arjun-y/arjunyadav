import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";

export async function getStaticProps() {
  const files = fs.readdirSync("./blog-posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`./blog-posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  posts.sort((a, b) => {
    return (
      new Date(b.frontmatter.publish_date).getTime() -
      new Date(a.frontmatter.publish_date).getTime()
    );
  });

  console.log(posts);

  return (
    <>
      <Head>
        <meta property="og:title" content="Welcome to arjunyadav.net!" />
        <meta
          property="og:image"
          content="https://arjunyadav.net/twittercard.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome to arjunyadav.net!" />
        <title>Blog</title>
      </Head>
      <ul>
        {posts.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <span style={{ display: "inline" }}>
              <time>
                {frontmatter.publish_date.substring(0, 4) +
                  frontmatter.publish_date.substring(7, 12)}
              </time>
              <a href={`/blog/${slug}`}>{frontmatter.title}</a>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
