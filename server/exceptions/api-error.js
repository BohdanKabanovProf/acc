class ApiError extends Error {
  status
  errors

  constructor(status, messege, errors = []) {
    super(messege)
    this.status = status
    this.errors = errors
  }

  static UnauthorizedError() {
    return new ApiError(401, 'Пользователь не авторизован')
  }

  static BedRequest(messege, errors = []) {
    return new ApiError(400, messege, errors)
  }
}

export default ApiError
