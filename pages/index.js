import Head from 'next/head'
import Link from 'next/link'
import Quote from '../components/Quote'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'
import Social from '../components/Social'

const Home = ({ i18n }) => {

  return (
    <>
      <Head>
        <title>{i18n.title}</title>
        <meta name='description' content={i18n.desc} />
      </Head>

      <header className='flex items-center justify-center h-[calc(100vh-200px)] sm:bg-fixed bg-center bg-cover bg-parallax-1'>
        <a href='#anchor' aria-label='Scroll down'>
          <h1 className='px-6 py-4 text-white bg-brand/80 dark:text-brand dark:bg-brand-dark/80 rounded'>
            {i18n.T1}
          </h1>
        </a>
      </header>

      <div className='max-w-xl mx-auto px-4 my-16' id='anchor'>
        <h1 className='mb-6'>{i18n.T3}</h1>
        <p className='mb-4'>{i18n.T2}</p>
        <p className='leading-relaxed text-lg'>{i18n.T4}</p>
        <div className='mt-8 mb-16'>
          <Link href='/menu'><a className='button inline-block mr-6 min-w-[150px]'>{i18n.B1}</a></Link>
          <Link href='/contact'><a className='button inline-block mt-4 min-w-[150px]'>{i18n.B2}</a></Link>
        </div>
      </div>

      <div className='flex items-stretch justify-between px-4 md:px-8 gap-6'>
        <img src='/home/1.jpg' alt='Image of Bakery' className='rounded shadow w-1/2' />
        <div className='w-1/2 flex flex-col gap-6 justify-between'>
          <img src='/home/2.jpg' alt='Image of Bakery' className='rounded shadow' />
          <img src='/home/3.jpg' alt='Image of Bakery' className='rounded shadow' />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center mt-20'>
        <Quote text={i18n.T5} classes='mx-auto w-max italic text-lg' />
        <Social />
        <Link href='/map'><a className='button inline-block mt-6'>{i18n.B3}</a></Link>

        <img src='/bakery/pano1.jpg' alt='Panoramic' className='rounded shadow mt-20' />
        <p className='mt-8 pb-16'>{i18n.T6}</p>
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
