const Specialities = ({ i18n }) => {
  return (
    <>
      <h1 className='mx-auto w-max mt-12'>{i18n.title}</h1>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/specialities.jpg' alt='Specialities' className='rounded shadow md:mx-0 max-h-80' /></div>
        <div>
          <div className='flex items-center justify-between'>
            <h3>{i18n.T1}:</h3>
            <h3>$65.00</h3>
          </div>
          <p>{i18n.T2}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T3}:</h3>
            <h3>$84.00</h3>
          </div>
          <p>{i18n.T4}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T5}</h3>
            <h3>$69.00</h3>
          </div>
          <p>{i18n.T6}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T7}</h3>
            <h3>$83.00</h3>
          </div>
          <p>{i18n.T8}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T9}</h3>
            <h3>$81.00</h3>
          </div>
          <p>{i18n.T10}</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div>
          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T11}</h3>
            <h3>$87.00</h3>
          </div>
          <p>{i18n.T12}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T13}</h3>
            <h3>$97.00</h3>
          </div>
          <p>{i18n.T14}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T15}</h3>
            <h3>$74.00</h3>
          </div>
          <p>{i18n.T16}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T17}</h3>
            <h3>$91.00</h3>
          </div>
          <p>{i18n.T18}</p>
        </div>
        <div><img src='/menu/specialities1.jpg' alt='Specialities' className='rounded shadow md:mx-0 max-h-80' /></div>
      </div>
    </>
  )
}

export default Specialities
