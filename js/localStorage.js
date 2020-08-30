const colorCodes = {
    work:"#5c7ae8",
    personal:"#ed6aa1",
    family:"#c993f2"
    }
    
    let lists = new Array();
    window.onload = showList;
    
    function showList(){
    let events= new Array();
    if(localStorage.getItem("datas")==null){
    events=[];
    }
    else{
    events = JSON.parse(localStorage.getItem("datas"));
    events.forEach(list => {
    let lists = document.getElementsByClassName('list-body')[0];
    let cardElemnt = document.createElement('div');
    cardElemnt.classList.add('card');
    //creating left section of card
    let leftElement = document.createElement('div');
    leftElement.classList.add('left');
    let eventType = document.createElement('h4');
    eventType.classList.add('event-type');
    eventType.textContent = list.type;
    
    //setting the left div color
    divColor(list.type,leftElement);
    //setting the day div background color
    setEventColor(list.date,list.type);
    
    cardElemnt.appendChild(leftElement);
    leftElement.appendChild(eventType);
    
    //creating right section of the card
    let rightElement = document.createElement('div');
    rightElement.classList.add('right');
    cardElemnt.appendChild(rightElement);
    let head5 = document.createElement('h5');
    head5.textContent = list.title;
    head5.classList.add('event-title');
    let head6 = document.createElement('h6');
    head6.textContent = list.date;
    head6.classList.add('event-date');
    let eventTime = document.createElement('button');
    eventTime.classList.add('event-time');
    eventTime.textContent = list.slot;
    let delbtn = document.createElement('button');
    delbtn.textContent="Delete this Event";
    delbtn.classList.add('delete-event');
    rightElement.appendChild(head5);
    rightElement.appendChild(head6);
    rightElement.appendChild(eventTime);
    rightElement.appendChild(delbtn);
    lists.appendChild(cardElemnt);
     });
     }
    }
    
    //setting the left div color
    function divColor(type,element){
        if(type == 'Work'){
            element.style.backgroundColor = colorCodes.work; 
        }else if(type == 'Personal'){
            element.style.backgroundColor = colorCodes.personal; 
        }else{
            element.style.backgroundColor = colorCodes.family;
        }
    }
    
    //setting day number background to event color code
    function setEventColor(eventDate, eventType){
        document.querySelectorAll('.daynum').forEach(day => {
           if(day.classList.contains(eventDate))
            {
              divColor(eventType,day);
            }
        });
    }
    
    
    //MODAL\\
    let timeVal;
    let time = document.querySelectorAll('.timebtn').forEach(btn => {
    btn.addEventListener("click", function(){
     timeVal = btn.value;
       });
    });
    
    document.getElementById('submit-event').onclick = function(event){
        let formData  = {
            title : document.getElementById('event-title').value,
            type : document.getElementById('event-type').value,
            date : document.getElementById('event-date').value,
            slot: timeVal
        }
    saveEvents(formData);
    };
    
    function saveEvents(list){
        let lists;
        if(localStorage.getItem('datas') === null){
            lists = [];
        }else{
            lists = JSON.parse(localStorage.getItem('datas'));
        }
       lists.push(list);
       localStorage.setItem('datas', JSON.stringify(lists));
    }