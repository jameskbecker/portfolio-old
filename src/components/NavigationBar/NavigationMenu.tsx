import ThemeToggle from '@/features/themeToggle';
import routes from '@/routes';

const NavigationMenu = () => {
  const renderRoutes = (route: any, i: number) => (
    <a
      key={i}
      href={route.to}
      className="text-navigationText opacity-60 hover:opacity-100 hover:duration-300 hover:ease-in"
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
