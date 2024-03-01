

Code Overview:
We have used html and javascript to create our project along with TailwindCSS. 
To run the code, we used live server, an extension on VSCode, however the file may be run in anyway preferred. 

Code Explanation:

main.html is the page on which questions are shown. home.html is a home page and help.html includes kinematic equations.
main.js has a few variables declared at the top which are Reference, the correct answer, EqNum, the number of the equation which the question will be based on, RNG, the unknown variable, and Id, a concatenation of EqNum and RNG to find the equation needed to find the answer. 
KinematicEquations is a 2d array which contains the variables and the main equation.
EquationMap includes the aforementioned Id and the corresponding form of the kinematic equation needed to be solved to find the answer. 

RandomInt() is a function which returns a random value based on min and max. 

GenerateKinematic() is the function which will generate and solve kinematic equations. Unknown is the unknown variable which the student will solve for. Formats is a 2d array which contains question formats based on the 5 kinematic equations.

ValList is an array from the 2d array KinematicEquations. It contains the array for the kinematic equation being used. The kinematic equation and unknown are then removed. It will only contain the variables values which will be provided. These values are then randomized to be from 1 to 20. ValMap is a map created to have the variables and corresponding values.

Next, formats are randomized and filled using text.replace. The question is printed. Reference is evaluated using the kinematic equation. 

Finally, when the user clicks enter the Input is taken and compated to the Reference. If correct, we move on to the next question else we will tell the user their answer is incorrect. 
