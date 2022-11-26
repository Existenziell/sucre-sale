const CrepesSavory = ({ i18n }) => {
  return (
    <>
      <h1 className='menu-title'>{i18n.title}</h1>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div className='w-full'>
          <h3>{i18n.T01}:</h3>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T02}</h3>
            <h3>{i18n.T02P}</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T03}</h3>
            <h3>{i18n.T03P}</h3>
          </div>

          <h2 className='border-b border-slate-400'>{i18n.T04}</h2>
          <ul className='list-disc pl-4 w-full'>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T05}</span><h3>{i18n.T05P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T06}</span><h3>{i18n.T06P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T07}</span><h3>{i18n.T07P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T08}</span><h3>{i18n.T08P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T09}</span><h3>{i18n.T09P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T10}</span><h3>{i18n.T10P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T11}</span><h3>{i18n.T11P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.T12}</span><h3>{i18n.T12P}</h3></li>
          </ul>
        </div>

        <div><img src='/menu/crepes-savory.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>
      </div>
    </>
  )
}

export default CrepesSavory
