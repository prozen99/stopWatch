const appendTens=document.getElementById('tens'); // tens 연결
const appendSeconds=document.getElementById('seconds'); // seconds 연결
const buttonStart=document.getElementById('button-start'); // 각각의 버튼연결
const buttonStop=document.getElementById('button-stop'); // 
const buttonReset=document.getElementById('button-reset'); // 
//현재 stopwatch 구조는 seconds : tens 로 되어있으니까 tens가 100이되면
//seconds를 하나 올리면됨.
let seconds=0;
let tens=0;
let interval; 

buttonStart.onclick=function()
{
    interval=setInterval(startTimer,10); //일단 이녀석이  실행하는 녀석인데
    
    //10자리가 delay자리인데 10 밀리초 10^-2 초 마다 실행
    
}

buttonStop.onclick=function() // stop 버튼 구현하는 부분인데
{
        clearInterval(interval); // stop 버튼 클릭하면 clear interval을 멈춘다.
        //여기에다가 어떤 interval을 멈출건지를 변수로 준것이다 setInterval이 주는값을
        //clear한다 라는의미.
}

buttonReset.onclick=function()
{
    clearInterval(interval);
    seconds=0; // 값을 바꿔주고
    tens=0;
    appendTens.innerText=0; // 실제로 내가 눈에 보이는 text값도 변경해줘야 함 그래야 
    // 화면에 나오니까
    appendSeconds.innerText=0;
}

function startTimer() //10ms 마다 tens를 하나씩 올림 .  10^-2 니까 x10^2 = 1초가 되는것
{
    tens++;
    if(tens>99)
    {
        seconds++; // tens가 99가 넘으면 seconds 1을 올려줌
        //appendSeconds에도 반영하기
        appendSeconds.innerText=seconds;
        //tens ,appendTens는 99까지 찍고 다시 0으로만들어줘야함 
        tens=0;
        appendTens.innerText=0;
    } else {
        appendTens.innerText=tens; // tens가 100이 아니면 그냥 밀리세컨드를 보여주면됨
    }
}

