const AWS = require('aws-sdk');
const response = require('../utils/response');
const dynamoDB = new AWS.DynamoDB.DocumentClient;

module.exports.getOne = async (event) => {
  const body = JSON.parse(event.body);

  const params = {
    TableName: 'PatientTable',
    Key: {
      id: event.pathParameters.id
    },
  };

  try {
    const patient = await dynamoDB.get(params).promise();
    return response(patient, 200);
  } catch (error) {
    return response(error, 500);
  };
};
