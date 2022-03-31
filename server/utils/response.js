const response = (body, statusCode, paramHeaders) => {
  const headers = paramHeaders || { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  };

  return {
    body: JSON.stringify(body),
    statusCode,
    headers
  };
};

module.exports = response;