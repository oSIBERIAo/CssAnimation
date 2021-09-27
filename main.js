!function() {
var codes = `
/*
   👊🏼 SALUTE  《一拳超人》 埼玉老师 ！！！！！👊🏼 

   👊🏼 点击 🎵 可播放背景音乐👊🏼 
   👊🏼 点击 龟 音 光 可切换代码播放速度👊🏼 
*/
 
.wrapper{
  position: relative;
  height: 450px;
  width: 670px;
}


/*
  首先，先画埼玉老师的脸蛋 🧑🏼‍🦲
*/
 
 
.headup{
  position: absolute;
  background: #F6C8A6;
  height: 114px;
  width: 78px;
  border-radius: 100px 100px 100px 100px;  
  left: 50%;
  transform: translateX(-50%)
}
.headup{
 
}
.eyebrowLeft,.eyebrowRight{
  position: absolute;
  background: #E0A387;
  height: 4px;
  width: 24px;
  top: 36px;
  border-radius: 10px;
  transform: translateX(-50%);
  z-index: 1;
}
.eyebrowLeft{
  left: 45.7%;
  transform:rotate(20deg);
}
.eyebrowRight{
  right: 45.7%;
  transform:rotate(340deg);
}
.eyeLeft,.eyebRight{
  position: absolute;
  background: #FFFFFF;
  height: 16px;
  width: 22px;
  top: 46px;
  border-radius: 100px 100px 100px 100px;
  transform: translateX(-50%);
}
.eyeLeft{
  left: 47.5%;
}
.eyebRight{
  right: 47.5%;
  transform: translateX(50%);
}
.pupil{
  background: black;
  height: 6px;
  width: 6px;
  border-radius: 5px;
  transform: translateY(80%) translateX(130%);
}
.noseLeft,.noseRight{
  position: absolute;
  background: #E0A387;
  height: 3px;
  width: 3px;
  top: 75px;
  border-radius: 100px;
  transform: translateX(-50%);
}
.noseLeft{
  left: 49.3%;
}
.noseRight{
  right: 49.3%;
}
.mouth{
  position: absolute;
  background: #E0A387;
  height: 3px;
  width: 32px;
  top: 92px;
  border-radius: 100px;
  left: 50%;
  transform: translateX(-50%);
}
.earLeft,.earRight{
  position: absolute;
  background: #F6C8A6;
  height: 20px;
  width: 11px;
  top: 46px;
}
.earLeft{
  left: 43.5%;
  border-radius: 100px 0 0 100px;
  transform: translateX(-50%);
}
.earRight{
  right: 43.5%;
  border-radius:  0 100px 100px 0;
  transform: translateX(50%);
}
.innerEarLeft,.innerEarRight{
  position: absolute;
  background: #EB9E8A;
  height: 12px;
  width: 8px;
  top: 4px;
}
.innerEarLeft{
  left: 59%;
  border-radius: 100px 0 0 100px;
  transform: translateX(-50%);
}
.innerEarRight{
  right: 59%;
  border-radius:  0 100px 100px 0;
  transform: translateX(50%);
}


/*
  接着，画埼玉老师的披肩 🥋
*/
 

.shoulderLeft, .shoulderRight{
  position: absolute;
  background: #C9DAE5;
  height: 91px;
  width: 66px;
  top: 50px;
  overflow: hidden;
  border-radius:  0 0 100px 100px;
}
.shoulderLeft{
  left: 34.5%;
}
.shoulderRight{
  right: 34.5%;
}

.shoulder-shade{
  position: absolute;
  background: #ffffff;
  height: 50px;
  width: 90px;
  top: -20px;
  left: -10px;
  transform:rotate(-10deg);
}
.shoulder-shade > div {
  position: absolute;
  background: #173445;
  height: 15px;
  width: 15px;
  top: 69px;
  border-radius:100px;
}
.shoulderRight > .shoulder-shade{
  transform:rotate(10deg);
}
.shoulderLeft > .shoulder-shade > div{
  left: 26px;
}
.shoulderRight > .shoulder-shade > div{
  right: 30px;
}


/*
   接下来，画埼玉老师的身体 🧍🏻
*/
 
 
.body{
  position: absolute;
  background: #FFDD8B;
  height: 158px;
  width: 112px;
  top: 69px;
  left: 50%;
  transform: translateX(-50%);
}
.waistband{
  position: absolute;
  background: #163544;
  height: 24px;
  width: 112px;
  top: 120px;
  left: 50%;
  border-radius: 100px;
  transform: translateX(-50%);
}
.waistband > div{
  position: absolute;
  background: #FFF9A3;
  height: 45px;
  width: 45px;
  top: -10px;
  border: 6px solid #163544;
  border-radius: 100px;
  left: 50%;
  transform: translateX(-50%);
}


/*
   画埼玉老师的手臂 💪
*/


.armUpLeft,.armDownRight{
  position: absolute;
  height: 160px;
  width: 40px;
  top: 55px;
  background: #FFDD8B;
  border-radius:  0 0 100px 100px;
}
.armUpLeft{
  left: 35%;
  transform: rotate(45deg);
}
.armDownRight{
  right: 35%;
  transform: rotate(-45deg);
}
.armLeft,.armRight{
  position: absolute;
  background: #FFDD8B;
  height: 40px;
  width: 80px;
  top: 158px;
  border-radius: 100px;
}
.armLeft{
  left: 29%;
}
.armRight{
  right: 29%;
}


/*
   给埼玉老师的带上拳套 🥊
*/
 
 
.gloveLeft,.gloveRight{
  position: absolute;
  background: #C6285F;
  height: 44px;
  width: 100px;
  top: 155px;
  border-radius: 100px;
}
.gloveLeft{
  left: 33%;
}
.gloveRight{
  right: 33%;
}
.fistLeft,.fistRight{
  position: absolute;
  background: #C6285F;
  height: 53px;
  width: 40px;
  top: 146px;
  overflow: hidden;
  border-radius: 13px;
}
.fistLeft{
  transform: rotate(-25deg);
  left: 42%
}
.fistRight{
  right: 42%;
  transform: rotate(25deg);
}
.fistLeft > div {
  background: #EA3571;
  height: 53px;
  width: 40px;
  transform: translateX(30%);
}
.fistRight > div {
  background: #EA3571;
  height: 53px;
  width: 40px;
  transform: translateX(-30%);
}
.fingerLeft,.fingerRight{
  position: absolute;
  background: #C6285F;
  height: 34px;
  width: 24px;
  top: 138px;
  border-radius: 10px;
}
.fingerLeft{
  left: 44%;
  transform: rotate(-25deg);
}
.fingerRight{
  right: 44%;
  transform: rotate(25deg);
}

.collar{
  position: absolute;
  background: #FFFFFF;
  height: 110px;
  width: 94px;
  top: 13px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 100px 100px;
}
.collar > div{
  position: absolute;
  background: #FFFFFF;
  height: 110px;
  width: 14px;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
}


/*
   画埼玉老师的大腿 🦵🏻 
*/
 
 
.footWrapper{
  position: absolute;  
  height: 144px;
  width: 400px;
  top: 210px;
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);
}
.foot{
  position: absolute;
  border: 46px solid;
  border-color: #FFDD8B #C6285F #C6285F #C6285F;
  height: 308px;
  width: 308px;
  /* top: 210px; */
  border-radius: 200px 200px 0 0;
  left: 50%;
  transform: translateX(-50%);
}
.shoeLeft,.shoeRight{
  position: absolute;
  background: #EA3571;  
  height: 30px;
  width: 60px;
  top: 70px;
  border-radius:100px 100px 0 0;
}
.shoeLeft{
  left: -18%;
  transform: translateX(-50%);
}
.shoeRight{
  right: -18%;
  transform: translateX(50%);
}


/*
   ✨✨ 🥊🥊 最后，配上埼玉老师闪亮登场的披风 🥊🥊  ✨✨
*/


.mantle{
  position: absolute;  
  background: #ADB9C3;
  height: 280px;
  width: 180px;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
}
.ground{
  position: absolute;
  background: #163542;
  height: 34px;
  width: 496px;
  top: 328px;
  border-radius: 100px;
  transform: translateX(-50%);
  left: 50%; 
}

/*
   ✨✨ 🎉完结撒花🎉  ✨✨
*/
`
    var n = 0
    function writeCode(codes) {
        var speed = 30
        var code = document.querySelector('#code')
        var styleTag = document.querySelector('#styleTag')
        var id = setTimeout(function fn() {
            n += 1
            code.innerText = codes.substring(0, n)
            styleTag.innerText = codes.substring(0, n)
            code.scrollTop = code.scrollHeight
            if (n <= codes.length) {
                id = setTimeout(fn, speed)
            } else {
                window.clearTimeout(id)
                console.log('clearTimeout');
            }
        }, speed)

        var Seconds = new Date().getUTCSeconds()
        var judgeTime = function () {
            //防止播放暂停过快
            let Seconds2 = new Date().getUTCSeconds()
            let o = Seconds2 - Seconds < 1
            Seconds = new Date().getUTCSeconds()
            return o
        }

        window.addEventListener('keydown',  (e)=> {
            if (judgeTime()) {
                console.log('间隔太短了！');
                return
            }
            if (e.key == 's') {
                window.clearTimeout(id)
            } else if (e.key == 'g') {
                window.clearTimeout(id)
                writeCode(codes)
            }
        })

        var btns =document.getElementById("btns")
        btns.addEventListener('click', (e) => {
            let button = e.target
            let attrs = button.attributes
            let current = attrs.speed.value
            switch (current) {
                case 'slow':
                    cleanActive(button)
                    speed = 100
                    break;
                case 'normal':
                    cleanActive(button)
                    speed = 30
                    break;
                case 'fast':
                    cleanActive(button)
                    speed = 1
                default:
                    break;
            }
        })

        var music =document.getElementById("music")
        let status = false
        music.addEventListener('click', (e) => {
            if (status === false){
                document.getElementById("song").play();
                music.classList.add('active')
                status = true
            } else {
                document.getElementById("song").pause()
                music.classList.remove('active')
                status = false
            }

        })
    }

    function cleanActive(current) {
        let arr = current.parentNode.children
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active')
        }
        current.classList.add('active')
    }

    writeCode(codes)

}.call()
