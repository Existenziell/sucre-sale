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
        <title>{i18n.title}</title>
        <meta name='description' content={i18n.desc} />
      </Head>

      <div className=' w-full px-8 py-24'>

        <div className='flex flex-col justify-center'>
          <h1>{i18n.M1}</h1>
          {/* <p className='text-xl max-w-xs mx-auto italic'>{i18n.M2a}</p> */}
          <Quote text={i18n.M2a} classes='mx-auto italic text-lg' />
          {/* <p className='max-w-lg mx-auto mb-8'>{i18n.M2b}</p> */}
        </div>


        <div className='flex flex-col items-start justify-center mx-auto text-left max-w-4xl'>
          <Nav view={view} setView={setView} />
          <AnimatePresence>
            {(view === 'breakfast' || view === 'all') &&
              <motion.div
                key={'breakfast'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full'>
                <Breakfast />
              </motion.div>
            }
            {(view === 'specialities' || view === 'all') &&
              <motion.div
                key={'specialities'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full'>
                <Specialities />
              </motion.div>
            }
            {(view === 'bread' || view === 'all') &&
              <motion.div
                key={'bread'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full'>
                <Bread />
              </motion.div>
            }
            {(view === 'savory' || view === 'all') &&
              <motion.div
                key={'savory'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full'>
                <CrepesSavory />
              </motion.div>
            }
            {(view === 'sweet' || view === 'all') &&
              <motion.div
                key={'sweet'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full'>
                <Crepes />
              </motion.div>
            }
            {(view === 'desserts' || view === 'all') &&
              <motion.div
                key={'desserts'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full'>
                <Desserts />
              </motion.div>
            }
            {(view === 'coffee' || view === 'all') &&
              <motion.div
                key={'coffee'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full'>
                <Coffee />
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
    i18n = langEN.menu :
    i18n = langES.menu
  return {
    props: { i18n },
  }
}

export default Menu
