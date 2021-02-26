for(let i=1; i<100; i++){
    if(i%3===0){
        if(i%5===0){
            console.log("TicTac");
        }else{
            console.log("Tic");
        }
    }else{
        if(i%5===0){
            console.log("Tac");
        }else{
            console.log(i);
        }
    }
}