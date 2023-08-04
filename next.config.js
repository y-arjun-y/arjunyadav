/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/walking-music",
        destination:
          "https://open.spotify.com/playlist/5wpTzDmOXA0lh9hlhDLJgT?si=495f15d8a202499f",
        permanent: false,
      },
      {
        source: "/rainbows",
        destination: "https://youtu.be/sWqDIZxO-nU?t=20",
        permanent: false,
      },
      {
        source: "/resume",
        destination: "/resume.pdf",
        permanent: false,
      },
      {
        source: "/the-busy-persons-introduction-to-ai-safety",
        destination: "/blog/the-busy-persons-introduction-to-ai-safety",
        permanent: false,
      },
      {
        source: "/aae-class",
        destination:
          "https://docs.google.com/document/d/1zxP9nkgEXKf2aZ10NznOnBeQzQvSJFNGrZFlncJzNWs/edit?usp=sharing",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
