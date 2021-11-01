const apiResponseHandler = (payload, req, res, next) => {
  return res.status(payload.statusCode || 500).json({
    status: payload.status || false,
    message: payload.message || "Oops! something went wrong.",
    data: payload.data || [],
    [payload.error && "error"]: payload.error,
  });
};

export default apiResponseHandler;
