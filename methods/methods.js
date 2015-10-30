Meteor.methods({

  addPost: function(title, url, template) {
    //updated variables
    Posts.insert({
      title: title,
      url: url
    });

    template.find("form").reset();
  }

});