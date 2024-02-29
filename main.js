Reference = 0;

function KinematicEq1(Val1 , Val2, Val3,Unknown, ParameterNames){
    // v = u + at
    Val1 = Math.floor(Math.random() * 20);
    Val2 = Math.floor(Math.random() * 20);
    Val3 = Math.floor(Math.random() * 20);
    document.getElementById("Question").innerText = ParameterNames[0]+" = "+Val1 +" , "+ ParameterNames[1]+" = "+Val2 + " , "+ParameterNames[2]+" = "+Val3;

    if (Unknown == "v"){
        v = Val1 + Val2*Val3;
        return v;
    } else if (Unknown = "u"){
        u = Val1-Val2*Val3;
        return u;
    } else if (Unknown = "a"){
        a = (Val1-Val2)/Val3;
        return a;
    } else if (Unknown = "t"){
        t= (Val1-Val2)/Val3;
        return t;
    }
}

function KinematicEq2(Val1 , Val2, Val3,Unknown, ParameterNames){
    // v^2 = u^2 + 2as
    // Work on this functionasdfdksjfnakjsdf
    Val1 = Math.floor(Math.random() * 20);
    Val2 = Math.floor(Math.random() * 20);
    Val3 = Math.floor(Math.random() * 20);
    document.getElementById("Question").innerText = ParameterNames[0]+" = "+Val1 +" , "+ ParameterNames[1]+" = "+Val2 + " , "+ParameterNames[2]+" = "+Val3;

    if (Unknown == "v"){
        v = Math.sqrt(Val1*Val1 + 2*Val2*Val3);
        return v;
    } else if (Unknown = "u"){
        u = Val1-Val2*Val3;
        return u;
    } else if (Unknown = "a"){
        a = (Val1-Val2)/Val3;
        return a;
    } else if (Unknown = "t"){
        t= (Val1-Val2)/Val3;
        return t;
    }
}

function GenerateKinematic(){
    let EqNum = Math.floor(Math.random() *5);
    EqNum = 0;
    var s, u, v, a, t;
    if (EqNum == 0){
        var RNG = Math.floor(Math.random() *4);
        RNG = 0;
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
        var RNG = Math.floor(Math.random() *4);
        RNG = 0;
        if (RNG == 0){
            Reference = KinematicEq1(u , a, t, "v" , ["u" , "a", "t"]);
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