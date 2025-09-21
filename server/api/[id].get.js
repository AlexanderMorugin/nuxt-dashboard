export default defineEventHandler(async (event) => {
  const user = await prisma.user.findFirst({
    where: {
      id: parseInt(event.context.params.id),
    },
  });
  return user;
});
