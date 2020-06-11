function carregar(){
    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('imagem')
    var data=new Date()
    var hora=data.getHours()
    
    msg.innerHTML=`Now it's ${hora} hours.`
 
    if(hora  >=0 && hora <12){
        
        img.src='fotomanha.png'
        document.body.style.background='#e4cfac'
    }else if (hora >=12 && hora <=18){
        
        img.src='fototarde.png'
        document.body.style.background='#ee9a80'
    }else{
        
        img.src='fotonoite.png'
        document.body.style.background='#2e535c'
    }
}

