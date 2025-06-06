/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRUCIAL: 'output: "export"' tells Next.js to generate static HTML, CSS, and JS files
  // into an 'out' directory. 'npx serve@latest out' is a command to serve, not a config.
  output: 'export',
  
  // This is necessary when using 'output: "export"' if you use Next.js's <Image> component
  // as it disables image optimization which requires a server.
  images: {
    unoptimized: true,
  },

  // --- IMPORTANT FOR GITHUB PAGES SUB-PATH DEPLOYMENT ---
  // If your GitHub Pages URL will be like: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
  // then you MUST set basePath and assetPrefix to your repository name.
  // Replace 'prathamesh-cybersec-portfolio' with your actual GitHub repository name.
  // For example, if your repo is 'my-cyber-portfolio', change both lines to:
  // basePath: process.env.NODE_ENV === 'production' ? '/my-cyber-portfolio' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/my-cyber-portfolio/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/legend69xd.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/legend69xd.github.io/' : '',
  // ----------------------------------------------------
};

export default nextConfig;