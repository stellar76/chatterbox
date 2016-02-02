Convos = new Mongo.Collection('convos');

if (Meteor.isClient) {
    //Load Chat Data From Database
    Template.body.helpers({
        convos: function() {
            return Convos.find().fetch().reverse();
        }
    });
    console.log(chats.find());
    //Events 
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
