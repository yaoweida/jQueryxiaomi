window.onload=function(){
    let banner=document.querySelectorAll(".banner .qwer");
    let dot=document.querySelectorAll(".banner li");
    let but=document.querySelector(".banner .leftmini");
    let but2=document.querySelector(".banner .rightmini");
    let father=document.querySelector(".banners");
    banner[0].style.opacity=1;
    dot[0].classList.add("hots");
    next=0;
    now=0;
    let t=setInterval(move,2000);
    let flag=true;
    function move(){
        next++;
        if(next==banner.length){
            next=0;
        }
       banner[now].style.opacity=0;
        animate(banner[next],{opacity:1},function(){
            flag=true;
        });
        dot[now].classList.remove("hots");
        dot[next].classList.add("hots");
        now=next;
    }
    function moveL(){
        next--;
        if(next==-1){
            next=banner.length-1;
        }
        banner[now].style.opacity=0;
        animate(banner[next],{opacity:1},function(){
            flag=true;
        });
        dot[now].classList.remove("hots");
        dot[next].classList.add("hots");
        now=next;
    }
for(let i=0;i<dot.length;i++){
        dot[i].onmouseenter=function(){
            for(let j=0;j<dot.length;j++){
                dot[j].classList.remove("hots");
                banner[j].style.opacity=0;
            }
            clearInterval(t);
            dot[i].classList.add("hots");
            banner[i].style.opacity=1;
            next=i;
            now=i;
        }
     // dot[i].onmouseleave=function(){
     //     t=setInterval(move,2000);
     // }
}
but.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        moveL();
}
    but2.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        move();
    }
father.onmouseenter=function () {
    clearInterval(t);
}
father.onmouseleave=function () {
    t=setInterval(move,2000);
    }


    let looks=document.querySelectorAll(".looks");
    let dots=document.querySelectorAll(".dot31");
    let dots1=document.querySelector(".cbox .but1");
    let dots23=document.querySelector(".cbox .but2");


    let smallbanner=function(looks,dots,dots1,dots23){
        looks[0].style.left=0;
        dots[0].classList.add("hot");
        let next1=0;
        let now1=0;
        let flagg=true;
        function move1(){
            next1++;
            if(next1==looks.length){
                next1=0;
            }
            looks[next1].style.left="288px";
            animate(looks[now1],{left:-288},function(){
                flagg=true;
            });
            animate(looks[next1],{left:0});
            dots[now1].classList.remove("hot");
            dots[next1].classList.add("hot");
            now1=next1;
        }
        function moveL1(){
            next1--;
            if(next1<0){
                next1=looks.length-1;
            }
            looks[next1].style.left="-288px";
            animate(looks[now1],{left:288},function(){
                flagg=true;});
            animate(looks[next1],{left:0});
            dots[now1].classList.remove("hot");
            dots[next1].classList.add("hot");
            now1=next1;
        }
        for(let i=0;i<dots.length;i++){
            dots[i].onclick=function(){
                if(i==now1){
                    return;
                }
                else if(i>now1){
                    looks[i].style.left="288px";
                    animate(looks[now1],{left:-288});
                    animate(looks[i],{left:0});
                    dots[now1].classList.remove("hot");
                    dots[i].classList.add("hot");
                }
                else if(i<now1){
                    looks[i].style.left="-288px";
                    animate(looks[now1],{left:288});
                    animate(looks[i],{left:0});
                    dots[now1].classList.remove("hot");
                    dots[i].classList.add("hot");
                }
                now1=i;
                next1=now1;
            }
        }
        dots1.onclick=function(){
            if(!flagg){
                return;
            }
            flagg=false;
            if(next1==0){
                flagg=true;
                return;
            }
            moveL1();
        }
        dots23.onclick=function(){
            if(!flagg){
                return;
            }
            flagg=false;
            if(next1==looks.length-1){
                flagg=true;
                return;
            }
            move1();
        }
    }
    smallbanner(looks,dots,dots1,dots23);
    let view1=document.querySelectorAll(".lookq");
    let doot1=document.querySelectorAll(".dot32");
    let buut1=document.querySelector(".but3");
    let buut2=document.querySelector(".but4");
    smallbanner(view1,doot1,buut1,buut2);
    let view2=document.querySelectorAll(".lookw");
    let doot2=document.querySelectorAll(".dot33");
    let buut3=document.querySelector(".but5");
    let buut4=document.querySelector(".but6");
    smallbanner(view2,doot2,buut3,buut4);
    let view3=document.querySelectorAll(".looke");
    let doot3=document.querySelectorAll(".dot34");
    let buut5=document.querySelector(".but7");
    let buut6=document.querySelector(".but8");
    smallbanner(view3,doot3,buut5,buut6);
    // console.log(buut2);



    let btnR=document.querySelector(".you");
    let btnL=document.querySelector(".zuo");
    let lis=document.querySelector(".fcenter");
    let hua=document.querySelector(".foryou .fcenter ul");

    // console.log(hua);
    let times=0;

    btnR.onclick=function () {
        times++;
        if(times==3){
            times=2;
        }
        hua.style.transform=`translate(${-1200*times}px)`;
    }
    btnL.onclick=function () {
        times--;
        if(times==-1){
            times=0;
        }
        hua.style.transform=`translate(${-1200*times}px)`;
    }


    let btny=document.querySelector(".rright");
    let btnz=document.querySelector(".lleft");
    let list=document.querySelector(".bbbb .bbbox");
    let liss=document.querySelector(".bbbb");
    let s=parseInt(getComputedStyle(liss,null).width);
    // console.log(s);
    let time=0
    btny.onclick=function () {
        time++;
        if(time==2){
            time=1;
        }
        list.style.transform=`translate(${-s*time}px)`;
    }
    btnz.onclick=function () {
        time--;
        if(time==-1){
            time=0;
        }
        list.style.transform=`translate(${-s*time}px)`;
    }

    let hots=document.querySelectorAll(".home .hmore .hot a");
    let sheep=document.querySelectorAll(".home .hcenter");
    hots[0].classList.add("active");
    for(let i=0;i<hots.length;i++){
        hots[i].onmouseenter=function () {
            for(let j=0;j<sheep.length;j++){
                hots[j].classList.remove("active");
                sheep[j].style.display="none";
            }

            hots[i].classList.add("active");
            sheep[i].style.display="block";
        }

    }


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
    // console.log(eye);



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
    // console.log(doo);

}




