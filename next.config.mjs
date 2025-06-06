// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'npx serve@latest out', // <--- THIS LINE IS CRUCIAL
  images: {
    unoptimized: true,
  },
  // ... (other optional settings like basePath)
};

export default nextConfig;