import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'
import Social from '../components/Social'
import PacmanLoader from 'react-spinners/PacmanLoader'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'
import Link from 'next/link'
import MapComponent from '../components/Map'

const Contact = ({ i18n }) => {
  // console.log(i18n.contact, i18n.map);
  const [formData, setFormData] = useState()
  const [sending, setSending] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [specialTopic, setSpecialTopic] = useState('')
  const router = useRouter()
  i18n = i18n.contact

  useEffect(() => {
    const topic = router.query.topic
    if (topic) {
      setSpecialTopic(topic)
    }
  }, [router.query.topic])

  function setData(e) {
    const { name, value } = e.target
    setFormData({ ...formData, ...{ [name]: value } })
  }

  const submitForm = async e => {
    e.preventDefault()
    setSending(true)

    let data = { ...formData }
    if (specialTopic) {
      const topic = router.query.topic
      data = { ...data, topic }
    }

    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      res.ok ?
        Router.push('/success')
        :
        setErrorMsg(`Sorry, an error occured: ${res.statusText}`)
    } catch (error) {
      setErrorMsg('Sorry, an error occured. Have you tried turning it off and on again?')
    }
  }

  const removeTopic = () => {
    // Remove query from URL, don't reload
    router.replace('/contact', undefined, { shallow: true })
    setSpecialTopic('')
  }

  return (
    <>
      <Head>
        <title>{i18n.title}</title>
        <meta name='description' content={i18n.desc} />
      </Head>

      <div className='flex flex-col items-center justify-center px-4 md:px-8 pt-24 pb-16 lg:w-2/3 lg:mx-auto'>
        <h1>{i18n.T1}</h1>
        <div className='md:flex items-center gap-8 md:text-right mb-4 md:mb-8'>
          <div className='md:w-2/3'>
            <p className='text-lg leading-relaxed mb-8'>{i18n.T2}</p>
            <Social />
            <Link href='/map'><a className='link text-lg leading-relaxed mb-8'>{i18n.T3}</a></Link>
          </div>
          <img src='/bakery/bakery_outside.jpg' alt={i18n.T1} className='hidden md:block md:w-1/2 shadow rounded' />
        </div>

        <div className='px-4 pt-8 pb-0 sm:px-12 shadow w-full bg-brand-dark rounded-lg backdrop-blur-md text-white'>
          <form onSubmit={submitForm}>
            {specialTopic &&
              <div className='flex items-center mb-8'>
                <div className='text-left bg-white/10 backdrop-blur-md px-4 py-2 max-w-max'>
                  Subject: <span className='capitalize'>{specialTopic.replaceAll('-', ' ').replaceAll('and', '&')}</span>
                </div>
                <svg xmlns='http://www.w3.org/2000/svg' onClick={removeTopic} className='h-6 w-6 ml-2 hover:text-gray-300 hover:scale-105 transition-all cursor-pointer' viewBox='0 0 20 20' fill='currentColor'>
                  <path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' />
                </svg>
              </div>
            }
            <div className='relative mb-8'>
              <input id='name' name='name' type='text' onChange={setData} required disabled={sending} className='peer h-10 w-full placeholder-transparent focus:outline-none bg-white/10 backdrop-blur-md rounded pl-4' placeholder={i18n.T4} />
              <label htmlFor='name'
                className='absolute -top-5 left-0 text-sm transition-all
                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-gray-300 peer-focus:text-sm'>{i18n.T4}</label>
            </div>
            <div className='relative mb-8'>
              <input id='email' type='email' name='email' onChange={setData} required disabled={sending} className='peer h-10 w-full placeholder-transparent focus:outline-none bg-white/10 backdrop-blur-md rounded pl-4' placeholder={i18n.T5} />
              <label htmlFor='email'
                className='absolute -top-5 left-0 text-sm transition-all
                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-gray-300 peer-focus:text-sm'>{i18n.T5}</label>
            </div>
            <div className='relative'>
              <textarea id='message' name='message' onChange={setData} rows='10' required disabled={sending} className='peer h-full w-full placeholder-transparent focus:outline-none bg-white/10 backdrop-blur-md rounded pl-4 py-4' placeholder={i18n.T6}></textarea>
              <label htmlFor='message'
                className='absolute -top-5 left-0 text-sm transition-all
                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-gray-300 peer-focus:text-sm'>{i18n.T6}</label>
            </div>

            {errorMsg ?
              <div className='text-left bg-brand text-white p-4'>
                {errorMsg}
              </div>
              :
              sending ?
                <div className='my-8 h-16 mr-16 opacity-60'>
                  <PacmanLoader color={'white'} size={30} />
                </div>
                :
                <input type='submit' className='button my-4' aria-label='Send Contact Form' value={i18n.T7}></input>
            }
          </form>
        </div>
      </div>
      <MapComponent i18n={i18n} />
    </>
  )
}

export async function getStaticProps(context) {
  let i18n
  context.locale === 'en' ?
    i18n = langEN :
    i18n = langES
  return {
    props: { i18n },
  }
}

export default Contact
