import { useSelector } from 'react-redux';
import GalleryImage from './GalleryImage';
import { StyledGalleryItem } from './styles';

const GalleryItem = () => {
  const { position, data, isLoading } = useSelector(
    (state: any) => state.gallery
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <StyledGalleryItem>
      <GalleryImage src={data[position].image} alt={data[position].alt} />
    </StyledGalleryItem>
  );
};

export default GalleryItem;
