import Head from 'next/head'
import Navbar from '@components/Navbar';
import Code from '@components/Code';
import Link from 'next/link';

export default function Scroll() {
  return (
    <>
      <Head>
        <title>Other</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4">
          {/* <h1 className="dark:text-white text-2xl font-semibold">Other</h1> */}

          <ul className="space-y-2">
            <li>
              <Link href="/" className="dark:text-white underlined inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link href="other" className="dark:text-white underlined inline-block">
                Other
              </Link>
            </li>
          </ul>

          <Code code={`<ul className="space-y-2">
<li>
  <Link href="/" className="dark:text-white underlined inline-block">
    Home
  </Link>
</li>
<li>
  <Link href="other" className="dark:text-white underlined inline-block">
    Other
  </Link>
</li>
</ul>`} />
          
          <Code code={`.underlined {
  position: relative;
  text-decoration: none !important;
  white-space: nowrap;
}

.underlined:focus {
  outline: none;
  text-decoration: none !important;
}

.underlined:after {
  content: '';
  height: 2px;
  transform: scaleX(0);
  transition: transform 0.25s ease;
  transform-origin: left;
  left: 0;
  bottom: -4px;
  width: 100%;
  display: block;
  position: absolute;
}

.underlined:hover:after,
.underlined:focus:after,
.active.underlined:after {
  background-color: currentColor;
  transform: scaleX(1);
}

@media (prefers-reduced-motion) {
  .underlined:after {
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  .underlined:hover:after,
  .underlined:focus:after,
  .active.underlined:after {
    opacity: 1;
  }
}`} />

        </div>
      </main >
    </>
  )
}