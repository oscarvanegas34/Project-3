const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Ticket = new Schema({
    ticket_priority: {
        type: String
    },
    ticket_classification: {
        type: String
    },    
    ticket_summary:{
        type: String
    }
    ,ticket_description: {
        type: String
    },
    ticket_completed: {
        type: Boolean
    },
    ticket_date: {
        type: String
    },
    feedback_date: {
        type: String
    },
    ticket_feedback:{
        type: String
    },
    currentUserName:{
        type: String
    },
    ticket_file:{
        type: String
    }
});

module.exports = mongoose.model('Ticket', Ticket);