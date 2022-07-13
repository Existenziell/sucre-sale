const Bread = ({ i18n }) => {
  return (
    <>
      <h1 className='mx-auto w-max mt-20'>{i18n.title}</h1>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/bread.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>
        <div className='w-full'>

          <div className='flex items-center justify-between'>
            <h3>{i18n.T1}</h3>
            <h3>$22.00</h3>
          </div>
          <p>{i18n.T2}</p>

          <h3 className='mt-4 mb-2'>{i18n.T3}</h3>
          <div className='flex items-center justify-between'>
            <h3>{i18n.T4}</h3>
            <h3>$75.00</h3>
          </div>
          <div className='flex items-center justify-between'>
            <h3>{i18n.T5}</h3><h3>$75.00</h3>
          </div>
          <p></p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T6}</h3>
            <h3>$55.00</h3>
          </div>
          <p>{i18n.T7}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T8}</h3>
            <h3>$65.00</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T9}</h3>
            <h3>$57.00</h3>
          </div>
          <p>{i18n.T10}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T11}</h3>
            <h3>$23.00</h3>
          </div>
          <p>{i18n.T12}</p>

        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div className='w-full'>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T13}</h3>
            <h3>$34.00</h3>
          </div>
          <p>{i18n.T14}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T15}</h3>
            <h3>$12.00</h3>
          </div>
          <p>{i18n.T16}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T17}</h3>
            <h3>$30.00</h3>
          </div>
          <p>{i18n.T18}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T19}</h3>
            <h3>$30.00</h3>
          </div>
          <p>{i18n.T20}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T21}</h3>
            <h3>$30.00</h3>
          </div>
          <p>{i18n.T22}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T23}</h3>
            <h3>$25.00</h3>
          </div>

        </div>
        <div><img src='/menu/bread2.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>
      </div>


      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/bread3.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>
        <div className='w-full'>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T24}</h3>
            <h3>$33.00</h3>
          </div>
          <p>{i18n.T25}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T26}</h3>
            <h3>$17.00</h3>
          </div>
          <p>{i18n.T27}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T28}</h3>
            <h3>$25.00</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T29}</h3>
            <h3>$28.00</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T30}</h3>
            <h3>$26.00</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T31}</h3>
            <h3>$36.00</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T32}</h3>
            <h3>$7.00</h3>
          </div>
          <p>{i18n.T33}</p>
        </div>
      </div>
    </>
  )
}

export default Bread
