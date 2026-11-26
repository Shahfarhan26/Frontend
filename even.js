//WAP to print even no 1 to 20
let x = 0;
while((x % 2) == 0){
    if(x==0){
        x+=2
        continue;
    }
    if(x==22){
        break;
    }
    console.log(x)
    x+=2
}