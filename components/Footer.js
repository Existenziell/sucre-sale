import Link from 'next/link'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Footer = () => {
  const router = useRouter()
  const { ref, inView } = useInView({})
  const fadeIn = useAnimation()
  const { pathname, asPath, query } = router

  // https://nextjs.org/docs/advanced-features/i18n-routing
  const setLanguage = (e) => {
    if (router.locale !== e.target.name) {
      router.push({ pathname, query }, asPath, { locale: e.target.name })
    }
  }

  useEffect(() => {
    inView ?
      fadeIn.start({
        opacity: 1,
        transition: {
          duration: 1.5,
        },
      })
      :
      fadeIn.start({
        opacity: 0,
      })
  }, [inView, fadeIn])

  return (
    <footer ref={ref} className='static bottom-0 flex items-center justify-between w-full px-4 py-1 text-xs
    text-gray-500 transition-all bg-cloth-pattern border-t border-black border-opacity-10
      dark:bg-none dark:bg-brand-dark dark:border-brand dark:border-opacity-10 bg-brand'>

      {router.pathname !== '/' ?
        <Link href='/' passHref>
          <motion.a animate={fadeIn} className='' aria-label='Back Home'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 hover:text-brand transition-colors cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.a>
        </Link>
        :
        <div></div>
      }
      <motion.a animate={fadeIn} href='#top' aria-label='Scroll back up'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 hover:text-brand transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.a>

      <div className='flex items-center gap-2'>
        <button onClick={setLanguage}><img src='/icons/mex.jpg' alt='Mexico Flag' name='es' className='grayscale h-4' /></button>
        <button onClick={setLanguage}><img src='/icons/usa.jpg' alt='USA Flag' name='en' className='grayscale h-4' /></button>
      </div>

    </footer>
  )
}

export default Footer
