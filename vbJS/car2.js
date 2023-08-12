
function buttonFinal2(){
  var value_1 = window.document.getElementById('vb-quantid4');
  var type_color = window.document.getElementById('vb-color4');
  var size = window.document.getElementById('vb-size4');

  var value_quant1 = Number(value_1.value);
  var color = type_color.options[type_color.selectedIndex].text;
  var size_value = String(size.value);
  /*---------------------------------------------------------------*/

  var value_2 = window.document.getElementById('vb-quantid5');
  var type_calca = window.document.getElementById('vb-color5');
  var size2 = window.document.getElementById('vb-size5');

  var value_quant2 = Number(value_2.value);
  var calca = type_calca.options[type_calca.selectedIndex].text;
  var size_value2 = String(size2.value);
  /*---------------------------------------------------------------*/
  
  var value_quantid1 = Math.abs(value_quant1);
  var value_quantid2 = Math.abs(value_quant2);

  if(value_quantid1 <= 100 && value_quantid2 <= 100){

    var malha1 = "DRYFIT";
    var malha2 = "JEANS";
    var genero = "MASCULINO";
    var tipo = "BERMUDA";
    var tipo2 = "CALÇA";

    var preco_final = 9.90*value_quantid1;
    var preco_final2 = 55.90*value_quantid2;

    if(value_quantid1 == " "){
      value_quantid1 = 0;

    }else {
      
      window.alert('ADIOCIONADO AO CARRINHO COM SUCESSO !!');

      bermuPlayer.innerHTML = `<h3>BERMUDA JOGADOR</h3>`; 
      preco_tot_finalB.innerHTML = `PREÇO: R$ 9.90`;
      d1.innerHTML = `QUANTIDADE: ${value_quantid1}`;  
      d2.innerHTML = `COR: ${color}`;
      d3.innerHTML = `GENERO: ${genero}`;
      d4.innerHTML = `TAMANHO: ${size_value}`;
      d5.innerHTML = `MALHA: ${malha1}`;
      d6.innerHTML = `TIPO: ${tipo}`;

      separar1.innerHTML = `----------------------------------------------------`;
    }


    if(value_quantid2 == " "){
         value_quantid2 = 0;

      }else {

        window.alert('ADIOCIONADO AO CARRINHO COM SUCESSO !!');

        calcaPlayer.innerHTML = `<h3>CALÇA JEANS</h3>`; 
        preco_tot_.innerHTML = `PREÇO: R$ 55.90`;
        d7.innerHTML = `QUANTIDADE: ${value_quantid2}`;  
        d8.innerHTML = `COR: ${calca}`;
        d9.innerHTML = `GENERO: ${genero}`;
        d10.innerHTML = `TAMANHO: ${size_value2}`;
        d11.innerHTML = `MALHA: ${malha2}`;
        d12.innerHTML = `TIPO: ${tipo2}`;

      separar3.innerHTML = `--------------------------------------------------------------`;

      }

      var result_final = preco_final+preco_final2;
      var final_result = result_final.toFixed(2);

      if(final_result < 1){
        window.alert('[ERRO] - INFORME UM NÚMERO DE 1 A 100.');
        window.location.reload();

      }else {
        separar4.innerHTML = `<h2>PREÇO TOTAL: R$ ${final_result}</h2>`;

        compraFinal2.innerHTML = `<input type="button" value="COMPRAR"/>`;
        canceledd2.innerHTML = `<input type="button" value="CANCELAR CARRINHO" onclick="window.location.reload()"/> `;
      }

  }else {
    window.alert('[ERRO] - INFORME UM NÚMERO DE 1 A 100');
  }
   
}