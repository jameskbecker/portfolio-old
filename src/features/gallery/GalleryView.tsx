import { useSelector } from 'react-redux';
import { GalleryState } from './gallerySlice';
import { BlurredImage, MainImage, StyledGalleryView } from './styles';

const GalleryView = () => {
  const gallery = useSelector((state: any) => state.gallery);
  const { position, data, isLoading }: GalleryState = gallery;

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!data[position]) return <div>No Data</div>;

  return (
    <StyledGalleryView>
      <MainImage
        layout="fill"
        draggable="false"
        objectFit="scale-down"
        objectPosition="center"
        src={data[position].image}
        alt={data[position].alt}
      />
      <BlurredImage
        layout="fill"
        draggable="false"
        objectFit="cover"
        objectPosition="top"
        src={data[position].image}
        alt={data[position].alt}
      />
    </StyledGalleryView>
  );
};

export default GalleryView;
