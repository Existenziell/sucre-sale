const Desserts = ({ i18n }) => {

  return (
    <>

      <h1 className='mx-auto w-max mt-20'>{i18n.title}</h1>
      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div className='w-full'>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T1}</h3>
            <h3>$58.00</h3>
          </div>
          <p>{i18n.T2}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T3}</h3>
            <h3>$62.00</h3>
          </div>
          <p>{i18n.T4}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T5}</h3>
            <h3>$51.00</h3>
          </div>
          <p>{i18n.T6}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T7}</h3>
            <h3>$62.00</h3>
          </div>
          <p>{i18n.T8}</p>

        </div>
        <div><img src='/menu/fraises.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/tarte.jpg' alt='Tarte' className='rounded shadow md:mx-0 max-h-80' /></div>
        <div className='w-full'>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T9}</h3>
            <h3>$53.00</h3>
          </div>
          <p>{i18n.T10}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T11}</h3>
            <h3>$49.00</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T12}</h3>
            <h3>$46.00</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T13}</h3>
            <h3>$49.00</h3>
          </div>
          <p>{i18n.T14}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T15}</h3>
            <h3>$62.00</h3>
          </div>
          <p>{i18n.T16}</p>
        </div>

      </div>
    </>
  )
}

export default Desserts
