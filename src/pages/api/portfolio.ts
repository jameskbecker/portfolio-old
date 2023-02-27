// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<any[]>) {
  res.status(200).json([
    {
      name: 'KU Project Manager',
      tags: ['Frontend', 'Backend', 'Design'],
      image: '/kupm.png',
      alt: 'Screenshot of KU Project Manager',
      timeframe: 'September 2021 - April 2022',
      description:
        'A CRUD web application to help students manage their university work. This was made as my final year project as part of my university coursework. It uses React and is written in TypeScript.',
    },
    {
      name: 'NFT Automation',
      tags: ['Frontend'],
      image: '/nft-automation.png',
      timeframe: 'December 2021 - January 2022',
      alt: 'Screenshot of NFT Automation',
      description: `This project involved creating a React front end based on a provided design. It needed to be done in a way where it was ready to be plugged into the back end.

        The project involved several complex tasks such as creating dynamic charts and performant lists.`,
    },

    {
      name: 'ProsperAIO',
      tags: ['Frontend', 'Backend', 'Design' /*'R. Engineering'*/],
      image: '/prosperaio.png',
      alt: 'Screenshot of Prosper AIO',
      timeframe: 'March 2018 - May 2021',
      description: `This was my first big side project. It played a key role in developing both my initial knowledge and passion for web development.

      It taught me a lot about how the web works and involved making requests to various servers. Working on this project also gave me a thorough understanding of JavaScript, my core programming language.`,
    },
  ]);
}
