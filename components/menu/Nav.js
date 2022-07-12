const Nav = ({ view, setView }) => {
  const navigate = (e) => {
    setView(e.target.name)
  }

  return (
    <ul className="flex items-center justify-between gap-4 flex-wrap w-full mt-12">
      <li><button onClick={navigate} name='all' className={view === 'all' ? `active-menu-nav` : `menu-nav`}>All</button></li>
      <li><button onClick={navigate} name='breakfast' className={view === 'breakfast' ? `active-menu-nav` : `menu-nav`}>Breakfast</button></li>
      <li><button onClick={navigate} name='specialities' className={view === 'specialities' ? `active-menu-nav` : `menu-nav`}>Specialities</button></li>
      <li><button onClick={navigate} name='bread' className={view === 'bread' ? `active-menu-nav` : `menu-nav`}>Artisanal Bread</button></li>
      <li><button onClick={navigate} name='savory' className={view === 'savory' ? `active-menu-nav` : `menu-nav`}>Savory Crepes</button></li>
      <li><button onClick={navigate} name='sweet' className={view === 'sweet' ? `active-menu-nav` : `menu-nav`}>Sweet Crepes</button></li>
      <li><button onClick={navigate} name='desserts' className={view === 'desserts' ? `active-menu-nav` : `menu-nav`}>Desserts</button></li>
      <li><button onClick={navigate} name='coffee' className={view === 'coffee' ? `active-menu-nav` : `menu-nav`}>Coffee</button></li>
    </ul>
  )
}

export default Nav
