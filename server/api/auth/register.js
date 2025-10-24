export default defineEventHandler(async (event) => {
  const { firstName, lastName, email, password } = await readBody(event);

  // Проверяем в БД есть ли пользователь с такой почтой
  const userExist = await getUserByEmail(email);

  // Если пользователь с такой почтой существует: Выбрасываем ошибку на стороне сервере
  if (userExist) {
    throw createError({
      statusCode: 400,
      message: "Пользователь с такой почтой уже существует.",
    });
  }

  // Хешируем пароль
  const hashUserPassword = await hashPassword(password);

  // Собираем все поля инпутов
  const userData = {
    firstName,
    lastName,
    email,
    password: hashUserPassword,
  };

  // Создаем в БД пользователя
  const user = await createUser(userData);

  return {
    message: "Регистрация прошла успешно!",
    user: userTransformer(user),
  };
});
