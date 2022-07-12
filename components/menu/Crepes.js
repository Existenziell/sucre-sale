const Crepes = () => {
  return (
    <>
      <h1 className='mx-auto w-max mt-20'>Sweet Crepes</h1>
      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/crepe.jpg' alt='Sweet Crepes' className='rounded shadow md:mx-0 max-h-80' /></div>

        <div className='w-full'>
          <div className='flex items-center justify-between mt-4'>
            <h3>Sugar Crepe</h3>
            <h3>$53.00</h3>
          </div>

          <div className='flex items-center justify-between mt-1'>
            <h3>Nutella Crepe</h3>
            <h3>$69.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>Nutella and Banana Crepe</h3>
            <h3>$74.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>Home made Jam Crepe</h3>
            <h3>$67.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>Strawberry And Chantilly Crepe</h3>
            <h3>$77.00</h3>
          </div>

          <h2 className='border-b border-slate-400'>Extras</h2>
          <ul className='list-disc pl-4 w-full'>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Ice Cream</span><h3>$22.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Chantilly Cream</span><h3>$22.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Strawberry</span><h3>$24.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Nutella</span><h3>$19.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Banana</span><h3>$19.00</h3></li>
          </ul>

        </div>
      </div>
    </>
  )
}

export default Crepes
