import Link from 'next/link'
import Head from 'next/head'
import Select from 'react-select'
import { getSession } from 'next-auth/client'
import { connectToDatabase } from "../../../lib/mongodb"
import { adminusers } from '../../../lib/config'
import { useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { useRouter } from 'next/router'
import { categories } from '../../../lib/config'

const Manage = ({ item }) => {
  item = JSON.parse(item)
  const router = useRouter()
  const [enTrans, setEnTrans] = useState(item.en)
  const [esTrans, setEsTrans] = useState(item.es)
  const [category, setCategory] = useState(item.cat)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const categoryOptions = categories.map(cat => (
    { value: cat.key, label: cat.en }
  ))

  const saveEdits = async (e) => {
    e.preventDefault()
    setLoading(true)
    const data = JSON.stringify({ key: item.key, id: item._id, en: enTrans, es: esTrans, category })
    try {
      const res = await fetch('/api/updateItem', {
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

  const deleteItem = async (e) => {
    e.preventDefault()
    console.log(item._id);
    setShowDeleteModal(false)
    setLoading(true)
    try {
      const res = await fetch('/api/deleteItem', {
        method: "post",
        body: JSON.stringify(item._id),
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
        <title>Admin | Manage Item</title>
        <meta name='description' content='Admin | Manage Item' />
      </Head>

      {loading ?
        <div className='min-h-[calc(100vh-50px)] w-full flex items-center justify-center'><PulseLoader color='var(--color-brand)' className='w-10' /></div>
        :
        <div className='px-4 md:px-8 pt-24 pb-8 min-h-[calc(100vh-50px)] text-left'>
          <p>Id: <span>{item._id}</span></p>
          <p>Key: <span className='whitespace-nowrap'>{item.key}</span></p>
          <form onSubmit={saveEdits} className='mt-8'>
            <label htmlFor='english'>
              English
              <input
                type='text'
                name='english'
                id='english'
                required
                disabled={loading}
                onChange={(e) => setEnTrans(e.target.value)}
                defaultValue={item.en}
                autoComplete='off'
                autoCorrect='off'
                spellCheck='false'
                autoCapitalize='false'
                placeholder='English Translation'
                className='px-4 py-3 text-sm border-2 border-transparent rounded-sm text-black bg-white w-full
              dark:text-white dark:bg-black dark:border-brand-dark dark:focus:border-brand
              focus:outline-none focus:ring-0 focus:border-brand-dark'
              />
            </label>
            <label htmlFor='spanish' className='mt-6 block'>
              Spanish
              <input
                type='text'
                name='spanish'
                id='spanish'
                required
                disabled={loading}
                onChange={(e) => setEsTrans(e.target.value)}
                defaultValue={item.es}
                autoComplete='off'
                autoCorrect='off'
                spellCheck='false'
                autoCapitalize='false'
                placeholder='Spanish Translation'
                className='px-4 py-3 text-sm border-2 border-transparent rounded-sm text-black bg-white w-full
              dark:text-white dark:bg-black dark:border-brand-dark dark:focus:border-brand
              focus:outline-none focus:ring-0 focus:border-brand-dark'
              />
            </label>

            <p className='mt-6'>Category:</p>
            <Select
              options={categoryOptions}
              onChange={(e) => setCategory(e.value)}
              instanceId
              defaultValue={categoryOptions.filter(o => o.value === item.category)}
              disabled={loading}
            />
            <input type='submit' className='button button-sm mt-8 mr-2' value='Save' />
            <Link href='/admin/manage/'><a>Cancel</a></Link>
          </form>

          <button onClick={() => setShowDeleteModal(true)} className='text-red-600 mt-24'>Delete Item</button>
        </div>
      }

      {showDeleteModal &&
        <div className='absolute top-0 bottom-0 left-0 right-0 w-screen h-screen bg-black/30 backdrop-blur z-20 flex items-center justify-center'>
          <div className=''>
            <p className='text-xl'>Are you sure you want to delete this item?</p>
            <p className='text-sm mb-4'>This action cannot be undone!</p>
            <div className='flex gap-4 justify-center'>
              <button onClick={deleteItem} className='text-red-600 hover:underline'>Yes</button>
              <p onClick={() => setShowDeleteModal(false)} className=' cursor-pointer hover:underline'>Cancel</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export async function getServerSideProps(ctx) {
  const key = ctx.query.key
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

    const item = await db
      .collection("items")
      .findOne({ key })

    return {
      props: {
        item: JSON.stringify(item),
      }
    }
  }
}


export default Manage
