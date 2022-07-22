const Coffee = ({ i18n }) => {
  return (
    <>
      <h1 className='mx-auto w-max mt-20'>{i18n.title}</h1>
      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div className='w-full'>

          <h2 className='border-b border-slate-400'>{i18n.T1}</h2>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T2}</h3>
            <h3>$31.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T3}</h3>
            <h3>$39.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T4}</h3>
            <h3>$39.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T5}</h3>
            <h3>$39.00</h3>
          </div>

          <h2 className='border-b border-slate-400'>{i18n.E0}</h2>
          <ul className='list-disc pl-4 w-full'>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E1}</span><h3>$12.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E2}</span><h3>$12.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E3}</span><h3>$10.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E4}</span><h3>$34.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E5}</span><h3>$52.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E6}</span><h3>$52.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E7}</span><h3>$57.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E8}</span><h3>$54.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E10}</span><h3>$62.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E9}</span><h3>$54.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E11}</span><h3>$52.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E12}</span><h3>$57.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E13}</span><h3>$44.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E14}</span><h3>$47.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E15}</span><h3>$57.00</h3></li>
          </ul>
        </div>
        <div><img src='/menu/coffee1.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>

      </div>
      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/coffee.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>

        <div className='w-full'>
          <h2 className='border-b border-slate-400'>{i18n.T6}</h2>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T7}</h3>
            <h3>$60.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T8}</h3>
            <h3>$65.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T9}</h3>
            <h3>$65.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T10}</h3>
            <h3>$72.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T11}</h3>
            <h3>$79.00</h3>
          </div>

          <h2 className='border-b border-slate-400'>{i18n.T12}</h2>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T13}</h3>
            <h3>$60.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T14}</h3>
            <h3>$63.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T15}</h3>
            <h3>$66.00</h3>
          </div>

          <h2 className='border-b border-slate-400'>{i18n.T16}</h2>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T17}</h3>
            <h3>$66.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T18}</h3>
            <h3>$66.00</h3>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div className='w-full'>
          <div className='flex items-center justify-between mt-10'>
            <h3>{i18n.T19}</h3>
            <h3>$60.00</h3>
          </div>
          <p>{i18n.T20}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T21}</h3>
            <h3>$50.00</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T22}</h3>
            <h3>$44.00</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T23}</h3>
            <h3>$52.00</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T24}</h3>
            <h3>$41.00</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T25}</h3>
            <h3>$46.00</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T26}</h3>
            <h3>$35.00</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T27}</h3>
            <h3>$30.00</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T28}</h3>
            <h3>$35.00</h3>
          </div>

        </div>
        <div><img src='/menu/pecan.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>

      </div>
    </>
  )
}

export default Coffee
