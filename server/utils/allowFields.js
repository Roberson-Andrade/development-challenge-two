const allowFields = (allowedFields, fields) => {
  const nameFieds = Object.keys(fields);

  return nameFieds.every(field => allowedFields.includes(field));
}

module.exports = allowFields;