import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import { useState } from 'react'
import Bread from '../components/menu/Bread'
import Breakfast from '../components/menu/Breakfast'
import Coffee from '../components/menu/Coffee'
import Crepes from '../components/menu/Crepes'
import CrepesSavory from '../components/menu/CrepesSavory'
import Desserts from '../components/menu/Desserts'
import Nav from '../components/menu/Nav'
import Specialities from '../components/menu/Specialities'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'
import Quote from '../components/Quote'

const Menu = ({ i18n }) => {
  const [view, setView] = useState('all')

  return (
    <>
      <Head>
        <title>{i18n.menu.title}</title>
        <meta name='description' content={i18n.menu.desc} />
      </Head>

      <div className='w-full px-8 py-24'>

        <div className='flex flex-col justify-center'>
          <h1>{i18n.menu.M1}</h1>
          {/* <p className='max-w-lg mx-auto mb-8'>{i18n.menu.M2b}</p> */}
        </div>

        <div className='flex flex-col items-start justify-center mx-auto text-left max-w-4xl'>
          <Nav view={view} setView={setView} i18n={i18n.nav} />
          <AnimatePresence>
            {(view === 'breakfast' || view === 'all') &&
              <motion.div
                key={'breakfast'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full'>
                <Breakfast i18n={i18n.breakfast} />
              </motion.div>
            }
            {(view === 'specialities' || view === 'all') &&
              <motion.div
                key={'specialities'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full'>
                <Specialities i18n={i18n.special} />
              </motion.div>
            }
            {(view === 'bread' || view === 'all') &&
              <motion.div
                key={'bread'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full'>
                <Bread i18n={i18n.bread} />
              </motion.div>
            }
            {(view === 'savory' || view === 'all') &&
              <motion.div
                key={'savory'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full'>
                <CrepesSavory i18n={i18n.savory} />
              </motion.div>
            }
            {(view === 'sweet' || view === 'all') &&
              <motion.div
                key={'sweet'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full'>
                <Crepes i18n={i18n.sweet} />
              </motion.div>
            }
            {(view === 'desserts' || view === 'all') &&
              <motion.div
                key={'desserts'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full'>
                <Desserts i18n={i18n.desserts} />
              </motion.div>
            }
            {(view === 'coffee' || view === 'all') &&
              <motion.div
                key={'coffee'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full'>
                <Coffee i18n={i18n.coffee} />
              </motion.div>
            }
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  let i18n
  context.locale === 'en' ?
    i18n = langEN :
    i18n = langES
  return {
    props: { i18n },
  }
}

export default Menu
