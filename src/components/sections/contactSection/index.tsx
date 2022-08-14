import ContactGrid from '@/components/sections/contactSection/ContactGrid';
import styled from 'styled-components';

const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  padding: 12vw 6vw;
  margin: 0 auto;
  box-sizing: border-box;

  overflow: hidden;
`;

const ContactSection = () => {
  return (
    <StyledContactSection id="contact">
      <h1>Let&apos;s Work Together!</h1>
      <ContactGrid />
    </StyledContactSection>
  );
};

export default ContactSection;
