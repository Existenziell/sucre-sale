const Coffee = () => {
  return (
    <>
      <h1 className='mx-auto w-max mt-20'>Coffee</h1>
      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div className='w-full'>

          <h2 className='border-b border-slate-400'>Expresso (90ml)</h2>
          <div className='flex items-center justify-between mt-4'>
            <h3>Sencillo</h3>
            <h3>$31.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>Doble</h3>
            <h3>$39.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>Macchiato</h3>
            <h3>$31.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>Cortado</h3>
            <h3>$31.00</h3>
          </div>

          <h2 className='border-b border-slate-400'>Extras</h2>
          <ul className='list-disc pl-4 w-full'>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Extra Shot</span><h3>$12.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Flavor Shot</span><h3>$12.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Soya Milk (350ml)</span><h3>$10.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Regular</span><h3>$34.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Capuccino</span><h3>$52.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Latte</span><h3>$52.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Cold Latte</span><h3>$57.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Mocha</span><h3>$54.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Capuccino cajeta</span><h3>$54.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Cold Mocha</span><h3>$62.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Hot Chocolate</span><h3>$52.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Cold Chocolate</span><h3>$57.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Cold Coffee</span><h3>$42.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Coffee and Milk</span><h3>$47.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>Cold Coffee and Milk</span><h3>$57.00</h3></li>
          </ul>
        </div>
        <div><img src='/menu/coffee1.jpg' alt='Coffee' className='rounded shadow md:mx-0 max-h-80' /></div>

      </div>
      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/coffee.jpg' alt='Coffee' className='rounded shadow md:mx-0 max-h-80' /></div>

        <div className='w-full'>
          <h2 className='border-b border-slate-400'>Teas</h2>

          <div className='flex items-center justify-between mt-4'>
            <h3>Chai Tea</h3>
            <h3>$60.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>Chai Tea Frappe</h3>
            <h3>$65.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>Cold Chai Tea</h3>
            <h3>$65.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>Hot Tea (450ml)</h3>
            <h3>$72.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>Cold Tea (470ml)</h3>
            <h3>$79.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3></h3>
            <h3></h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3></h3>
            <h3></h3>
          </div>

          <h2 className='border-b border-slate-400'>Frappuccinos (470ml)</h2>
          <div className='flex items-center justify-between mt-4'>
            <h3>Natural</h3>
            <h3>$60.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>Mocha, Caramel, Vanilla, Irish Cream</h3>
            <h3>$63.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>Oreo</h3>
            <h3>$66.00</h3>
          </div>

          <h2 className='border-b border-slate-400'>Milkshakes (470ml)</h2>
          <div className='flex items-center justify-between mt-4'>
            <h3>Chocolate</h3>
            <h3>$66.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>Vanilla</h3>
            <h3>$66.00</h3>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div className='w-full'>
          <div className='flex items-center justify-between mt-10'>
            <h3>Smoothies (470 ml)</h3>
            <h3>$60.00</h3>
          </div>
          <p>Ask for the seasonal fruit!</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>Fresh orange juice (350 ml)</h3>
            <h3>$47.00</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>Orangeade (350 ml)</h3>
            <h3>$44.00</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>Mineral Orangeade (350 ml)</h3>
            <h3>$49.00</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>Lemonade Natural (350 ml)</h3>
            <h3>$41.00</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>Lemonade Mineral (350 ml)</h3>
            <h3>$46.00</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>Sodas (355 ml)</h3>
            <h3>$35.00</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>Water Bottle (600 ml)</h3>
            <h3>$30.00</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>Mineral Water (350 ml)</h3>
            <h3>$35.00</h3>
          </div>

        </div>
        <div><img src='/menu/pecan.jpg' alt='Coffee' className='rounded shadow md:mx-0 max-h-80' /></div>

      </div>
    </>
  )
}

export default Coffee
