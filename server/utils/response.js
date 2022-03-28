const response = (body, statusCode, paramHeaders) => {
  const headers = paramHeaders || { 'Content-Type': 'application/json' };

  return {
    body: JSON.stringify(body),
    statusCode,
    headers
  };
};

module.exports = response;