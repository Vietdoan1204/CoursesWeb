const mongoose = require('mongoose');
// const slug =  require('mongoose-slug-updater');

// mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, required: true },
    description: {type: String, maxLength: 600},
    image: {type: String, maxLength: 255},
    videoId: {type: String, maxLength: 255},
    level: {type: String, maxLength: 255},
    // slug: { type: String, slug: 'name', unique: true },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Course', Course);