const AWS = require('aws-sdk');
const response = require('../utils/response');
const dynamoDB = new AWS.DynamoDB.DocumentClient;

module.exports.list = async (event) => {
  const params = {
    TableName: 'PatientTable',
  }

  try {
    const patients = await dynamoDB.scan(params).promise();
    return response(patients, 200)
  } catch (error) {
    return response(error, 500)
  }
};
