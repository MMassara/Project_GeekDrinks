module.exports = class GenerateError extends Error {
  constructor(status, message) {
    super();

    this.message = message;
    this.status = status;
  }
};
