const createdSuccess = (key) => {
  return `${key} created successfuly.`;
};

// custom error message
// user
const USERNAME_TAKEN = "Sorry, that username is taken.";
const UNAUTHORIZED = "Unauthorized user.";
const LOGIN_SUCCESS = "User login successfuly.";
const USER_NOT_EXIST = "User not exists.";
const PASSWORD_NOT_MATCH = "Password did not match."

export { createdSuccess, USERNAME_TAKEN, UNAUTHORIZED, LOGIN_SUCCESS, USER_NOT_EXIST, PASSWORD_NOT_MATCH };
