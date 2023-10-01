function cambiarCollapse(ids){
    if(document.getElementById(ids).className == "fa fa-sort-desc fa-2x"){
        document.getElementById(ids).className = "fa fa-sort-asc fa-2x";
    } else{
        document.getElementById(ids).className = "fa fa-sort-desc fa-2x";
    }
}