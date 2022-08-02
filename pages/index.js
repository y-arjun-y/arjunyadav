import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

export async function getStaticProps() {
  const fileName = fs.readFileSync(`./pages-md/index.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function Post({ content }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
    </div>
  );
}
