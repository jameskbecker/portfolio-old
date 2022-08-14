import { ContactIcon } from './styles';

const ContactButton = (props: any) => (
  <a href={props.href} target="-1">
    <ContactIcon icon={props.icon} />
  </a>
);

export default ContactButton;
