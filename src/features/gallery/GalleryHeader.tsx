import Tag from '@/components/tag';
import { H4, H5 } from '@/components/typography/Headings';
import { StyledHeader, TagContainer } from './styles';

type GalleryHeaderProps = {
  name: string;
  timeframe: string;
  tags: string[];
};

const GalleryHeader = (props: GalleryHeaderProps) => {
  const { name, timeframe, tags } = props;
  const tagContent = tags.map((t, i) => <Tag key={i} label={t} />);

  return (
    <StyledHeader>
      <H4>{name}</H4>
      <H5>{timeframe}</H5>
      <TagContainer>{tagContent}</TagContainer>
    </StyledHeader>
  );
};

export default GalleryHeader;
