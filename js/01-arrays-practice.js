//STEP 1
// let movie = ["Kill Bill", "Casino", "Pulp Fiction", "Dirty Dancing", "Almost Famous"];
// console.log(movie[1]);

//STEP 2
// let movies = new Array(5);
// movies [0] = "Kill Bill";
// movies [1] = "Casino";
// movies [2] = "Pulp Fiction";
// movies [3] = "Dirty Dancing";
// movies [4] = "Almost Famous";
// console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies [0] = "Kill Bill";
// movies [1] = "Casino";
// movies [2] = "Pulp Fiction";
// movies [3] = "Dirty Dancing";
// movies [4] = "Almost Famous";
// console.log(movies[0]);
// movies[5] = 6;
// console.log(movies.length);

//STEP 4
// let movies = [];
// movies [0] = "Kill Bill";
// movies [1] = "Casino";
// movies [2] = "Pulp Fiction";
// movies [3] = "Dirty Dancing";
// movies [4] = "Almost Famous";
// delete movies [0];
// console.log(movies);

//STEP 5
// let movies = [];
// movies [0] = "Kill Bill";
// movies [1] = "Casino";
// movies [2] = "Pulp Fiction";
// movies [3] = "Dirty Dancing";
// movies [4] = "Almost Famous";
// movies [5] = "Dazed and Confused";
// movies [6] = "Up";

// Array.prototype.movie = () => {};
// for (let i in movies) {
//     if (movies.hasOwnProperty(i)) {
//     console.log(movies[i]);
//     }
// }


//STEP 6
// let movies = [];
// movies [0] = "Kill Bill";
// movies [1] = "Casino";
// movies [2] = "Pulp Fiction";
// movies [3] = "Dirty Dancing";
// movies [4] = "Almost Famous";
// movies [5] = "Dazed and Confused";
// movies [6] = "Up";


// for (let i of movies) {
//     console.log(i);
// }

//STEP 7
// let movies = [];
// movies [0] = "Kill Bill";
// movies [1] = "Casino";
// movies [2] = "Pulp Fiction";
// movies [3] = "Dirty Dancing";
// movies [4] = "Almost Famous";
// movies [5] = "Dazed and Confused";
// movies [6] = "Up";


// for (let i of movies) {
//     console.log(movies.sort());
// }

//STEP 8
// let movies = [];
// movies [0] = "Kill Bill";
// movies [1] = "Casino";
// movies [2] = "Pulp Fiction";
// movies [3] = "Dirty Dancing";
// movies [4] = "Almost Famous";
// movies [5] = "Dazed and Confused";
// movies [6] = "Up";
// let leastFavMovies = ["The Hills Have Eyes", "Paranormal Activity", "Scream"];


// Array.prototype.movie = () => {};
// console.log("Movies I like:");
// console.log('\n');
// for (let i in movies) {
//     if (movies.hasOwnProperty(i)) {
//     console.log(movies[i]);
//     }
// }
// console.log("\n", "Movies I dislike:");
//     console.log('\n');
// for (let m in leastFavMovies) {
//     if (leastFavMovies.hasOwnProperty(m)) {
//         console.log(leastFavMovies[m]);
//     }
// }

//STEP 9
// let movies = [];
// movies [0] = "Kill Bill";
// movies [1] = "Casino";
// movies [2] = "Pulp Fiction";
// movies [3] = "Dirty Dancing";
// movies [4] = "Almost Famous";
// movies [5] = "Dazed and Confused";
// movies [6] = "Up";
// let leastFavMovies = ["The Hills Have Eyes", "Paranormal Activity", "Scream"];
// let allMovies = movies.concat(leastFavMovies);
// console.log(allMovies);
// console.log(allMovies.sort().reverse());

//STEP 10 - not done
// let movies = [];
// movies [0] = "Kill Bill";
// movies [1] = "Casino";
// movies [2] = "Pulp Fiction";
// movies [3] = "Dirty Dancing";
// movies [4] = "Almost Famous";
// movies [5] = "Dazed and Confused";
// movies [6] = "Up";
// let leastFavMovies = ["The Hills Have Eyes", "Paranormal Activity", "Scream"];
// let allMovies = movies.concat(leastFavMovies);
// console.log(allMovies);
// console.log(allMovies.sort().reverse());
// console.log(allMovies[allMovies.length - 1]);

//STEP 11
// let movies = [];
// movies [0] = "Kill Bill";
// movies [1] = "Casino";
// movies [2] = "Pulp Fiction";
// movies [3] = "Dirty Dancing";
// movies [4] = "Almost Famous";
// movies [5] = "Dazed and Confused";
// movies [6] = "Up";
// let leastFavMovies = ["The Hills Have Eyes", "Paranormal Activity", "Scream"];
// let allMovies = movies.concat(leastFavMovies);
// console.log(allMovies);
// console.log(allMovies.sort().reverse());
// console.log(allMovies[0]);

//STEP 12 - not done
// let movies = [];
// movies [0] = "Kill Bill";
// movies [1] = "Casino";
// movies [2] = "Pulp Fiction";
// movies [3] = "Dirty Dancing";
// movies [4] = "Almost Famous";
// movies [5] = "Dazed and Confused";
// movies [6] = "Up";
// let leastFavMovies = ["The Hills Have Eyes", "Paranormal Activity", "Scream"];
// let allMovies = movies.concat(leastFavMovies);

// console.log(allMovies.indexOf("The Hills Have Eyes", "Paranormal Activity", "Scream"));


// if (allMovies.indexOf('The Hills Have Eyes') >= 0) {
//     return index;
// } else {
//     console.log('not found')
// }


//STEP 13
// let movies = [['Kill Bill', 1], ["Casino", 2], ["Pulp Fiction", 3], ["Dirty Dancing", 4], ["Almost Famous", 5]];

// for (let i = 0; i < movies.length; i++) {
//    console.log(movies[i].filter(movie => typeof movie ==='string'));
// }

 
//STEP 14
// let employees = ["Alice", "Sam", "Tony", "Jim", "Sara", "Kim", "Mike"];


// let showEmployee = function(items) {
//     let title = "Employees: \n";
//     console.log(title);
//     return items.employees;
    
// }
//showEmployee(employees);

//STEP 15
// function filterStuff(arr) {
//     arr = arr.filter(confirm);
//     return arr;
// }
// function confirm(value) {
//     if(value !== false || value !==null || value !==0 || value !== "") {
//         return value;
//     }
// }
// console.log(filterStuff([58, '', 'abcd', true, null, false, 0]));


//STEP 16
// let items = [1 ,2, 3, 4, 5, 6, 7, 8, 9];
// function randomNum(items) {
//     return items[Math.floor(Math.random()*items.length)];
// }
// console.log(randomNum(items));
//STEP 17
// let nums = [4, 50, 200, 99, 84, 34];
// console.log(Math.max.apply(null, nums));


