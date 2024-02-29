var Reference = 0;

function KinematicEq1(Val1 , Val2, Val3,Unknown, ParameterNames){

    Val1 = Math.floor(Math.random() * 20);
    Val2 = Math.floor(Math.random() * 20);
    Val3 = Math.floor(Math.random() * 20);
    document.getElementById("Question").innerText = ParameterNames[0]+" = "+Val1 +" , "+ ParameterNames[1]+" = "+Val2 + " , "+ParameterNames[2]+" = "+Val3;


    if (Unknown == "v"){
        v = u + a*t;
        return v;
    } else if (Unknown = "u"){
        u = v-a*t;
        return u;
    } else if (Unknown = "a"){
        a = (v-u)/t;
        return a;
    } else if (Unknown = "t"){
        t= (v-u)/a;
        return t;
    }



}

function GenerateKinematic(){
    let EqNum = Math.floor(Math.random() *5);
    EqNum = 0;
    var s, u, v, a, t;
    if (EqNum == 0){

        var RNG = Math.floor(Math.random()*4);

        if (RNG == 0){
            Reference = KinematicEq1(u , a, t, "v" , ["u" , "a", "t"]);
            alert(Reference);
        } else if (RNG == 1){
            window.Reference = KinematicEq1(v , a, t, "u" , ["v" , "a", "t"]);
            alert(Reference);
        }else if (RNG == 2){
            window.Reference = KinematicEq1(v,u,t,"a", ["v","u","t"]);
            alert(Reference);
        }else if (RNG ==3){
            //Solve for a
            window.Reference  = KinematicEq1(v,u,a,"t", ["v","u","a"]);
            alert(Reference);
            
        }
    }
    event.preventDefault();
}


function AnswerCheck(){
    alert(Reference);
    var Input = document.getElementById("KinematicInput").value; // Enter id of input

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