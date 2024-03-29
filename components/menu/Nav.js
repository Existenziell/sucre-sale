const Nav = ({ view, setView, i18n }) => {
  const navigate = (e) => {
    setView(e.target.name)
  }

  return (
    <ul className="flex items-center text-sm justify-start md:justify-between gap-2 md:gap-0 flex-wrap w-full mb-6 md:mb-2">
      <li><button onClick={navigate} name='all' className={view === 'all' ? `active-menu-nav` : `menu-nav`}>{i18n.N1}</button></li>
      <li><button onClick={navigate} name='breakfast' className={view === 'breakfast' ? `active-menu-nav` : `menu-nav`}>{i18n.N2}</button></li>
      <li><button onClick={navigate} name='specialities' className={view === 'specialities' ? `active-menu-nav` : `menu-nav`}>{i18n.N3}</button></li>
      <li><button onClick={navigate} name='bread' className={view === 'bread' ? `active-menu-nav` : `menu-nav`}>{i18n.N4}</button></li>
      <li><button onClick={navigate} name='savory' className={view === 'savory' ? `active-menu-nav` : `menu-nav`}>{i18n.N5}</button></li>
      <li><button onClick={navigate} name='sweet' className={view === 'sweet' ? `active-menu-nav` : `menu-nav`}>{i18n.N6}</button></li>
      <li><button onClick={navigate} name='desserts' className={view === 'desserts' ? `active-menu-nav` : `menu-nav`}>{i18n.N7}</button></li>
      <li><button onClick={navigate} name='coffee' className={view === 'coffee' ? `active-menu-nav` : `menu-nav`}>{i18n.N8}</button></li>
    </ul>
  )
}

export default Nav
