import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Weather App",
  description: "Check out the current weather",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
