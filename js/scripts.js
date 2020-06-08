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
    
    let something = 0;
    madWords.forEach(function(madWord) { 
      $(inputs[something]).text(madWord);  
      something = something + 1; 
    });
    
  });
});