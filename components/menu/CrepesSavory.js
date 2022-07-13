const CrepesSavory = ({ i18n }) => {
  return (
    <>
      <h1 className='mx-auto w-max mt-20'>{i18n.title}</h1>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div className='w-full'>
          <h3>{i18n.T1}:</h3>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T2}</h3>
            <h3>$72.00</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T3}</h3>
            <h3>$80.00</h3>
          </div>

          <h2 className='border-b border-slate-400'>{i18n.E0}</h2>
          <ul className='list-disc pl-4 w-full'>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E1}</span><h3>$19.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E2}</span><h3>$19.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E3}</span><h3>$19.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E4}</span><h3>$19.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E5}</span><h3>$19.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E6}</span><h3>$19.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E7}</span><h3>$19.00</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E8}</span><h3>$29.00</h3></li>
          </ul>
        </div>

        <div><img src='/menu/crepes-savory.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>
      </div>
    </>
  )
}

export default CrepesSavory
