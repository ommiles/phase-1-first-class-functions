// assignment will not take arrow functions
function receivesAFunction(spy){
    spy();
}


function returnsANamedFunction() {
    return function fn(){
        '';
    };
}

function returnsAnAnonymousFunction(){
    return function (){
        '';
    }
}