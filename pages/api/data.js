import { data } from "autoprefixer"

const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const { email, ...userData } = req.body
  const user = await prisma.user.findUnique({
    where: { email },
  })

  const result = user
    ? await prisma.user.update({
        where: { email },
        data: userData,
      })
    : await prisma.user.create({
        data: {
          email,
          ...userData,
        },
      })
  // const result = await prisma.user.create({
  //   data: {
  //     ...req.body,
  //   },
  // })
  res.json(result)
}

// export default async function handler(req, res) {
//   const { body } = req
//   console.log(body)
// const { email } = JSON.parse(body)
// const emailItem = {
//   email,
// }
// const mail = await prisma.user.create({
//   data: emailItem,
// })

// return res.status(200).json(body)
// }
// export default async function main() {
//   await prisma.user.create({
//     data: {
//       name: "Alice",
//       email: "alice@prisma.io",
//     },
//   })

//   const allUsers = await prisma.user.findMany()
//   console.dir(allUsers)
// }
