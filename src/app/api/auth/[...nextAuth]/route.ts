import NextAuth from 'next-auth';
import prisma from "../../../../../prisma/prisma"
import GoogleProvider from 'next-auth/providers/google';
import  CredientialsProvider  from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from "bcrypt"


const authOptions    = {
     adapter : PrismaAdapter(prisma),
     providers : [
          GithubProvider({
            clientId : process.env.GITHUB_CLIENT_ID,
            clientSecret :process.env.GITHUB_CLIENT_SECRET
          }),
          GoogleProvider({
            clientId :  process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET
          }),
          CredientialsProvider({
              name  : "credientials",
              credentials : {
                   email : {label : "Email", type : "email"},
                   username : {label : "Username", type : "text"},
                   password : {label : "Password", type : "password"}
              },

              async authorize(credientials) : Promise<any> {
               if(!credientials.email || !credientials.password) {



                
                    throw new Error('Please enter an email and password')
                }

                // check to see if user exists
                const user = await prisma.user.findUnique({
                    where: {
                        email: credientials.email
                    }
                });

                // if no user was found 
                if (!user || !user?.hashedPassword) {
                    throw new Error('No user found')
                }

                // check to see if password matches
                const passwordMatch = await bcrypt.compare(credientials.password, user.hashedPassword)

                // if password does not match
                if (!passwordMatch) {
                    throw new Error('Incorrect password')
                }

                return user;
              }
          })
     ],
     secret : "bjdkfgkrguhiuthiu",
      session : {
          strategy : "jwt"
      },
      debug : process.env.NODE_ENV === "development"
}


const handler = NextAuth(authOptions);


export { handler as POST , handler as GET }