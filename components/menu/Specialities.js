const Specialities = () => {
  return (
    <>
      <h1 className='mx-auto w-max mt-20'>Specialities</h1>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/specialities.jpg' alt='Specialities' className='rounded shadow md:mx-0 max-h-80' /></div>
        <div>
          <div className='flex items-center justify-between'>
            <h3>CROQUE MONSIEUR:</h3>
            <h3>$65.00</h3>
          </div>
          <p>Toasted ham and cheese sandwich.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>CROQUE MADAME:</h3>
            <h3>$84.00</h3>
          </div>
          <p>Toasted ham and cheese sandwich with tomato, topped with a fried egg.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>TART ROQUEFORT:</h3>
            <h3>$69.00</h3>
          </div>
          <p>Puff pastry, tomato, grouyere cheese and roquefort.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>FEUILLETÉE AU SAUMON</h3>
            <h3>$83.00</h3>
          </div>
          <p>Puff pastry, salmon, goat cheese and spinach.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>SANDWICH JAMBON GROUYERE</h3>
            <h3>$81.00</h3>
          </div>
          <p>Baguette, Ham, cheese and butter.</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div>
          <div className='flex items-center justify-between mt-4'>
            <h3>VEGETARIAN SANDWICH</h3>
            <h3>$87.00</h3>
          </div>
          <p>Mushroom, tomatoes, onions, spinach and chesse.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>VEGAN SANDWICH</h3>
            <h3>$97.00</h3>
          </div>
          <p>Mushroom, onions, tomatoe sauce and vegan sausage made of beetroot, wheat, corn and potato.</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>QUICHE JAMBON / LÉGUMES</h3>
            <h3>$74.00</h3>
          </div>
          <p>Ham / Vegetables</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Pulled Pork Sandwich</h3>
            <h3>$91.00</h3>
          </div>
          <p>Pulled pork, onions and avocado cream.</p>
        </div>
        <div><img src='/menu/specialities1.jpg' alt='Specialities' className='rounded shadow md:mx-0 max-h-80' /></div>
      </div>
    </>
  )
}

export default Specialities
