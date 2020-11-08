import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const CHANGE_USER_ID="mark.davis2@gmail.com";

export default async function getProfile (req, res) {
    const user= await prisma.user.findFirst(
      { where: { email: {equals: CHANGE_USER_ID}}}
    )
    res.statusCode = 200
    res.json({ user: user })
  }