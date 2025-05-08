import Image from "next/image";
import css from './Home.module.css'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={css.bod}>
        {children}
        
      </body>
    </html>
  );
}
