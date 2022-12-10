import Head from 'next/head'
import Navbar from '@components/Navbar';
import Code from '@components/Code';
import { Tab } from "@headlessui/react";
import { AnimateSharedLayout, motion } from "framer-motion";

// https://github.com/mattrothenberg/tailwind-fancy-tab
function FancyTab({ children, accentColor }) {
  return (
    <Tab as="div" className="w-full focus:outline-none group">
      {({ selected }) => (
        <button className="relative py-4 dark:text-white focus:outline-none uppercase text-lg w-full">
          {children}
          {selected && (
            <motion.div
              className="w-full absolute left-0 right-0 z-10 rounded-full h-[2px] top-0"
              layoutId="underline"
              initial={false}
              animate={{
                background: accentColor,
                boxShadow: `0 14px 30px 1px ${accentColor}, 0 4px 12px ${accentColor}, 0 1px 7px ${accentColor}`,
              }}
            />
          )}</button>
      )}
    </Tab>
  );
}

export default function Scroll() {
  return (
    <>
      <Head>
        <title>Tabs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4">
          <Tab.Group as="div" className="relative border dark:border-neutral-800 rounded">
            <Tab.List className="flex items-center justify-between relative">
              <AnimateSharedLayout>
                <FancyTab accentColor="#ef4444">
                  Home
                </FancyTab>
                <FancyTab accentColor="#a78bfa">
                  About
                </FancyTab>
                <FancyTab accentColor="#6ee7b7">
                  Pricing
                </FancyTab>
                <FancyTab accentColor="#60a5fa">
                  Contact
                </FancyTab>
              </AnimateSharedLayout>
            </Tab.List>
            <Tab.Panels className="dark:text-white p-8">
              <Tab.Panel>Home</Tab.Panel>
              <Tab.Panel>About</Tab.Panel>
              <Tab.Panel>Pricing</Tab.Panel>
              <Tab.Panel>Contact</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>

          <Code code={`import { Tab } from "@headlessui/react";
import { AnimateSharedLayout, motion } from "framer-motion";

// https://github.com/mattrothenberg/tailwind-fancy-tab
function FancyTab({ children, accentColor }) {
  return (
    <Tab as="div" className="w-full focus:outline-none group">
      {({ selected }) => (
        <button className="relative py-4 dark:text-white focus:outline-none uppercase text-lg w-full">
          {children}
          {selected && (
            <motion.div
              className="w-full absolute left-0 right-0 z-10 rounded-full h-[2px] top-0"
              layoutId="underline"
              initial={false}
              animate={{
                background: accentColor,
                boxShadow: 0 14px 30px 1px \${accentColor}, 0 4px 12px \${accentColor}, 0 1px 7px \${accentColor},
              }}
            />
          )}
        </button>
      )}
    </Tab>
  );
}

<Tab.Group as="div" className="relative border dark:border-neutral-800 mb-16 rounded">
  <Tab.List className="flex items-center justify-between relative">
    <AnimateSharedLayout>
      <FancyTab accentColor="#ef4444">
        Home
      </FancyTab>
      <FancyTab accentColor="#a78bfa">
        About
      </FancyTab>
      <FancyTab accentColor="#6ee7b7">
        Pricing
      </FancyTab>
      <FancyTab accentColor="#60a5fa">
        Contact
      </FancyTab>
    </AnimateSharedLayout>
  </Tab.List>
  <Tab.Panels className="dark:text-white p-8">
    <Tab.Panel>Home</Tab.Panel>
    <Tab.Panel>About</Tab.Panel>
    <Tab.Panel>Pricing</Tab.Panel>
    <Tab.Panel>Contact</Tab.Panel>
  </Tab.Panels>
</Tab.Group>`} />

          <Tab.Group as="div" className="relative border dark:border-neutral-800 mt-16 rounded">
            <Tab.List className="flex items-center justify-between relative">
              <AnimateSharedLayout>
                <Tab as="div" className="w-full focus:outline-none group">
                  {({ selected }) => (
                    <button className="relative py-4 dark:text-white focus:outline-none uppercase text-lg w-full">
                      Home
                      {selected && (
                        <motion.div
                          className="w-full absolute left-0 right-0 z-10 rounded-full h-[2px] top-0"
                          layoutId="underline"
                          initial={false}
                          animate={{
                            background: "#60a5fa",
                            boxShadow: `0 14px 30px 1px #60a5fa, 0 4px 12px #60a5fa, 0 1px 7px #60a5fa`,
                          }}
                        />
                      )}</button>
                  )}
                </Tab>
                <Tab as="div" className="w-full focus:outline-none group">
                  {({ selected }) => (
                    <button className="relative py-4 dark:text-white focus:outline-none uppercase text-lg w-full">
                      About
                      {selected && (
                        <motion.div
                          className="w-full absolute left-0 right-0 z-10 rounded-full h-[2px] top-0"
                          layoutId="underline"
                          initial={false}
                          animate={{
                            background: "#6ee7b7",
                            boxShadow: `0 14px 30px 1px #6ee7b7, 0 4px 12px #6ee7b7, 0 1px 7px #6ee7b7`,
                          }}
                        />
                      )}</button>
                  )}
                </Tab>
              </AnimateSharedLayout>
            </Tab.List>
            <Tab.Panels className="dark:text-white p-8">
              <Tab.Panel>Home</Tab.Panel>
              <Tab.Panel>About</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          <Code code={`import { Tab } from "@headlessui/react";
import { AnimateSharedLayout, motion } from "framer-motion";

<Tab.Group as="div" className="relative border dark:border-neutral-800 mb-16 rounded">
  <Tab.List className="flex items-center justify-between relative">
    <AnimateSharedLayout>
      <Tab as="div" className="w-full focus:outline-none group">
        {({ selected }) => (
          <button className="relative py-4 dark:text-white focus:outline-none uppercase text-lg w-full">
            Home
            {selected && (
              <motion.div
                className="w-full absolute left-0 right-0 z-10 rounded-full h-[2px] top-0"
                layoutId="underline"
                initial={false}
                animate={{
                  background: "#60a5fa",
                  boxShadow: '0 14px 30px 1px #60a5fa, 0 4px 12px #60a5fa, 0 1px 7px #60a5fa',
                }}
              />
            )}
          </button>
        )}
      </Tab>
      <Tab as="div" className="w-full focus:outline-none group">
        {({ selected }) => (
          <button className="relative py-4 dark:text-white focus:outline-none uppercase text-lg w-full">
            About
            {selected && (
              <motion.div
                className="w-full absolute left-0 right-0 z-10 rounded-full h-[2px] top-0"
                layoutId="underline"
                initial={false}
                animate={{
                  background: "#6ee7b7",
                  boxShadow: '0 14px 30px 1px #6ee7b7, 0 4px 12px #6ee7b7, 0 1px 7px #6ee7b7',
                }}
              />
            )}
          </button>
        )}
      </Tab>
    </AnimateSharedLayout>
  </Tab.List >
  <Tab.Panels className="dark:text-white p-8">
    <Tab.Panel>Home</Tab.Panel>
    <Tab.Panel>About</Tab.Panel>
  </Tab.Panels>
</Tab.Group >`} />
        </div>
      </main >
    </>
  )
}