const ValidationPatterns = {
  name: /^[A-Za-z]+$/i,
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  phoneno: /[0|+?254]7(\d){8}$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
};

export default ValidationPatterns;
