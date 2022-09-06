import { H4, H5 } from '@/components/typography/Headings';
import { useSelector } from 'react-redux';
import { Description, StyledGalleryFooter } from './styles';

const GalleryDetails = () => {
  const { position, data, isLoading } = useSelector(
    (state: any) => state.gallery
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  const { name, type, description } = data[position];

  return (
    <StyledGalleryFooter>
      <H4>{name}</H4>
      <H5>{type.join(' • ')}</H5>
      <Description>{description}</Description>
    </StyledGalleryFooter>
  );
};

export default GalleryDetails;
