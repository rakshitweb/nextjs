import type { Metadata } from 'next';
import '@/styles/index.scss';
import { MouseScrollBackground, Navbar } from '@/components';

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
            <body>
                <MouseScrollBackground />
                <div className="body-container">
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
