
function cardGenerator(title,cName,views,time,img,capsule){ 

    let view;
    if(views<1000){
        view = views + ""
    }
    else if(views>=1000 && views<1000000){
        view = (views/1000).toFixed(1) + "K"
    }
    else (views>=1000000)
    {
        view = (views/1000000).toFixed(1) + "M"
    }
    
    let html =  ` <div class="card">
                    <div class="img">
                        <img src="${img}" alt="">
                        <div class="capsule">${capsule}</div>
                    </div>
                    <div class="text">
                        <h1 id="title">${title}</h1>
                        <p>${cName} . ${view} views . ${time} hours ago </p>
                    </div>
                </div>`
    document.querySelector(".container").innerHTML += html;   

}

cardGenerator("Are Real Madrid EQUIPPED Enough to Win the Champions League?","Madrid Pundits",7368,23,"https://i.ytimg.com/vi/dlONk3iISLI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBC52K2HhnMSWteWbdMTKpF0Ib-YA","31:10");

cardGenerator("Top 10 Goals of Lionel Messi's Career","Football Daily",1500000,2,"https://i.ytimg.com/vi/1w8Z0UOXVaY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAE=&rs=AOn4CLBvG7y8X1e6pX3b5c1n1nDRoG9K7A","12:45");

