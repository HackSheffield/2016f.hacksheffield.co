// Variable to hold request
var request;

// Bind to the submit event of our form
$("#register-interest").submit(function(event){

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to server side script
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbw9TOM8szVrk0UulDbeTMWl7neuP7UHA21QKLgocglP5P0NzR8/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
        $form.collapse();
        $('.alertArea').collapse();
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});








//// process the form
//$('#register-interest').submit(function (event) {
//    var form = $(this);
//    form.find('input[type=email]').removeClass("has-error has-success animated shake");
//
//    var btn = form.find('button[type=submit]');
//    btn.prop('disable', true);
//
//    // get the form data
//    var serializedData = $form.serialize();
//
//    // process the form
//    $.ajax({
//            url: "https://script.google.com/macros/s/AKfycbw9TOM8szVrk0UulDbeTMWl7neuP7UHA21QKLgocglP5P0NzR8/exec",
//            type: "post",
//            data: serializedData
//        })
//        // using the done promise callback
//        .done(function (data) {
//            log(data);
//            //btn.prop('disable', false);
//        });
//
//
//    // stop the form from submitting the normal way and refreshing the page
//    event.preventDefault();
//});