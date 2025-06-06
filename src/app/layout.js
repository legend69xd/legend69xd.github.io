import './globals.css'; // Import global styles

// Metadata for the page (title, description for SEO and browser tabs)
export const metadata = {
  title: 'Prathamesh Upadhye - Cybersecurity Portfolio',
  description: 'A cybersecurity portfolio showcasing skills, experience, and projects by Prathamesh Upadhye.',
};

// RootLayout component wraps all pages and applies global elements like the <html> and <body> tags.
export default function RootLayout({ children }) {
  return (
    <html lang="en"> {/* Set the language for accessibility */}
      <body>{children}</body> {/* Render the content of the current page */}
    </html>
  );
}
