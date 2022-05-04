import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

const Root = () => {
  return (
    <>
      <Head>
        <title>Home | Sucré Salé - French Bakery Cozumel</title>
      </Head>

      <header className='flex items-center justify-center h-screen sm:bg-fixed bg-center bg-cover bg-parallax-1'>
        <a href='#anchor' aria-label='Scroll down'>
          <h1 className='p-5 text-6xl text-white bg-brand bg-opacity-70 dark:bg-brand-dark rounded'>
            Sucré Salé
          </h1>
        </a>
      </header>

      <div className='max-w-xl m-auto px-4 leading-relaxed my-16' id='anchor'>
        <p>¡Lo más delicioso en la isla!</p>
        <h2 className='text-6xl my-8'>¡Bienvenido!</h2>
        <p>Somos un restaurante familiar francés con un amplio repertorio de postres y deliciosos platillos.</p>
        <Link href='/menu'><a className='button inline-block mr-6'>See Menu</a></Link>
        <Link href='/contact'><a className='button inline-block'>Book a table</a></Link>
        <Image src='/bakery/variado.jpg' width={706} height={960} alt='Variado' priority={true} />
        <p className='mt-8 leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <section className='flex items-center justify-center h-screen mb-12 sm:bg-fixed bg-center bg-cover bg-parallax-2'>
        <Link href='/menu'><a className='button mr-6'>See Menu</a></Link>
        <Link href='/contact'><a className='button'>Book a table</a></Link>
      </section>

      <p className='text-lg my-8 max-w-xl mx-auto leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Image src='/bakery/pano1.jpg' width={600} height={238} alt='Panoramic' priority={true} />
      <p className='mt-8 pb-16'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    </>
  )
}

export default Root
