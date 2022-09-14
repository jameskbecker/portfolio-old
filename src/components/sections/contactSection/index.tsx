import ContactGrid from '@/components/sections/contactSection/ContactGrid';
import { H1, H3 } from '@/components/typography/Headings';
import styled from 'styled-components';
import { StyledContactSection } from './styles';

const ContactSection = () => {
  return (
    <StyledContactSection id="contact">
      <H1>Have a project in mind?</H1>
      <H3>I&apos;d love to hear from you!</H3>
      <ContactGrid />
    </StyledContactSection>
  );
};

export default ContactSection;
