let date = new Date();
let today = new Date();
document.onload = showCalender();

function showCalender(){

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let endDate= new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    let currentDay = date.getDay();
    let formatDate = date.toISOString().slice(0,8);
//setting header of calender
document.getElementById('current-day').innerText=today.toDateString();
document.getElementById('current-month').innerText = months[date.getMonth()];
//creating  day div for previous month dates
    for(let i=1; i<=currentDay;i++){
        let dayNode = document.createElement('div');
        dayNode.classList.add('prev-month');
        lastDates =  new Date(date.getFullYear(),date.getMonth(),0).getDate();
        document.getElementsByClassName('days')[0].prepend(dayNode);
        dayNode.textContent = lastDates - i;
    }

//creating the days inside calender
for(let i=1; i<=endDate;i++){
    let dayNode = document.createElement('div');
     dayNode.classList.add('daynum');
     dayNode.textContent = i;
     let dateClass = formatDate+i;
     if(i == today.getDate() && today.getMonth() == date.getMonth() && today.getFullYear() == date.getFullYear())
     {
         dayNode.classList.add('active');
     }
     dayNode.classList.add(dateClass);
     document.getElementsByClassName('days')[0].appendChild(dayNode);
     let btn = document.createElement('button');
     btn.classList.add('addbtn');
     btn.textContent= '+';
     dayNode.appendChild(btn);   
     btn.addEventListener("click",OpenModal);
    }
}

function changeMonth(buttonType){
    clearCalender();
    if(buttonType=='prev'){
        date.setMonth(date.getMonth() - 1);
        showCalender();
    }
    if(buttonType=='next'){
        date.setMonth(date.getMonth() + 1);
        showCalender();
    }
}

function clearCalender(){
let parent = document.getElementsByClassName('days')[0];
while(parent.firstChild){
    parent.removeChild(parent.firstChild);
    console.log("deleted a child");
}
}


//modal animation
let modal =  document.getElementsByClassName('modal')[0];
let overlay = document.getElementById('overlay');

document.querySelectorAll('.timebtn').forEach(btn => {
    btn.addEventListener("click",function(){
        if(btn.classList.contains('btn-active')){
           btn.classList.remove('btn-active');
        }else{
            btn.classList.add('btn-active');
        }
    });
    });
    
    document.getElementsByClassName('close-modal')[0].addEventListener("click",closeModal);
    
    function OpenModal(){
    modal.classList.add('active');   
    overlay.classList.add('active');
    }
    
    function closeModal(){
        modal.classList.remove('active');   
        overlay.classList.remove('active');
    }
    