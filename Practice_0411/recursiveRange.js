//Write a func,on called recursiveRange which accepts a number
//and adds up all the numbers from 0 to the number passed to the func,on

function recursiveRange(x){
    let num = 0;
    if (x == 0) {
        return num;
    }
    else{
        num = x + recursiveRange(x-1);
        return num;
    }
}

// recursiveRange(6) // 21
// recursiveRange(10) // 55
console.log(recursiveRange(6)); //21
console.log(recursiveRange(10)); //55