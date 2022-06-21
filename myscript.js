let reservedSeats = {
    record1:{
        seat:'b19',
        owner:{
            fname:"Joe",
            lname:"Smith"
        }
    },
    record2:{
        seat:'b20',
        owner:{
            fname:"Joe",
            lname:"Smith"
        }
    },
    record3:{
        seat:'b21',
        owner:{
            fname:"Joe",
            lname:"Smith"
        }
    },
    record4:{
        seat:'b22',
        owner:{
            fname:"Joe",
            lname:"Smith"
        }
    }
};

function makeRows(sectionLength,rowLength,placement){
    const rows = ['a','b','c','d','e','f','g','h','i','j','k',
    'l','m','n','o','p','q','r','s','t'];

    let html = "";
    let counter = 1;
        rows.forEach(row =>{

            switch(placement){
                case 'left': 
                    html += `<div class="label">${row}</div>`;
                    break;
                case 'right':    
                    counter = counter + (rowLength - sectionLength);
                    break;
                default:
                    counter = counter + ((rowLength - sectionLength)/2);
                    break;
            }

            for(let i = 0; i < sectionLength; i++){
                html += `<div class="a" id="${row+counter}">${counter}</div>`;
                counter++;
            }

            switch(placement){
                case 'left': 
                    counter = counter + (rowLength - sectionLength);
                    break;
                case 'right':  
                    html += `<div class="label">${row}</div>`;
                    break;  
                default:
                    counter = counter + ((rowLength - sectionLength)/2);
                    break;
            }
        });
        
    document.getElementById(placement).innerHTML = html;
}


makeRows(3,15,'left');
makeRows(3,15,'right');
makeRows(9,15,'middle');



for(const key in reservedSeats){
    if(reservedSeats.hasOwnProperty(key)){
        const obj = reservedSeats[key];
    
        document.getElementById(obj.seat).className = 'r';
        document.getElementById(obj.seat).innerHTML = "R";
    }
    
}

let selectedSeats = [];
let seats = document.querySelectorAll('.a');

seats.forEach( seat => {
    seat.addEventListener('click',function(event){
        seatSelectionProcess(seat.id);
    });

});

function seatSelectionProcess(thisSeat){
    let index = selectedSeats.indexOf(thisSeat);
    if(index > -1){
        selectedSeats.splice(index,1);
        document.getElementById(thisSeat).className = 'a';
    }
    else{
        selectedSeats.push(thisSeat);
        document.getElementById(thisSeat).className = 's';

    }
    console.log(selectedSeats);
}

document.getElementById('reserve').addEventListener('click',function(event){
    document.getElementById('resform').style.display = 'block';
    event.preventDefault();
});

document.getElementById('cancel').addEventListener('click',function(event){
    document.getElementById('resform').style.display = 'none';
    event.preventDefault();
});