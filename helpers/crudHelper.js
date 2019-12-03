/* eslint-disable linebreak-style */
const responseHelper = require('./responseHelper');

module.exports = {
  create: async (model, modelName, req, res) => {
    try {
      const data = req.body;
      const createdModel = await model.create(data);
      if (!createdModel) {
        return responseHelper.json(res, 400, `${modelName} could not be created`, null);
      }
      return responseHelper.json(res, 201, `${modelName} created successfully`, createdModel);
    } catch (error) {
      return responseHelper.json(res, 500, 'Server Error', error.message);
    }
  },
  read: async (model, modelName, req, res, condition = {}) => {
    try {
      const requestedModel = await model.findById(req.params.id).where(condition);
      if (!requestedModel) {
        return responseHelper.json(res, 400, `${modelName} cannot be found`, null);
      }
      return responseHelper.json(res, 200, `${modelName} retrived sucessfully`, requestedModel);
    } catch (error) {
      return responseHelper.json(res, 500, 'Server Error', error.message);
    }
  },
  count: async (model, modelName, req, res, condition = {}) => {
    try {
      const requestedCount = await model.count().where(condition);
      if (!requestedCount) {
        return responseHelper.json(res, 400, `${modelName} cannot be found`, null);
      }
      return responseHelper.json(res, 200, `${modelName} counted successfully`,
        {
          model: modelName,
          count: requestedCount,
        });
    } catch (error) {
      return responseHelper.json(res, 500, 'Server Error', error.message);
    }
  },
  all: async (model, modelName, req, res, condition = {}) => {
    try {
      const allModels = await model.find().where(condition);
      if (!allModels) {
        return responseHelper.json(res, 400, `All ${modelName} cannot be retrieved`, null);
      }
      return responseHelper.json(res, 200, `All ${modelName} retrived sucessfully`, allModels);
    } catch (error) {
      return responseHelper.json(res, 500, 'Server Error', error.message);
    }
  },
  update: async (model, modelName, req, res, condition = {}) => {
    try {
      const data = req.body;
      const updatedModel = await model.findByIdAndUpdate(req.params.id, data).where(condition);
      if (!updatedModel) {
        return responseHelper.json(res, 400, `${modelName} cannot be found`, null);
      }
      return responseHelper.json(res, 200, `${modelName} updated sucessfully`, updatedModel);
    } catch (error) {
      return responseHelper.json(res, 500, 'Server Error', error.message);
    }
  },
  delete: async (model, modelName, req, res, condition = {}) => {
    try {
      const deletedModel = await model.findByIdAndRemove(req.params.id).where(condition);
      if (!deletedModel) {
        return responseHelper.json(res, 400, `${modelName} cannot be found`, null);
      }
      return responseHelper.json(res, 200, `${modelName} deleted sucessfully`, deletedModel);
    } catch (error) {
      return responseHelper.json(res, 500, 'Server Error', error.message);
    }
  },
};
