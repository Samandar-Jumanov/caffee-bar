import NextAuth, { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcrypt';
import prisma from '../../../../../prisma/prisma'; // Adjust this import path to where your Prisma client is initialized
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { ICredentials } from '@/types/types'; 

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        name: { label: "Username", type: "text", placeholder: "Optional" }, 
        password: { label: "Password", type: "password" },
      },
      async authorize( credentials : ICredentials | any  )  {
        if (!credentials.email || !credentials.password) {
          throw new Error('Email and password are required');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (user && user.password) {
          const passwordMatch = await bcrypt.compare(credentials.password, user.password  as string  );

          if (!passwordMatch) {
            throw new Error('Incorrect password');
          }

          return user; 
        } else if (!user && credentials.name) {
          const newUser = await prisma.user.create({
            data: {
              email: credentials.email as string ,
              name: credentials.username as string ,
              password: await bcrypt.hash(credentials.password, 10),
            },
          });

          return newUser; 
        }

        throw new Error('User not found');
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
};


const handler = NextAuth(authOptions)
export { handler as GET , handler as POST }
