const AWS = require('aws-sdk');
const response = require('../utils/response');
const dynamoDB = new AWS.DynamoDB.DocumentClient;

module.exports.delete = async (event) => {
  const params = {
    TableName: 'PatientTable',
    Key: {
      id: event.pathParameters.id
    },
  };

  try {
    await dynamoDB.delete(params).promise();
    return response({ message: 'Patient deleted successfully' }, 200)
  } catch (error) {
    return response(error, 500);
  }
};
