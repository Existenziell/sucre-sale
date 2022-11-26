import { getSession, signIn, signOut } from 'next-auth/client'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

const Admin = ({ session, isAdmin }) => {
  return (
    <>
      <Head>
        <title>Admin</title>
        <meta name='description' content='Admin' />
      </Head>

      <div className='flex flex-col items-center justify-center px-4 md:px-8 pt-24 pb-8 lg:w-2/3 lg:mx-auto min-h-[calc(100vh-48px)]'>
        {!session ?
          <button onClick={() => signIn('auth0')} className='button'>
            Sign in
          </button>
          :
          <div className="flex flex-col items-center justify-center flex-wrap px-8">
            {session?.user?.image &&
              <div className="flex flex-row flex-wrap justify-between gap-6 shadow-md bg-white dark:bg-black rounded p-8 w-full">
                <div className="w-full md:w-1/3">
                  <Image
                    src={session.user.image}
                    width={200}
                    height={200}
                    layout={'responsive'}
                    objectFit={'cover'}
                    alt="Avatar"
                    priority={true}
                  />
                </div>

                {isAdmin &&
                  <Link href='/admin/manage'>
                    <a className='button flex h-max'>Manage Menu</a>
                  </Link>
                }

                <div>
                  <p className="mb-4 text-2xl">Welcome {session.user.name}</p>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {session.user.email}
                  </div>

                  <a href='#' onClick={() => signOut()} className='flex'>
                    <svg className="w-6 h-6 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign out
                  </a>
                </div>
              </div>
            }
          </div>
        }
      </div>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  if (!session) {
    return { props: {} }
  } else {
    const isAdmin = process.env.ADMIN_USERS.split(',').includes(session.user.email)
    return {
      props: {
        session,
        isAdmin
      }
    }
  }
}

export default Admin
