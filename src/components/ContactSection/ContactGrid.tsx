import ContactButton from './ContactButton';
import contactData from './contactData';

const ContactContent = () => (
  <div className="box-border grid w-auto grid-cols-2 grid-rows-2 items-center gap-16 md:flex md:grid-cols-4 md:justify-center md:gap-12">
    {contactData.map((d: any, i: number) => {
      return <ContactButton key={i} {...d} />;
    })}
  </div>
);

export default ContactContent;
