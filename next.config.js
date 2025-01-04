/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  async redirects() {
    return [
      {
        source: "/profiles",
        destination: "https://linktr.ee/y_arjun_y",
        permanent: false,
      },
      {
        source: "/cv",
        destination: "/cv.pdf",
        permanent: false,
      },
      {
        source: "/subscribe",
        destination: "https://yarjuny.substack.com/subscribe",
        permanent: false,
      },
      {
        source: "/ukulele-and-harmonica-recordings",
        destination: "https://drive.google.com/drive/folders/1LF2i_C7gImifG8ljCki-jsgdSZPmEFDS?usp=sharing",
        permanent: false,
      },
      {
        source: "/guitar-recordings",
        destination: "https://drive.google.com/drive/folders/1LALtYJysww_9H72JPdNLTP43jIYQ7qtb?usp=sharing",
        permanent: false,
      },
      {
        source: "/drum-recordings",
        destination: "https://drive.google.com/drive/folders/1v_pZQy1dT8Wl9o1wGFIwO9j8yMOV2B4i?usp=sharing",
        permanent: false,
      },
      {
        source: "/time-and-memory",
        destination: "https://youtu.be/PJiVvpH6-E0?si=x-JWFe5WZjZAg6Vs&t=10",
        permanent: false,
      },
      {
        source: "/see-hear-speak",
        destination: "https://www.youtube.com/watch?v=6E1DkgUNfBc",
        permanent: false,
      }
    ];
  },
};

module.exports = nextConfig;
