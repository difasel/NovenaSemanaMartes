$(function(){

$("form").submit(function(event) {

    event.preventDefault();
    var par1 = $('#selector').val();
    var par2 = $('#property').val();
    var par3 = $('#value').val();
    console.log(par1);
    console.log(par2);
    console.log(par3);

    $(par1).css(par2, par3);

    $('#selector').val('');
    $('#property').val('');
    $('#value').val('');

  });


});
