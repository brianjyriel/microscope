Template.postForm.events({

  //handle the form submission
  'submit form': function(event, template) {

    //stop the form from submitting
    event.preventDefault();

    //implemented variables to hold title and url for method call
    var title = event.target.title.value;
    var url = event.target.url.value;

    Meteor.call("addPost", title, url);
    template.find("form").reset();
  }

});