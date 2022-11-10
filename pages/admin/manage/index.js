import { getSession } from 'next-auth/client'
import { connectToDatabase } from "../../../lib/mongodb"
import Link from 'next/link'
import Head from 'next/head'
import { adminusers } from '../../../lib/config'

const Manage = ({ items }) => {
  items = JSON.parse(items)
  return (
    <>
      <Head>
        <title>Admin | Manage</title>
        <meta name='description' content='Admin | Manage' />
      </Head>

      <div className='px-4 md:px-8 pt-24 pb-8 min-h-[calc(100vh-50px)]'>
        <h1 className='text-4xl mb-1'>Sucré-Salé Dashboard</h1>
        <p>Remember, with great power comes great responsibility.</p>
        <div className='text-left mt-8'>
          <p className='font-bold mb-2'>Menu Items:</p>
          <div className='text-sm'>
            {items.map(item => (
              <div key={item.key} className='bg-white dark:bg-black p-4 flex justify-between gap-4 w-full'>
                <Link href={`/admin/manage/${item.key}`}>
                  <a>
                    <p className='whitespace-nowrap'>Key: {item.key}</p>
                    <p className='mb-2'>Category: {item.category}</p>
                    <p>EN: {item.en}</p>
                    <p>ES: {item.es}</p>
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
      ctx.res.setHeader("location", "/")
      ctx.res.statusCode = 302
      ctx.res.end()
      return { props: {} }
    }

    const items = await db
      .collection("items")
      .find({})
      .toArray()

    return {
      props: {
        items: JSON.stringify(items),
      }
    }
  }
}


export default Manage
