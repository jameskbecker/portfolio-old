'use client';

import client from '@/sanity';
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';
import Image from 'next/image';

type GalleryViewProps = {
  image: string;
  alt: string;
};

const GalleryView = (props: GalleryViewProps) => {
  const builder = imageUrlBuilder(client);
  const image = builder.image(props.image);

  return (
    <div className="relative h-full w-full flex-1 overflow-hidden bg-zinc-200 dark:bg-zinc-800  lg:w-auto">
      <Image
        src={image.url()}
        alt={props.alt}
        fill
        draggable="false"
        className="container absolute z-10 mx-auto object-scale-down object-center"
      />
      {/* <Image
        src={props.image}
        alt={props.alt}
        fill
        draggable="false"
        className="container absolute mx-auto object-cover object-top opacity-60 blur-sm"
      /> */}
    </div>
  );
};

export default GalleryView;
