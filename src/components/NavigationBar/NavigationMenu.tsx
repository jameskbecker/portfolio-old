import ThemeToggle from '@/components/ThemeToggle';
import routes from '@/routes';

const NavigationMenu = () => {
  const renderRoutes = (route: any, i: number) => (
    <a
      key={i}
      href={route.to}
      className="p-1 text-gray-700 opacity-80 hover:opacity-100 hover:duration-300 hover:ease-in focus:outline-amber-300 dark:text-gray-300 dark:focus:outline-amber-400"
    >
      {route.name}
    </a>
  );

  return (
    <ul className="hidden flex-initial items-center gap-8 font-medium lg:flex">
      {routes.map(renderRoutes)}
      <ThemeToggle />
    </ul>
  );
};

export default NavigationMenu;
