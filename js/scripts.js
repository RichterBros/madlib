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

// madWords.forEach(function(madWord) {
      
//   $(inputs[i]).text(madWord);
//   i++;
// console.log(inputs)







  
// const array = [0,1,2,3,4,5];
// let doubledArray = [];
// array.forEach(function(element) {
//   doubledArray.push(element * 2);
// });
// doubledArray;
//
// let newInputs = [];
// inputs.forEach(function(input) {
//    newInputs.push(input);
// });
// let newMadWords = [];
// inputs.forEach(function(madWord) {
//    newMadWords.push(madWords);
//});
//
// $(newInputs).text(newMadWords);
  
// });

// $(".person1").text(person1Input);
    // const inputs= [".person1", ".person2", ".animal", ".exclamation", ".verb", ".noun"];
    // const madWords =[person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
  

    
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    // let newInputs = [] 
    // inputs.forEach(function(input){
    //   newInputs.push(input);
    // });

    // console.log(newInputs)
    // let newInputs2 = []
    // madWords.forEach(function(madWord) {
     
    //   newInputs2.push(madWord);
      
    // console.log(newInputs2)  