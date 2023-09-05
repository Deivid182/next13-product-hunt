import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import db from '@/libs/db';
import bcrypt from 'bcrypt';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if(!credentials?.email || !credentials.password) {
          throw new Error('Please provide email and password')
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if(!user || !user.hashedPassword) {
          throw new Error('User not found')
        }

        const isValidPassword = await bcrypt.compare(credentials.password, user.hashedPassword) 

        if(!isValidPassword) {
          throw new Error('Invalid credentials')
        }

        return user
      }
    })
  ],
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };