import Head from 'next/head'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'

const Menu = ({ i18n }) => {

  return (
    <>
      <Head>
        <title>{i18n.title}</title>
        <meta name='description' content={i18n.desc} />
      </Head>

      <div className='flex flex-col justify-center w-full px-4 md:px-8 py-24'>

        <h1 className='text-6xl mb-12'>{i18n.M1}</h1>
        <h2 className='text-3xl mb-4 max-w-xs mx-auto'>{i18n.M2a}</h2>
        <p className='max-w-lg mx-auto'>{i18n.M2b}</p>

        <div className='flex flex-col items-center'>
          <h3 className='text-xl mb-2 mt-12'>{i18n.M3}</h3>
          <img src='/menu/breakfast-french.jpg' alt='breakfast' width={500} className='rounded shadow mb-4' />
          <img src='/menu/breakfast-french2.jpg' alt='breakfast' width={500} className='rounded shadow' />

          <h3 className='text-xl mb-2 mt-12'>{i18n.M4}</h3>
          <img src='/menu/breakfast-mex.jpg' alt='breakfast' width={500} className='rounded shadow' />

          <h3 className='text-xl mb-2 mt-12'>{i18n.M5}</h3>
          <img src='/menu/empanada.jpg' alt='empanadas' width={500} className='rounded shadow' />

          <h3 className='text-xl mb-2 mt-12'>{i18n.M6}</h3>
          <img src='/menu/crepes-savory.jpg' alt='crepes_savory' width={500} className='rounded shadow' />

          <h3 className='text-xl mb-2 mt-12'>{i18n.M7}</h3>
          <img src='/menu/crepes.jpg' alt='crepes' width={500} className='rounded shadow' />

          <h3 className='text-xl mb-2 mt-12'>{i18n.M8}</h3>
          <img src='/menu/pasteles.png' alt='pasteles' width={500} className='rounded shadow' />

          <h3 className='text-xl mb-2 mt-12'>{i18n.M9}</h3>
          <img src='/menu/bread.jpg' alt='bread' width={500} className='rounded shadow mb-4' />

          <h3 className='text-xl mb-2 mt-12'>{i18n.M10}</h3>
          <img src='/menu/coffee.jpg' alt='coffee' width={500} className='rounded shadow' />

          <h3 className='text-xl mb-2 mt-12'>{i18n.M11}</h3>
          <img src='/menu/specialities.jpg' alt='specialities' width={500} className='rounded shadow mb-4' />
          <img src='/menu/specialities2.jpg' alt='specialities' width={500} className='rounded shadow' />

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
