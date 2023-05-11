
// 1) Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.
// The Car class or function constructor should also have a method called
// toggleAvailability that changes the isAvailable property to its opposite value (true to
// false, false to true)
class Car{
    constructor(make,model,year,isAvailable){
        this.make=make;
        this.model=model;
        this.year=year;
        this.isAvailable=isAvailable;
        
    }
    toggleAvailability(){
      let changes=this.isAvailable=!this.isAvailable;
        console.log(changes);
    }}
// }
let myCar= new Car(`Toyota`,`Camry`,2017,true);
console.log({myCar});
myCar.toggleAvailability();

// 2) Create a Rental class or function constructor that has the following properties:
// ● car (Car object): The car that has been rented.
// ● renterName (string): The name of the person who rented the car.
// ● rentalStartDate (Date object): The start date of the rental period.
// ● rentalEndDate (Date object): The end date of the rental period.
// The Rental class or function constructor should also have a method called
// calculateRentalDuration that returns the rental duration in days.
class Rental extends Car{
    constructor(make,model,year,isAvailable,renterName,rentalStartDate,rentalEndDate){
        super(make,model,year,isAvailable)
        this.renterName=renterName;
        this.rentalStartDate=rentalStartDate;
        this.rentalEndDate=rentalEndDate;

    }
    calculateRentalDuration(){
      this.rentalStartDate=new Date(`2023-04-19`)
      this.rentalEndDate=new Date(`2023-05-20`)
     let  rentalDurationInDays=this.rentalEndDate-this.rentalStartDate;
       console.log( rentalDurationInDays);
     

    }
}
 let  myR=new Rental("Toyota","Range",2002,false,"Kennedy",new Date(`2023-04-19`),new Date(`2023-06-19`));
 myR.calculateRentalDuration();
 console.log(myR);


// 3) Create an instance of the Car class or function constructor for a car in the
// inventory. Then, create an instance of the Rental class or function constructor for
// a rental involving the car you created. Finally, calculate the rental duration using
// the calculateRentalDuration method.



  
// Create a Question class with the following properties:
// ● text(string): The text of the question.
// ● options(array): An array containing the multiple-choice options.
// ● correctAnswer(string): The correct answer to the question.
// The Question class should also have a method called checkAnswer that takes a
// user's answer as a parameter and returns true if the answer is correct and false
// otherwise.
class Questions{
    constructor(text,options,correctAnswer){
     this.text=text;
     this.options=options;
     this.correctAnswer=correctAnswer;
    }
    
    checkAnswer(newAns){
        return newAns===this.correctAnswer;
    }
}
const question = new Questions(
    "What cobers the surface of the moon?",
    ["Volcano", "Sponge", "Rocks", "Water"],
    "Volcano"
  );
const newAns = "sponge";
const checkUserAnswer = question.checkAnswer(newAns);
console.log(checkUserAnswer);
// Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the
// questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:
// ● addQuestion: Takes a Question object as a parameter and adds it to the
// questions array.
// ● nextQuestion: Advances to the next question in the quiz by incrementing the
// currentQuestionIndex.
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is
// correct using the checkAnswer method
class Quiz{
    constructor(questions,currentQuestionIndex,score) {
        
      this.questions = questions;
      this.currentQuestionIndex = currentQuestionIndex;
      this.score = score;
    }
  
    addQuestion(questions) {
      this.questions.push(questions);
    }
  
    nextQuestion() {
      this.currentQuestionIndex++;
    }
  
    submitAnswer(answer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      const isCorrect = currentQuestion.checkAnswer(answer);
      if (isCorrect) {
        this.score++;
      }
    }
  }

function Carr(make,model,year,isAvailable){

}
