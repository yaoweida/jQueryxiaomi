$(function () {
    $(".rights").on("mouseenter",function () {
        // console.log($(".rights"));
        $(".hidden").clearQueue().slideDown("slow");
    })
    $(".rights").on("mouseleave",function () {
        // console.log($(".rights"));
        $(".hidden").clearQueue().slideUp("slow");
    })

   $(".leftjpg a").on("mouseenter",function () {
       // console.log($(".leftjpg a"));
       // console.log($(".tea"));
       // console.log($(this).children(".amaz"));
       $(this).children(".hui").children(".tea ").css("display","flex");
   })
    $(".leftjpg a").on("mouseleave",function () {
        // console.log($(".leftjpg a"));
        // console.log($(".tea"));
        // console.log($(this).children(".amaz"));
        $(this).children(".hui").children(".tea ").css("display","none");


    })

    let qwer=$(".qwer");
    let dot=$(".dot li");
    // let flag=true;
    // let left=$(".leftmini");
    // let right=$(".rightmini")
    // console.log(right);
    let now=0;
    qwer.first().css("z-index","10");
    dot.eq(0).addClass("hots");
    setInterval(move,2000);
    function move() {
        now++;
        if(now==qwer.length){
            now=0;
        }
        qwer.css("z-index","5").eq(now).css("z-index","10");
        dot.removeClass("hots").eq(now).addClass("hots");
    }
    function movel() {
        now--;
        if(now<0){
            now=qwer.length-1;
        }
        qwer.css("z-index","5").eq(now).css("z-index","10");
        dot.removeClass("hots").eq(now).addClass("hots")
    }

    $(".leftmini").click(function () {

        movel();
    })
    $(".rightmini").click(function () {
        move();
    })
    
    dot.on("click",function () {
        // alert($(this).index());
        let i=$(this).index();
        qwer.css("z-index","5").eq(i).css("z-index","10");
        dot.removeClass("hots").eq(i).addClass("hots");
    })

    // let time=0;
    // let s=parseInt(getComputedStyle(liss,null).width);
    $(".rright").on("click",function () {
        $(".bbbox").css("left","-957px");
    })
    $(".lleft").on("click",function () {
        $(".bbbox").css("left","0");
    })


    $(".hot a").on("mouseenter",function () {

        let i=$(this).index();
        $(".hcenter").css("display","none").eq(i).css("display","block");
        $(".hot a").removeClass("active");
    })





    let times=0;
    let ul=$(".foryou .fcenter ul");
    console.log(ul);
    $(".you").on("click",function () {
        times++;
        if(times==1){
            ul.css("left","-1200px");
        }else if(times==2){
            ul.css("left","-2400px");
        }else if(times>=3){
            times=2;
        }

    })
    $(".zuo").on("click",function () {
        times--;
        if(times==1){
            ul.css("left","-1200px");
        }else if(times==0){
            ul.css("left","0");
        }else if(times<0){
            times=0;
        }

    })
    function tushu(dot,look,Lbut, Rbut) {
        let nows=0;
        let next=0;
        dot.eq(0).addClass("hot");
        look.eq(0).css("left","0");
        dot.click(function () {
            if($(this).index()>nows){
                next++;
                dot.eq(nows).removeClass("hot");
                dot.eq(next).addClass("hot");
                look.eq(nows).animate({left: '-288px'});
                look.eq(next).css("left","288px");
                look.eq(next).animate({left: '0'});
            }else if($(this).index()<nows){
                next--;
                dot.eq(nows).removeClass("hot");
                dot.eq(next).addClass("hot");
                look.eq(nows).animate({left: '288px'});
                look.eq(next).css("left","-288px");
                look.eq(next).animate({left: '0'});
            }
            nows=next;
        })
        Rbut.click(function () {
            next++;
            if(next>=2){
                next=2;
            }
            look.eq(nows).animate({left: '-288px'});
            look.eq(next).css("left","288px");
            look.eq(next).animate({left: '0'});
            dot.eq(nows).removeClass("hot");
            dot.eq(next).addClass("hot");
            nows=next;
        })
        Lbut.click(function () {
            next--;
            if(next<0){
                next=0;
            }
            look.eq(nows).animate({left: '288px'});
            look.eq(next).css("left","-288px");
            look.eq(next).animate({left: '0'});
            dot.eq(nows).removeClass("hot");
            dot.eq(next).addClass("hot");
            nows=next;
        })
    }
    tushu($(".dot31"),$(".looks"),$(".but1"), $(".but2"));
    tushu($(".dot32"),$(".lookq"),$(".but3"), $(".but4"));
    tushu($(".dot33"),$(".lookw"),$(".but5"), $(".but6"));
    tushu($(".dot34"),$(".looke"),$(".but7"), $(".but8"));


    let eye=document.querySelector(".eye li");
    document.onscroll=function(){
        if(document.body.scrollTop || document.documentElement.scrollTop>=1000){
            eye.style.display="block";
        }else{
            eye.style.display="none";
        }
    };

    eye.onclick=function(){
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});

    }



    let boo=document.querySelectorAll(".boo");
    let doo=document.querySelectorAll(".mi .center p a");
    console.log(boo);
    for(let i=0;i<doo.length;i++){
        doo[i].onmouseenter=function () {
            boo[i].style.height="230px";
            boo[i].style.borderTop="1px solid #ccc";
            boo[i].style.boxShadow="0 3px 4px  rgba(0,0,0,0.1)";

        }
        doo[i].onmouseleave=function () {
            boo[i].style.height="0";
            boo[i].style.borderTop="none";
            boo[i].style.boxShadow="none";
        }
    }


})
