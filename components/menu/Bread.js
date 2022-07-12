const Bread = () => {
  return (
    <>
      <h1 className='mx-auto w-max'>French Artesanal Bread</h1>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/bread.jpg' alt='breakfast' className='rounded shadow md:mx-0 max-h-80' /></div>
        <div className='w-full'>

          <div className='flex items-center justify-between'>
            <h3>Home made Baguette</h3>
            <h3>$22.00</h3>
          </div>
          <p>Sourdough home-made baguette.</p>

          <h3 className='mt-4 mb-2'>Rye bread of two flavors:</h3>
          <div className='flex items-center justify-between'>
            <h3>Raisins and walnut</h3>
            <h3>$75.00</h3>
          </div>
          <div className='flex items-center justify-between'>
            <h3>Blueberries and almonds</h3><h3>$75.00</h3>
          </div>
          <p></p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Volcano</h3>
            <h3>$55.00</h3>
          </div>
          <p>Sourdough rounded bread.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Integral</h3>
            <h3>$65.00</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>Braid Milk Bread</h3>
            <h3>$57.00</h3>
          </div>
          <p>Milk bread in form of a braid.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Muffin Brioche</h3>
            <h3>$23.00</h3>
          </div>
          <p>Delicious Brioche in form of a muffin.</p>

        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div className='w-full'>

          <div className='flex items-center justify-between mt-4'>
            <h3>Pain Suizo</h3>
            <h3>$34.00</h3>
          </div>
          <p>Incredible Chocolate and pastry cream.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Milk Bread</h3>
            <h3>$12.00</h3>
          </div>
          <p>Little milk bread perfect for a cop of coffee.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Cookie tout Chocolat</h3>
            <h3>$30.00</h3>
          </div>
          <p>Chocolate Cookie.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Cookie aux Pépites de Chocolat</h3>
            <h3>$30.00</h3>
          </div>
          <p>Chocolate chip Cookie.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Cake au Citron</h3>
            <h3>$30.00</h3>
          </div>
          <p>Lemon muffin</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Muffin Brioche Chispas</h3>
            <h3>$25.00</h3>
          </div>

        </div>

        <div><img src='/menu/bread2.jpg' alt='breakfast' className='rounded shadow md:mx-0 max-h-80' /></div>

      </div>


      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/bread3.jpg' alt='breakfast' className='rounded shadow md:mx-0 max-h-80' /></div>
        <div className='w-full'>

          <div className='flex items-center justify-between mt-4'>
            <h3>Cake Fruit de la Passion et Banane</h3>
            <h3>$33.00</h3>
          </div>
          <p>Pasion Fruit and Banana muffin.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Financier</h3>
            <h3>$17.00</h3>
          </div>
          <p>Almond and Orange Madeleines</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Pain Brioche au Sucre</h3>
            <h3>$25.00</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>Pain Brioche Nutella</h3>
            <h3>$28.00</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>Croissant</h3>
            <h3>$26.00</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>Almond Croissant</h3>
            <h3>$36.00</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>Pain Chouquette</h3>
            <h3>$7.00</h3>
          </div>
          <p>Pastry Choux and Sugar Bread.</p>
        </div>
      </div>
    </>
  )
}

export default Bread
