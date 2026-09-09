// console.log(a);
// {

//     console.log(a);
//     var a=8;
//     console.log(a);
// }

function fun() {
    // console.log(a);
    let a = 8;
    console.log(a);
}
// fun();

function fun2() {
    console.log("i am insides   function 2");
    function fun3() {
        console.log("i am insides   function 3");
    }
    console.log("Asked you")
    fun3();
}
// fun2()

//closure.................

let bankBalance = 0;
function CSBFS() {
    return {
        deposite: function (amount) {
            bankBalance += amount;
            console.log("Your current amount is"+bankBalance);
        },
        withdrwal: function (amount) {
            if (amount > bankBalance) {
                console.log("Insufficient amount");
                return;
            }
            bankBalance -= amount;
            console.log("Your remaining amount is " +bankBalancebalance);
        }
    }
}

acc= CSBFS();

acc.deposite(20);
acc.withdrwal(120);

