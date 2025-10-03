function add(){
     let num1 = Number(document.getElementById("num1").value);
	 let num2 = Number(document.getElementById("num2").value);
	 document.getElementById("result").value = num1+num2;
}

function del(){
	 let num1 = Number(document.getElementById("num1").value);
	 let num2 = Number(document.getElementById("num2").value);
	 document.getElementById("result").value = num1-num2;
}

function mult(){
	 let num1 = Number(document.getElementById("num1").value);
	 let num2 = Number(document.getElementById("num2").value);
     document.getElementById("result").value = num1*num2;
}

function sub(){
	let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
     document.getElementById("result").value = num1/num2;
}

function power(){
     let num1 = Number(document.getElementById("num1").value);
     let num2 = Number(document.getElementById("num2").value);
     document.getElementById("result").value = Math.pow(num1, num2);
}

function mod(){
	let num1 = Number(document.getElementById("num1").value);
	let num2 = Number(document.getElementById("num2").value);
	document.getElementById("result").value = num1 % num2;
}

function sqrt(){
     let num1 = Number(document.getElementById("num1").value);
	 document.getElementById("result").value = Math.sqrt(num1);
}

function clearInputs(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
}