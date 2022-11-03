import Head from 'next/head'
import Navbar from '@components/Navbar';
import { motion, useTime, useTransform, useMotionValue, useCycle } from "framer-motion";
import Code from '@components/Code';
import { useState, useEffect } from 'react';

export default function Home() {
  const replies = [
    {
      id: '1',
      photo: '🐶',
    },
    {
      id: '2',
      photo: '🐱',
    },
    {
      id: '3',
      photo: '🐰',
    },
    {
      id: '4',
      photo: '🐭',
    },
    {
      id: '5',
      photo: '🐹',
    },
  ];

  const itemsA = [1, 2, 3, 4]
  const itemsB = [3, 1, 4, 2]
  const itemsC = [4, 3, 2, 1]
  const itemsD = [2, 4, 1, 3]
  const colors = ["#f44", "#3f0", "#fb0", "#0ef"]
  const [items, setItems] = useCycle(itemsA, itemsB, itemsC, itemsD)
  useEffect(() => {
    setTimeout(() => setItems(), 1000)
  }, [items])

  const [current, cycle] = useCycle("off", "on")

  const x = useMotionValue(200)
  const y = useMotionValue(200)
  const rotateX = useTransform(y, [0, 400], [45, -45])
  const rotateY = useTransform(x, [0, 400], [-45, 45])
  function handleMouse(event) {
    x.set(event.pageX)
    y.set(event.pageY)
  }

  const [rotateSpeed, setRotateSpeed] = useState(8000)
  const [rotateRight, setRotateRight] = useState(true)
  const time = useTime();
  const rotate = useTransform(time, [0, rotateSpeed], [rotateRight ? 0 : 360, rotateRight ? 360 : 0], { clamp: false });

  return (
    <>
      <Head>
        <title>Next Animation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 overflow-hidden">
          <h1 className="dark:text-white text-2xl font-semibold mb-2">Next Animation</h1>

          <div className="flex list-none mt-8">
            {replies.map((reply) => (
              <motion.li
                className="-mr-2"
                key={reply.id}
                whileHover={{
                  scale: 1.1,
                  marginRight: '8px',
                  transition: { ease: 'easeOut' },
                }}
              >
                <div className="h-12 w-12 rounded-full flex items-center justify-center cursor-pointer text-2xl bg-gradient-to-r from-blue-500 to-red-500">
                  <span role="img">
                    {reply.photo}
                  </span>
                </div>
              </motion.li>
            ))}
          </div>
          <Code code={`import { motion, useTime, useTransform, useMotionValue, useCycle } from "framer-motion";

const replies = [
  {
    id: '1',
    photo: '🐶',
  },
  {
    id: '2',
    photo: '🐱',
  },
  {
    id: '3',
    photo: '🐰',
  },
  {
    id: '4',
    photo: '🐭',
  },
  {
    id: '5',
    photo: '🐹',
  },
];

<div className="flex list-none mt-8">
  {replies.map((reply) => (
    <motion.li
      className="-mr-2"
      key={reply.id}
      whileHover={{
        scale: 1.1,
        marginRight: '8px',
        transition: { ease: 'easeOut' },
      }}
    >
      <div className="h-12 w-12 rounded-full flex items-center justify-center cursor-pointer text-2xl bg-gradient-to-r from-blue-500 to-red-500">
        <span role="img">
          {reply.photo}
        </span>
      </div>
    </motion.li>
  ))}
</div>`} />

          <div className="w-24 my-8"
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              gridGap: 10,
            }}
          >
            {items.map((item) => (
              <motion.div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: colors[item - 1],
                }}
                key={item}
                layout
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 25,
                }}
              />
            ))}
          </div>
          <Code code={`import { motion, useTime, useTransform, useMotionValue, useCycle } from "framer-motion";

const itemsA = [1, 2, 3, 4]
const itemsB = [3, 1, 4, 2]
const itemsC = [4, 3, 2, 1]
const itemsD = [2, 4, 1, 3]
const colors = ["#f44", "#3f0", "#fb0", "#0ef"]
const [items, setItems] = useCycle(itemsA, itemsB, itemsC, itemsD)
useEffect(() => {
  setTimeout(() => setItems(), 1000)
}, [items])

<div className="w-24 my-8"
  style={{
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: 10,
  }}
>
  {items.map((item) => (
    <motion.div
      style={{
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: colors[item - 1],
      }}
      key={item}
      layout
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 25,
      }}
    />
  ))}
</div>`} />

          <motion.div
            className="mt-8"
            style={{
              width: 45,
              height: 25,
              borderRadius: 16,
              backgroundColor: "rgba(120,120,128,.2)",
              position: "relative",
              cursor: "pointer",
            }}
            animate={current}
            initial={false}
            onTapStart={cycle}
          >
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 16,
                backgroundColor: "#34C759",
              }}
              variants={{ off: { scale: 0 }, on: { scale: 1 } }}
              transition={{ ease: "easeInOut" }}
            />
            <motion.div
              style={{
                width: 20,
                height: 20,
                borderRadius: 16,
                backgroundColor: "white",
                boxShadow: `0 0 0 0.5px rgba(0,0,0,.04), 
                         0 3px 8px 0 rgba(0,0,0,.15), 
                         0 3px 1px 0 rgba(0,0,0,.06)`,
                position: "absolute",
                top: 2,
                left: 2,
              }}
              variants={{ off: { x: 0 }, on: { x: 20 } }}
              transition={{
                ease: "easeInOut",
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            />
          </motion.div>
          <Code code={`import { motion, useTime, useTransform, useMotionValue, useCycle } from "framer-motion";
          
const [current, cycle] = useCycle("off", "on")

<motion.div
  style={{
    width: 45,
    height: 25,
    borderRadius: 16,
    backgroundColor: "rgba(120,120,128,.2)",
    position: "relative",
    cursor: "pointer",
  }}
  animate={current}
  initial={false}
  onTapStart={cycle}
>
  <motion.div
    style={{
      width: "100%",
      height: "100%",
      borderRadius: 16,
      backgroundColor: "#34C759",
    }}
    variants={{ off: { scale: 0 }, on: { scale: 1 } }}
    transition={{ ease: "easeInOut" }}
  />
  <motion.div
    style={{
      width: 20,
      height: 20,
      borderRadius: 16,
      backgroundColor: "white",
      boxShadow: '0 0 0 0.5px rgba(0,0,0,.04), 
                0 3px 8px 0 rgba(0,0,0,.15), 
                0 3px 1px 0 rgba(0,0,0,.06)',
      position: "absolute",
      top: 2,
      left: 2,
    }}
    variants={{ off: { x: 0 }, on: { x: 20 } }}
    transition={{ 
      ease: "easeInOut",
      type: "spring",
      stiffness: 300,
      damping: 20 }}
  />
</motion.div>`} />

          <motion.div
            className="mt-8 w-52 h-52 rounded-3xl bg-teal-400 shadow-lg flex items-center justify-center text-white text-3xl"
            onMouseMove={handleMouse}
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              perspective: 400,
            }}
          >
            Hover Me
          </motion.div>
          <Code code={`import { motion, useTime, useTransform, useMotionValue, useCycle } from "framer-motion";

const x = useMotionValue(200)
const y = useMotionValue(200)
const rotateX = useTransform(y, [0, 400], [45, -45])
const rotateY = useTransform(x, [0, 400], [-45, 45])
function handleMouse(event) {
  x.set(event.pageX)
  y.set(event.pageY)
}

<motion.div
  className="mt-8 w-52 h-52 rounded-3xl bg-teal-400 shadow-lg"
  style={{
    rotateX: rotateX,
    rotateY: rotateY,
    perspective: 400,
  }}
  onMouseMove={handleMouse}
/>`} />

          <motion.h1
            className="dark:text-white"
            animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.2 }}
          >
            Animation made easy with Framer Motion.
            <br/> use overflow-hidden to fix on mobile
          </motion.h1>
          <Code code={`import { motion, useTime, useTransform, useMotionValue, useCycle } from "framer-motion";
          
<motion.h1
  animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
  transition={{
    duration: 5,
    delay: 0.3,
    ease: [0.5, 0.71, 1, 1.5],
  }}
  initial={{ opacity: 0, scale: 0.5 }}
  whileHover={{ scale: 1.2 }}
>
  Animation made easy with Framer Motion
</motion.h1>`} />

          <h4 className="dark:text-white font-medium text-xl mt-10 mb-2">Translate</h4>
          <motion.div animate={{ x: 20, y: 20 }} className="w-10 h-10 bg-red-500 mb-8" />
          <Code code={`import { motion, useTime, useTransform, useMotionValue, useCycle } from "framer-motion";
          
<motion.div animate={{ x: 20, y: 20 }} className="w-10 h-10 bg-red-500" />`} />

          <h4 className="dark:text-white font-medium text-xl mt-10 mb-2">FadeIn</h4>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="w-10 h-10 bg-blue-500"
          />

          <motion.div
            className="w-10 h-10 bg-yellow-500 mt-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          />

          <motion.div
            className="w-10 h-10 bg-purple-500 mt-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
          />

          <Code code={`import { motion, useTime, useTransform, useMotionValue, useCycle } from "framer-motion";
          
<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ ease: "easeOut", duration: 2 }}
  className="w-10 h-10 bg-blue-500"
/>

<motion.div
  className="w-10 h-10 bg-yellow-500 mt-4"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01]
  }}
/>

<motion.div
  className="w-10 h-10 bg-purple-500 mt-4"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    default: {
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01]
    },
    scale: {
      type: "spring",
      damping: 5,
      stiffness: 100,
      restDelta: 0.001
    }
  }}
/>`} />

          <h4 className="dark:text-white font-medium text-xl mt-10 mb-4">Repeat</h4>
          <motion.div
            className="w-10 h-10 bg-red-500"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
          <Code code={`import { motion, useTime, useTransform, useMotionValue, useCycle } from "framer-motion";
          
<motion.div
  className="w-10 h-10 bg-red-500"
  animate={{
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  }}
  transition={{
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 1
  }}
/>`} />

          <h4 className="dark:text-white font-medium text-xl mt-10 mb-2">Hover</h4>
          <motion.div
            className="w-10 h-10 bg-green-500"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <Code code={`import { motion, useTime, useTransform, useMotionValue, useCycle } from "framer-motion";
          
<motion.div
  className="w-10 h-10 bg-green-500"
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
/>`} />

          <h4 className="dark:text-white font-medium text-xl mt-10 mb-2">Hover Tap Click</h4>
          <motion.div
            className="w-10 h-10 bg-orange-500 mt-4"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          />
          <Code code={`import { motion, useTime, useTransform, useMotionValue, useCycle } from "framer-motion";
          
<motion.div
  className="w-10 h-10 bg-orange-500 mt-4"
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.9 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
/>`} />

          <h4 className="dark:text-white font-medium text-xl mt-10 mb-2">Rotate</h4>

          <motion.svg style={{ rotate }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </motion.svg>

          <motion.svg style={{ rotate }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </motion.svg>

          <motion.div className="absolute mt-5 cursor-pointer" style={{ rotate }}
            onMouseEnter={() => {
              setRotateSpeed(8000)
              setRotateRight(false)
            }}
            onMouseLeave={() => {
              setRotateSpeed(8000)
              setRotateRight(true)
            }}
          >
            <svg height="56" width="56" viewBox="0 0 56 56">
              <path d="M29.465,0.038373A28,28,0,0,1,52.948,40.712L51.166,39.804A26,26,0,0,0,29.361,2.0356Z" className="text-orange-400" fill="currentColor"></path>
              <path d="M51.483,43.250A28,28,0,0,1,4.5172,43.250L6.1946,42.161A26,26,0,0,0,49.805,42.161Z" className="text-teal-400" fill="currentColor"></path>
              <path d="M3.0518,40.712A28,28,0,0,1,26.535,0.038373L26.639,2.0356A26,26,0,0,0,4.8338,39.804Z" className="text-blue-400" fill="currentColor"></path>
            </svg>
          </motion.div>

          <div className="flex items-center space-x-4 mt-20">
            <motion.svg className="mt-4" style={{ rotate }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M25.6545 0.00867176C32.1467 0.178676 38.3179 2.86842 42.8619 7.50852C47.4058 12.1486 49.9657 18.3749 49.9997 24.8692C50.0337 31.3636 47.5391 37.6163 43.044 42.3037C38.549 46.9911 32.4062 49.7453 25.9161 49.9833L25.7787 46.2358C31.2953 46.0336 36.5166 43.6925 40.3374 39.7082C44.1583 35.7238 46.2786 30.409 46.2497 24.8888C46.2208 19.3686 44.0449 14.0763 40.1826 10.1323C36.3202 6.18818 31.0747 3.90189 25.5563 3.75739L25.6545 0.00867176Z" fill="#06B6D4" />
              <path d="M24.3456 49.9915C17.8534 49.8215 11.6821 47.1318 7.13822 42.4917C2.5943 37.8516 0.0343831 31.6254 0.000377048 25.131C-0.033629 18.6367 2.46094 12.384 6.95602 7.69653C11.4511 3.0091 17.5939 0.254879 24.0839 0.0168955L24.2213 3.76438C18.7048 3.96666 13.4834 6.30775 9.66262 10.2921C5.84181 14.2764 3.72142 19.5912 3.75033 25.1114C3.77923 30.6316 5.95516 35.9239 9.81749 39.868C13.6798 43.812 18.9254 46.0983 24.4438 46.2428L24.3456 49.9915Z" fill="#10B981" />
            </motion.svg>

            <motion.svg className="mt-4" style={{ rotate }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M35.4427 2.28545C39.2687 4.0444 42.5884 6.7413 45.0938 10.1259C47.5992 13.5105 49.209 17.4731 49.774 21.646C50.3389 25.8189 49.8407 30.0669 48.3254 33.9958C46.8102 37.9247 44.3271 41.4072 41.1065 44.1202L38.6905 41.2522C41.428 38.9461 43.5387 35.986 44.8266 32.6464C46.1146 29.3068 46.5381 25.696 46.0579 22.1491C45.5777 18.6021 44.2093 15.2339 42.0797 12.357C39.9501 9.4801 37.1284 7.18774 33.8763 5.69263L35.4427 2.28545Z" fill="#06B6D4" />
              <path d="M39.6913 45.2279C36.2841 47.7025 32.3071 49.2763 28.1292 49.8034C23.9513 50.3305 19.708 49.7937 15.793 48.2429C11.878 46.6921 8.41815 44.1774 5.73451 40.9324C3.05087 37.6873 1.23041 33.817 0.442037 29.6804L4.12573 28.9784C4.79584 32.4944 6.34324 35.7842 8.62433 38.5425C10.9054 41.3008 13.8463 43.4382 17.1741 44.7564C20.5018 46.0746 24.1086 46.5309 27.6598 46.0829C31.211 45.6349 34.5915 44.2971 37.4876 42.1937L39.6913 45.2279Z" fill="#10B981" />
              <path d="M0.136304 27.607C-0.302823 23.419 0.323044 19.1879 1.95583 15.3064C3.58861 11.4248 6.17541 8.01862 9.47618 5.4038C12.7769 2.78898 16.6847 1.05029 20.8369 0.349063C24.9891 -0.352164 29.2511 0.00679652 33.2275 1.39264L31.9934 4.93374C28.6135 3.75578 24.9907 3.45066 21.4614 4.0467C17.932 4.64275 14.6104 6.12064 11.8047 8.34323C8.9991 10.5658 6.80032 13.4611 5.41245 16.7604C4.02459 20.0597 3.4926 23.6562 3.86586 27.216L0.136304 27.607Z" fill="#EF4444" />
            </motion.svg>

            <motion.svg className="mt-4" style={{ rotate }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M42.6777 7.32233C47.1739 11.8186 49.7879 17.8592 49.9877 24.2147C50.1874 30.5703 47.9578 36.7631 43.7528 41.5328L40.9399 39.0529C44.5142 34.9986 46.4093 29.7347 46.2395 24.3325C46.0697 18.9303 43.8478 13.7958 40.026 9.97398L42.6777 7.32233Z" fill="#06B6D4" />
              <path d="M42.6777 42.6777C38.1814 47.1739 32.1408 49.7879 25.7853 49.9877C19.4297 50.1874 13.2369 47.9578 8.4672 43.7528L10.9471 40.9399C15.0014 44.5142 20.2653 46.4093 25.6675 46.2395C31.0697 46.0697 36.2042 43.8478 40.026 40.026L42.6777 42.6777Z" fill="#10B981" />
              <path d="M7.32233 42.6777C2.82607 38.1814 0.212065 32.1408 0.0123357 25.7853C-0.187393 19.4297 2.04216 13.2369 6.24723 8.46719L9.06015 10.9471C5.48584 15.0014 3.59072 20.2653 3.76049 25.6675C3.93025 31.0697 6.15216 36.2042 9.97398 40.026L7.32233 42.6777Z" fill="#EF4444" />
              <path d="M7.32233 7.32233C11.8186 2.82607 17.8592 0.212066 24.2147 0.0123359C30.5703 -0.187394 36.7631 2.04216 41.5328 6.24723L39.0529 9.06014C34.9986 5.48584 29.7347 3.59071 24.3325 3.76049C18.9303 3.93026 13.7958 6.15216 9.97398 9.97398L7.32233 7.32233Z" fill="#8B5CF6" />
            </motion.svg>

            <motion.svg className="mt-4" style={{ rotate }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M48.7522 17.2004C50.3157 21.9617 50.4121 27.083 49.029 31.8998C47.6459 36.7166 44.8471 41.0065 40.9957 44.213L38.5963 41.331C41.87 38.6055 44.249 34.9591 45.4247 30.8648C46.6003 26.7705 46.5183 22.4174 45.1893 18.3703L48.7522 17.2004Z" fill="#10B981" />
              <path d="M39.7071 45.2163C35.6546 48.1645 30.8096 49.8267 25.8007 49.9872C20.7919 50.1477 15.8503 48.7991 11.6174 46.1165L13.6248 42.949C17.2228 45.2293 21.4231 46.3755 25.6806 46.2391C29.9382 46.1027 34.0564 44.6898 37.5011 42.1839L39.7071 45.2163Z" fill="#EF4444" />
              <path d="M10.3097 45.2286C6.25474 42.2838 3.17838 38.1883 1.4798 33.4735C-0.218778 28.7587 -0.461166 23.6422 0.784086 18.788L4.41647 19.7198C3.35801 23.8459 3.56404 28.1949 5.00783 32.2025C6.45162 36.2101 9.06653 39.6912 12.5133 42.1943L10.3097 45.2286Z" fill="#F59E0B" />
              <path d="M1.2021 17.341C2.7374 12.5706 5.67098 8.37161 9.6222 5.28901C13.5734 2.20641 18.3599 0.382455 23.3605 0.053814L23.6065 3.79574C19.3559 4.07509 15.2874 5.62545 11.9289 8.24566C8.57033 10.8659 6.07679 14.435 4.77178 18.4899L1.2021 17.341Z" fill="#8B5CF6" />
              <path d="M25 0C30.0114 5.97609e-08 34.9072 1.50614 39.0521 4.32299C43.197 7.13983 46.3996 11.1374 48.2444 15.7969L44.7578 17.1774C43.1896 13.2168 40.4674 9.81886 36.9443 7.42454C33.4211 5.03022 29.2597 3.75 25 3.75L25 0Z" fill="#06B6D4" />
            </motion.svg>

            <motion.svg className="mt-4" style={{ rotate }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M46.9704 13.0711C48.8529 16.5383 49.8882 20.4017 49.9914 24.3456C50.0947 28.2896 49.2631 32.2019 47.5646 35.7628L44.1799 34.1484C45.6236 31.1216 46.3305 27.7961 46.2427 24.4438C46.1549 21.0915 45.275 17.8075 43.6749 14.8605L46.9704 13.0711Z" fill="#F97316" />
              <path d="M46.3249 38.048C44.2658 41.4133 41.4395 44.2435 38.077 46.3072C34.7145 48.3709 30.9113 49.6094 26.9785 49.9217L26.6817 46.1834C30.0246 45.918 33.2573 44.8652 36.1154 43.1111C38.9735 41.357 41.3759 38.9513 43.1262 36.0908L46.3249 38.048Z" fill="#06B6D4" />
              <path d="M24.3456 49.9915C20.4017 49.8882 16.5382 48.853 13.071 46.9705C9.60386 45.088 6.63146 42.4116 4.39684 39.1602L7.48731 37.0362C9.38674 39.7999 11.9133 42.0748 14.8604 43.6749C17.8075 45.2751 21.0914 46.155 24.4437 46.2428L24.3456 49.9915Z" fill="#FACC15" />
              <path d="M3.02956 36.929C1.14705 33.4619 0.111834 29.5984 0.00855906 25.6545C-0.0947159 21.7106 0.736881 17.7982 2.43536 14.2373L5.82005 15.8517C4.37635 18.8785 3.66949 22.204 3.75727 25.5563C3.84506 28.9087 4.72499 32.1926 6.32513 35.1397L3.02956 36.929Z" fill="#EF4444" />
              <path d="M3.68399 11.9376C5.74538 8.57372 8.57364 5.74546 11.9375 3.68407C15.3014 1.62268 19.1054 0.386684 23.0385 0.0771427L23.3327 3.81558C19.9896 4.07869 16.7562 5.12929 13.8969 6.88147C11.0376 8.63366 8.63357 11.0377 6.88139 13.897L3.68399 11.9376Z" fill="#10B981" />
              <path d="M25.6544 0.00864337C29.5983 0.111919 33.4618 1.14713 36.929 3.02965C40.3961 4.91216 43.3685 7.58853 45.6031 10.8399L42.5127 12.9639C40.6132 10.2003 38.0867 7.92535 35.1396 6.32521C32.1925 4.72508 28.9086 3.84514 25.5563 3.75736L25.6544 0.00864337Z" fill="#8B5CF6" />
            </motion.svg>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <motion.svg className="mt-4" style={{ rotate }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M25.6545 0.00867176C32.1467 0.178676 38.3179 2.86842 42.8619 7.50852C47.4058 12.1486 49.9657 18.3749 49.9997 24.8692C50.0337 31.3636 47.5391 37.6163 43.044 42.3037C38.549 46.9911 32.4062 49.7453 25.9161 49.9833L25.8245 47.485C31.6656 47.2708 37.1941 44.792 41.2396 40.5733C45.2852 36.3546 47.5303 30.7272 47.4997 24.8823C47.4691 19.0374 45.1652 13.4338 41.0757 9.25768C36.9861 5.08159 31.432 2.66082 25.589 2.50782L25.6545 0.00867176Z" fill="#06B6D4" />
              <path d="M24.3456 49.9915C17.8534 49.8215 11.6821 47.1318 7.13822 42.4917C2.5943 37.8516 0.0343831 31.6254 0.000377048 25.131C-0.033629 18.6367 2.46094 12.384 6.95602 7.69653C11.4511 3.0091 17.5939 0.254879 24.0839 0.0168955L24.1755 2.51522C18.3345 2.7294 12.806 5.2082 8.76042 9.42689C4.71485 13.6456 2.46974 19.273 2.50034 25.1179C2.53095 30.9628 4.83487 36.5664 8.9244 40.7425C13.0139 44.9186 18.5681 47.3394 24.4111 47.4924L24.3456 49.9915Z" fill="#10B981" />
            </motion.svg>

            <motion.svg className="mt-4" style={{ rotate }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M35.4427 2.28545C39.2687 4.0444 42.5884 6.7413 45.0938 10.1259C47.5992 13.5105 49.209 17.4731 49.774 21.646C50.3389 25.8189 49.8407 30.0669 48.3254 33.9958C46.8102 37.9247 44.3271 41.4072 41.1065 44.1202L39.4958 42.2082C42.3944 39.7665 44.6292 36.6322 45.9929 33.0962C47.3566 29.5602 47.805 25.737 47.2966 21.9814C46.7881 18.2258 45.3393 14.6594 43.0844 11.6133C40.8296 8.56717 37.8418 6.13996 34.3984 4.55691L35.4427 2.28545Z" fill="#06B6D4" />
              <path d="M39.6913 45.2279C36.2841 47.7025 32.3071 49.2763 28.1292 49.8034C23.9513 50.3305 19.708 49.7937 15.793 48.2429C11.878 46.6921 8.41815 44.1774 5.73451 40.9324C3.05087 37.6873 1.23041 33.817 0.442037 29.6804L2.89783 29.2124C3.60737 32.9353 5.24578 36.4186 7.66106 39.3391C10.0763 42.2597 13.1902 44.5229 16.7137 45.9186C20.2372 47.3143 24.0562 47.7974 27.8163 47.3231C31.5764 46.8487 35.1557 45.4322 38.2221 43.2051L39.6913 45.2279Z" fill="#10B981" />
              <path d="M0.136304 27.607C-0.302823 23.419 0.323044 19.1879 1.95583 15.3064C3.58861 11.4248 6.17541 8.01862 9.47618 5.4038C12.7769 2.78898 16.6847 1.05029 20.8369 0.349063C24.9891 -0.352164 29.2511 0.00679652 33.2275 1.39264L32.4048 3.75337C28.826 2.50612 24.9902 2.18305 21.2532 2.81416C17.5163 3.44526 13.9992 5.01009 11.0286 7.36342C8.05787 9.71676 5.72975 12.7824 4.26025 16.2757C2.79074 19.7691 2.22746 23.5771 2.62267 27.3463L0.136304 27.607Z" fill="#EF4444" />
            </motion.svg>

            <motion.svg className="mt-4" style={{ rotate }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M42.6777 7.32233C47.1739 11.8186 49.7879 17.8592 49.9877 24.2147C50.1874 30.5703 47.9578 36.7631 43.7528 41.5328L41.8775 39.8795C45.6621 35.5868 47.6687 30.0132 47.4889 24.2933C47.3091 18.5733 44.9565 13.1367 40.9099 9.0901L42.6777 7.32233Z" fill="#06B6D4" />
              <path d="M42.6777 42.6777C38.1814 47.1739 32.1408 49.7879 25.7853 49.9877C19.4297 50.1874 13.2369 47.9578 8.4672 43.7528L10.1205 41.8775C14.4132 45.6621 19.9868 47.6687 25.7067 47.4889C31.4267 47.3091 36.8633 44.9565 40.9099 40.9099L42.6777 42.6777Z" fill="#10B981" />
              <path d="M7.32233 42.6777C2.82607 38.1814 0.212065 32.1408 0.0123357 25.7853C-0.187393 19.4297 2.04216 13.2369 6.24723 8.46719L8.12251 10.1205C4.33795 14.4132 2.33135 19.9868 2.5111 25.7067C2.69086 31.4267 5.04346 36.8633 9.0901 40.9099L7.32233 42.6777Z" fill="#EF4444" />
              <path d="M7.32233 7.32233C11.8186 2.82607 17.8592 0.212066 24.2147 0.0123359C30.5703 -0.187394 36.7631 2.04216 41.5328 6.24723L39.8795 8.12251C35.5868 4.33794 30.0132 2.33135 24.2933 2.5111C18.5733 2.69086 13.1367 5.04346 9.0901 9.0901L7.32233 7.32233Z" fill="#8B5CF6" />
            </motion.svg>

            <motion.svg className="mt-4" style={{ rotate }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M48.7522 17.2004C50.3157 21.9617 50.4121 27.083 49.029 31.8998C47.6459 36.7166 44.8471 41.0065 40.9957 44.213L39.3961 42.2917C42.8624 39.4059 45.3813 35.5449 46.6261 31.2098C47.8709 26.8747 47.7841 22.2655 46.377 17.9803L48.7522 17.2004Z" fill="#10B981" />
              <path d="M39.7071 45.2163C35.6546 48.1645 30.8096 49.8267 25.8007 49.9872C20.7919 50.1477 15.8503 48.7991 11.6174 46.1165L12.9557 44.0048C16.7653 46.4192 21.2127 47.6329 25.7207 47.4885C30.2286 47.344 34.5892 45.848 38.2364 43.1947L39.7071 45.2163Z" fill="#EF4444" />
              <path d="M10.3097 45.2286C6.25474 42.2838 3.17838 38.1883 1.4798 33.4735C-0.218778 28.7587 -0.461166 23.6422 0.784086 18.788L3.20568 19.4092C2.08495 23.778 2.3031 28.3828 3.83182 32.6262C5.36054 36.8695 8.12927 40.5554 11.7787 43.2057L10.3097 45.2286Z" fill="#F59E0B" />
              <path d="M1.2021 17.341C2.7374 12.5706 5.67098 8.37161 9.6222 5.28901C13.5734 2.20641 18.3599 0.382455 23.3605 0.053814L23.5245 2.54843C19.0239 2.84421 14.7161 4.48577 11.16 7.26011C7.60388 10.0344 4.96366 13.8135 3.58189 18.1069L1.2021 17.341Z" fill="#8B5CF6" />
              <path d="M25 0C30.0114 5.97609e-08 34.9072 1.50614 39.0521 4.32299C43.197 7.13983 46.3996 11.1374 48.2444 15.7969L45.92 16.7172C44.2596 12.5236 41.3773 8.92585 37.6469 6.39069C33.9165 3.85552 29.5103 2.5 25 2.5L25 0Z" fill="#06B6D4" />
            </motion.svg>

            <motion.svg className="mt-4" style={{ rotate }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M46.9704 13.0711C48.8529 16.5383 49.8882 20.4017 49.9914 24.3456C50.0947 28.2896 49.2631 32.2019 47.5646 35.7628L45.3082 34.6866C46.8368 31.4817 47.5852 27.9606 47.4923 24.4111C47.3993 20.8616 46.4676 17.3844 44.7734 14.264L46.9704 13.0711Z" fill="#F97316" />
              <path d="M46.3249 38.048C44.2658 41.4133 41.4395 44.2435 38.077 46.3072C34.7145 48.3709 30.9113 49.6094 26.9785 49.9217L26.7806 47.4295C30.3202 47.1485 33.7431 46.0338 36.7693 44.1765C39.7955 42.3191 42.3392 39.772 44.1924 36.7432L46.3249 38.048Z" fill="#06B6D4" />
              <path d="M24.3456 49.9915C20.4017 49.8882 16.5382 48.853 13.071 46.9705C9.60386 45.088 6.63146 42.4116 4.39684 39.1602L6.45715 37.7442C8.46831 40.6705 11.1435 43.0792 14.2639 44.7735C17.3844 46.4677 20.8615 47.3994 24.411 47.4924L24.3456 49.9915Z" fill="#FACC15" />
              <path d="M3.02956 36.929C1.14705 33.4619 0.111834 29.5984 0.00855906 25.6545C-0.0947159 21.7106 0.736881 17.7982 2.43536 14.2373L4.69182 15.3136C3.16319 18.5184 2.41475 22.0395 2.5077 25.5891C2.60065 29.1386 3.53234 32.6157 5.22661 35.7361L3.02956 36.929Z" fill="#EF4444" />
              <path d="M3.68399 11.9376C5.74538 8.57372 8.57364 5.74546 11.9375 3.68407C15.3014 1.62268 19.1054 0.386684 23.0385 0.0771427L23.2347 2.56944C19.6949 2.84802 16.2713 3.96042 13.2438 5.81567C10.2163 7.67092 7.67084 10.2164 5.81559 13.2439L3.68399 11.9376Z" fill="#10B981" />
              <path d="M25.6544 0.00864337C29.5983 0.111919 33.4618 1.14713 36.929 3.02965C40.3961 4.91216 43.3685 7.58853 45.6031 10.8399L43.5428 12.2559C41.5317 9.32968 38.8565 6.92096 35.7361 5.22669C32.6156 3.53243 29.1385 2.60073 25.589 2.50779L25.6544 0.00864337Z" fill="#8B5CF6" />
            </motion.svg>
          </div>

          <motion.div className="w-10 h-10 bg-red-500 mt-10" style={{ rotate }} />
          <Code code={`import { useState } from 'react';
import { motion, useTime, useTransform, useMotionValue, useCycle } from "framer-motion";
          
const [rotateSpeed, setRotateSpeed] = useState(8000)
const [rotateRight, setRotateRight] = useState(true)
const time = useTime();
const rotate = useTransform(time, [0, rotateSpeed], [rotateRight ? 0 : 360, rotateRight ? 360 : 0], { clamp: false });

<motion.div className="absolute mt-5 cursor-pointer" style={{ rotate }}
  onMouseEnter={() => {
    setRotateSpeed(8000)
    setRotateRight(false)
  }}
  onMouseLeave={() => {
    setRotateSpeed(8000)
    setRotateRight(true)
  }}
>
  <svg height="56" width="56" viewBox="0 0 56 56">
    <path d="M29.465,0.038373A28,28,0,0,1,52.948,40.712L51.166,39.804A26,26,0,0,0,29.361,2.0356Z" className="text-orange-400" fill="currentColor"></path>
    <path d="M51.483,43.250A28,28,0,0,1,4.5172,43.250L6.1946,42.161A26,26,0,0,0,49.805,42.161Z" className="text-teal-400" fill="currentColor"></path>
    <path d="M3.0518,40.712A28,28,0,0,1,26.535,0.038373L26.639,2.0356A26,26,0,0,0,4.8338,39.804Z" className="text-blue-400" fill="currentColor"></path>
  </svg>
</motion.div>

<motion.div className="w-10 h-10 bg-red-500 mt-24" style={{ rotate }} />`} />

        </div>
      </main >
    </>

  )
}