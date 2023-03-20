// 404 error handler
exports.get404 = (req, res) => {
  res.status(404).json({ message: 'route not found' })
}

// global error handler
exports.globalErrorHandler = async (error, req, res) => {
  const status = error.statusCode || 500
  const message = error.message
  const data = error.data
  console.error(error)
  res.status(status).json({ message: message, data: data })
}
