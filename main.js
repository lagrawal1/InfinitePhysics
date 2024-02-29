

function KinematicEq1(u , a, t,Unknown){

    if (Unknwon == "v"){


    }





    event.preventDefault();
}




function GenerateKinematic(){
    let EqNum = Math.floor(Math.random() *5);
    EqNum = 0;
    var s, u, v, a, t;
    if (EqNum == 0){

        let RNG = Math.floor(Math.random()*4)
        // v = u +at
        if (RNG == 0){
            //Solve for v
            u = Math.floor(Math.random() * 100);
            a = Math.floor(Math.random() * 100);
            t = Math.floor(Math.random() * 100);
            document.getElementById("Question").innerText = "u = " + u + " , a = " + a + ", t =" + t ;
            // Get innerhtml and create question here.
            v = u+a*t;
            return v;
        } else if (RNG == 1){

        }else if (RNG == 2){
            
        }else if (RNG ==3){
            
        }
    }


    event.preventDefault();
}




function AnswerCheck(Reference){
    var Input = document.getElementById("KinematicInput").value; // Enter id of input
    if (Input == Reference){
        alert("correct");
        GenerateKinematic();
    } else{
        alert("incorrect");
    }
    event.preventDefault();
}