let value = '-';
let x = 20 , y = 30;

switch (value) {
    case '+':
        console.log(x + y)
        break;
    case '-':
        if(x>y){
            console.log(x - y)
            break;
        }else{
            console.log(y - x)
            break;
        }
    case '*':
        console.log(x * y)
        break;    
    case '/':
        if(x>y){
            console.log(x / y)
            break;
        }else{
            console.log(y / x)
            break;
        }
    default:
        console.log("choose from the given options")
        break;
}