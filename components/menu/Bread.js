const Bread = ({ i18n }) => {
  return (
    <>
      <h1 className='menu-title'>{i18n.title}</h1>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/bread.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>
        <div className='w-full'>

          <div className='flex items-center justify-between'>
            <h3>{i18n.T01}</h3>
            <h3>{i18n.T01P}</h3>
          </div>
          <p>{i18n.T02}</p>

          <h3 className='mt-4 mb-2'>{i18n.T03}</h3>
          <div className='flex items-center justify-between'>
            <h3>{i18n.T04}</h3>
            <h3>{i18n.T04P}</h3>
          </div>
          <div className='flex items-center justify-between'>
            <h3>{i18n.T05}</h3>
            <h3>{i18n.T05P}</h3>
          </div>
          <p></p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T06}</h3>
            <h3>{i18n.T06P}</h3>
          </div>
          <p>{i18n.T07}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T08}</h3>
            <h3>{i18n.T08P}</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T09}</h3>
            <h3>{i18n.T09P}</h3>
          </div>
          <p>{i18n.T10}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T11}</h3>
            <h3>{i18n.T11P}</h3>
          </div>
          <p>{i18n.T12}</p>

        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div className='w-full'>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T13}</h3>
            <h3>{i18n.T13P}</h3>
          </div>
          <p>{i18n.T14}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T15}</h3>
            <h3>{i18n.T15P}</h3>
          </div>
          <p>{i18n.T16}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T17}</h3>
            <h3>{i18n.T17P}</h3>
          </div>
          <p>{i18n.T18}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T19}</h3>
            <h3>{i18n.T19P}</h3>
          </div>
          <p>{i18n.T20}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T21}</h3>
            <h3>{i18n.T21P}</h3>
          </div>
          <p>{i18n.T22}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T23}</h3>
            <h3>{i18n.T23P}</h3>
          </div>

        </div>
        <div><img src='/menu/bread2.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>
      </div>


      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/bread3.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>
        <div className='w-full'>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T24}</h3>
            <h3>{i18n.T24P}</h3>
          </div>
          <p>{i18n.T25}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T26}</h3>
            <h3>{i18n.T26P}</h3>
          </div>
          <p>{i18n.T27}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T28}</h3>
            <h3>{i18n.T28P}</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T29}</h3>
            <h3>{i18n.T29P}</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T30}</h3>
            <h3>{i18n.T30P}</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T31}</h3>
            <h3>{i18n.T31P}</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T32}</h3>
            <h3>{i18n.T32P}</h3>
          </div>
          <p>{i18n.T33}</p>
        </div>
      </div>
    </>
  )
}

export default Bread
