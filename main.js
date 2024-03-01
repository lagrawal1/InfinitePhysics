Reference = 0;
EqNum = Math.floor(Math.random() *5);

KinematicEquations = [
    ["v=u+a*t" , "v", "u", "a", "t"],
    ["s=ut+1/2at^2 " , "s", "u", "a", "t"],
    ["s = vt - 1/2at^2" , "s", "v", "t", "a"],
    ["/v^2 = u^2 + 2as", "v", "u", "a", "s" ],
    ["s = ((v+u)/2)*t", "s", "v", "u", "t"]
];

RNG = Math.floor(Math.random() *4);
Id = EqNum.toString() + RNG.toString();
alert(Id)

EquationMap = new Map([
    // v = u + at
    ["00", "u+a*t" ], // v
    ["01","v-a*t" ], // u
    ["02", "(v-u)/t" ], // a
    ["03" , "(v-u)/a"], // t

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











function KinematicEq1(Val1 , Val2, Val3,Unknown, ParameterNames){
    // For formats, create a list of formats for each case. Place INITIAL_VELOCITY etc. as temp values. Use text.replace to replace these temp values
    // A ball is thrown at an angle of ANGLE_DEG with a initial velocity of INITIAL_VELOCITY
    // 3d array: Array[EQNUM][Format]
    Formats = [
        ["A car is driving at INITAL_VELOCTIY m/s. It accelerates at CONST_ACCELERATION for TIME seconds to FINAL_VELOCITY. Find the value of the blank. ", ]
    ]
        

        
    Val1,Val2,Val3 = RandomInt(0,20);
    document.getElementById("Question").innerText = ParameterNames[0]+" = "+Val1 +" , "+ ParameterNames[1]+" = "+Val2 + " , "+ParameterNames[2]+" = "+Val3;
    
    return eval(Map.get(Id));
    
    /*
    switch(EqNum){
        case 0:
            // v = u + at
            switch(Unknown){
                case "v":
                    return (Val1 + Val2*Val3); // Val1 = u, Val2 = a, Val3 = t
                    break;
                case "u":
                    return (Val1-Val2*Val3); // Val1 = 
                    break;
                case "a":
                    return ((Val1-Val2)/Val3);
                    break;
                case "t":
                    return ((Val1-Val2)/Val3);
                    break;

            }
            break;
        case 1:
            //s = ut + 1/2at^2
            switch(Unknown){
                case "s":
                    return (Val1*Val2+0.5*Val3*Val2*Val2); // Val = u, Val2 = t, Val3 = a
                    break;
                case "u":
                    return ((Val1-0.5*Val3*Val2*Val2)/Val2); // Val1 = s, Val2 = t, Val3 =a
                    break;
                case "a":
                    return (2*(Val1-Val2*Val3)/(Val3*Val3)); // Val1 = s, Val2 = u, Val3 = t
                    break;
                case "t":
                    return ((-1*Val1 + Math.sqrt(Val1*Val1 + 2*Val2*Val3))/Val2); // Val1 = u, Val2 = a, Val3 = s Reminder: Check out for 2 solutions
                    break;
            }
            break;
        case 2:
            //s = vt - 1/2at^2
            switch(Unknown){
                case "s":
                    return (Val1*Val2 - 0.5*Val3*Val2*Val2); // Val1 = v , Val2 = t, Val3 = a
                    break;
                case "v":
                    return ((Val1 + 0.5*Val3*Val2*Val2)/Val2); // Val1 = s, Val2 = t, Val3 = a
                    break;
                case "a":
                    return ((Val1-Val2)/Val3); // 
                    break;
                case "t":
                    return ((Val1-Val2)/Val3);
                    break;

            }
            break;
            case 3:
                //v^2 = u^2 + 2as
                switch(Unknown){
                    case "v":
                        return (Math.sqrt(Val1*Val1 + 2*Val2*Val3));
                        break;
                    case "u":
                        return (Val1-Val2*Val3);
                        break;
                    case "a":
                        return ((Val1-Val2)/Val3);
                        break;
                    case "t":
                        return ((Val1-Val2)/Val3);
                        break;
    
                }
                break;
            case 4:
            //v^2 = u^2 + 2as
            switch(Unknown){
                case "v":
                    return (Math.sqrt(Val1*Val1 + 2*Val2*Val3));
                    break;
                case "u":
                    return (Val1-Val2*Val3);
                    break;
                case "a":
                    return ((Val1-Val2)/Val3);
                    break;
                case "t":
                    return ((Val1-Val2)/Val3);
                    break;

            }
            break;
        

    }*/


}


function GenerateKinematic(){

    var s, u, v, a, t;
    var RNG = Math.floor(Math.random() *4);
    if (EqNum == 0){
        if (RNG == 0){
            Reference = KinematicEq1(u , a, t, "v" , ["u" , "a", "t"]);
        }else if (RNG == 1){
            Reference = KinematicEq1(v , a, t, "u" , ["v" , "a", "t"]);
        }else if (RNG == 2){
            Reference = KinematicEq1(v,u,t,"a", ["v","u","t"]);
        }else if (RNG ==3){
            Reference  = KinematicEq1(v,u,a,"t", ["v","u","a"]);
        }
    } else if (EqNum == 1){
        RNG = 0;
        if (RNG == 0){
            Reference = KinematicEq1(u , a, s, "v" , ["u" , "a", "s"]);
        } else if (RNG == 1){
            Reference = KinematicEq1(v , a, t, "u" , ["v" , "a", "t"]);
        }else if (RNG == 2){
            Reference = KinematicEq1(v,u,t,"a", ["v","u","t"]);
        }else if (RNG ==3){
            //Solve for a
            window.Reference  = KinematicEq1(v,u,a,"t", ["v","u","a"]);
            alert(Reference);
        }
    }
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


// Basic -> All values are given in the real world example -> No free fall
// Intermediate -> All values not given -> Free fall or implied
// Advanced -> Projectile and 2d motion