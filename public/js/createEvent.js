import { create } from "domain";

$(document).ready(function() {
    console.log("linked...")
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var eventTitle = $("eventTitle");
    var inputDate = $("InputDate");
    var InputTime = $("InputTime");
    var InputGuest = $("InputGuest");
    var InputCost = $("InputCost");
    var FormControlTextarea = $("FormControlTextarea");
    
    signUpForm.on("submit", function(event) {
        event.preventDefault();
        createEvent(eventTitle,inputDate,InputTime,InputGuest,InputCost,FormControlTextarea)
    });
    function createEvent(title,date,time,guest,cost,FormControlTextarea){
        $.post("/api/events", {
            title: title,
            date: date,
            time: time,
            guest: guest,
            cost: cost,
            bio: FormControlTextarea,
          })
          .then(function(data) {
            console.log(data);
            window.location.replace("/");
              // If there's an error, handle it by throwing up a bootstrap alert
          })
    }
});