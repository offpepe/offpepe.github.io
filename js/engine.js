
function inkojima(){
    var kojima_img=document.getElementById("index")
    var kojima_txt=document.getElementById("info_txt")
    kojima_img.classList.add("kojima_img")
    kojima_txt.classList.add("kojima_txt")
    kojima_img.classList.remove("simon_img")
    kojima_txt.classList.remove("simon_txt")

}
function checktxt(){
var information=document.getElementById("info_txt")
        if(information.classList=="kojima_txt"){
            information.innerHTML=("Um gigantesco icone no mundo do desenvolvimento de jogos\atrazendo um novo significado para os jogos digitais")
        }
        else if(information.classList=="simon_txt"){
            information.innerHTML=("Bruno Simon é um Desenvolvedor Web extremamente competente, me inspiro nele tenho como objetivo alcançar sua capacidade.")    
        }

}
function insimon(){
    var bru_img=document.getElementById("index")
    var bru_text=document.getElementById("info_txt")
    bru_img.classList.add("simon_img")
    bru_text.classList.add("simon_txt")
    bru_img.classList.remove("kojima_img")
    bru_text.classList.remove("kojima_txt")
}
function connection_change(){
    var img=document.getElementById("index")
    var website=document.getElementById("website")
    var socialmedia=document.getElementById("socialmedia")
    var git=document.getElementById("git")
    var weblink=document.getElementById("weblink")
    var linkelink=document.getElementById("linkelink")
    var gitlink=document.getElementById("gitlink")
    if(img.classList=="kojima_img"){
        website.src="https://upload.wikimedia.org/wikipedia/en/7/75/Kojima_Productions_logo.png";
        socialmedia.src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png";
        weblink.href="http://www.kojimaproductions.jp/en/";
        linkelink.href="https://twitter.com/hideo_kojima_en";
        gitlink.href="https://s.keepmeme.com/files/en_posts/20200828/2a5945a1804db09bc5369a0663234b1ddoge-pointing-gun-meme.jpg";
        git.style.opacity=0;
    }else if(img.classList=="simon_img"){
        website.src="http://simpleicon.com/wp-content/uploads/link-2.png";
        socialmedia.src="https://i0.wp.com/solistica.com/wp-content/uploads/2019/10/LinkedIn-Icon-Square.png";
        weblink.href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwif0ubuivHuAhUOCrkGHXrGAiQQFjAAegQIAhAC&url=https%3A%2F%2Fbruno-simon.com%2F&usg=AOvVaw3jgObvKBJ6L60t2OT91s43";
        linkelink.href="https://www.linkedin.com/in/simonbruno77/";
        gitlink.href="https://github.com/brunosimon/";
        git.style.opacity=1;
        
    }
}
