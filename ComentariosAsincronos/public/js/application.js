$(function(){


  $('#form_coment').hide(); //Escondemos el fromulario de comentario

  $('#new_comment_button').on("click", function() {  //Mostramos el formulario al dar click el el boton
    $('#form_coment').show();
    $('#new_comment_button').hide();
  });

  $('#form_coment').submit(function(event) {
    event.preventDefault();

    

    var comment = $('#comment_text').val();
    var author =  $('#author_text').val();
    
    console.log(comment);
    console.log(author);

    $('#comment_text').val('');
    $('#author_text').val('');

    $('#form_coment').hide(); 
    $('#new_comment_button').show();

    if ( comment === '' ) {

      alert("Debe de contener valores el comentario");

    }
    else if ( author === '' ) {

      alert("Debe de contener valores el autor");

    }

    else {

      $.post('/datos', {
        comment_send: comment,
        author_send: author

      })

      $("ul").append('<li>' + comment + '<span class="author">' + author + '</span></li>');

    }




    


  });

  

});
