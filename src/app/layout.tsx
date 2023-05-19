import NavigationBar from '@/components/NavigationBar';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <NavigationBar logoText="James K. Becker" />
        <main className="relative m-0 flex flex-col overflow-hidden p-0 selection:bg-emerald-500 selection:text-white dark:selection:bg-emerald-400">
          {children}
        </main>
      </body>
    </html>
  );
}
