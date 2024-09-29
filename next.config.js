/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  async redirects() {
    return [
      {
        source: "/aae-class",
        destination: "https://forms.gle/NpvofSH5AUCY2mFd6",
        permanent: false,
      },
      {
        source: "/profiles",
        destination: "https://linktr.ee/y_arjun_y",
        permanent: false,
      },
      {
        source: "/rainbows",
        destination: "https://youtu.be/sWqDIZxO-nU?t=20",
        permanent: false,
      },
      {
        source: "/cv",
        destination: "/cv.pdf",
        permanent: false,
      },
      {
        source: "/resume",
        destination: "/resume.pdf",
        permanent: false,
      },
      {
        source: "/subscribe",
        destination: "https://yarjuny.substack.com/subscribe",
        permanent: false,
      },
      {
        source: "/the-busy-persons-introduction-to-ai-safety",
        destination: "/blog/the-busy-persons-introduction-to-ai-safety",
        permanent: false,
      },
      {
        source: "/time-and-memory",
        destination: "https://youtu.be/PJiVvpH6-E0?si=x-JWFe5WZjZAg6Vs&t=10",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
