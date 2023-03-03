import { useSelector } from 'react-redux';
import GalleryHeader from './GalleryHeader';
import GalleryNavButton from './GalleryNavButton';

const GalleryDetails = () => {
  const { position, data, isLoading } = useSelector((state: any) => state.gallery);

  if (isLoading) return <div>Loading</div>;
  const { description, ...headerProps } = data[position];

  return (
    <div className="container mx-auto flex basis-40 flex-row items-center justify-evenly gap-6 overflow-hidden px-4 py-4">
      <GalleryNavButton prev />

      <GalleryHeader {...headerProps} />
      <p className="hidden overflow-hidden text-ellipsis text-base font-light text-zinc-700 dark:text-gray-500 md:text-lg lg:block lg:flex-shrink lg:basis-3/4">
        {description}
      </p>

      <GalleryNavButton />
    </div>
  );
};

export default GalleryDetails;
