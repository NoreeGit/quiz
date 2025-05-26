const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
      { text: "Rome", correct: false },
      { text: "Berlin", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "Who wrote 'Hamlet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
      { text: "Charles Dickens", correct: false }
    ]
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false }
    ]
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Osmium", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Oxide", correct: false },
      { text: "Olive", correct: false }
    ]
  },
  {
    question: "In which year did the Titanic sink?",
    answers: [
      { text: "1912", correct: true },
      { text: "1920", correct: false },
      { text: "1905", correct: false },
      { text: "1898", correct: false }
    ]
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Mars", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "Which language is primarily spoken in Brazil?",
    answers: [
      { text: "Spanish", correct: false },
      { text: "Portuguese", correct: true },
      { text: "French", correct: false },
      { text: "English", correct: false }
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Michelangelo", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false }
    ]
  },
  {
    question: "Which ocean is the largest?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false }
    ]
  },
  // Additional questions
  {
    question: "What is the square root of 64?",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "10", correct: false },
      { text: "12", correct: false }
    ]
  },
  {
    question: "Which country is home to the kangaroo?",
    answers: [
      { text: "India", correct: false },
      { text: "Australia", correct: true },
      { text: "South Africa", correct: false },
      { text: "Canada", correct: false }
    ]
  },
  {
    question: "Which organ pumps blood throughout the human body?",
    answers: [
      { text: "Lungs", correct: false },
      { text: "Heart", correct: true },
      { text: "Brain", correct: false },
      { text: "Liver", correct: false }
    ]
  },
  {
    question: "What is the boiling point of water in Celsius?",
    answers: [
      { text: "100°C", correct: true },
      { text: "90°C", correct: false },
      { text: "120°C", correct: false },
      { text: "80°C", correct: false }
    ]
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    answers: [
      { text: "Tiger", correct: false },
      { text: "Lion", correct: true },
      { text: "Elephant", correct: false },
      { text: "Cheetah", correct: false }
    ]
  },
  {
    question: "Which continent is Egypt located on?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "Europe", correct: false },
      { text: "Australia", correct: false }
    ]
  },
  {
    question: "How many days are there in a leap year?",
    answers: [
      { text: "364", correct: false },
      { text: "365", correct: false },
      { text: "366", correct: true },
      { text: "367", correct: false }
    ]
  },
  {
    question: "What is the smallest prime number?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false }
    ]
  },
  {
    question: "Which metal is liquid at room temperature?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Iron", correct: false },
      { text: "Copper", correct: false },
      { text: "Gold", correct: false }
    ]
  },
  {
    question: "Who invented the telephone?",
    answers: [
      { text: "Alexander Graham Bell", correct: true },
      { text: "Nikola Tesla", correct: false },
      { text: "Thomas Edison", correct: false },
      { text: "Albert Einstein", correct: false }
    ]
  },
  {
    question: "Which part of the plant conducts photosynthesis?",
    answers: [
      { text: "Root", correct: false },
      { text: "Leaf", correct: true },
      { text: "Stem", correct: false },
      { text: "Flower", correct: false }
    ]
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    answers: [
      { text: "France", correct: true },
      { text: "UK", correct: false },
      { text: "Germany", correct: false },
      { text: "Italy", correct: false }
    ]
  },
  {
    question: "What is the freezing point of water in Celsius?",
    answers: [
      { text: "0°C", correct: true },
      { text: "10°C", correct: false },
      { text: "-10°C", correct: false },
      { text: "5°C", correct: false }
    ]
  },
  {
    question: "Which country is famous for the maple leaf?",
    answers: [
      { text: "USA", correct: false },
      { text: "Canada", correct: true },
      { text: "UK", correct: false },
      { text: "Japan", correct: false }
    ]
  },
  {
    question: "Which city is known as the Big Apple?",
    answers: [
      { text: "Los Angeles", correct: false },
      { text: "New York City", correct: true },
      { text: "Chicago", correct: false },
      { text: "Boston", correct: false }
    ]
  },
  {
    question: "Which is the hardest natural substance on Earth?",
    answers: [
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Steel", correct: false },
      { text: "Granite", correct: false }
    ]
  },
  {
    question: "What is the main ingredient in guacamole?",
    answers: [
      { text: "Tomato", correct: false },
      { text: "Avocado", correct: true },
      { text: "Lettuce", correct: false },
      { text: "Cucumber", correct: false }
    ]
  },
  {
    question: "Which animal is known for changing its color?",
    answers: [
      { text: "Octopus", correct: false },
      { text: "Chameleon", correct: true },
      { text: "Frog", correct: false },
      { text: "Squid", correct: false }
    ]
  },
  {
    question: "What is the chemical formula for water?",
    answers: [
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "O2", correct: false },
      { text: "NaCl", correct: false }
    ]
  },
  {
    question: "Who was the first man to walk on the Moon?",
    answers: [
      { text: "Buzz Aldrin", correct: false },
      { text: "Neil Armstrong", correct: true },
      { text: "Yuri Gagarin", correct: false },
      { text: "John Glenn", correct: false }
    ]
  },
  {
  type: "multiple",
  question: "What is the capital of Italy?",
  answers: [
    { text: "Rome", correct: true },
    { text: "Milan", correct: false },
    { text: "Naples", correct: false },
    { text: "Venice", correct: false }
  ]
},
{
  type: "truefalse",
  question: "The Earth is flat.",
  answers: [
    { text: "True", correct: false },
    { text: "False", correct: true }
  ]
},
{
  type: "text",
  question: "What is the chemical symbol for water?",
  correctAnswer: "H2O"
}  
];
