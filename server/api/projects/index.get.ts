import prisma from '../utils/prisma'

export default defineEventHandler(async (event) => {
  const { Id } = getQuery(event)

  const categoryId = Id as string

  let projects = []

  if (Id) {
    projects = await prisma.project.findMany({
      where: {
        categories: {
          has: categoryId,
        },
      },
    })

    return projects
  }
  else {
    projects = await prisma.project.findMany()

    return projects
  }
})
