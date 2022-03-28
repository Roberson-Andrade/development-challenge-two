const AWS = require('aws-sdk');
const validator = require('validator');
const response = require('../utils/response');
const dynamoDB = new AWS.DynamoDB.DocumentClient;
const { v4: uuidv4 } = require('uuid');

module.exports.add = async (event) => {
  const { patientName, birthDay, email, address } = JSON.parse(event.body);

  const actualDate = new Date().getTime()

  if (!validator.default.isEmail(email)) {
    return response({ error: 'Invalid email' }, 400)
  } else if (!validator.default.isDate(birthDay) || actualDate < new Date(birthDay).getTime()) {
    return response({ error: 'Invalid date' }, 400)
  }

  const params = {
    TableName: 'PatientTable',
    Item: {
      id: uuidv4(),
      patientName,
      email,
      address,
      birthDay
    }
  }

  try {
    await dynamoDB.put(params).promise();
    return response({ message: 'Patient registry record created!' }, 201)
  } catch (error) {
    return response(error, 500)
  }
};
