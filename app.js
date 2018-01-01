$( document ).ready(function() {

// Create HTML for new post-it notes
  function createNote() {
    $(".note-box").prepend("<div class='new-note'><div class='editable' contenteditable='true'></div><div class='toolbar'><i class='fa fa-trash' aria-hidden='true'></i><button onclick='document.execCommand('bold',false,true);'><i class='fa fa-bold' aria-hidden='true'></i></button><button onclick='document.execCommand('italic',false,true);'><i class='fa fa-italic' aria-hidden='true'></i></button><button onclick='document.execCommand('underline',false,true);'><i class='fa fa-underline' aria-hidden='true'></i></button><i class='fa fa-exclamation' aria-hidden='true'></i></div></div>");
  };

  // Create new post-it when clicking "add" btn
  $(".add-wrap").on("click", function() {
  createNote();
  $(".note-box").css("visibility", "visible");
  });

  // Remove button when clicking trash icon
  $(".note-box").on("click", ".fa-trash", function() {
    $(this).parent().parent().remove();
  });

  // Bold selected text when clicking B
  $(".note-box").on("click", ".fa-bold", function() {
    document.execCommand('bold',false,true);
  });

  // Italicize selected text when clicking I
  $(".note-box").on("click", ".fa-italic", function() {
    document.execCommand('italic',false,true);
  });

  // Underline selected text when clicking U
  $(".note-box").on("click", ".fa-underline", function() {
    document.execCommand('underline',false,true);
  });

  // Change post-it background when clicking exclamation
  $(".note-box").on("click", ".fa-exclamation", function() {
  $(this).parent().parent().children().toggleClass("red");
  });


});
