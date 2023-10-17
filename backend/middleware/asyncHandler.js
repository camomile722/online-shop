const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next); // catch any errors and pass them to Express's error handler
export default asyncHandler;
