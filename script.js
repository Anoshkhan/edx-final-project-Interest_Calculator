function compute(){
            const amount = document.getElementById("principal").value;
            const profitRate = document.getElementById("rate").value;
            const years = document.getElementById("years").value;

            if(amount == "") {
                alert("Amount can't be empty");
                document.getElementById("principal").focus();
                return false;
            }
            else {
                if (amount <= 0) {
                alert("Enter a positive number");
                document.getElementById("principal").focus();
                return false;
            }
            }
            const interest = document.getElementById("result").innerHTML = amount*years*profitRate/100;
            var year = new Date().getFullYear()+parseInt(years);
            var showing_data = document.getElementById("showing_data").innerHTML = `If you deposit ${amount} <br>
                at an interest rate of ${profitRate} <br> 
                You will  receive an amount of ${interest} <br>
                in the year ${year}`;
           
           }
            
           
            function showVal(newVal){
                document.getElementById("showRate").innerHTML = newVal + '%';
            }