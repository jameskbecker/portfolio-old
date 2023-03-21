'use client';

import { useState } from 'react';
import GalleryDetails from './GalleryDetails';
import GalleryView from './GalleryView';

export type GalleryProps = {
  data: {
    name: string;
    timeframe: string;
    tags: string[];
    description: string;
    image: string;
    alt: string;
  }[];
};

const Gallery = ({ data }: GalleryProps) => {
  const [position, setPosition] = useState(0);

  const handleNext = () => {
    const isLast = position === data.length - 1;
    setPosition(isLast ? 0 : position + 1);
  };

  const handlePrevious = () => {
    const isFirst = position === 0;
    setPosition(isFirst ? data.length - 1 : position - 1);
  };

  const { image, alt, ...detailsProps } = data[position];

  return (
    <div className="flex h-screen flex-col text-center lg:text-left">
      <GalleryView {...{ image, alt }} />
      <GalleryDetails {...detailsProps} onPrevious={handlePrevious} onNext={handleNext} />
    </div>
  );
};

export default Gallery;
