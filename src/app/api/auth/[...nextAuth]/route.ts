import NextAuth, { NextAuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '../../../../../prisma/prisma'; 
import { config } from 'dotenv';
config();

const handler: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],

  callbacks: {
    async session({ session, user }) {
      if (user && user.email) {
        const sessionUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (sessionUser) {
          (session.user as any & User).id = sessionUser.id;
        }
      }

      return session;
    },
    async signIn({ account, profile } : any ) {
      if (account.provider === 'google') {
        try {
          const email = profile.email ?? '';
          const userExists = await prisma.user.findUnique({
            where: { email : email  },
          });

          if (!userExists) {
            await prisma.user.create({
              data: {
                email,
                username: profile.name?.replace(' ', '').toLowerCase() ?? '',
                image: profile.picture ?? '',
              },
            });
          }

          return true;
        } catch (error : any ) {
          console.error('Error checking if user exists: ', error.message);
          return false;
        }
      }
      return true; 
    },
  },
};

export default NextAuth(handler);
