export const createUser = (userData) => {
  return prisma.user.create({
    data: userData,
  });
};

export const getUserByEmail = (email) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const getUserById = (userId) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};
