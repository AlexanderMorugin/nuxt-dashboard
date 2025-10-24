// import { decodeRefreshToken, generateTokens } from "~/server/utils/jwt";
// import { getRefreshTokenByToken } from "~/server/utils/refresh-tokens";

export default defineEventHandler(async (event) => {
  const cookies = parseCookies(event);
  const refreshToken = cookies?.refresh_token;

  if (!refreshToken) {
    throw createError({
      statusCode: 401,
      message: "Рефреш токен не действительный.",
    });
  }

  const rToken = await getRefreshTokenByToken(refreshToken);

  if (!rToken) {
    throw createError({
      statusCode: 401,
      message: "Рефреш токен не действительный.",
    });
  }

  const token = decodeRefreshToken(refreshToken);

  try {
    const user = await getUserById(token.userId);

    const { accessToken } = generateTokens(user);

    // return { access_token: accessToken };
    return { user };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Что то пошло не так.",
    });
  }
});
