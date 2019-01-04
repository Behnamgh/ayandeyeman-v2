// import * as mongoose from 'mongoose';
const mongoose = require('mongoose');
let { AccountSchema } = require('../models/accountModel');
let { LetterSchema } = require('../models/letterModel');
const request = require('superagent');

function UppercaseFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

exports.getModel = (req, res) => {
  let name = UppercaseFirstChar(req.params.intent);
  const Model = mongoose.model(name, eval(`${name}Schema`));
  Model.find({}, (err, model) => {
    if (err) {
      res.send(err);
    }
    res.json(model);
  });
};

exports.addNewModel = (req, res) => {
  let name = UppercaseFirstChar(req.params.intent);
  const Model = mongoose.model(name, eval(`${name}Schema`));

  const newModel = new Model(req.body);

  newModel.save((err, model) => {
    if (err) {
      res.send(err);
    }
    res.json(model);
  });
};

exports.getModeWithID = (req, res) => {
  let name = UppercaseFirstChar(req.params.intent);
  const Model = mongoose.model(name, eval(`${name}Schema`));
  Model.findById(req.params.modelId, (err, model) => {
    if (err) {
      res.send(err);
    }
    res.json(model);
  });
};

exports.updateModel = (req, res) => {
  let name = UppercaseFirstChar(req.params.intent);
  const Model = mongoose.model(name, eval(`${name}Schema`));
  Model.findOneAndUpdate({ _id: req.params.modelId }, req.body, { new: true }, (err, model) => {
    if (err) {
      res.send(err);
    }
    res.json(model);
  });
};

exports.deleteModel = (req, res) => {
  let name = UppercaseFirstChar(req.params.intent);
  const Model = mongoose.model(name, eval(`${name}Schema`));
  Model.remove({ _id: req.params.modelId }, err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Successfully deleted ' + name });
  });
};
exports.getIntent = (req, res) => {
  let service = req.serviceRegistry.get(req.params.intent);
  request[req.method.toLowerCase()](
    `http://${service.ip}:${service.port}/api/${req.params.intent}${
      req.params.modelId ? '/' + req.params.modelId : ''
    }`,
    (err, response) => {
      if (err) {
        console.log(err);
        res.status(404).json({
          error: 'service not found'
        });
      }

      res.status(200).send(response.body);
    }
  );
};
exports.postIntent = (req, res) => {
  let service = req.serviceRegistry.get(req.params.intent);

  request[req.method.toLowerCase()](
    `http://${service.ip}:${service.port}/api/${req.params.intent}${req.params.modelId ? '/' + req.params.modelId : ''}`
  )
    .send(req.body)
    .end((err, response) => {
      if (err) {
        console.log(err);
        res.status(404).json({
          error: 'service not found'
        });
      }

      res.status(200).send(response.body);
    });
};
// exports.putIntent =
// exports.deleteIntent =
