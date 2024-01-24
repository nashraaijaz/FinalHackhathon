const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  developerName: { type: String, required: true },
  description: { type: String, required: true },
  hostedURL: { type: String, required: true },
});
