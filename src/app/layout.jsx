import AuthProvider from "@/components/AuthProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Drag-and-Drop Gallery",
  description:
    "A fully functional and responsive image gallery with drag-and-drop feature."
};
/**
 * RootLayout is a global layout component for your Next.js application.
 * It sets up global styles, fonts, and metadata for the entire application.
 *
 * @param {ReactNode} children - The content to be rendered within the layout.
 * @returns {JSX.Element} The root layout component.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <AuthProvider>{children}</AuthProvider>
        </main>
      </body>
    </html>
  );
}
