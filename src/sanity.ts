import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-03-19',
});

export default client;
