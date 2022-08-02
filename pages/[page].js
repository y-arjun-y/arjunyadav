import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

export async function getStaticPaths() {
  const files = fs.readdirSync("./pages-md");
  const paths = files.map((fileName) => ({
    params: {
      page: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { page } }) {
  const fileName = fs.readFileSync(`./pages-md/${page}.md`, "utf-8");
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
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
    </div>
  );
}
