import NavigationBar from '@/components/NavigationBar';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 dark:bg-zinc-900">
        <NavigationBar logoText="James K. Becker" />
        <main className="relative m-0 flex flex-col overflow-hidden p-0 selection:bg-violet-200 dark:selection:bg-violet-100 dark:selection:text-gray-900">
          {children}
        </main>
      </body>
    </html>
  );
}
