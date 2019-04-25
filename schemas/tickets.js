const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Ticket = new Schema({
    ticket_priority: {
        type: String
    },
    ticket_classification: {
        type: String
    },
    ticket_description: {
        type: String
    },
    todo_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Ticket', Ticket);