import Head from 'next/head'
import Link from 'next/link'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'

const Home = ({ i18n }) => {

  return (
    <>
      <Head>
        <title>{i18n.title}</title>
        <meta name='description' content={i18n.desc} />
      </Head>

      <header className='flex items-center justify-center h-screen sm:bg-fixed bg-center bg-cover bg-parallax-1'>
        <a href='#anchor' aria-label='Scroll down'>
          <h1 className='px-6 py-4 text-white bg-brand/80 dark:text-brand dark:bg-brand-dark/80 rounded'>
            {i18n.T1}
          </h1>
        </a>
      </header>

      <div className='max-w-xl m-auto px-4 leading-relaxed my-16' id='anchor'>
        <p className='mb-6'>{i18n.T2}</p>
        <h1>{i18n.T3}</h1>
        <p>{i18n.T4}</p>
        <div className='my-8'>
          <Link href='/menu'><a className='button inline-block sm:mr-6'>{i18n.B1}</a></Link>
          <Link href='/contact'><a className='button inline-block mt-4'>{i18n.B2}</a></Link>
        </div>
        <img src='/bakery/variado.jpg' alt='Variado' className='rounded-lg shadow' />
        <p className='mt-8 leading-loose'>{i18n.T5}</p>
      </div>

      <section className='flex items-center justify-center h-screen mb-12 sm:bg-fixed bg-center bg-cover bg-parallax-2'>
        <p className='w-full px-6 py-8 text-white bg-brand-dark/80 rounded'>
          <Link href='/menu'><a className='button inline-block mr-6 '>{i18n.B1}</a></Link>
          <Link href='/contact'><a className='button inline-block'>{i18n.B2}</a></Link>
        </p>
      </section>

      <div className='flex flex-col items-center justify-center'>
        <p className='text-lg my-8 max-w-xl mx-auto leading-loose'>{i18n.T6}</p>
        <img src='/bakery/pano1.jpg' alt='Panoramic' className='rounded shadow' />
        <p className='mt-8 pb-16'>{i18n.T7}</p>
      </div>

    </>
  )
}

export async function getStaticProps(context) {
  let i18n
  context.locale === 'en' ?
    i18n = langEN.home :
    i18n = langES.home
  return {
    props: { i18n },
  }
}

export default Home
