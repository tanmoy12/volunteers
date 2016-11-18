import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Volunteers = new Mongo.Collection('volunteers');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('volunteers', function volunteersPublication() {
        return Volunteers.find();
    });
    Meteor.publish('userData', function userInformation() {
       return Meteor.users.find();
    });
}

Meteor.methods({
    'volunteers.insert'(eventID, volunteerID) {
        check(eventID, String);
        check(volunteerID, String);

        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Volunteers.insert({
            eventId: eventID,
            volunteerId: volunteerID
        });
    },
    'volunteers.removeEventVolunteers'(eventID) {
        check(eventID, String);
        let volunteerList = Volunteers.find({eventId: eventID}).fetch();

        volunteerList.map(function (eventVolunteer) {
            Volunteers.remove(eventVolunteer._id)
        });
    },
    'volunteers.removeVolunteer'(eventID, volunteerID) {
        check(eventID, String);
        check(volunteerID, String);

        let doc= Volunteers.findOne({
            eventId: eventID,
            volunteerId: volunteerID
        });

        Volunteers.remove(doc._id);
    }
});