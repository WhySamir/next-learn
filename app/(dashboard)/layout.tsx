import Hero2 from "../components/Hero2";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {
          <>
            <Hero2 />
            {children}
          </>
        }
      </body>
    </html>
  );
}
