import { useSelector } from 'react-redux';
import GalleryHeader from './GalleryHeader';
import GalleryNavButton from './GalleryNavButton';
import {
  Description,
  NextContainer,
  PrevContainer,
  StyledGalleryDetails,
} from './styles';

const GalleryDetails = () => {
  const { position, data, isLoading } = useSelector(
    (state: any) => state.gallery
  );

  if (isLoading) return <div>Loading</div>;
  const { description, ...headerProps } = data[position];

  return (
    <StyledGalleryDetails>
      <GalleryNavButton prev />

      <GalleryHeader {...headerProps} />
      <Description>{description}</Description>

      <GalleryNavButton />
    </StyledGalleryDetails>
  );
};

export default GalleryDetails;
