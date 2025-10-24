export const createRefreshToken = ({ token, userId }) => {
  return prisma.refreshToken.create({
    data: {
      token,
      userId,
    },
  });
};

export const getRefreshTokenByToken = (token) => {
  return prisma.refreshToken.findUnique({
    where: { token },
  });
};
