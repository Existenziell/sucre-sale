import { AnimatePresence, motion } from 'framer-motion'
import { connectToDatabase } from '../lib/mongodb'
import { useState } from 'react'
import Head from 'next/head'
import Nav from '../components/menu/Nav'
import Bread from '../components/menu/Bread'
import Breakfast from '../components/menu/Breakfast'
import Coffee from '../components/menu/Coffee'
import Crepes from '../components/menu/Crepes'
import CrepesSavory from '../components/menu/CrepesSavory'
import Desserts from '../components/menu/Desserts'
import Specialities from '../components/menu/Specialities'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'

const Menu = ({ i18nStatic, i18n }) => {
  i18n = JSON.parse(i18n)
  const [view, setView] = useState('all')

  return (
    <>
      <Head>
        <title>{i18nStatic.menu.title}</title>
        <meta name='description' content={i18nStatic.menu.desc} />
      </Head>

      <div className='w-full px-8 py-24'>

        <div className='flex flex-col justify-center'>
          <h1 className='mb-2'>{i18nStatic.menu.M1}</h1>
          <p className='max-w-lg mx-auto mb-10'>{i18nStatic.menu.M2a}</p>
        </div>

        <div className='flex flex-col items-start justify-center mx-auto text-left max-w-4xl'>
          <Nav view={view} setView={setView} i18n={i18nStatic.nav} />
          <AnimatePresence>
            {(view === 'breakfast' || view === 'all') &&
              <motion.div
                key={'breakfast'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full shadow-2xl bg-white dark:bg-brand/10 px-6 py-2 rounded'>
                <Breakfast i18n={i18n.breakfast} />
              </motion.div>
            }
            {(view === 'specialities' || view === 'all') &&
              <motion.div
                key={'specialities'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full shadow-2xl bg-white dark:bg-brand/10 px-6 py-2 rounded'>
                <Specialities i18n={i18n.special} />
              </motion.div>
            }
            {(view === 'bread' || view === 'all') &&
              <motion.div
                key={'bread'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full shadow-2xl bg-white dark:bg-brand/10 px-6 py-2 rounded'>
                <Bread i18n={i18n.bread} />
              </motion.div>
            }
            {(view === 'savory' || view === 'all') &&
              <motion.div
                key={'savory'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full shadow-2xl bg-white dark:bg-brand/10 px-6 py-2 rounded'>
                <CrepesSavory i18n={i18n.crepe} />
              </motion.div>
            }
            {(view === 'sweet' || view === 'all') &&
              <motion.div
                key={'sweet'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full shadow-2xl bg-white dark:bg-brand/10 px-6 py-2 rounded'>
                <Crepes i18n={i18n.crepesweet} />
              </motion.div>
            }
            {(view === 'desserts' || view === 'all') &&
              <motion.div
                key={'desserts'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full shadow-2xl bg-white dark:bg-brand/10 px-6 py-2 rounded'>
                <Desserts i18n={i18n.dessert} />
              </motion.div>
            }
            {(view === 'coffee' || view === 'all') &&
              <motion.div
                key={'coffee'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full shadow-2xl bg-white dark:bg-brand/10 px-6 py-2 rounded'>
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
  let i18n = context.locale
  let i18nStatic = context.locale === 'en' ? langEN : langES

  const { db } = await connectToDatabase()
  let menuItems = {}

  const categories = await db
    .collection("categories")
    .find({})
    .toArray()

  const items = await db
    .collection("items")
    .find({})
    .toArray()

  // Build an object with content {category: {key: i18n-translation, {...} }}
  categories.forEach(category => {
    const catItems = items.filter(item => (item.category.toString() === category._id.toString()))
    if (!catItems.length) return
    menuItems[category.key] = {}
    catItems.forEach(item => {
      menuItems[category.key][item.key] = item[i18n]
    })
  })

  return {
    props: {
      i18n: JSON.stringify(menuItems),
      i18nStatic,
    },
    revalidate: 3600, // Each hour
  }
}

export default Menu
