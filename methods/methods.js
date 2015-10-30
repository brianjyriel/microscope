Meteor.methods({

  addPost: function(title, url) {
    //updated variables
    Posts.insert({
      title: title,
      url: url
    });

  }

});