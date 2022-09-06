import { BodySmall } from '@/components/typography/Body';
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

  return (
    <StyledGalleryFooter>
      <H4>{data[position].name}</H4>
      <H5>{data[position].type.join(' • ')}</H5>
      <Description>{data[position].description}</Description>
    </StyledGalleryFooter>
  );
};

export default GalleryDetails;
