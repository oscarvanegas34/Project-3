const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const ticketRoutes = express.Router();
const PORT = 4000;

let Ticket = require('./schemas/tickets');

app.use(cors());
app.use(bodyParser.json());
app.use('/tickets', ticketRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/tickets', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

ticketRoutes.route('/').get(function(req, res) {
    console.log('get all tickets')
    Ticket.find(function(err, tickets) {
        if (err) {
            console.log(err);
        } else {
          console.log(tickets);
          res.json(tickets);
            
        }
    });
});

ticketRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Ticket.findById(id, function(err, ticket) {
        res.json(ticket);
    });
});

ticketRoutes.route('/update/:id').put(function(req, res) {
    console.log('--------------------------------------------')
    console.log(req.params)
    console.log(req.body)

    Ticket.findOneAndUpdate({ _id: req.params.id }, {
        $push: { feedbackInformation: {
            feedback_date : req.body.feedback_date,
            ticket_feedback : req.body.ticket_feedback,
            feedback_name : req.body.feedback_name,
            feedback_file : req.body.feedback_file
        }
    }})
        .catch(err => console.log(err))
   
});

ticketRoutes.route('/add').post(function(req, res) {
    console.log("******", req.body)
    let ticket = new Ticket({ticket_priority: req.body.ticket_priority,
        ticket_classification : req.body.ticket_classification,
        ticket_status : req.body.ticket_status,
        ticket_summary : req.body.ticket_summary,
        ticket_description : req.body.ticket_description,
        ticket_completed : req.body.ticket_completed,
        ticket_date : req.body.ticket_date,
        ticket_feedback : req.body.ticket_feedback,
        ticket_file : req.body.ticket_file
    });
    console.log(ticket);
    ticket.save()
        .then(ticket => {
            res.status(200).json({'ticket': 'ticket added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new ticket failed');
        });
});


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});