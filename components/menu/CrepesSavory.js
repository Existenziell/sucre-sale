const CrepesSavory = () => {
  return (
    <>
      <h1 className='mx-auto w-max mt-12'>Savory Crepes</h1>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div className='w-full'>
          <h3>Bases:</h3>
          <div className='flex items-center justify-between mt-4'>
            <h3>Eggs and Grouyere Cheese Crepes</h3>
            <h3>$72.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>Ham and Grouyere Cheese Crepes</h3>
            <h3>$80.00</h3>
          </div>

          <h2 className='border-b border-slate-400'>Extras</h2>
          <ul className='list-disc pl-4 w-full'>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Spinach</span><h3>$19.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Onion and Tomato</span><h3>$19.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Cream</span><h3>$19.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Ham</span><h3>$19.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Bechamel</span><h3>$19.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Mushrooms</span><h3>$19.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Grouyere Cheese</span><h3>$19.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Bacon</span><h3>$29.00</h3></li>
          </ul>
        </div>

        <div><img src='/menu/crepes-savory.jpg' alt='Savory Crepes' className='rounded shadow md:mx-0 max-h-80' /></div>
      </div>
    </>
  )
}

export default CrepesSavory
