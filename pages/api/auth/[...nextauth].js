import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  providers: [
    Providers.Auth0({
      clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
    }),
  ],
  database: process.env.NEXT_MONGODB_URI,
  session: {
    jwt: false,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  pages: {
    // signIn: '/api/auth/signin',  // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
  callbacks: {
    session: async (session, user) => {
      session.user.id = user.id
      /* eslint-disable no-undef */
      return Promise.resolve(session)
      /* eslint-enable no-undef */
    }
  },
  events: {},
  debug: false,
})
