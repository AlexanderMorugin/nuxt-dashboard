// import { generateTokens, sendRefreshToken } from '~/server/utils/jwt';
import { comparePassword } from "./modules/bcrypt";
// import { createRefreshToken } from '../db/refresh-tokens';

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  const userExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!userExist) {
    throw createError({
      statusCode: 422,
      message: "Имя пользователя или пароль неверные.",
    });
  }

  const isMatch = await comparePassword(password, userExist?.password);

  if (!isMatch) {
    throw createError({
      statusCode: 400,
      message: "Имя пользователя или пароль неверные.",
    });
  }

  // const { accessToken, refreshToken } = generateTokens(userExist);

  // await createRefreshToken({
  //   token: refreshToken,
  //   userId: userExist.id,
  // });

  if (isMatch) {
    const data = {
      // token: {
      //   refreshToken: refreshToken,
      // },
      user: userExist,
      // isLoggedIn: true,
    };

    // Set Cookie http only
    // sendRefreshToken(event, refreshToken);

    return {
      message: "Вход успешно выполнен",
      // access_token: accessToken,
      data,
    };
  } else {
    throw createError({
      statusCode: 422,
      message: "Имя пользователя или пароль неверные",
    });
  }
});
