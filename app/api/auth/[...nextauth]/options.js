import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const options = {
    providers:[

        //GitHub Provider
        GitHubProvider({
            profile(profile){
                console.log("profile Github Provider:",profile);

                let userRole ="Github User"
                if(profile?.email =="sakilasandanuwan1999@gmail.com"){
                    userRole ="admin"
                }
                return{
                    ...profile,
                    role:userRole,
                }
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_Secret,

        }),

        //Google provider
        GoogleProvider({
            profile(profile){
                console.log("profile Google Provider:",profile);

                let userRole ="Google User"
                if(profile?.email =="sakilasandanuwan1999@gmail.com"){
                    userRole ="admin"
                }
                return{
                    ...profile,
                    id:profile.sub,
                    role:userRole,
                }

            },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_Secret,
        })
    ],
    callback:{
        async jwt({token,user}){
            if(user)token.role =user.role
            return token;
        },
        async session({session,token}){
            if(session?.user) session.user.role = token.role
            return session;
        }
    }
}