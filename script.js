let verified = false;
let key = "";


// verifica se veio do LootLabs

let params = new URLSearchParams(window.location.search);


if(params.get("verified") === "true"){

    verified = true;

    document.getElementById("status").innerHTML =
    "✅ Verification completed";

}
else{

    document.getElementById("status").innerHTML =
    "❌ Please complete verification";

}



document.getElementById("getKey").onclick=function(){


if(!verified){

alert("Complete verification first!");

return;

}



key = 
"XT-" +
Math.random()
.toString(36)
.substring(2,10)
.toUpperCase();



document.getElementById("key").innerHTML=key;


};



document.getElementById("copy").onclick=function(){


if(key){

navigator.clipboard.writeText(key);

alert("Copied!");

}


};
