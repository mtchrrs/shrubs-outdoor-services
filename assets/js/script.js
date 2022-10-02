
//create a pop-up
// asking for email to get access to exclusive content
// asking for postcode
// include 'x' button


// create links for 
// Contact Button - form
const contactBtn = $(".contact-button");
contactBtn.on("click", function(){
    var createForm = document.createElement("div");
    createForm.setAttribute("id", "form-div");
    var nameInput = $(
        `<h4 id="name-form-text">Type your name in here</h4>
        <input type="text" id="name-input" label="Type your name here"></input>
        <h4 id="email-form-text">Type your email in here</h4>
        <input type="text" id="email-input" label="Type your email here"></input>
        <h4 id="service-form-text">What service are you interested in?</h4>
        <input type="text" id="service-input" label="What service are you interested in?"></input>
        <h4 id="extra-form-text">Any additional information that we should know before we contact you?</h4>
        <input type="text" id="extra-input" label="Any additional information that we should know before we contact you?"></input>
        <button type="submit" id="contact-form-btn">SUBMIT</button>
        `);
    createForm.append(nameInput);
    window.location.append(createForm);
});