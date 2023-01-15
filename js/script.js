document.getElementById("open360")
  .addEventListener("click", trocarImagemGif);

document.getElementById('close360')
.addEventListener("click", trocaImagemOld);    

function trocarImagemGif(){
    document.getElementById("imagem").src="img/imagemproduto360.gif"  
    document.getElementById('open360').style.display ='none';
    document.getElementById('close360').style.display ='block';
}

function trocaImagemOld(){
    document.getElementById("imagem").src="img/imagemproduto.png"  
    document.getElementById('close360').style.display ='none';  
    document.getElementById('open360').style.display ='block';
}