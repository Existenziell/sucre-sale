const Coffee = ({ i18n }) => {
  return (
    <>
      <h1 className='menu-title'>{i18n.title}</h1>
      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div className='w-full'>

          <h2 className='border-b border-slate-400'>{i18n.T01}</h2>
          <div className='flex items-center justify-between mt-4'>
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

          <h2 className='border-b border-slate-400'>{i18n.E0}</h2>
          <ul className='list-disc pl-4 w-full'>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E01}</span><h3>{i18n.E01P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E02}</span><h3>{i18n.E02P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E03}</span><h3>{i18n.E03P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E04}</span><h3>{i18n.E04P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E05}</span><h3>{i18n.E05P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E06}</span><h3>{i18n.E06P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E07}</span><h3>{i18n.E07P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E08}</span><h3>{i18n.E08P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E10}</span><h3>{i18n.E10P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E09}</span><h3>{i18n.E09P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E11}</span><h3>{i18n.E11P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E12}</span><h3>{i18n.E12P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E13}</span><h3>{i18n.E13P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E14}</span><h3>{i18n.E14P}</h3></li>
            <li className='flex items-center justify-between w-full'><span className='list-item'>{i18n.E15}</span><h3>{i18n.E15P}</h3></li>
          </ul>
        </div>
        <div><img src='/menu/coffee1.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>

      </div>
      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/coffee.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>

        <div className='w-full'>
          <h2 className='border-b border-slate-400'>{i18n.T06}</h2>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T07}</h3>
            <h3>{i18n.T07P}</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T08}</h3>
            <h3>{i18n.T08P}</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T09}</h3>
            <h3>{i18n.T09P}</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T10}</h3>
            <h3>{i18n.T10P}</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T11}</h3>
            <h3>{i18n.T11P}</h3>
          </div>

          <h2 className='border-b border-slate-400'>{i18n.T12}</h2>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T13}</h3>
            <h3>{i18n.T13P}</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T14}</h3>
            <h3>{i18n.T14P}</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T15}</h3>
            <h3>{i18n.T15P}</h3>
          </div>

          <h2 className='border-b border-slate-400'>{i18n.T16}</h2>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T17}</h3>
            <h3>{i18n.T17P}</h3>
          </div>
          <div className='flex items-center justify-between mt-1'>
            <h3>{i18n.T18}</h3>
            <h3>{i18n.T18P}</h3>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div className='w-full'>
          <div className='flex items-center justify-between mt-10'>
            <h3>{i18n.T19}</h3>
            <h3>{i18n.T19P}</h3>
          </div>
          <p>{i18n.T20}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T21}</h3>
            <h3>{i18n.T21P}</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T22}</h3>
            <h3>{i18n.T22P}</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T23}</h3>
            <h3>{i18n.T23P}</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T24}</h3>
            <h3>{i18n.T24P}</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T25}</h3>
            <h3>{i18n.T25P}</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T26}</h3>
            <h3>{i18n.T26P}</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T27}</h3>
            <h3>{i18n.T27P}</h3>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T28}</h3>
            <h3>{i18n.T28P}</h3>
          </div>

        </div>
        <div><img src='/menu/pecan.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>

      </div>
    </>
  )
}

export default Coffee
