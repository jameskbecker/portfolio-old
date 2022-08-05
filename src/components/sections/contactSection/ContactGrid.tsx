import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

library.add(faGithub, faDiscord, faLinkedin, faEnvelope);

const StyledContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;

  width: 15vw;
  height: 15vw;
  & * {
    font-size: 3rem;
    align-self: center;
    justify-self: center;
  }
`;

const contactData = [
  { icon: 'fa-brands fa-github', href: 'https://github.com/jameskbecker' },
  {
    icon: 'fa-brands fa-discord',
    href: 'https://www.discord.com/users/442333264364175361',
  },
  {
    icon: 'fa-brands fa-linkedin',
    href: 'https://www.linkedin.com/in/jameskbecker/',
  },
  { icon: 'fa-solid fa-envelope', href: 'mailto:work@jameskbecker.com' },
];

const ContactGrid = () => (
  <StyledContactGrid>
    {contactData.map((d: any, i: number) => {
      console.log(d.icon);
      return (
        <a key={i} href={d.href} target="-1">
          <FontAwesomeIcon icon={d.icon} color="#000000" />
        </a>
      );
    })}
  </StyledContactGrid>
);

export default ContactGrid;
