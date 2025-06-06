const nextConfig = {
  // 'output: "export"' makes Next.js generate static HTML, CSS, and JS files.
  // This is ideal for hosting on platforms like GitHub Pages or Vercel for a simple portfolio.
  output: 'export',
  // 'images: { unoptimized: true }' is necessary when using 'output: "export"'
  // if you plan to use Next.js's <Image> component, as it disables image optimization
  // which requires a server. For this portfolio, we are not using <Image>, but it's
  // good practice to include if you might add images later.
  images: {
    unoptimized: true,
  },
  // If you plan to host on GitHub Pages under a sub-path (e.g., yourusername.github.io/your-repo-name/)
  // then uncomment and adjust the following lines.
  // For most Vercel deployments, these are not needed as Vercel handles the root path correctly.
  // basePath: process.env.NODE_ENV === 'production' ? '/your-repository-name' : '',
  // assetPrefix:; process.env.NODE_ENV === 'production' ? '/your-repository-name/' : '',
};

export default nextConfig