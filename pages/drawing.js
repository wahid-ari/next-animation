import Head from 'next/head'
import Navbar from '@components/Navbar';
import { motion } from "framer-motion";
import Code from '@components/Code';

export default function Home() {

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  return (
    <>
      <Head>
        <title>SVG Line Drawing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 ">
          <h1 className="dark:text-white text-2xl font-semibold mb-2">SVG Line Drawing</h1>

          <h4 className="dark:text-white font-medium text-xl mt-10 mb-2">SVG line drawing</h4>
          <motion.svg
            width="200"
            height="200"
            viewBox="0 0 600 600"
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              stroke="#ff0055"
              variants={draw}
              custom={1}
            />
            <motion.line
              x1="220"
              y1="30"
              x2="360"
              y2="170"
              stroke="#00cc88"
              variants={draw}
              custom={2}
            />
            <motion.line
              x1="220"
              y1="170"
              x2="360"
              y2="30"
              stroke="#00cc88"
              variants={draw}
              custom={2.5}
            />
            <motion.rect
              width="140"
              height="140"
              x="410"
              y="30"
              rx="20"
              stroke="#0099ff"
              variants={draw}
              custom={3}
            />
          </motion.svg>
          <Code code={`import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

<motion.svg
  width="200"
  height="200"
  viewBox="0 0 600 600"
  initial="hidden"
  animate="visible"
>
  <motion.circle
    cx="100"
    cy="100"
    r="80"
    stroke="#ff0055"
    variants={draw}
    custom={1}
  />
  <motion.line
    x1="220"
    y1="30"
    x2="360"
    y2="170"
    stroke="#00cc88"
    variants={draw}
    custom={2}
  />
  <motion.line
    x1="220"
    y1="170"
    x2="360"
    y2="30"
    stroke="#00cc88"
    variants={draw}
    custom={2.5}
  />
  <motion.rect
    width="140"
    height="140"
    x="410"
    y="30"
    rx="20"
    stroke="#0099ff"
    variants={draw}
    custom={3}
  />
</motion.svg>

<style jsx global>{'
  circle,
  rect,
  line {
    stroke-width: 10px;
    stroke-linecap: round;
    fill: transparent;
  }
'}
</style>`} />

        </div>
      </main >
      <style jsx global>{`
        circle,
        rect,
        line {
          stroke-width: 10px;
          stroke-linecap: round;
          fill: transparent;
        }
      `}
      </style>
    </>

  )
}