import ContactGrid from '@/components/sections/contactSection/ContactGrid';
import { H1 } from '@/components/typography/Headings';
import styled from 'styled-components';
import { StyledContactSection } from './styles';

const ContactSection = () => {
  return (
    <StyledContactSection id="contact">
      <H1>Let&apos;s Work Together!</H1>
      <ContactGrid />
    </StyledContactSection>
  );
};

export default ContactSection;
