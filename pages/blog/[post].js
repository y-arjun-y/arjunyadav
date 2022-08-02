import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

marked.setOptions({
  gfm: true,
});

export async function getStaticPaths() {
  const files = fs.readdirSync("./blog-posts");
  const paths = files.map((fileName) => ({
    params: {
      post: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { post } }) {
  const fileName = fs.readFileSync(`./blog-posts/${post}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function Post({ frontmatter, content }) {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
    </div>
  );
}
