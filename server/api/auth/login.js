// import { generateTokens, sendRefreshToken } from "~/server/utils/jwt";
// import { comparePassword } from "~/server/utils/bcrypt";
// import { createRefreshToken } from "~/server/utils/refresh-tokens";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  // Находим в БД пользователя с такой почтой
  const userExist = await getUserByEmail(email);

  // Если пользователя с такой почтой нет, выбрасываем ошибку
  if (!userExist) {
    throw createError({
      statusCode: 422,
      message: "Имя пользователя или пароль неверные.",
    });
  }

  // Если пользователь с такой почтой ранее зарегистрирован и обнаружен, сверяем его пароль в БД с введенным в поле инпута
  const isMatch = await comparePassword(password, userExist?.password);

  // Если пароли не совпадают, выбрасываем ошибку
  if (!isMatch) {
    throw createError({
      statusCode: 400,
      message: "Имя пользователя или пароль неверные.",
    });
  }

  // Генерируем два токена для данного пользователя
  // accessToken передаем на устройство пользователя
  // refreshToken сохраняем в БД на сервере
  const { accessToken, refreshToken } = generateTokens(userExist);

  // // Сохраняем рефреш токен в БД
  await createRefreshToken({
    token: refreshToken,
    userId: userExist.id,
  });

  // Записываем рефреш токен Set Cookie http only
  sendRefreshToken(event, refreshToken);

  // Если пароли совпали, возвращаем приветствие и пользователя из БД
  return {
    message: "Вход успешно выполнен",
    access_token: accessToken,
    user: userTransformer(userExist),
  };
});
