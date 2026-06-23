import GoogleProvider from "next-auth/providers/google";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                prompt: "consent",
                access_type: "offline",
                response_type: "code"
                }
            }
        })
    ], 
    callbacks: {
        // 1. invoked on successful signin
        async signIn({ profile }) {
            // 1. connect to the db
            // 2. check if user exists
            // 3. if not, then add user to db
            // 4. return true to allow sign in 
        },

        // 2. Modify the session object
        async session({ session }) {
            // 1. get user from db
            // 2. assign the user id to the session
            // 3. return session 
        }
    }
};

export default authOptions;