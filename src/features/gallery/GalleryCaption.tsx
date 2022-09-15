import Tag from '@/components/tag';
import { BodySmall } from '@/components/typography/Body';
import { H4, H5 } from '@/components/typography/Headings';
import { useSelector } from 'react-redux';
import GalleryNavButton from './GalleryNavButton';
import {
  Description,
  NextContainer,
  PrevContainer,
  StyledGalleryCaption,
} from './styles';

const GalleryCaption = () => {
  const { position, data, isLoading } = useSelector(
    (state: any) => state.gallery
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  const { name, type, description, timeframe } = data[position];

  const Header = () => (
    <div
      style={{
        flex: '0 1 30%',
        display: 'flex',
        gap: '0.5rem',
        flexDirection: 'column',
        overflow: 'hidden',
        flexWrap: 'wrap',
      }}
    >
      <H4>{name}</H4>

      <H5>{timeframe}</H5>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '0.5rem',
        }}
      >
        {type.map((t, i) => (
          <Tag key={i} label={t} />
        ))}
      </div>
    </div>
  );

  return (
    <StyledGalleryCaption>
      <PrevContainer>
        <GalleryNavButton prev />
      </PrevContainer>
      <Header />
      <Description>{description}</Description>
      <NextContainer>
        <GalleryNavButton />
      </NextContainer>
    </StyledGalleryCaption>
  );
};

export default GalleryCaption;
