let items = document.getElementsByClassName("item");
let btn = document.getElementsByClassName("item-btn");
let i;

let image = new Image();
image.src = './images/campagne.jpg';




for(i=0;i<items.length;i++){
    items[i].addEventListener('click', function(event) {
        if(event.currentTarget.classList.contains("item-active")){
            event.currentTarget.classList.remove("item-active");
            event.currentTarget.children[0].children[1].style.display = "none";

            return;

        }
        for(j=0;j<items.length;j++){
            if(items[j].classList.contains("item-active")){
                items[j].classList.remove("item-active");
                items[j].children[0].children[1].style.display = "none";
                
            }
        }
        event.currentTarget.classList.add("item-active");
        event.currentTarget.children[0].children[1].style.display = "initial";
    });

    items[i].addEventListener('mouseover', function(event) {
        for(j=0;j<items.length;j++){
            if(items[j] != event.currentTarget){
                if(!(items[j].classList.contains["item-active"])){
                    items[j].style.filter ="brightness(80%)";

                }

            }
        } 
    });
    items[i].addEventListener('mouseout', function(event) {
        
        for(j=0;j<items.length;j++){
            items[j].style.filter ="none";
        } 
    });
}

