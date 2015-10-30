Meteor.methods({


  addPost: function(title, url) {

    Posts.insert({
      title: title,
      url: url
    });

    template.find("form").reset();
  }

});