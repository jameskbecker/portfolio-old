import ContactButton from './ContactButton';
import contactData from './contactData';

const ContactContent = () => (
  <div className="box-border grid w-auto grid-cols-2 grid-rows-2 items-stretch justify-center gap-16 md:flex md:w-full md:gap-12 lg:flex-initial lg:flex-row">
    {contactData.map((d: any, i: number) => {
      return <ContactButton key={i} {...d} />;
    })}
  </div>
);

export default ContactContent;
