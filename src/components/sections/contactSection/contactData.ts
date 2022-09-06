type ContactData = {
  label: string;
  href: string;
  delay: number;
};

const contactData: ContactData[] = [
  {
    label: 'Email',
    href: 'mailto:work@jameskbecker.com',
    delay: 0,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jameskbecker/',
    delay: 0.2,
  },
  {
    label: 'Discord',
    href: 'https://www.discord.com/users/442333264364175361',
    delay: 0.4,
  },
  {
    label: 'Github',
    href: 'https://github.com/jameskbecker',
    delay: 0.6,
  },
];

export default contactData;
