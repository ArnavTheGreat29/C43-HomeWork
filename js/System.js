class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        if(enteredCode === actualCode.toUpperCase()){

             return true;


        } else{

             return false;

        }

        
    }

}