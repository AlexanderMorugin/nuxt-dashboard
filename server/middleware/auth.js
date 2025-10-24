import UrlPattern from "url-pattern";

export default defineEventHandler(async (event) => {
  //   const token = event.node.req.headers["Authorization"]?.split(" ")[1];
  //   console.log(token);
  // });
  const endpoints = ["/api/auth/user"];

  const isHandledByThisMiddleware = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint);

    return pattern.match(event.node.req.url);
  });

  //   // console.log(isHandledByThisMiddleware);

  if (!isHandledByThisMiddleware) {
    return;
  }
  //   const authHeader = event.node.req.headers["authorization"];
  //   const token = authHeader && authHeader.split(" ")[1];
  //   // const authHeader = event.node.req.headers.cookie?.split(" ")[1];
  //   // const token = authHeader.split("=")[1];
  //   // const token = event.node.req.headers.cookie?.split(" ")[1];

  // const token = event.node.req.headers["authorization"]?.split(" ")[1];
  //   // return { token: token };
  //   console.log(token);
  //   // const token = aToken.split("=")[1];

  //   // const token = event.node.req.headers.cookie;

  //   // const token = event.node.req.headers["authorization"]?.split(" ")[1];
  //   // const token = event.node.req.headers;
  //   // const token = event.node.req.headers.cookie;

  // const decoded = decodeAccessToken(token);
  //   // console.log(decoded);

  //   // return { decoded };

  // if (!decoded) {
  //   throw createError({
  //     statusCode: 401,
  //     message: "Пользователь не авторизован.",
  //   });
  // }

  // try {
  //   const userId = decoded.userId;

  //   const user = await getUserById(userId);

  //   event.context.auth = { user };
  // } catch (error) {
  //   return;
  // }
});

// export default defineEventHandler((event) => {
//   const cookies = parseCookies(event);

//   console.log(cookies);
//   // const decoded = decodeAccessToken(token);

//   // return { cookies };
// });
