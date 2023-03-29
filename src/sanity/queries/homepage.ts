import { sanityClient } from './../sanity.server';

export interface HomepageItemsTypes {
  youtubePlaylistId: string;
} 

const homepageItems = `
  youtubePlaylistId
`;

export const getHomepageContent = async (): Promise<HomepageItemsTypes> => {
  const data: HomepageItemsTypes[] = await sanityClient(false).fetch(`*[_type == "homepage"]{${homepageItems}}`); 
  if (!data || !data[0]) {
    throw new Error('Homepage content not found');
  }
  
  return data[0];
}