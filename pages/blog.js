import fs from "fs";
import matter from "gray-matter";

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
      new Date(b.frontmatter.publish_date) -
      new Date(a.frontmatter.publish_date)
    );
  });

  return (
    <>
      <ul>
        {posts.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <span style={{ display: "inline" }}>
              <time>{frontmatter.publish_date}</time>
              <a href={`/blog/${slug}`}>{frontmatter.title}</a>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
