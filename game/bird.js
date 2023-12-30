 
    var start=document.getElementById('new');
    var flying=true;//用于判断小鸟的运动
    // 初始化小鸟
    var birds={
        stepx: 52,
        stepy: 0,
        x: bird.offsetLeft,
        y: bird.offsetTop
    }
    //背景
    var sky={
        x: 0
    }
    var count=0;//计数
    var bg=setInterval(function(){
        sky.x-=2;//控制背景移动
        contaner.style.backgroundPositionX=sky.x+'px';
        birds.stepy+=1;//小鸟下落
        birds.y+=birds.stepy;
        if(birds.stepy>=10){//小鸟运动
            birds.stepy=-10;//小鸟飞起
            birds.y+=birds.stepy;
        }
        bird.style.top=birds.y+'px';
    },30)
    start.onclick=function(){//开始游戏
    start.style.display='none';
    co.innerHTML=count;
    results.innerHTML=count;
    clearInterval(bg);//清除小鸟自动飞
    birds.stepy=0;//初始化
    setInterval(function(){
        if(flying){
            sky.x-=5;
            contaner.style.backgroundPositionX=sky.x+'px';//控制背景移动
            birds.y+=birds.stepy;
            birds.x=birds.stepx;
            birds.stepy+=1;//小鸟下落
            if(birds.y<=0){//判断小鸟是否撞到顶
                flying=false;
                mask.style.display="block";
                success.style.display="block";
                co.style.display="none";
            }
            if(birds.y+bird.offsetHeight>=600){//判断小鸟是否掉落到底
                flying=false;
                mask.style.display="block";
                success.style.display="block";
                co.style.display="none";
            }
          bird.style.top=birds.y+'px';
          bird.style.left=birds.x+'px';
        }
    },30)
    contaner.onclick=function(){//点击
        birds.stepy=-10;//点击一次小鸟飞起
    }
    function createzz(x){//初始化柱子属性
        var zz={};
        zz.x=x;
        zz.uheight=50+Math.ceil(Math.random()*200);//随机上柱子的高度
        zz.dheight=600-150-zz.uheight;//下柱子的高度
        //创建柱子
        var uzz=document.createElement('div');//创建上柱子
        uzz.style.height=zz.uheight+'px';
        uzz.style.width='52px';
        uzz.style.position='absolute';
        uzz.style.left=zz.x+'px';
        uzz.style.background='url(images/pipe2.png) no-repeat center bottom';
        uzz.style.top='0px';
        contaner.appendChild(uzz);
        var dzz=document.createElement('div');//创建下柱子
        dzz.style.width='52px';
        dzz.style.height=zz.dheight+'px';
        dzz.style.position='absolute';
        dzz.style.left=zz.x+'px';
        dzz.style.background='url(images/pipe1.png) no-repeat';
        dzz.style.top=zz.uheight+150+'px';
        contaner.appendChild(dzz);
        setInterval(function(){//控制柱子移动
            if(flying){
            zz.x-=5;
            uzz.style.left = zz.x + 'px';
            dzz.style.left = zz.x + 'px';
            if(zz.x<=-52){//柱子移动到左边后回到右边一直循环
                zz.x=1450;
            }
            if(zz.x>=0 && birds.x >= zz.x+52){//判断小鸟飞过柱子并计数
                count++;
                co.innerHTML=count;
                results.innerHTML=count;
            }
            //判断小鸟有没有撞到柱子
            var ucheck=birds.x + 30 > zz.x && birds.x < zz.x + 52 && birds.y <= zz.uheight;
            var dcheck=birds.x + 30 > zz.x && birds.x < zz.x + 52 && birds.y+30 >= zz.uheight + 150;
            if(ucheck || dcheck){
                flying=false;
                mask.style.display="block";
                success.style.display="block";
                co.style.display="none";
              }
            
            }
        },30)
    }
createzz(300);//第一对柱子
createzz(600);//第二对柱子
createzz(900);//第三对柱子
createzz(1200);//第四对柱子
createzz(1500);//第五对柱子
}