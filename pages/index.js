import Head from 'next/head'
import MessageBoard from '../components/MessageBoard';
import ky from 'ky-universal';

export async function getStaticProps() {
  let jsonData;

  try {
    jsonData = await ky(`${process.env.NEXT_PUBLIC_HOST}/api/messages`).json();
  } catch (err) {
    console.log('API Error: ' + err);
  }

  return {
    props: {
      jsonData
    }
  }
}

export default function Home({jsonData}) {
  return(
    <MessageBoard jsonData={jsonData}/>
  )
}