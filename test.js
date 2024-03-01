Reference = 0;
EqNum = Math.floor(Math.random() *5);
EqNum =0;
RNG = Math.floor(Math.random() *4);
Id = EqNum.toString() + RNG.toString();

KinematicEquations = [
    ["v=u+a*t" , "v", "u", "a", "t"],
    ["s=ut+1/2at^2 " , "s", "u", "a", "t"],
    ["s = vt - 1/2at^2" , "s", "v", "t", "a"],
    ["/v^2 = u^2 + 2as", "v", "u", "a", "s" ],
    ["s = ((v+u)/2)*t", "s", "v", "u", "t"]
];

alert(Id)

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


function KinematicEq(){
    Formats = [
        ["A car is driving at INITAL_VELOCTIY m/s. It accelerates at CONST_ACCELERATION for TIME seconds to FINAL_VELOCITY. Find the value of the blank. ", ]
    ]

    Eq = Map.get(Id);
    Unknown = KinematicEquations[RNG + 1];


}
function KinematicGenerate(){
    // For formats, create a list of formats for each case. Place INITIAL_VELOCITY etc. as temp values. Use text.replace to replace these temp values
    // A ball is thrown at an angle of ANGLE_DEG with a initial velocity of INITIAL_VELOCITY
    // 3d array: Array[EQNUM][Format]
    Formats = [
        ["A car is driving at INITAL_VELOCTIY m/s. It accelerates at CONST_ACCELERATION for TIME seconds to FINAL_VELOCITY. Find the value of the blank. ", ]
    ]
    
        
    Val1,Val2,Val3 = RandomInt(0,20);


    document.getElementById("Question").innerText = Array[EqNum][RandomInt(0,0)];
    
    return eval(Map.get(Id));
    


}





