const bill = document.getElementById('bill-amount'),
    tip = document.getElementsByClassName('select-tip'),
    customTip = document.getElementById('custom-tip'),
    numPeople = document.getElementById('num-people'),
    errPeople = document.getElementById('people-error'),
    tipPerPerson = document.getElementById('tipAmount'),
    billPerPerson = document.getElementById('totalAmount'),
    butttonReset = document.getElementById('btnReset'),
    inputType = document.getElementsByClassName('input-type');
    

let amount = ""; // amount of the bill
let tipPercent = "";
let totalPerson = 0;


   
        // bill.addEventListener('focus', function() {
        //     for(var k = 0; k < tip.length; k++) {
        //     inputType[k].classList.add('custom-border');
        //     }
        // });
        // bill.addEventListener('blur', function() {
        //     for(var k = 0; k < tip.length; k++) {
        //     inputType[k].classList.add('custom-border');\
        //     }
        // });
   



    // to get raw bill amount
    bill.addEventListener('input', function() {
       
        if(this.value != 0 && this.value != "" )
        {
        inputType[0].classList.add('custom-border');
        amount = parseFloat(this.value);
        console.log(amount);
        totalComputation();  
        }      
    });
    bill.addEventListener('blur', function() {
        inputType[0].classList.remove('custom-border');
    });
    

    // to get tip selected
    for (var i = 0; i < tip.length; i++) {
        tip[i].addEventListener('click', function(){
            tipPercent = parseFloat(this.innerHTML);
            console.log(tipPercent);
            for (var j= 0; j < tip.length; j++) {
                tip[j].classList.remove('selected');
                customTip.value = "";  
            }
            this.classList.add('selected');
            totalComputation();
        });

        
    };

    // to get custom tip
    customTip.addEventListener('input', function() {
        if(this.value !=0 && this.value != "")
        {
            for (var j= 0; j < tip.length; j++) {
                tip[j].classList.remove('selected');
            }
            tipPercent = parseFloat(this.value);;
            console.log(tipPercent);
            totalComputation();
        }
       
    });

    //to get number of people
    numPeople.addEventListener('input', function(){
        if(this.value != 0) {
            inputType[1].classList.remove('error-border');
            inputType[1].classList.add('custom-border');
            totalPerson = parseFloat(this.value);
            console.log(totalPerson);
            totalComputation();
        }
        else{
            errPeople.innerHTML = "<p>Can't be zero</p>";
            inputType[1].classList.add('error-border');
            return;
        }
    });
    numPeople.addEventListener('blur', function(){
        inputType[1].classList.remove('custom-border');
        inputType[1].classList.remove('error-border');
    });
    

    // computation
    function totalComputation() {
        
        if (amount === "" || isNaN(amount) || tipPercent === "" || isNaN(tipPercent) || totalPerson === "" || isNaN(totalPerson) || totalPerson === 0) {
            tipPerPerson.innerHTML = "0.00";
            billPerPerson.innerHTML = "0.00";
            return;
        }
            
        let totalTipAmount = amount * (tipPercent/100);
        let finalBill = amount + totalTipAmount;

        let tipComputed = totalTipAmount / totalPerson;
        let billComputed = finalBill / totalPerson;


        tipPerPerson.innerHTML = tipComputed.toFixed(2);
        billPerPerson.innerHTML = billComputed.toFixed(2);
    }

    butttonReset.addEventListener('click', function(){
        bill.value = "";
        tip.value = "";
        customTip.value = "";
        numPeople.value = "";
        tipPerPerson.innerHTML = "0.00";
        billPerPerson.innerHTML = "0.00";

        amount = "";
        tipPercent = "";
        totalPerson = 0;
        tipComputed = 0;
        billComputed = 0;
    })

    
    
        
    