import { env } from "~/env.mjs";


export const sanityClientConfig = {
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: typeof document !== 'undefined' && process.env.NODE_ENV === 'production',
  apiVersion: '2021-06-17',
}