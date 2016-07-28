$(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded) 
	// completamente. 
	// Esto garantiza que si amarramos(bind) una función a un elemento 
	// de HTML este exista ya en la página. 

    // $('#spinner').hide()


    // $('#submit_button').submit(function() {
    //     $('#spinner').show();
    // });

  $('#form_exit').hide();

  $('#form').submit(function(event) {
    event.preventDefault();
    console.log("Test");
    $('#spinner').css('visibility', 'visible');

    value_form = $(this).serialize();
    value_form = value_form.split("=",2).pop();
    console.log(value_form);

    $.get('/'+ value_form, function (data) {
      
      console.log(data);
      $("#form").html(data);
      $('#spinner').hide();
      $('#intro1').hide();
      $('#intro2').hide();
      $("#submit_button").hide();
      $('#form_exit').show();



    });
  });

});
