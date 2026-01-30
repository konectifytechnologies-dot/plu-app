import CredentialsProvider from "next-auth/providers/credentials";
import api from "./axios";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        login: { label: "Login", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.login || !credentials?.password) {
          return null;
        }

            const data = {
                login: credentials.login,
                password:credentials.password
            };
            
           
            const result = await fetch('http://localhost:8000/api/login', {
                  method: 'POST',
                  body: JSON.stringify(data),
                  headers: {
                      'Content-Type': 'application/json'
                  }
              });
            const response = await result.json()
            console.log(response)
            if(result.status === 401 || result.status === 404 || response.code === 3){
                throw new Error(response.error)
            } 
            const user = {
                name:response.user.name,
                id:response.user.id,
                role:response.user.role,
                token:response.token,
                email:response.user.email,
                number:response.user.number
            }
           
            if(result.ok && response){
                return user
            }else{
              throw new Error(response.error)
            }



      },
    }),
  ],

  // Needed for JWT sessions
  session: {
      strategy: "jwt",
      maxAge: 60 * 60,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },



  // Customize JWT + Session callback
  callbacks: {
    async jwt({ token, user }) {
          if(user){
              token.id = user.id,
              token.jwt = user.token
              token.email = user.email
              token.number = user.number,
              token.name = user.name
              token.role = user.role
          }
          return token
      },

    async session({ session, token }) {
      if (token && session.user) {
        session.token = token.jwt,
        session.id = token.id,
        session.number = token.number,
        session.email = token.email
        session.name = token.name
        session.role = token.role

      }
      return session;
    },
  },
};

