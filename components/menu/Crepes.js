const Crepes = ({ i18n }) => {
  return (
    <>
      <h1 className='menu-title'>{i18n.title}</h1>
      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/crepe.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>

        <div className='w-full'>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T01}</h3>
            <h3>{i18n.T01P}</h3>
          </div>

          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T02}</h3>
            <h3>{i18n.T02P}</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T03}</h3>
            <h3>{i18n.T03P}</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T04}</h3>
            <h3>{i18n.T04P}</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T05}</h3>
            <h3>{i18n.T05P}</h3>
          </div>

          <h2 className='border-b border-slate-400'>{i18n.T06}</h2>
          <ul className='list-disc pl-4 w-full'>
            <li className='flex items-center justify-between w-full mb-2'><span className='list-item'>{i18n.T07}</span><span>{i18n.T07P}</span></li>
            <li className='flex items-center justify-between w-full mb-2'><span className='list-item'>{i18n.T08}</span><span>{i18n.T08P}</span></li>
            <li className='flex items-center justify-between w-full mb-2'><span className='list-item'>{i18n.T09}</span><span>{i18n.T09P}</span></li>
            <li className='flex items-center justify-between w-full mb-2'><span className='list-item'>{i18n.T10}</span><span>{i18n.T10P}</span></li>
            <li className='flex items-center justify-between w-full mb-2'><span className='list-item'>{i18n.T11}</span><span>{i18n.T11P}</span></li>
          </ul>

        </div>
      </div>
    </>
  )
}

export default Crepes
