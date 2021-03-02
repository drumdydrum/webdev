const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*  forEach  */
// let print = function(item) {
//     console.log(item);
// }
// numbers.forEach(print);
// numbers.forEach(console.log); // Works but has unexplained behavior

// numbers.forEach(function (el) {
//     console.log(el)
// })

/*  map  */
// const result = numbers.map(function (number){
//     return number ** 2;
// });
// OR
// const result = numbers.map(number => number ** 2);


// console.log(result);

/*  Arrow Function Implicit Return  */
// implicit returns only work with one line to be evaluated.
// implicit return won't work on the following:
// const greet = str => {
//     console.log("entered");
//     `Hey ${str}!`;
// }
// //implicit return works here (one-liner)
// const greet = str => `Hey ${str}!`;

const movies = [
    {
        title: "Joker",
        score: 90
    },
    {
        title: "Prometheus",
        score: 80
    },
    {
        title: "Interstellar",
        score: 96
    }
]

/*  The "filter" method  */
// make array of movie objects
// const greatMovies = movies.filter(movie => movie.score >= 90);
// check to see if above worked
// for (let movie of greatMovies) {
//     console.log(movie.title);
// }
// make array of only titles instead of whole movie objects
// const greatMovies = movies.filter(m => m.score >= 90).map(m => m.title);

/*  The Some & Every Methods  */
const exams = [80, 98, 92, 78, 90, 89, 84, 100];
// everything must satisfy this requirement for this call to return true. let's try to find out if everyone passed the test.
// console.log(exams.every(score => score >= 75)); //true
// 1 or more must satisfy this requirement for this call to return true. let's try to find out if anyone failed the test.
// console.log(exams.some(score => score < 75)); //false








