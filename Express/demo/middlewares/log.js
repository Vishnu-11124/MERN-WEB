const userCredentials = (req, res, next) => {
  console.log('username: (alex jacob)')
  console.log('email: (alexj@gmail.com)')
  console.log('password: (alexjhgu)')
  next()
}

export default userCredentials