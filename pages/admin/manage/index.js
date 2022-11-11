import { getSession } from 'next-auth/client'
import { connectToDatabase } from "../../../lib/mongodb"
import Link from 'next/link'
import Head from 'next/head'
import { adminusers } from '../../../lib/config'
import { PlusIcon } from '@heroicons/react/24/outline'

const Manage = ({ categories, items }) => {
  items = JSON.parse(items)
  categories = JSON.parse(categories)

  return (
    <>
      <Head>
        <title>Admin | Manage</title>
        <meta name='description' content='Admin | Manage' />
      </Head>

      <div className='px-4 md:px-8 pt-24 pb-8 min-h-[calc(100vh-48px)]'>
        <h1 className='text-4xl mb-1'>Sucré-Salé Dashboard</h1>
        <p>Remember, with great power comes great responsibility.</p>
        <div className='text-left mt-8'>

          <div className='flex justify-between items-center'>
            <p className='font-bold mb-2'>Categories:</p>
            <Link href='/admin/manage/categories/new'>
              <a className=''>
                <PlusIcon className='w-10' />
              </a>
            </Link>
          </div>

          <div className='text-sm flex justify-start flex-wrap gap-4 w-full mb-12'>
            {categories.map(cat => (
              <div key={cat.key} className='bg-white dark:bg-black px-4 py-3 rounded-sm whitespace-nowrap'>
                <Link href={`/admin/manage/categories/${cat._id}`}>
                  <a>
                    <p className='whitespace-nowrap'>Key: {cat.key}</p>
                    <p>EN: {cat.en}</p>
                    <p>ES: {cat.es}</p>
                  </a>
                </Link>
              </div>
            ))}

          </div>


          <p className='font-bold mb-2'>Menu Items:</p>
          <div className='text-sm'>
            {items.map(item => (
              <div key={item.key} className='bg-white dark:bg-black p-4 flex justify-between gap-4 w-full'>
                <Link href={`/admin/manage/items/${item._id}`}>
                  <a className='overflow-hidden'>
                    <p className='whitespace-nowrap'>Key: {item.key}</p>
                    <p className='mb-2'>Category: {item.category}</p>
                    <p className='truncate'>EN: {item.en}</p>
                    <p className='truncate'>ES: {item.es}</p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
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
      ctx.res.setHeader("location", "/api/auth/signin")
      ctx.res.statusCode = 302
      ctx.res.end()
      return { props: {} }
    }

    const categories = await db
      .collection("categories")
      .find({})
      .toArray()

    const items = await db
      .collection("items")
      .find({})
      .toArray()

    return {
      props: {
        categories: JSON.stringify(categories),
        items: JSON.stringify(items),
      }
    }
  }
}


export default Manage
