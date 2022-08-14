import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactButton from './ContactButton';
import contactData from './contactData';
import { StyledContactContent } from './styles';

library.add(faGithub, faDiscord, faLinkedin, faEnvelope);

const ContactContent = () => (
  <StyledContactContent>
    {contactData.map((d: any, i: number) => {
      return <ContactButton key={i} {...d} />;
    })}
  </StyledContactContent>
);

export default ContactContent;
