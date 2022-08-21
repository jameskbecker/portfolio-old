import ContactButton from './ContactButton';
import contactData from './contactData';
import { StyledContactContent } from './styles';

const ContactContent = () => (
  <StyledContactContent>
    {contactData.map((d: any, i: number) => {
      return <ContactButton key={i} {...d} />;
    })}
  </StyledContactContent>
);

export default ContactContent;
