Reference = 0;
EqNum = Math.floor(Math.random() *5);

function KinematicEq1(Val1 , Val2, Val3,Unknown, ParameterNames){
    // v = u + at
    // For formats, create a list of formats for each case. Place INITIAL_VELOCITY etc. as temp values. Use text.replace to replace these temp values
    // A ball is thrown at an angle of ANGLE_DEG with a initial velocity of INITIAL_VELOCITY
    // 3d array: Array[EQNUM][Unknown][Format]
    Formats = [
        [
            [
                "A car is driving at INITAL_VELOCTIY m/s. It accelerates at CONST_ACCELERATION for TIME seconds. What is its velocity after accelerating in m/s?", 

            ]
        ]
    ]
    Val1 = Math.floor(Math.random() * 20);
    Val2 = Math.floor(Math.random() * 20);
    Val3 = Math.floor(Math.random() * 20);
    document.getElementById("Question").innerText = ParameterNames[0]+" = "+Val1 +" , "+ ParameterNames[1]+" = "+Val2 + " , "+ParameterNames[2]+" = "+Val3;

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
                    return ((Val1-Val2)/Val3);
                    break;
                case "t":
                    return ((Val1-Val2)/Val3);
                    break;

            }
            break;
        case 2:
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
        

    }


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