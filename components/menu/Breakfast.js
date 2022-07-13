const Breakfast = ({ i18n }) => {

  return (
    <>
      <h1 className='mx-auto w-max mt-12'>{i18n.title}</h1>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/breakfast.jpg' alt='breakfast' className='rounded shadow md:mx-0 max-h-64' /></div>
        <div>
          <h2 className='border-b border-slate-400 mt-0'>{i18n.T1}</h2>
          <div className='flex items-center justify-between w-full'>
            <h3>{i18n.T2}:</h3>
            <h3>$103.00</h3>
          </div>
          <p>{i18n.T3}</p>
          <div className='flex items-center justify-between w-full'>
            <h3 className='mt-6'>{i18n.T4}:</h3>
            <h3>$89.00</h3>
          </div>
          <p>{i18n.T5}</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center'>
        <div className='w-full'>
          <h2 className='border-b border-slate-400 mt-0'>{i18n.T6}</h2>
          <h3>{i18n.T7}:</h3>
          <ul className='list-disc pl-4 w-full'>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T8}</span><h3>$156.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T9}</span><h3>$144.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T10}</span><h3>$126.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T11}</span><h3>$174.00</h3></li>
          </ul>
        </div>
        <div><img src='/menu/eggs.jpg' alt={i18n.T7} className='rounded shadow mx-auto md:mx-0 max-h-64' /></div>
      </div>

      <h2 className='border-b border-slate-400'>{i18n.T12}</h2>

      <div className='flex items-center justify-between w-full'>
        <h3>{i18n.T13}:</h3>
        <h3>$84.00</h3>
      </div>
      <p>{i18n.T14}</p>

      <div className='flex items-center justify-between w-full'>
        <h3 className='mt-6'>{i18n.T15}</h3>
        <h3>$92.00</h3>
      </div>

      <h2 className='border-b border-slate-400'>{i18n.T16}</h2>
      <ul className='list-disc pl-4 w-full'>
        <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T17}</span><h3>$19.00</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T18}</span><h3>$19.00</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T19}</span><h3>$19.00</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T20}</span><h3>$19.00</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T21}</span><h3>$29.00</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T22}</span><h3>$37.00</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T23}</span><h3>$48.00</h3></li>
      </ul>
    </>
  )
}

export default Breakfast
