const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Ticket = new Schema({
    ticket_priority: {
        type: String
    },
    ticket_classification: {
        type: String
    },    
    ticket_status: {
        type: String,        
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
    currentUserName:{
        type: String
    },
    ticket_file:{
        type: String
    },
    feedbackInformation: [
        {
            ticket_feedback: String,
            feedback_date: String,
            feedback_name: String,
            feedback_file: String                
            }       
    ],  

});

module.exports = mongoose.model('Ticket', Ticket);