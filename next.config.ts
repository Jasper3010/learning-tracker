import withPWA from "next-pwa"; // Không có dấu ngoặc nhọn {}

const nextConfig = {
  reactStrictMode: true,
  experimental: {},
};

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
})(nextConfig);
