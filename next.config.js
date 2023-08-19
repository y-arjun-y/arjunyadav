/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
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
        destination: "https://forms.gle/NpvofSH5AUCY2mFd6",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
