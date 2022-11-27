const Breakfast = ({ i18n }) => {
  return (
    <>
      <h1 className='menu-title'>{i18n.title}</h1>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/breakfast.jpg' alt='breakfast' className='rounded shadow md:mx-0 max-h-64' /></div>
        <div>
          <h2 className='border-b border-slate-400 mt-0'>{i18n.T01}</h2>
          <div className='flex items-center justify-between w-full'>
            <h3>{i18n.T02}:</h3>
            <h3>{i18n.T02P}</h3>
          </div>
          <p>{i18n.T03}</p>
          <div className='flex items-center justify-between w-full'>
            <h3 className='mt-6'>{i18n.T04}:</h3>
            <h3>{i18n.T03P}</h3>
          </div>
          <p>{i18n.T05}</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center'>
        <div className='w-full'>
          <h2 className='border-b border-slate-400 mt-0'>{i18n.T06}</h2>
          <h3>{i18n.T07}:</h3>
          <ul className='list-disc pl-4 w-full'>
            <li className='flex items-center justify-between w-full mb-2'><span className='list-item'>{i18n.T08}</span><span>{i18n.T08P}</span></li>
            <li className='flex items-center justify-between w-full mb-2'><span className='list-item'>{i18n.T09}</span><span>{i18n.T09P}</span></li>
            <li className='flex items-center justify-between w-full mb-2'><span className='list-item'>{i18n.T10}</span><span>{i18n.T10P}</span></li>
            <li className='flex items-center justify-between w-full mb-2'><span className='list-item'>{i18n.T11}</span><span>{i18n.T11P}</span></li>
          </ul>
        </div>
        <div><img src='/menu/eggs.jpg' alt={i18n.T07} className='rounded shadow mx-auto md:mx-0 max-h-64' /></div>
      </div>

      <h2 className='border-b border-slate-400'>{i18n.T12}</h2>

      <div className='flex items-center justify-between w-full'>
        <h3>{i18n.T13}:</h3>
        <h3>{i18n.T13P}</h3>
      </div>
      <p>{i18n.T14}</p>

      <div className='flex items-center justify-between w-full'>
        <h3 className='mt-6'>{i18n.T15}</h3>
        <h3>{i18n.T15P}</h3>
      </div>

      <h2 className='border-b border-slate-400'>{i18n.T16}</h2>
      <ul className='list-disc pl-4 w-full'>
        <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T17}</span><h3>{i18n.T17P}</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T18}</span><h3>{i18n.T18P}</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T19}</span><h3>{i18n.T19P}</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T20}</span><h3>{i18n.T20P}</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T21}</span><h3>{i18n.T21P}</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T22}</span><h3>{i18n.T22P}</h3></li>
        <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T23}</span><h3>{i18n.T23P}</h3></li>
      </ul>
    </>
  )
}

export default Breakfast
