import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const validEmail = "admin@gmail.com";
        const validPassword = "admin";

        if (
          credentials?.email === validEmail &&
          credentials?.password === validPassword
        ) {
          return { id: "1", name: "Admin", email: validEmail };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Optional: Custom sign-in page
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
});
