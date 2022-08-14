import { useSelector } from 'react-redux';
import {
  Description,
  Heading,
  StyledGalleryFooter,
  Subheading,
} from './styles';

const GalleryDetails = () => {
  const { position, data, isLoading } = useSelector(
    (state: any) => state.gallery
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <StyledGalleryFooter>
      <Heading>{data[position].name}</Heading>
      <Subheading>{data[position].type.join(' • ')}</Subheading>
      <Description>{data[position].description}</Description>
    </StyledGalleryFooter>
  );
};

export default GalleryDetails;
