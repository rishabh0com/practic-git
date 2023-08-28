function palindrome (y)
{
    let bag = "";
    for(let i = y.length-1; i >= 0; i++)
    {
        bag += y[i];

    }
    if(bag == y)
    {
        
        return true;
    }
    else
    {
        
        return false;
    }
  

}

let input = "aman";

if(palindrome(input) == true)
{
    console.log(input,"is a palindrome");
}
else
{
    console.log(input,"is not a palindrome");
}