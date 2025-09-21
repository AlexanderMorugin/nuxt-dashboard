import { hashPassword } from "./modules/bcrypt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Проверяем в БД есть ли пользователь с такой почтой
  const userExist = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  // Если пользователь с такой почтой существует: Выбрасываем ошибку на стороне сервере
  if (userExist) {
    throw createError({
      statusCode: 400,
      message: "Пользователь с такой почтой уже существует.",
    });
  }

  // Хешируем пароль
  const hashUserPassword = await hashPassword(body.password);

  // Создаем в БД пользователя
  const user = await prisma.user.create({
    data: {
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      password: hashUserPassword,
    },
  });

  return user;
});
