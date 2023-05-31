import ContactGrid from '@/components/ContactSection/ContactGrid';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="box-border flex h-screen flex-col items-center justify-evenly overflow-hidden bg-zinc-100 px-8 dark:bg-zinc-900"
    >
      <h1 className="w-full text-center text-5xl uppercase text-zinc-900 dark:text-zinc-100 lg:text-6xl">
        Have a project in mind?
      </h1>
      <h3 className="lg:4xl w-full  text-center text-3xl font-light text-zinc-700 opacity-70 dark:text-zinc-300">
        I&apos;d love to hear about it!
      </h3>
      <ContactGrid />
    </section>
  );
};

export default ContactSection;
