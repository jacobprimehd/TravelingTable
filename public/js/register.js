$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var emailInput = $("email");
    var passwordInput = $("password");
    var firstNameInput = $("firstName");
    var lastNameInput = $("lastName");
    var cityInput = $("city");
    var stateInput = $("state");
    var countryInput = $("country");
    var bioInput = $("bio")
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
        firstName: firstNameInput.val().trim(),
        lastName: lastNameInput.val().trim(),
        city: cityInput.val().trim(),
        state: stateInput.val().trim(),
        country: countryInput.val().trim(),
        bio: bioInput.val().trim()
      };
  
      if (!userData.email || !userData.password || !userData.firstName || !userData.lastName || !userData.city || !userData.state || !userData.country || !userData.bio) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password, userData.firstName, userData.lastName, userData.city, userData.state, userData.country, userData.bio);
      emailInput.val("");
      passwordInput.val("");
      firstNameInput.val("");
      lastNameInput.val("");
      cityInput.val("");
      stateInput.val("");
      countryInput.val("");
      bioInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password,firstName,lastName,city,state,country,bio) {
      $.post("/api/register", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        city: city,
        state: state,
        country: country,
        bio: bio
      })
        .then(function(data) {
          window.location.replace("/login");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });