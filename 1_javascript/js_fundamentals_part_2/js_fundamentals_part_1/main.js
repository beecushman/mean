// Go through each value in array x, where x = [3,5,‘Dojo’, ‘rocks’, ‘Michael’,
// ‘Sensei’]. Log each value.
  var x = [3, 5, "Dojo", "rocks", "Michael", "Sensei"];
  for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
  }


// Add a new value (100) in the array x using a push method.
  x.push(100);


// Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log
// x in the console and analyze how x looks now.
  x.push(["hello", "world", "JavaScript is Fun"])
  console.log(x);


// Create a simple for loop that sums all the numbers between 1 to 500. Have
// console log the final sum.
  var sum = 0;
  for (var i = 1; x <= 500; i++){
    sum += i;
  }
  console.log(sum);


// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find
// the minimum value, and then print it
  var x_2 = [1, 5, 90, 25, -3, 0];
  var min = x_2[0];
  for (var i = 1; i < x_2.length; i++){
    if (min > x_2[i]) {
      min = x_2[i];
    }
  }

  console.log("The minimum value is: " + min)


// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the
// average of all of the values, and then print it
  var x_3 = [1, 5, 90, 25, -3, 0];
  var sum = 0;
  for (var i = 0; i < x_3.length; i++){
    sum += x_3[i];
  }
    console.log(sum / x_3.length);