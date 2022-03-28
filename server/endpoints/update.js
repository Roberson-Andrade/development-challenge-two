const AWS = require('aws-sdk');
const allowFields = require('../utils/allowFields');
const response = require('../utils/response');
const dynamoDB = new AWS.DynamoDB.DocumentClient;

module.exports.update = async (event) => {
  const body = JSON.parse(event.body);

  const allowedFields = ['patientName', 'email', 'birthDay', 'address'];
  if(!allowFields(allowedFields, body)) {
    return response({ error: 'Insert only valid fields' }, 400);
  }

  let updateExpression = 'set ';
  let expressionAttributeValues = {};

  for(const field in body) {
    updateExpression += ` ${field} = :${field}`;
    expressionAttributeValues[':' + field] = body[field];
  }

  const params = {
    TableName: 'PatientTable',
    Key: {
      id: event.pathParameters.id
    },
    UpdateExpression: updateExpression,
    ExpressionAttributeValues: expressionAttributeValues
  };

  try {
    await dynamoDB.update(params).promise();
    return response({ message: 'Patient updated successfully' }, 200);
  } catch (error) {
    return response(error, 500);
  }
};
