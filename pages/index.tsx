import Head from 'next/head';
import Header from '../components/Header';
import VideoGenerator from '../components/VideoGenerator';
import VideoList from '../components/VideoList';

export default function Home() {
  return (
    <>
      <Head>
        <title>PromptFlow Video - Create AI Videos for Free</title>
        <meta
          name="description"
          content="Create stunning AI videos in seconds with PromptFlow. Free, fast, and easy to use."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="PromptFlow Video" />
        <meta
          property="og:description"
          content="Create AI videos from text prompts"
        />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        <Header />

        <VideoGenerator />

        <VideoList />
      </main>
    </>
  );
}
