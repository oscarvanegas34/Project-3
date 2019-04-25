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
            res.json(tickets);
        }
    });
});

ticketRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    ticket.findById(id, function(err, ticket) {
        res.json(ticket);
    });
});

ticketRoutes.route('/update/:id').post(function(req, res) {
    Ticket.findById(req.params.id, function(err, ticket) {
        if (!ticket)
            res.status(404).send("data is not found");
        else
            ticket.ticket_priority = req.body.ticket_priority;
            ticket.ticket_classification = req.body.ticket_classification;
            ticket.ticket_description = req.body.ticket_description;
            ticket.ticket_completed = req.body.ticket_completed;

            ticket.save().then(ticket => {
                res.json('ticket updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

ticketRoutes.route('/add').post(function(req, res) {
    console.log(req.body)
    let ticket = new Ticket(req.body);
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