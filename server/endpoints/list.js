const AWS = require('aws-sdk');
const response = require('../utils/response');
const dynamoDB = new AWS.DynamoDB.DocumentClient;

module.exports.list = async (event) => {
  const params = {
    TableName: 'PatientTable',
    Limit: event.queryStringParameters.limit
  };

  if(event.queryStringParameters.lastEvaluatedKey) {
    params.ExclusiveStartKey = { id: event.queryStringParameters.lastEvaluatedKey };
  }
  
  try {
    const { Count: totalCount } = await dynamoDB.scan({ TableName: 'PatientTable' }).promise();
    const patients = await dynamoDB.scan(params).promise();
    return response({ ...patients, totalCount } , 200)
  } catch (error) {
    return response(error, 500)
  }
};
