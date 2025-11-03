import "./globals.css";

export const metadata = {
  title: "iWatch Landing",
  description: "Next.js demo project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
