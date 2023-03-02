import Image from 'next/image';
import { useSelector } from 'react-redux';
import { GalleryState } from './gallerySlice';

const GalleryView = () => {
  const gallery = useSelector((state: any) => state.gallery);
  const { position, data, isLoading }: GalleryState = gallery;

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!data[position]) return <div>No Data</div>;

  return (
    <div className="relative h-full w-full flex-1 overflow-hidden bg-black lg:w-auto">
      <Image
        layout="fill"
        draggable="false"
        objectFit="scale-down"
        objectPosition="center"
        src={data[position].image}
        alt={data[position].alt}
        className="absolute z-10"
      />
      <Image
        layout="fill"
        draggable="false"
        objectFit="cover"
        objectPosition="top"
        src={data[position].image}
        alt={data[position].alt}
        className="absolute w-full opacity-60 blur-sm"
      />
    </div>
  );
};

export default GalleryView;
