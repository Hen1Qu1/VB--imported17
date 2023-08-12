
function VBcanceledBUY(){
    sessionStorage.removeItem("VBname");
    sessionStorage.removeItem("VBvalue");
    sessionStorage.removeItem("VBquantid");
    sessionStorage.removeItem("VBcolor");
    sessionStorage.removeItem("VBsize");
    sessionStorage.removeItem("VBmalha"); 
    sessionStorage.removeItem("VBgene");
    sessionStorage.removeItem("VBtype");

    sessionStorage.removeItem("VBname2");
    sessionStorage.removeItem("VBvalue2");
    sessionStorage.removeItem("VBquantid2");
    sessionStorage.removeItem("VBcolor2");
    sessionStorage.removeItem("VBsize2");
    sessionStorage.removeItem("VBmalha2"); 
    sessionStorage.removeItem("VBgene2");
    sessionStorage.removeItem("VBtype2");

    sessionStorage.removeItem("VBname3");
    sessionStorage.removeItem("VBvalue3");
    sessionStorage.removeItem("VBquantid3");
    sessionStorage.removeItem("VBclub3");
    sessionStorage.removeItem("VBsize3");
    sessionStorage.removeItem("VBmalha3"); 
    sessionStorage.removeItem("VBgene3");
    sessionStorage.removeItem("VBtype3");

    window.alert("COMPRA CANCELADA !!");
    window.location.assign("index.html");
}



function inicia2(){
   window.document.getElementById('VBcanceled_BUY').addEventListener("click",function(){
      VBcanceledBUY();
   });
}

window.addEventListener("load", inicia2);