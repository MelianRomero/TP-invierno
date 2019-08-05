function deABi(){
  var decimal = Number (document.getElementById("decimal").value);

  alert("el numero en binario es "+ decimal.toString(2));
  alert("el numero en octal es "+ decimal.toString(8));
  alert("el numero en hexadecimal es "+ decimal.toString(16));
}

function biADe(){
  let binario =(document.getElementById("binario").value);
  let numerotemp = Number.parseInt(binario,2);

  alert("El numero en decimal es " + Number.parseInt(binario,2));
  alert("el numero en octal es "+ numerotemp.toString(8));
  alert("el numero en hexadecimal es "+ numerotemp.toString(16));
}

function convOc(){
  let octal =(document.getElementById("octal").value);
  let numerotemp = Number.parseInt(octal,8);

  alert("El numero en decimal es " + Number.parseInt(octal,8));
  alert("el numero en binario es "+ numerotemp.toString(2));
  alert("el numero en hexadecimal es "+ numerotemp.toString(16));
}

function convHex(){
  let hexadecimal =(document.getElementById("hexadecimal").value);
  let numerotemp = Number.parseInt(hexadecimal,16);

  alert("El numero en decimal es " + Number.parseInt(hexadecimal,16));
  alert("el numero en binario es "+ numerotemp.toString(2));
  alert("el numero en octal es "+ numerotemp.toString(8));
}
