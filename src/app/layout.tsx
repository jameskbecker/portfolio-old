import NavigationBar from '@/components/NavigationBar';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <NavigationBar logoText="James K. Becker" />
      <body>{children}</body>
    </html>
  );
}
