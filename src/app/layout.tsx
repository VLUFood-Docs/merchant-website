import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VLUFood & Docs | Merchant',
  description:
    'Website dành cho đối tác quán ăn. Giúp quản lý đơn hàng, menu, báo cáo và cài đặt quán.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
