const Breakfast = () => {
  return (
    <>
      <h1 className='mx-auto w-max'>Breakfast</h1>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/breakfast.jpg' alt='breakfast' className='rounded shadow md:mx-0 max-h-64' /></div>
        <div>
          <h2 className='border-b border-slate-400 mt-0'>Combos</h2>
          <div className='flex items-center justify-between w-full'>
            <h3>French:</h3>
            <h3>$103.00</h3>
          </div>
          <p>3 eggs any style, salad, potatoes and bacon, baguette, butter, jam and coffee or orange juice.</p>
          <div className='flex items-center justify-between w-full'>
            <h3 className='mt-6'>Mexican:</h3>
            <h3>$89.00</h3>
          </div>
          <p>2 eggs any style, chilaquiles, beans, home made bread, jam and coffee or orange juice.</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center'>
        <div className='w-full'>
          <h2 className='border-b border-slate-400 mt-0'>Specialities</h2>
          <h3>Eggs Benedict:</h3>
          <ul className='list-disc pl-4 w-full'>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Bacon and Spinach</span><h3>$156.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Mushrooms and Gouda Cheese</span><h3>$144.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Avocado and Tomato</span><h3>$126.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Smoked Salmon and Spinac</span><h3>$174.00</h3></li>
          </ul>
        </div>
        <div><img src='/menu/eggs.jpg' alt='Eggs Benedict' className='rounded shadow mx-auto md:mx-0 max-h-64' /></div>
      </div>

      <h2 className='border-b border-slate-400'>Others</h2>

      <div className='flex items-center justify-between w-full'>
        <h3>Pain Perdu:</h3>
        <h3>$84.00</h3>
      </div>
      <p>French toast, strawberries, organic honey and banana.</p>

      <div className='flex items-center justify-between w-full'>
        <h3 className='mt-6'>Seasonal Fruit Salad</h3>
        <h3>$92.00</h3>
      </div>

      <h2 className='border-b border-slate-400'>Extras</h2>
      <ul className='list-disc pl-4 w-full'>
        <li className='flex items-center justify-between w-full'><span className='list-item'>Mushrooms</span><h3>$19.00</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>Spinach</span><h3>$19.00</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>Cheese</span><h3>$19.00</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>Ham</span><h3>$19.00</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>Bacon</span><h3>$29.00</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>Extra bread</span><h3>$37.00</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>Bacon and butter potatoes</span><h3>$48.00</h3></li>
      </ul>
    </>
  )
}

export default Breakfast
