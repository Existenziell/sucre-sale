import Link from 'next/link'
import Head from 'next/head'
import BackBtn from '../../../../components/BackBtn'
import { getSession } from 'next-auth/client'
import { useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { useRouter } from 'next/router'
import { ObjectId } from 'mongodb'
import { connectToDatabase } from "../../../../lib/mongodb"

const Category = ({ category }) => {
  category = JSON.parse(category)
  const router = useRouter()
  const [enTrans, setEnTrans] = useState(category.en)
  const [esTrans, setEsTrans] = useState(category.es)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const saveEdits = async (e) => {
    e.preventDefault()
    setLoading(true)
    const data = JSON.stringify({ key: category.key, id: category._id, en: enTrans, es: esTrans })
    try {
      const res = await fetch('/api/updateCategory', {
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

  const deleteCategory = async (e) => {
    e.preventDefault()

    setShowDeleteModal(false)
    setLoading(true)
    try {
      const res = await fetch('/api/deleteCategory', {
        method: "post",
        body: JSON.stringify(category._id),
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
        <title>Admin | Manage Category</title>
        <meta name='description' content='Admin | Manage Category' />
      </Head>

      {loading ?
        <div className='min-h-[calc(100vh-48px)] w-full flex items-center justify-center'><PulseLoader color='var(--color-brand)' className='w-10' /></div>
        :
        <div className='px-4 md:px-8 pt-24 pb-8 min-h-[calc(100vh-48px)] text-left'>
          <BackBtn link='/admin/manage' />
          <div className='text-center'>
            <p className='text-4xl text-center'>Edit Category</p>
            <p>Id: <span>{category._id}</span></p>
            <p>Key: <span>{category.key}</span></p>
          </div>

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
                defaultValue={category.en}
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
                defaultValue={category.es}
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

            <input type='submit' className='button button-sm mt-8 mr-4' value='Save' />
            <Link href='/admin/manage/'><a className='textlink'>Cancel</a></Link>
          </form>

          <button onClick={() => setShowDeleteModal(true)} className='text-gray-400 mt-24'>Delete Category</button>
        </div>
      }

      {showDeleteModal &&
        <div className='absolute top-0 bottom-0 left-0 right-0 w-screen h-screen bg-black/30 backdrop-blur z-20 flex items-center justify-center'>
          <div className='bg-white text-brand-dark rounded px-6 py-4'>
            <p className='text-xl'>Are you sure you want to delete this category?</p>
            <p className='text-sm mb-4'>This action cannot be undone!</p>
            <div className='flex gap-4 justify-center'>
              <button onClick={deleteCategory} className='text-red-600 hover:underline'>Yes</button>
              <p onClick={() => setShowDeleteModal(false)} className=' cursor-pointer hover:underline'>Cancel</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export async function getServerSideProps(ctx) {
  const id = ctx.query.id
  const { db } = await connectToDatabase()
  const session = await getSession(ctx)

  if (!session) {
    ctx.res.setHeader("location", "/")
    ctx.res.statusCode = 302
    ctx.res.end()
    return { props: {} }
  } else {
    const isAdmin = process.env.ADMIN_USERS.split(',').includes(session.user.email)
    if (!isAdmin) {
      ctx.res.setHeader("location", "/")
      ctx.res.statusCode = 302
      ctx.res.end()
      return { props: {} }
    }

    const category = await db
      .collection("categories")
      .findOne({ _id: ObjectId(id) })

    return {
      props: {
        category: JSON.stringify(category),
      }
    }
  }
}


export default Category
