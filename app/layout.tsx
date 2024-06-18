import { notFound } from 'next/navigation';
import './globals.css'

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };

}
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {

  return (
    <html suppressHydrationWarning>
      
      <body>
          {children}
      </body>
    </html>
  );
}