const Nav = ({ view, setView }) => {
  const navigate = (e) => {
    setView(e.target.name)
  }

  return (
    <ul className="flex items-center justify-between gap-4 flex-wrap w-full mt-12">
      <li><button onClick={navigate} name='all' className={view === 'all' ? `active-menu-nav` : `border-b border-transparent hover:text-brand`}>All</button></li>
      <li><button onClick={navigate} name='breakfast' className={view === 'breakfast' ? `active-menu-nav` : `border-b border-transparent hover:text-brand`}>Breakfast</button></li>
      <li><button onClick={navigate} name='specialities' className={view === 'specialities' ? `active-menu-nav` : `border-b border-transparent hover:text-brand`}>Specialities</button></li>
      <li><button onClick={navigate} name='bread' className={view === 'bread' ? `active-menu-nav` : `border-b border-transparent hover:text-brand`}>Artisanal Bread</button></li>
      <li><button onClick={navigate} name='savory' className={view === 'savory' ? `active-menu-nav` : `border-b border-transparent hover:text-brand`}>Savory Crepes</button></li>
      <li><button onClick={navigate} name='sweet' className={view === 'sweet' ? `active-menu-nav` : `border-b border-transparent hover:text-brand`}>Sweet Crepes</button></li>
      <li><button onClick={navigate} name='desserts' className={view === 'desserts' ? `active-menu-nav` : `border-b border-transparent hover:text-brand`}>Desserts</button></li>
      <li><button onClick={navigate} name='coffee' className={view === 'coffee' ? `active-menu-nav` : `border-b border-transparent hover:text-brand`}>Coffee</button></li>
    </ul>
  )
}

export default Nav
