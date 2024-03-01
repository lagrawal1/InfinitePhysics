Reference = 0;
EqNum = Math.floor(Math.random() *5);
EqNum = 0;
RNG = Math.floor(Math.random() *4);
Id = EqNum.toString() + RNG.toString();
RNG = 0;

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
    ["10", "u*t+0.5*a*t*t" ], // s
    ["11","(s-0.5*a*t*t)/t" ], // u
    ["12", "2*(s-u*t)/(t*t)" ], // a
    ["13" , "((-1*u + Math.sqrt(u*u + 2*a*s))/a)"], //t

    ["20", "u+a*t" ],
    ["21","v-a*t" ],
    ["22", "(v-u)/t" ],
    ["23" , "(v-u)/a"],

    ["30", "u+a*t" ],
    ["31","v-a*t" ],
    ["32", "(v-u)/t" ],
    ["33" , "(v-u)/a"],

    ["40", "u+a*t" ],
    ["41","v-a*t" ],
    ["42", "(v-u)/t" ],
    ["43" , "(v-u)/a"],
]);


function RandomInt(min,max){
    return (Math.floor((Math.random()* (max-min)) + min));
}

function GenerateKinematic(){
    // For formats, create a list of formats for each case. Place INITIAL_VELOCITY etc. as temp values. Use text.replace to replace these temp values
    // A ball is thrown at an angle of ANGLE_DEG with a initial velocity of INITIAL_VELOCITY
    // 3d array: Array[EQNUM][Format]
    Eq = EquationMap.get(Id);
    Unknown = KinematicEquations[RNG + 1];
    Formats = [
        ["A car is driving at INITIAL_VELOCITY m/s. It accelerates at CONST_ACCELERATION for TIME seconds to FINAL_VELOCITY. Find the value of the blank. ", ]
    ];
    ValList = KinematicEquations[EqNum];
    ValList.splice(0, 1);
    ValList.splice(RNG,1);
    Val1 = RandomInt(0,20);
    Val2 = RandomInt(0,20);
    Val3 = RandomInt(0,20);
    ValMap = new Map([
        [ValList[0] , Val1],
        [ValList[1] , Val2],
        [ValList[2] , Val3],

    ]);
    Question = Formats[EqNum][0];
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

    Reference = eval(Map.get(Id));
    event.preventDefault();
}


function AnswerCheck(){
    var Input = document.getElementById("KinematicInput").value; 

    if (Input.trim() ==""){
        alert("Please enter a value.");
    } else if (Input == Reference){
        alert("correct");
        GenerateKinematic();
    } else{
        alert("incorrect");
    }
    event.preventDefault();
}



