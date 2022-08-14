import { useSelector } from 'react-redux';
import { Description, StyledGalleryFooter } from './styles';

const GalleryFooter = () => {
  const { position, data, isLoading } = useSelector(
    (state: any) => state.gallery
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <StyledGalleryFooter>
      <h5>{data[position].name}</h5>
      <h6>{data[position].type.join(' • ')}</h6>
      <Description>{data[position].description}</Description>
    </StyledGalleryFooter>
  );
};

export default GalleryFooter;
