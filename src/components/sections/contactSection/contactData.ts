type ContactData = {
  icon: string;
  href: string;
  delay: number;
};

const contactData: ContactData[] = [
  {
    icon: 'fa-brands fa-github',
    href: 'https://github.com/jameskbecker',
    delay: 0,
  },
  {
    icon: 'fa-brands fa-discord',
    href: 'https://www.discord.com/users/442333264364175361',
    delay: 0.2,
  },
  {
    icon: 'fa-brands fa-linkedin',
    href: 'https://www.linkedin.com/in/jameskbecker/',
    delay: 0.4,
  },
  {
    icon: 'fa-solid fa-envelope',
    href: 'mailto:work@jameskbecker.com',
    delay: 0.6,
  },
];

export default contactData;
