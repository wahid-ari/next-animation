import Head from 'next/head'
import Navbar from '@components/Navbar';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Jump from 'react-reveal/Jump';
import Flash from 'react-reveal/Flash';
import Wobble from 'react-reveal/Wobble';
import Code from '@components/Code';

export default function Aos() {

  return (
    <>
      <Head>
        <title>React Reveal | Next Animation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 ">
          <h1 className="dark:text-white text-2xl font-semibold mb-8">React Reveal</h1>

          <div className="dark:text-gray-100 text-xl space-y-3">
            <Fade left>
              <h1>React Reveal Fade</h1>
            </Fade>
            <Flip left>
              <h1>React Reveal Flip</h1>
            </Flip>
            <Rotate top left>
              <h1>React Reveal Rotate</h1>
            </Rotate>
            <Zoom>
              <h1>React Reveal Zoom</h1>
            </Zoom>
            <Bounce>
              <h1>React Reveal Bounce</h1>
            </Bounce>
            <Jump>
              <h1>React Reveal Jump</h1>
            </Jump>
            <Flash>
              <h1>React Reveal Flash</h1>
            </Flash>
            <Wobble>
              <h1>React Reveal Wobble</h1>
            </Wobble>
          </div>

          <Code code={`import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Jump from 'react-reveal/Jump';
import Flash from 'react-reveal/Flash';
import Wobble from 'react-reveal/Wobble';

<Fade left>
  <h1>React Reveal Fade</h1>
</Fade>
<Flip left>
  <h1>React Reveal Flip</h1>
</Flip>
<Rotate top left>
  <h1>React Reveal Rotate</h1>
</Rotate>
<Zoom>
  <h1>React Reveal Zoom</h1>
</Zoom>
<Bounce>
  <h1>React Reveal Bounce</h1>
</Bounce>
<Jump>
  <h1>React Reveal Jump</h1>
</Jump>
<Flash>
  <h1>React Reveal Flash</h1>
</Flash>
<Wobble>
  <h1>React Reveal Wobble</h1>
</Wobble>`}/>

        </div>
      </main >
    </>
  )
}
