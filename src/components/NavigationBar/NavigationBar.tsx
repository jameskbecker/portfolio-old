import NavigationMenu from '@/components/NavigationBar/NavigationMenu';
import MobileMenu from './MobileMenu';
import NavMenuButton from './NavMenuButton';

export type NavigationBarProps = {
  logoText: string;
};

const NavigationBar = ({ logoText }: NavigationBarProps) => {
  return (
    <nav className="fixed top-0 z-50 flex w-full flex-col">
      <div className="box-border flex h-16 flex-row items-center justify-evenly gap-8 bg-white bg-opacity-20 px-6 backdrop-blur">
        <div className="flex-1 text-base font-bold uppercase text-slate-700 dark:text-slate-300">
          {logoText}
        </div>
        <NavigationMenu />

        <NavMenuButton />
      </div>
      {/* <MobileMenu {...{ isOpen, setIsOpen }} /> */}
    </nav>
  );
};

export default NavigationBar;
