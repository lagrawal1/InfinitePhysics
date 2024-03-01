Reference = 0;
EqNum = Math.floor(Math.random() *5);
RNG = Math.floor(Math.random() *4);
Id = EqNum.toString() + RNG.toString();


KinematicEquations = [
    ["v=u+a*t" , "v", "u", "a", "t"],
    ["s=ut+1/2at^2 " , "s", "u", "a", "t"],
    ["s = vt - 1/2at^2" , "s", "v", "t", "a"],
    ["v^2 = u^2 + 2as", "v", "u", "a", "s" ],
    ["s = ((v+u)/2)*t", "s", "v", "u", "t"]
];

EquationMap = new Map([
    // v = u + at
    ["00", "Val1 + Val2*Val3" ], // Unknown = v, Val1 = u, Val2 = a, Val3 = t
    ["01","Val1-Val2*Val3" ], // Unknown = u, Val1 = v, Val2 = a, Val3 = t
    ["02", "(Val1-Val2)/Val3" ], // Unknown = a ,Val1 = v, Val2 = u, Val3 = t
    ["03" , "(Val1-Val2)/Val3"], // Unknown = t ,Val1 = u, Val2 = a, Val3 = a

    // s = ut +0.5at^2
    ["10", "Val1*Val3+0.5*Val2*Val3*Val3" ], // Unknown = s, Val1 = u, Val2 = a, Val3 = t
    ["11","(Val1-0.5*Val2*Val3*Val3)/Val3" ], // Unknown = u, Val1 = s, Val2 = a, Val3 = t
    ["12", "2*(s-u*t)/(t*t)" ], // Unknown = s, Val1 = u, Val2 = a, Val3 = t
    ["13" , "((-1*Val2 + Math.sqrt(Val2*Val2 + 2*Val2*Val1))/Val3)"], //Unknown = t, Val1 = s, Val2 = u, Val3 = a

    // s = vt - 1/2at^2
    ["20", "Val1*Val2-0.5*Val3*Val2*Val2" ], // Unknown = s ,Val1 = v, Val2 = t, Val3 = a
    ["21","(Val1+0.5*Val3*Val2*Val2)/Val2" ], // Unknown = v ,Val1 = s, Val2 = t, Val3 = a 
    ["22", "(Val2+Math.sqrt(Val2*Val2-2*Val1*Val3)/Val3" ], // Unknown = t ,Val1 = s, Val2 = v, Val3 = a
    ["23" , "2*(Val2*Val3-Val1)/(Val3*Val3)"], // Unknown = a ,Val1 = s, Val2 = v, Val3 = t

    // v^2 = u^2 + 2as
    ["30", "Math.sqrt(Val1*Val1+2*Val2*Val3)" ], // Unknown = v ,Val1 = u, Val2 = a, Val3 = s
    ["31","Math.sqrt(Val1*Val1-2*Val2*Val3)" ], // Unknown = u ,Val1 = v, Val2 = a, Val3 = s
    ["32", "(Val1*Val1-Val2*Val2)/(2*Val3)" ], // Unknown = a ,Val1 = v, Val2 = u, Val3 = s
    ["33" , "(Val1*Val1-Val2*Val2)/(2*Val3)"], // Unknown = s ,Val1 = v, Val2 = u, Val3 = a
    
    // s = ((v+u)/2)*t  
    ["40", "(Val1+Val2)/2*Val3" ], // Unknown = s ,Val1 = v, Val2 = u, Val3 = t
    ["41","2*Val1/Val3 - Val2" ], // Unknown = v ,Val1 = s, Val2 = u, Val3 = t
    ["42", "2*Val1/Val3 - Val2" ], // Unknown = u ,Val1 = s, Val2 = v, Val3 = t
    ["43" , "2*Val1/(Val2+Val3)"], // Unknown = t ,Val1 = s, Val2 = v, Val3 = u
]);


function RandomInt(min,max){
    return (Math.floor((Math.random()* (max-min)) + min));
}

function GenerateKinematic(){
    // For formats, create a list of formats for each case. Place INITIAL_VELOCITY etc. as temp values. Use text.replace to replace these temp values
    // A ball is thrown at an angle of ANGLE_DEG with a initial velocity of INITIAL_VELOCITY
    // 3d array: Array[EQNUM][Format]

    Unknown = KinematicEquations[RNG + 1];
    Formats = [
        /*v = u + at*/["A car is driving at INITIAL_VELOCITY m/s. It accelerates at CONST_ACCELERATION m/s^2 for TIME seconds to FINAL_VELOCITY m/s. Find the missing value to 2 decimal places.", "A team of engineers want to make the scariest roller coaster on the planet. To do this, they set an acceleration of CONST_ACCELERATION m/s^2 and a final velocity of FINAL_VELOCITY. Assuming the roller coaster starts off at INITIAL_VELOCITY m/s and the ride takes TIME seconds. Find the missing value to two decimal places."],
        /*s = ut + 0.5at^2*/ ["A car starts off with a velocity of INITIAL_VELOCITY m/s. It accelerates at CONST_ACCELERATION m/s^2 for TIME seconds and covers DISPLACEMENT m. Find the missing value to 2 decimal places.", "A team of engineers want to make the scariest roller coaster on the planet. To achieve this, the roller coaster should drop from a heigh of DISPLACEMENT m, assuming initial velocity is INITIAL_VELOCITY m/s and the roller coaster accelerates at CONST_ACCELERATION m/s^2 for TIME seconds. Find the missing value to two decimal places."],
        /*s = vt - 0.5at^2*/ ["A car accelerates at CONST_ACCELERATION m/s^2 for TIME seconds and reaches a velocity of FINAL_VELOCITY m/s. During this journey, it covers a distance of DISPLACEMENT m. Find the missing value to 2 decimal places.", "A team of engineers want to make the scariest roller coaster on the planet. To achieve this, the roller coaster should drop from a height of DISPLACEMENT m, and reach a final velocity of FINAL_VELOCITY m/s, with acceleration CONST_ACCELERATION m/s^2 in TIME seconds. Find the missing value to two decimal places."],
        /*v^2 = u^2 + 2as*/["A car accelerates at CONST_ACCELERATION m/s^2 from INITIAL_VELOCITY m/s to FINAL_VELOCITY m/s. It covers a distance of DISPLACEMENT m during this journey. Find the missing value to 2 decimal places.", "A team of engineers want to make the scariest roller coaster ever. To accomplish this, for the drop, a height of DISPLACEMENT m needs to be taken considering the roller coaster will start from INITIAL_VELOCITY m/s and reach a FINAL_VELOCITY m/s in TIME seconds. Find the missing value to two decimal places."],
        /*s = ((v+u)/2)*t*/["A car goes from INITIAL_VELOCITY m/s to FINAL_VELOCITY m/s in TIME seconds. It covers a distance of DISPLACEMENT m during this journey. Find the missing value to 2 decimal places.", "A team of engineers want to make the scariest roller coaster ever. To do this, they want the roller coaster to reach a velocity of FINAL_VELOCITY m/s in TIME seconds. Assuming the initial velocity will be INITIAL_VELOCITY m/s and the coaster will cover a distance of DISPLACEMENT m, find the missing value to two decimal places."]
    ];
    ValList = KinematicEquations[EqNum];
    ValList.splice(0, 1);
    ValList.splice(RNG,1);
    Val1 = RandomInt(1,20);
    Val2 = RandomInt(1,20);
    Val3 = RandomInt(1,20);
    ValMap = new Map([
        [ValList[0] , Val1],
        [ValList[1] , Val2],
        [ValList[2] , Val3],

    ]);
    Question = Formats[EqNum][RandomInt(0,2)];
    for (let i=0;i<ValList.length; i++){
        if (ValList[i] == "s"){
            Question = Question.replace("DISPLACEMENT", ValMap.get(ValList[i]));
        } else if (ValList[i] == "u"){
            Question = Question.replace("INITIAL_VELOCITY", ValMap.get(ValList[i]));
        } else if (ValList[i] == "v"){
            Question = Question.replace("FINAL_VELOCITY", ValMap.get(ValList[i]));
        } else if (ValList[i] == "a"){
            Question = Question.replace("CONST_ACCELERATION", ValMap.get(ValList[i]));
        } else if (ValList[i] == "t"){
            Question = Question.replace("TIME", ValMap.get(ValList[i]));
        }
    }

    document.getElementById("Question").innerText = Question;

    Reference= eval(EquationMap.get(Id));
    event.preventDefault();
}


function AnswerCheck(){
    var Input = document.getElementById("KinematicInput").value

    if (Input.trim() ==""){
        document.getElementById("Response").innerText = "Please enter a value.";
    } else if (Input == Reference.toFixed(2)){
        document.getElementById("Response").style.color = "green";
        document.getElementById("Response").innerText = "Correct";

        GenerateKinematic();
    } else{
        document.getElementById("Response").style.color = "red";
        document.getElementById("Response").innerText =  "Incorrect. Try again.";
    }
    event.preventDefault();
}



