function addition(){
    let first=document.getElementById("first-number").value;
    let second=document.getElementById("second-number").value;
    let result=Number(first) + Number(second);

    colorOutput(result);

}

// Handle Case Where Subtracting by Negative
function subtraction(){
    let first=document.getElementById("first-number").value;
    let second=document.getElementById("second-number").value;
    let result=Number(first) - Number(second);

    colorOutput(result);

}

function multiplication(){
    let first=document.getElementById("first-number").value;
    let second=document.getElementById("second-number").value;
    let result=Number(first) * Number(second);

    colorOutput(result);
}

function division(){
    let first=document.getElementById("first-number").value;
    let second=document.getElementById("second-number").value;
    let result=Number(first) / Number(second);

    colorOutput(result);
}

function power(){
        let first=document.getElementById("first-number").value;
        let second=document.getElementById("second-number").value;
        let result= 1
        let flag = 0

        if(second <0){
            flag = 1
            second = -second;

        }

        for (let i = 0; i < Number(second); i++) {
            result *= Number(first);
        }

        if(flag === 1){
            result = 1 / result; // Handles when having negative exponent
        }

        colorOutput(result);
}

function colorOutput(result){
    let output = document.getElementById("output");
    output.innerHTML = String(result);

    // If negative, change to red
    if(result < 0){
        output.style.color = "red";
    }
    // Black is for positive, update when positive
    else{
        output.style.color = "black";
    }
}

function clearOutput(){
    document.getElementById("output").innerHTML="";
    document.getElementById("first-number").value="";
    document.getElementById("second-number").value="";
}