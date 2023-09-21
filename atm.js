const prompt = require("prompt-sync")();
function BankingProcess(){
    var Notes_2000=false;
    var Notes_500=true;
    var Notes_200=true;
    var Notes_100=false;
   






    const SBI = {
        userName: "XYZ",
        password: 1234,
        transferUserName:"zxc",
        AC:"0098"
    
    }
    const HDFC = {
        userName: "qwe",
        password: 4567,
        transferUserName:"vbn",
        AC:"031002005601"
 
    
    
    }
    const Axis = {
        userName: "rty",
        password: 8907,
        transferUserName:"nmk",
        AC:"031001908753"
 
    
    }
    
    var bankBalance = 1000;
    var transferbankBalance=2000;
    var printMiniStatement=[];
    
    
    let user = prompt("Enter the UserName:")
    console.log(user)
    let _password = parseInt(prompt("Enter the password:"))
    console.log(_password)
    
    
    if ((user === SBI.userName && _password === SBI.password) || (user === HDFC.userName && _password === HDFC.password) || (user === Axis.userName && _password === Axis.password)) {
        console.log('Welcome to the banking process!!!')
    
        while (true) {
            let options = {
                Deposit: "1",
                Withdraw: "2",
                BalanceEnquiry: "3",
                moneyTransfer: "4",
                miniStatement: "5",
                Exit: "6"
            }
            console.table(options)
            let option = prompt('Choose your option : ')
    
            if (option == options.Exit) {
                console.log('Exit')
                break;
            }
            else if (option == options.miniStatement) {
                console.log('Ministatement')
                console.log(printMiniStatement);
            } 
            
            else if (option == options.moneyTransfer) {
                console.log('moneyTransfer')
               var  transferUserName1=prompt("Enter the transferusername:");
               var transferbankAC=prompt("Enter the Account number:");
               if ((transferUserName1 === SBI.transferUserName && transferbankAC === SBI.AC) || (transferUserName1 === HDFC.transferUserName && transferbankAC=== HDFC.AC) || (transferUserName1 === Axis.transferUserName&& transferbankAC  === Axis.AC)) {
                var transferAmount=parseInt(prompt("Enter the Transfer amount:"));
                if ( (transferAmount <= bankBalance)) {
                    transferbankBalance  +=transferAmount ;
                    bankBalance-=transferAmount;
                    console.log('TransferAmount successfully!!');
                    var PrinttransferAmount = `$${transferAmount} transferred Amount successfully to ${transferUserName1}`;
                    printMiniStatement.push([PrinttransferAmount]);
                }
                else{
                    console.log("Balance is insufficent!!")
                }
                



            }
            }


            else if (option == options.BalanceEnquiry) {
                console.log('BalanceEnquiry')
                console.log(bankBalance)
            }


            else if (option == options.Withdraw) {
                console.log('Withdraw')

                var withdrawAmount = parseInt(prompt('Enter the withdraw amount:'))
             
                if (withdrawAmount <= bankBalance) {
                    bankBalance -= withdrawAmount;
                    var PrintwithdrawlAmount = `$${withdrawAmount} withdrawl amount successfully`
                    printMiniStatement.push([PrintwithdrawlAmount]);
                   

                    var count=0;


                    if((Notes_2000)&&(withdrawAmount>=2000)){

                       var Notes_count_2000 = Math.floor(withdrawAmount/2000);
                       console.log(Notes_count_2000, "==> 2000 Notes")
                       count+=Notes_count_2000;
                       withdrawAmount-=Notes_count_2000*2000;
                    }
                    if((Notes_500)&&(withdrawAmount>=500)){

                        var Notes_count_500 = Math.floor(withdrawAmount/500);
                        console.log(Notes_count_500, "==> 500 Notes")

                        count+=Notes_count_500;
                        withdrawAmount-=Notes_count_500*500;
                     }
                     if((Notes_200)&&(withdrawAmount>=200)){

                        var Notes_count_200 = Math.floor(withdrawAmount/200);
                        console.log(Notes_count_200, "==> 200 Notes")

                        count+=Notes_count_200;
                        withdrawAmount-=Notes_count_200*200;
                     }
                     if((Notes_100)&&(withdrawAmount>=100)){

                        var Notes_count_100 = Math.floor(withdrawAmount/100);
                        console.log(Notes_count_100, "==> 100 Notes")

                        count+=Notes_count_100;
                        withdrawAmount-=Notes_count_100*100;
                     }
                    
                     console.log("Notes_count:" ,count);
                     
                } else {
                    console.log("Insuffient balance to withdraw");
                }
            }

            
            else if (option == options.Deposit) {
                console.log('Deposit')
                var depositAmount = parseInt(prompt('Enter the Deposit Amount: '))
                if ((depositAmount == bankBalance) || (depositAmount > bankBalance) || (depositAmount < bankBalance)) {
                    bankBalance  +=depositAmount ;
                    let PrintdepositAmount = `$${depositAmount} deposited amount successfully.`;
                    printMiniStatement.push([PrintdepositAmount]);
                    // printMiniStatement.push(depositAmount)
                }
            }
            else{
                console.log("please give proper input value")
            }
    
        }
    
    }
    else {
        console.log('The credientials are invalid')
    }
    
    
    
}

BankingProcess();