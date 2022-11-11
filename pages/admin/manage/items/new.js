import Head from 'next/head'
import Select from 'react-select'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { connectToDatabase } from '../../../../lib/mongodb'
import { getSession } from 'next-auth/client'
import { adminusers } from '../../../../lib/config'
import { PulseLoader } from 'react-spinners'

export default function NewItem({ categories }) {
  categories = JSON.parse(categories)
  const [key, setKey] = useState()
  const [en, setEn] = useState()
  const [es, setEs] = useState()
  const [category, setCategory] = useState()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const categoryOptions = categories.map(cat => (
    { value: cat._id, label: cat.en }
  ))

  const createItem = async (e) => {
    e.preventDefault()
    setLoading(true)
    const data = JSON.stringify({ key, en, es, category })
    try {
      const res = await fetch('/api/createItem', {
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
        <title>Admin | Add Item</title>
        <meta name='description' content='Admin | Add Item' />
      </Head>

      {loading ?
        <div className='min-h-[calc(100vh-48px)] w-full flex items-center justify-center'><PulseLoader color='var(--color-brand)' className='w-10' /></div>
        :
        <div className='w-full px-8 py-24 min-h-[calc(100vh-48px)]'>
          <div className='mt-10 pb-24'>
            <div className='flex flex-col w-full'>
              <p className='text-2xl'>Create Item</p>
              <form onSubmit={createItem} className='flex flex-col my-8 gap-2 w-full md:w-1/2 md:mx-auto'>
                <input
                  type='text'
                  required
                  onChange={(e) => setKey(e.target.value)}
                  autoComplete='off'
                  autoCorrect='off'
                  autoCapitalize='false'
                  placeholder="Key"
                  className='p-2 text-sm border-2 border-transparent rounded-sm text-white bg-brand-dark
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
                  className='p-2 text-sm border-2 border-transparent rounded-sm text-white bg-brand-dark
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
                  className='p-2 text-sm border-2 border-transparent rounded-sm text-white bg-brand-dark
                  dark:text-white dark:bg-brand/20 dark:border-brand-dark dark:focus:border-brand
                  focus:outline-none focus:ring-0 focus:border-brand-dark'
                >
                </textarea>

                <p>Category:</p>
                <Select
                  options={categoryOptions}
                  onChange={(e) => setCategory(e.value)}
                  instanceId
                />

                <button type='submit' className='button max-w-max mx-auto mt-6'>Save</button>
              </form>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export async function getServerSideProps(ctx) {
  const { db } = await connectToDatabase()
  const session = await getSession(ctx)

  if (!session) {
    ctx.res.setHeader("location", "/")
    ctx.res.statusCode = 302
    ctx.res.end()
    return { props: {} }
  } else {
    if (!adminusers.includes(session.user.email)) {
      ctx.res.setHeader("location", "/")
      ctx.res.statusCode = 302
      ctx.res.end()
      return { props: {} }
    }

    const categories = await db
      .collection("categories")
      .find({})
      .toArray()

    return {
      props: {
        categories: JSON.stringify(categories),
      }
    }
  }
}
