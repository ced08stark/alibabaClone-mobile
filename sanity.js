import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const client = createClient({
  projectId: 'v2ho1e4p',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-03-02',
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);



export default client;
