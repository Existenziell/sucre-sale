import { useRouter } from 'next/router'
import NextNprogress from 'nextjs-progressbar'
import Footer from './Footer'
import Nav from './Nav'
import DarkModeToggle from './DarkModeToggle'

const Layout = ({ children }) => {

  const router = useRouter()

  return (
    <>
      <NextNprogress
        height={3}
        startPosition={0.3}
        stopDelayMs={100}
        showOnShallow={true}
        color='var(--color-brand)'
        options={{ showSpinner: false }}
      />
      <Nav />
      <DarkModeToggle />

      <main className='w-full text-center bg-cloth-pattern bg-repeat dark:bg-none dark:bg-brand-dark dark:text-gray-300'>
        {children}
      </main>

      {router.pathname != '/map' &&
        <Footer />
      }
    </>
  )
}

export default Layout
