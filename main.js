
function KinematicEq1(){
    // v =u +at
    let RNG = Math.floor(Math.random * 4);
    if (RNG == 0){
        //Solve for v
        let u = Math.floor(Math.random * 100);
        let a = Math.floor(Math.random * 100);
        let t = Math.floor(Math.random * 100);
        // Get innerhtml and create question here.

        v = u +a*t;
        var input = document.getElementById(); // Enter id of input
        if (input == v){
            alert("correct");
        } else {
            alert("nope");
        }


    }


    
} 

function BasicKinematic(EqNum){
    let n = Math.floor(Math.random()*10);
    var s, u, v, a, t, input;
    if (EqNum == 0){
        // v = u +at
        KinematicEq1()
        

    }

}


