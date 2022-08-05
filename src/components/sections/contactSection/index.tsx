import styled from 'styled-components';
import ContactGrid from './ContactGrid';

const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  padding: 1.5 0;
  border-top: 1px solid black;

  overflow: hidden;

  h1 {
    flex: 0 0 auto;

    text-transform: uppercase;
    text-align: center;
    padding: 2rem 0;
  }
`;

const ContactSection = () => {
  return (
    <StyledContactSection id="contact">
      <h1>Let's Work Together!</h1>
      <ContactGrid />
    </StyledContactSection>
  );
};

export default ContactSection;
