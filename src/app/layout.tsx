import type { Metadata } from 'next';
import '@/styles/index.scss';
import { Footer, MouseScrollBackground, Navbar } from '@/components';

export const metadata: Metadata = {
  title: 'Blogify | Practice',
  description: 'Ecommerce application for practice',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        <MouseScrollBackground />
        <div className="body__container">
          <Navbar />
          <div className="body__container--content">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
