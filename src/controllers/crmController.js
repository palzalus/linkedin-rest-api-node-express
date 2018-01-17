import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

// POST a new contact ove endpoint contact POST
export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
};

// GET all contacts over endpoint contact GET
export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
};

// GET a contact by id over endpoint contact/:contactID GET
export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
};

// UPDATE a contact by id over endpoint contact/:contactID PUT
export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true}, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
};

// DELETE a contact by id over endpoint contact/:contactID DELETE
export const deleteContact = (req, res) => {
    Contact.remove({_id: req.params.contactId}, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json({ message: 'Contact is succesfully deleted' });
    });
};
