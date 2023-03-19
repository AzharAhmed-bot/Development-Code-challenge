let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput
// write Code For the Code challenge
/*In the code below ,the if statement was used to get the different grades using the logical operators 
with the appropriate grade*/
function getMarks(inputGrade){
    if(inputGrade<=100 && inputGrade>79){
        return "Your grade is A";
    }
    else if(inputGrade<=79 && inputGrade>=60){
        return "Your grade is B";
    }
    else if(inputGrade<60 && inputGrade>49){
        return "Your grade is C";
    }
    else if(inputGrade<=49 && inputGrade>=40){
        return "Your grade id D";
    }
        else if(inputGrade<40){
        return "Your grade is E";
    }
    }

finalOutput=getMarks(inputGrade);
document.getElementById('marks-id').append(finalOutput)

})
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
// write Code For the Code challeng
/*In the code below the if statement was used to get the appropriate solution.I subtracted the speeds to get
the overspeed then finally divide by 5 to get thr points for each driver and lastly points over 12 their
licence were suspeded*/
function speedTicket(inputSpeed){
    if (inputSpeed <= 70) {
      return 'Ok'
    } else if(inputSpeed>70 && inputSpeed<=130){
      
      let overSpeed = inputSpeed - 70;
      let points = Math.floor(overSpeed / 5);
      return `Points = ${points}`;
    }
    else if(inputSpeed>130){
        return ' “License suspended”'
    }
    }
finalOutput=speedTicket(inputSpeed);
    document.getElementById('speed-id').append(finalOutput)

})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let salary=parseInt(document.getElementById('input-salary').value)
        console.log(salary)
let finalOutput

/*This final code was challenging for me but i reasoned out with limited time just to get the best out of
the code .But I think that this should work in calculating net salary.Combinations of multiple if statements
to get my code*/
let tax;
let rem;
let nhif;

    if(salary<=24000){
        rem=24000-salary;
        tax=Math.ceil((10*rem)/100)
    }
    else if(salary>24000 && salary<=32333){
        rem=32333-salary
         tax=Math.ceil((20*rem)/100)
    }
    else if(salary>32334){
        rem=salary-32334;
         tax=Math.ceil((30*rem)/100)
        }

 if(salary<5999){
     nhif=150;
     }
else if(salary<=5999){
     nhif=150;
}
     else if(salary>6,000  && salary<= 7999){
     nhif=300;
     }
      else if(salary>7999 && salary<= 11999){
     nhif=400;
     }
     else if(salary>11999  && salary<=14999){
     nhif=500;
     } 
     else if(salary>14999 && salary<= 19999){
     nhif=600;
     } 
     else if(salary>19999 && salary<=24999){
     nhif=750;
     }
     else if(salary>24999  && salary<= 29999){
     nhif=850;
     } 
     else if(salary>29999  && salary<= 34999){
     nhif=900;
     } 
     else if(salary>34999 && salary<= 39999){
     nhif=950;
     } 
     else if(salary>39999 && salary<= 44999){
     nhif=1000;
     } 
     else if(salary>44999 && salary<= 49999){
     nhif=1100;
     }
     else if(salary>49999 && salary<= 59999){
     nhif=1200;
     }
     else if(salary>59999  && salary<= 69999){
     nhif=1300;
     }
     else if(salary>69999  && salary<= 79999){
     nhif=1400;
     }
      else if(salary>79999  && salary<= 89999){
     nhif=1500;
     } 
     else if(salary>89999  && salary<= 99999){
     nhif=1600;
     }
     else if(salary>99999){
     nhif=1700;
     }
   
let nssf=(salary-6000)*6/100

let totalDeductions=tax+nhif+nssf

let netSalary=salary-totalDeductions;

finalOutput =netSalary;
document.getElementById('salary-id').append(finalOutput)
        
})