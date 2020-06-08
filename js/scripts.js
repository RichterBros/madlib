$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    const inputs= [".person1", ".person2", ".animal", ".exclamation", ".verb", ".noun"];
    const madWords =[person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
    let var1;
    let var2;

    inputs.forEach(function(input){
      var1 = input;
    });
    
    madWords.forEach(function(madWord) {
      var2= madWord;
    });

    

    $(var1).text(var2);

    $("#story").show();
  });
});
// $(".person1").text(person1Input);
    // const inputs= [".person1", ".person2", ".animal", ".exclamation", ".verb", ".noun"];
    // const madWords =[person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
    // let i = i++;
    // madWords.forEach(function(madWord) {
    //   $(inputs[i]).text(madWord);
    // });

    
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);