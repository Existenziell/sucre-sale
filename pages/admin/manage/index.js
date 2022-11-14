import Link from 'next/link'
import Head from 'next/head'
import ItemsTable from '../../../components/ItemsTable'
import CategoriesList from '../../../components/CategoriesList'
import { getSession } from 'next-auth/client'
import { connectToDatabase } from "../../../lib/mongodb"
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
        <p className='text-4xl mb-1'>Sucré-Salé Dashboard</p>
        <p>Remember, with great power comes great responsibility.</p>
        <div className='text-left mt-8'>

          <p className='font-bold mb-2'>Categories:</p>
          <CategoriesList categories={categories} />

          <div className='flex justify-between items-center mb-2'>
            <p className='font-bold'>Menu Items:</p>
            <Link href='/admin/manage/items/new'>
              <a title='Add Item'>
                <PlusIcon className='w-10' />
              </a>
            </Link>
          </div>
          <ItemsTable items={items} />
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

    items.forEach(item => {
      const filtered = categories.filter(cat => (cat._id.toString() === item.category.toString()))
      if (filtered?.length) item.categoryName = filtered[0].en
    })

    categories.forEach(category => {
      category.items = items.filter(item => (item.category.toString() === category._id.toString()))
    })

    return {
      props: {
        categories: JSON.stringify(categories),
        items: JSON.stringify(items),
      }
    }
  }
}


export default Manage
