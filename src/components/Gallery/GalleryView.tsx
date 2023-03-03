'use client';

import Image from 'next/image';

type GalleryViewProps = {
  image: string;
  alt: string;
};

const GalleryView = (props: GalleryViewProps) => {
  return (
    <div className="relative h-full w-full flex-1 overflow-hidden bg-black lg:w-auto">
      <Image
        src={props.image}
        alt={props.alt}
        fill
        draggable="false"
        className="absolute z-10 object-scale-down object-center"
      />
      <Image
        src={props.image}
        alt={props.alt}
        fill
        draggable="false"
        className="absolute w-full object-cover object-top opacity-60 blur-sm"
      />
    </div>
  );
};

export default GalleryView;
