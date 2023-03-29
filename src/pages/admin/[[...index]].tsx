import config from "../../sanity/sanity.config"
import Head from 'next/head'
import {NextStudio} from 'next-sanity/studio'
import {NextStudioHead} from 'next-sanity/studio/head'


export default function StudioPage() {
  return (
    <>
      <Head>
        <NextStudioHead />
      </Head>
      <NextStudio config={config} />
    </>
  )
}