function prime(x)
{
    let count = 0;

    for(let i =1; i <= x; i++) if(x % i == 0) count++;
    if(count == 2) return true;
    else return false;

}

let a = 13;
if(prime(a) == true) console.log(a,"is a prime number");
else console.log(a,"is not a prime number");