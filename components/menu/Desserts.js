const Desserts = ({ i18n }) => {

  return (
    <>
      <h1 className='menu-title'>{i18n.title}</h1>
      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div className='w-full'>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T01}</h3>
            <h3>{i18n.T01P}</h3>
          </div>
          <p>{i18n.T02}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T03}</h3>
            <h3>{i18n.T03P}</h3>
          </div>
          <p>{i18n.T04}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T05}</h3>
            <h3>{i18n.T05P}</h3>
          </div>
          <p>{i18n.T06}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T07}</h3>
            <h3>{i18n.T07P}</h3>
          </div>
          <p>{i18n.T08}</p>

        </div>
        <div><img src='/menu/fraises.jpg' alt={i18n.title} className='rounded shadow md:mx-0 max-h-80' /></div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center mb-8'>
        <div><img src='/menu/tarte.jpg' alt='Tarte' className='rounded shadow md:mx-0 max-h-80' /></div>
        <div className='w-full'>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T09}</h3>
            <h3>{i18n.T09P}</h3>
          </div>
          <p>{i18n.T10}</p>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T11}</h3>
            <h3>{i18n.T11P}</h3>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <h3>{i18n.T12}</h3>
            <h3>{i18n.T12P}</h3>
          </div>

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
        </div>

      </div>
    </>
  )
}

export default Desserts
