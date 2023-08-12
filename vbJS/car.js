

function buttonFinal(){
   var value_1 = window.document.getElementById('vb-quantid');
   var type_color = window.document.getElementById('vb-color');
   var size = window.document.getElementById('vb-size');

   var value_quant1 = Number(value_1.value);
   var color = type_color.options[type_color.selectedIndex].text;
   var size_value = String(size.value);
  /*---------------------------------------------------------------*/

   var value_2 = window.document.getElementById('vb-quantid2');
   var type_color2 = window.document.getElementById('vb-color2');
   var size2 = window.document.getElementById('vb-size2');

   var value_quant2 = Number(value_2.value);
   var color2 = type_color2.options[type_color2.selectedIndex].text;
   var size_value2 = String(size2.value);
   /*---------------------------------------------------------------*/

   var value_3 = window.document.getElementById('vb-quantid3');
   var type_club = window.document.getElementById('vb-team3');
   var size3 = window.document.getElementById('vb-size3');

   var value_quant3 = Number(value_3.value);
   var club3 = type_club.options[type_club.selectedIndex].text;
   var size_value3 = String(size3.value);
   /*---------------------------------------------------------------*/

   var value_quantid1 = Math.abs(value_quant1);
   var value_quantid2 = Math.abs(value_quant2);
   var value_quantid3 = Math.abs(value_quant3);

   if(value_quantid1 <= 100 && value_quantid2 <= 100 && value_quantid3 <= 100) { 

       var polo = "POLO";
       var malha1 = "PIQUET"
       var malha2 = "DRYFIT";
       var camisa = "CAMISA";
       var genero = "MASCULINO";

       var preco_final = 25*value_quantid1;
       var preco_final2 = 45*value_quantid2;
       var preco_final3 = 24.90*value_quantid3;
 
       if(value_quantid1 == " " || value_quantid1 == 0){
          preco_final = 0;
 
       }else { 

             window.alert('ADICIONADO AO CARRINHO COM SUCESSO');
 
             hilfiger.innerHTML = `<h3>POLO - TOMMY HILFIGER</h3>`;
             preco_tot_final.innerHTML = `PREÇO: R$ 25.00`;
             div1.innerHTML = `QUANTIDADE: ${value_quantid1}`;
             div2.innerHTML = `COR: ${color}`;
             div3.innerHTML = `GENERO: ${genero}`;
             div4.innerHTML = `TAMANHO: ${size_value}`;
             div5.innerHTML = `MALHA: ${malha1}`;
             div6.innerHTML = `TIPO: ${polo}`;
 
             separad1.innerHTML = `-------------------------------------`;
         }
 
         if(value_quantid2 == " " || value_quantid2 == 0){
            preco_final2 = 0;
 
         }else {
           
            window.alert('ADICIONADO AO CARRINHO COM SUCESSO !!'); 

            poloBoss.innerHTML = `<h3>POLO - HUGO BOSS</h3>`;
            preco_tot_final2.innerHTML = `PREÇO: R$ 45.00`;
            div7.innerHTML = `QUANTIDADE: ${value_quantid2}`;
            div8.innerHTML = `COR: ${color2}`;
            div9.innerHTML = `GENERO: ${genero}`;
            div10.innerHTML = `TAMANHO: ${size_value2}`;
            div11.innerHTML = `MALHA: ${malha2}`;
            div12.innerHTML = `TIPO: ${polo}`;
 
            separad3.innerHTML = `-------------------------------------`;
        }
 
         if(value_quantid3 == " " || value_quantid3 == 0){
            preco_final3 = 0;
 
         }else {

            window.alert('ADICIONADO AO CARRINHO COM SUCESSO');  

            time_sele.innerHTML = `<h3>CAMISA - TIME / SELEÇÃO</h3>`;
            preco_tot_final3.innerHTML = `PREÇO: R$ 24.90`;
            div13.innerHTML = `QUANTIDADE: ${value_quantid3}`;
            div14.innerHTML = `TIME/SELEÇÃO: ${club3}`;
            div15.innerHTML = `GENERO: ${genero}`;
            div16.innerHTML = `TAMANHO: ${size_value3}`;
            div17.innerHTML = `MALHA: ${malha2}`;
            div18.innerHTML = `TIPO: ${camisa}`;
 
            separad5.innerHTML = `-----------------------------------------------------------`;
         }
 
            var result_final = preco_final+preco_final2+preco_final3;
            var final_result = result_final.toFixed(2);

            if(final_result < 1){
                window.alert('[ERRO] - INFORME UM NÚMERO DE 1 A 100.');
                window.location.reload();

            }else {
               separad6.innerHTML = `<h2>PREÇO TOTAL: R$ ${final_result}</h2>`;

               separad7.innerHTML = `-----------------------------------------------------------`;

               canceledd.innerHTML = `<input type="button" id="buttonCanceled_car" value="&#128722; CANCELAR CARRINHO &#128722;" onclick="window.location.reload()"/>`;
            }

          }else {
             window.alert('[ERRO] - INFORME UM NÚMERO DE 1 A 100');
          }

 } 

