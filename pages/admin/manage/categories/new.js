import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function NewCategory() {
  const [key, setKey] = useState()
  const [en, setEn] = useState()
  const [es, setEs] = useState()
  const router = useRouter()

  const createCategory = async (e) => {
    e.preventDefault()
    const data = JSON.stringify({ key, en, es })
    try {
      const res = await fetch('/api/createCategory', {
        method: "post",
        body: data,
        headers: { "Content-Type": "application/json" }
      })
      if (res.status === 200) {
        router.push('/admin/manage')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <Head>
        <title>Admin | Add Category</title>
        <meta name='description' content='Admin | Add Category' />
      </Head>

      <div className='w-full px-8 py-24 min-h-[calc(100vh-48px)]'>
        <div className='mt-10 pb-24'>
          <div className='flex flex-col w-full'>
            <h1 className='text-2xl'>Create Category</h1>
            <form onSubmit={createCategory} className='flex flex-col my-8 gap-2 w-full md:w-1/2 md:mx-auto'>
              <input
                type='text'
                required
                onChange={(e) => setKey(e.target.value)}
                autoComplete='off'
                autoCorrect='off'
                autoCapitalize='false'
                placeholder="Key"
                className='p-2 text-sm border-2 border-transparent rounded-sm text-black bg-brand-dark
                dark:text-white dark:bg-brand/20 dark:border-brand-dark dark:focus:border-brand
                focus:outline-none focus:ring-0 focus:border-brand-dark'
              />

              <textarea
                rows={5}
                type='text'
                required
                onChange={(e) => setEn(e.target.value)}
                autoComplete='off'
                autoCorrect='off'
                spellCheck='false'
                autoCapitalize='false'
                placeholder='English'
                className='p-2 text-sm border-2 border-transparent rounded-sm text-black bg-brand-dark
                  dark:text-white dark:bg-brand/20 dark:border-brand-dark dark:focus:border-brand
                  focus:outline-none focus:ring-0 focus:border-brand-dark'
              >
              </textarea>

              <textarea
                rows={5}
                type='text'
                required
                onChange={(e) => setEs(e.target.value)}
                autoComplete='off'
                autoCorrect='off'
                spellCheck='false'
                autoCapitalize='false'
                placeholder='Spanish'
                className='p-2 text-sm border-2 border-transparent rounded-sm text-black bg-brand-dark
                  dark:text-white dark:bg-brand/20 dark:border-brand-dark dark:focus:border-brand
                  focus:outline-none focus:ring-0 focus:border-brand-dark'
              >
              </textarea>

              <button type='submit' className='button'>Save</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
