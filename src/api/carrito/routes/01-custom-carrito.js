module.exports = {
  routes: [
    { // Path defined with a regular expression
      method: 'GET',
      path: '/carritos/user/:user_id',
      handler: 'carrito.findByUserId'
    }
  ]
}
