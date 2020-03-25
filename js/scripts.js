$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var bullyInput= $("input#bully").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var verbingInput = $("input#verbing").val();
    var adjectiveInput = $("input#adjective").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".bully").text(bullyInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".verbing").text(verbingInput);
    $(".adjective").text(adjectiveInput);

    $("#story").show();

    event.preventDefault();
  });
});