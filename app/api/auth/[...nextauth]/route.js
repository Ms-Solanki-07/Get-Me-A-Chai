import NextAuth from 'next-auth'
import mongoose from 'mongoose'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'
import connectDB from '@/db/connectDB'
import User from '@/models/User'
import Payment from '@/models/Payment'

export const authoptions = NextAuth({
    providers: [
        // OAuth authentication providers...
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        // AppleProvider({
        //     clientId: process.env.APPLE_ID,
        //     clientSecret: process.env.APPLE_SECRET
        // }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_ID,
        //     clientSecret: process.env.FACEBOOK_SECRET
        // }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_SECRET
        // }),
        // Passwordless / email sign in
        // EmailProvider({
        //     server: process.env.MAIL_SERVER,
        //     from: 'NextAuth.js <no-reply@example.com>'
        // }),
    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider === 'github') {
                await connectDB()

                const userEmail = user?.email
                if (!userEmail) return false // deny sign-in if no email

                // check if user already exists in database
                const currentUser = await User.findOne({ email: userEmail })
                if (!currentUser) {
                    // create new user
                    const newUser = await User.create({
                        email: userEmail,
                        username: userEmail.split('@')[0],
                    });
                }
            }
            return true
        },
        async session({ session, user, token }) {
            const dbUser = await User.findOne({ email: session.user.email })
            if (dbUser) {
                session.user.username = dbUser.username;
            }
            console.log("Session user: ", session.user)
            return session
        },
    }
})

export { authoptions as GET, authoptions as POST }