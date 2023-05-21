import '../style/index.css';

function body(params){
    return(
        <div class ="ban">
        <img class ="background-image" src='/cars/car2.png'></img>
        <div class = "centeral-block"><h1 class = "welcome">{params.name}</h1></div>
        </div>
        
    );
}

export default body;