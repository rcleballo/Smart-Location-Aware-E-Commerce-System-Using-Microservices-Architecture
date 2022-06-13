const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: String,
    location: {
        type: {
          type: String,
          enum: ['Point'],
          default: 'Point',
        },
        coordinates: {
          type: [Number],
          default: [-29.3240832, 27.4989056],
        }
    }
});

LocationSchema.index({location: '2dsphere'});

module.exports = mongoose.model('Location', LocationSchema)