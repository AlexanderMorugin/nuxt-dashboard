export default defineEventHandler(async (event) => {
  return { user: event.context.auth };

  // return {
  //   user: userTransformer(event.context.auth?.user),
  //   // user: event.context.auth?.user,
  //   // user: event.context.auth?.user,
  // };
});
