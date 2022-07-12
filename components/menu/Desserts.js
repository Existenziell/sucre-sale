const Desserts = () => {

  return (
    <>

      <h1 className='mx-auto w-max mt-20'>Desserts</h1>
      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div className='w-full'>

          <div className='flex items-center justify-between mt-4'>
            <h3>Tarte aux Fraise</h3>
            <h3>$58.00</h3>
          </div>
          <p>Strawberry Tart.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Tarte 3 Chocolats</h3>
            <h3>$62.00</h3>
          </div>
          <p>3 Chocolate Tart.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Tarte aux Citron</h3>
            <h3>$51.00</h3>
          </div>
          <p>Lemon Tart.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Tarta de Frutillas</h3>
            <h3>$62.00</h3>
          </div>
          <p>Forrest Fruit Tart.</p>

        </div>
        <div><img src='/menu/fraises.jpg' alt='Fraises' className='rounded shadow md:mx-0 max-h-80' /></div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/tarte.jpg' alt='Tarte' className='rounded shadow md:mx-0 max-h-80' /></div>
        <div className='w-full'>

          <div className='flex items-center justify-between mt-4'>
            <h3>Tarte aux Noix</h3>
            <h3>$53.00</h3>
          </div>
          <p>Caramel Pecan Tart.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Coffee Eclair</h3>
            <h3>$49.00</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>Crème Brûlée</h3>
            <h3>$46.00</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>Capucine</h3>
            <h3>$49.00</h3>
          </div>
          <p>Chocolate Macarrón and Ganash.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Tarte aux Figes</h3>
            <h3>$62.00</h3>
          </div>
          <p>Fig Tart.</p>
        </div>

      </div>
    </>
  )
}

export default Desserts
