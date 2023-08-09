import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    id: string
    username: string
    createdAt : Date
    updatedAt : Date
  }

  interface Session {
    user?: User;
  }

}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    username: string
    createdAt : Date
    updatedAt : Date
  }
}