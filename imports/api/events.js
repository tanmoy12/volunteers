import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Events = new Mongo.Collection('events');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('events', function eventsPublication() {
        return Events.find();
    });
}

Meteor.methods({
    'events.insert'(eventname,location,date) {
        check(eventname, String);
        check(location, String);
        check(date, String);

        // Make sure the user is logged in before inserting a task
        if (! this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Events.insert({
            UserId: Meteor.userId(),
            eventname: eventname,
            location: location,
            date: date,
            createdat: new Date()
        });
    },
    'events.remove'(eventID) {
        check(eventID, String);

        Events.remove(eventID);
    }

});