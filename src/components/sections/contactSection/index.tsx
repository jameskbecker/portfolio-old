import ContactGrid from '@/components/sections/contactSection/ContactGrid';
import styled from 'styled-components';
import { StyledContactSection } from './styles';

const ContactSection = () => {
  return (
    <StyledContactSection id="contact">
      <h1>Let&apos;s Work Together!</h1>
      <ContactGrid />
    </StyledContactSection>
  );
};

export default ContactSection;
