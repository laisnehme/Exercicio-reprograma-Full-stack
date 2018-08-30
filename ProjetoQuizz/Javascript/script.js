function verificaRespostas(){
  
  var questao1 = document.getElementsByName('resp1');
  var questao2 = document.getElementsByName('resp2');
  var questao3 = document.getElementsByName('resp3');
  var respostaCorreta = [];

  for(var i = 0, length = questao1.length; i < length; i++){
    if(questao1[i].checked){
      if(i == 1){
        respostaCorreta.push(questao1[i].value);
      }
    }
  }
  for(var i = 0, length = questao2.length; i < length; i++){
    if(questao2[i].checked){
      if(i == 1){
        respostaCorreta.push(questao2[i].value);
      }
    }
  }
  for(var i = 0, length = questao3.length; i < length; i++){
    if(questao3[i].checked){
      if(i == 0){
        respostaCorreta.push(questao3[i].value);
      }
    }
  }
  if (respostaCorreta.length == 3) {
    alert("Voc\u00ea acertou todas as respostas! Parab\u00e9ns!");
  } else{
    if (respostaCorreta.length >= 1) {
      alert("Voc\u00ea acertou "+respostaCorreta.length+" respostas!");
    }else{
      alert("Voc\u00ea n\u00e3o acertou nada! Que pena. :(");
    }
  } 
}