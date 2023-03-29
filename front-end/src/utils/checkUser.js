const checkEmailAndPassword = (email, password) => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const MIN_PASSWORD = 6;
  return regex.test(email) && password.length >= MIN_PASSWORD;
};

const checkUser = (user) => {
  const MIN_USERNAME = 12;
  return user.length >= MIN_USERNAME;
};

module.exports = { checkEmailAndPassword, checkUser };
