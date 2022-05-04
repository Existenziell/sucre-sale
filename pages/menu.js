import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Menu = () => {

  return (
    <>

      <Head>
        <title>Menu | Sucré Salé - French Bakery Cozumel</title>
      </Head>

      <div className='flex flex-col justify-center w-full px-4 md:px-8 py-24'>

        <h1 className='text-6xl mb-12'>Nuestro Menú</h1>
        <h2 className='text-xl max-w-lg mx-auto'>
          Comida de Calidad con un Toque Hogareño
          Con el toque francés y un toque de amor logramos traerte un pedacito de Francia en tu paladar.
          Ten una experiencia única y atrévete a probar nuestras delicias.
        </h2>

        <div className='flex flex-col items-center'>
          <h3 className='text-xl mb-2 mt-12'>French Breakfast</h3>
          <img src='/menu/breakfast-french.jpg' alt='breakfast' width={500} className='mb-4' />
          <img src='/menu/breakfast-french2.jpg' alt='breakfast' width={500} />

          <h3 className='text-xl mb-2 mt-12'>Mexican Breakfast</h3>
          <img src='/menu/breakfast-mex.jpg' alt='breakfast' width={500} />

          <h3 className='text-xl mb-2 mt-12'>Empanadas</h3>
          <img src='/menu/empanada.jpg' alt='empanadas' width={500} />

          <h3 className='text-xl mb-2 mt-12'>Savory Crepes</h3>
          <img src='/menu/crepes-savory.jpg' alt='crepes_savory' width={500} />

          <h3 className='text-xl mb-2 mt-12'>Sweet Crepes</h3>
          <img src='/menu/crepes.jpg' alt='crepes' width={500} />

          <h3 className='text-xl mb-2 mt-12'>Desserts</h3>
          <img src='/menu/pasteles.png' alt='pasteles' width={500} />

          <h3 className='text-xl mb-2 mt-12'>Bread Delicatesse</h3>
          <img src='/menu/bread.jpg' alt='bread' width={500} className='mb-4' />

          <h3 className='text-xl mb-2 mt-12'>Coffee Delights</h3>
          <img src='/menu/coffee.jpg' alt='coffee' width={500} />

          <h3 className='text-xl mb-2 mt-12'>French Specialities</h3>
          <img src='/menu/specialities.jpg' alt='specialities' width={500} className='mb-4' />
          <img src='/menu/specialities2.jpg' alt='specialities' width={500} />

        </div>
      </div>
    </>
  )
}

export default Menu
