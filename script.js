// fetch data function 
async function getUriData(params){
    try{
        let Resp = await fetch(params);
        let Data = await Resp.json();
        return Data.results;
    }catch(error){
        console.log(error);
    }
}

function world(a_tag){    
    displayContent(a_tag);
    var world_container = document.querySelector('#world');
    var Uri = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=e9aI3Za0KdCAup44XAJ0sjXxGZzePqvq';
        getUriData(Uri).then(data=>{        
            data.forEach(obj => {
            var cardData=[{
                "section":obj.section,
                "byline":obj.byline,
                "date":obj.created_date.split("T")[0],
                "abstract":obj.abstract,
                "shortUrl":obj.short_url,
                "imgUrl":obj.multimedia[4].url,
                "type":obj.item_type,
                "title":obj.title
            }]
            if(obj.section == "world" || obj.section == "World"){
                var card_info =createCard(cardData)
                world_container.appendChild(card_info);
            }
            
            // console.log(cardData)
            });
        
    
        });   
}

function politics(a_tag){    
    displayContent(a_tag);
    var politics_container = document.querySelector('#politics');
    var Uri = 'https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=e9aI3Za0KdCAup44XAJ0sjXxGZzePqvq';
        getUriData(Uri).then(data=>{        
            data.forEach(obj => {
            var cardData=[{
                "section":obj.section,
                "byline":obj.byline,
                "date":obj.created_date.split("T")[0],
                "abstract":obj.abstract,
                "shortUrl":obj.short_url,
                "imgUrl":obj.multimedia[4].url,
                "type":obj.item_type,
                "title":obj.title
            }]
            if(obj.section == "us" || obj.section == "Us"){
                cardData[0].section = "Politics";
                var card_info =createCard(cardData)
                politics_container.appendChild(card_info);
            }
            // console.log(obj.section)
            });
        
    
        });   
}

function magazine(a_tag){    
    displayContent(a_tag);
    var magazine_container = document.querySelector('#magazine');
    var Uri = 'https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=e9aI3Za0KdCAup44XAJ0sjXxGZzePqvq';
        getUriData(Uri).then(data=>{        
            data.forEach(obj => {
            var cardData=[{
                "section":obj.section,
                "byline":obj.byline,
                "date":obj.created_date.split("T")[0],
                "abstract":obj.abstract,
                "shortUrl":obj.short_url,
                "imgUrl":obj.multimedia[4].url,
                "type":obj.item_type,
                "title":obj.title
            }]
            if(obj.section == "magazine" || obj.section == "Magazine"){
                var card_info =createCard(cardData)
                magazine_container.appendChild(card_info);
            }
            
            // console.log(cardData)
            });
        
    
        });   
}

function technology(a_tag){    
    displayContent(a_tag);
    var technology_container = document.querySelector('#technology');
    var Uri = 'https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=e9aI3Za0KdCAup44XAJ0sjXxGZzePqvq';
        getUriData(Uri).then(data=>{        
            data.forEach(obj => {
            var cardData=[{
                "section":obj.section,
                "byline":obj.byline,
                "date":obj.created_date.split("T")[0],
                "abstract":obj.abstract,
                "shortUrl":obj.short_url,
                "imgUrl":obj.multimedia[4].url,
                "type":obj.item_type,
                "title":obj.title
            }]
            if(obj.section == "technology" || obj.section == "Technology"){
                var card_info =createCard(cardData)
                technology_container.appendChild(card_info);
            }
            
            // console.log(cardData)
            });
        
    
        });   
}

function science(a_tag){    
    displayContent(a_tag);
    var science_container = document.querySelector('#science');
    var Uri = 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=e9aI3Za0KdCAup44XAJ0sjXxGZzePqvq';
        getUriData(Uri).then(data=>{        
            data.forEach(obj => {
            var cardData=[{
                "section":obj.section,
                "byline":obj.byline,
                "date":obj.created_date.split("T")[0],
                "abstract":obj.abstract,
                "shortUrl":obj.short_url,
                "imgUrl":obj.multimedia[4].url,
                "type":obj.item_type,
                "title":obj.title
            }]
            if(obj.section == "science" || obj.section == "Science"){
                var card_info =createCard(cardData)
                science_container.appendChild(card_info);
            }
            
            // console.log(cardData)
            });
        
    
        });   
}

function health(a_tag){
    displayContent(a_tag);
    var health_container = document.querySelector('#health');
    var Uri = 'https://api.nytimes.com/svc/topstories/v2/health.json?api-key=e9aI3Za0KdCAup44XAJ0sjXxGZzePqvq';
     getUriData(Uri).then(data=>{        
         data.forEach(obj => {
            var cardData=[{
                "section":obj.section,
                "byline":obj.byline,
                "date":obj.created_date.split("T")[0],
                "abstract":obj.abstract,
                "shortUrl":obj.short_url,
                "imgUrl":obj.multimedia[4].url,
                "type":obj.item_type,
                "title":obj.title
            }]
            // var card_info =createCard(cardData)
           
            if(obj.section == "health" || obj.section == "Health"){
                var card_info =createCard(cardData)
                health_container.appendChild(card_info);
            }
         });
        
    
     });      
}

function sports(a_tag){
    displayContent(a_tag);
    var sports_container = document.querySelector('#sports');
    var Uri = 'https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=e9aI3Za0KdCAup44XAJ0sjXxGZzePqvq';
     getUriData(Uri).then(data=>{        
         data.forEach(obj => {
            var cardData=[{
                "section":obj.section,
                "byline":obj.byline,
                "date":obj.created_date.split("T")[0],
                "abstract":obj.abstract,
                "shortUrl":obj.short_url,
                "imgUrl":obj.multimedia[4].url,
                "type":obj.item_type,
                "title":obj.title
            }]
            // var card_info =createCard(cardData)
           
            if(obj.section == "sports" || obj.section == "Sports"){
                var card_info =createCard(cardData)
                sports_container.appendChild(card_info);
            }
         });
        
    
     });      
}

function artStory(a_tag){
    displayContent(a_tag);
    var arts_container = document.querySelector('#arts');
    var Uri = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=e9aI3Za0KdCAup44XAJ0sjXxGZzePqvq';
     getUriData(Uri).then(data=>{        
         data.forEach(obj => {
            var cardData=[{
                "section":obj.section,
                "byline":obj.byline,
                "date":obj.created_date.split("T")[0],
                "abstract":obj.abstract,
                "shortUrl":obj.short_url,
                "imgUrl":obj.multimedia[4].url,
                "type":obj.item_type,
                "title":obj.title
            }]
            // var card_info =createCard(cardData)
           
            if(obj.section == "arts" || obj.section == "Arts"){
                var card_info =createCard(cardData)
                arts_container.appendChild(card_info);
            }
         });
        
    
     });      
}

function fashion(a_tag){
    displayContent(a_tag);
    var fashion_container = document.querySelector('#fashion');
    var Uri = 'https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=e9aI3Za0KdCAup44XAJ0sjXxGZzePqvq';
     getUriData(Uri).then(data=>{        
         data.forEach(obj => {
            var cardData=[{
                "section":obj.section,
                "byline":obj.byline,
                "date":obj.created_date.split("T")[0],
                "abstract":obj.abstract,
                "shortUrl":obj.short_url,
                "imgUrl":obj.multimedia[4].url,
                "type":obj.item_type,
                "title":obj.title
            }]
            // var card_info =createCard(cardData)
           
            if(obj.section == "fashion" || obj.section == "Fashion"){
                var card_info =createCard(cardData)
                fashion_container.appendChild(card_info);
            }
         });
        
    
     });      
}

function food(a_tag){
    displayContent(a_tag);
    var food_container = document.querySelector('#food');
    var Uri = 'https://api.nytimes.com/svc/topstories/v2/food.json?api-key=e9aI3Za0KdCAup44XAJ0sjXxGZzePqvq';
     getUriData(Uri).then(data=>{        
         data.forEach(obj => {
            var cardData=[{
                "section":obj.section,
                "byline":obj.byline,
                "date":obj.created_date.split("T")[0],
                "abstract":obj.abstract,
                "shortUrl":obj.short_url,
                "imgUrl":obj.multimedia[4].url,
                "type":obj.item_type,
                "title":obj.title
            }]
            // var card_info =createCard(cardData)
           
            if(obj.section == "dining" || obj.section == "Dining"){
                cardData[0].section = "Food";
                var card_info =createCard(cardData)
                food_container.appendChild(card_info);
            }
         });
        
    
     });      
}

function travel(a_tag){
    displayContent(a_tag);
    var travel_container = document.querySelector('#travel');
    var Uri = 'https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=e9aI3Za0KdCAup44XAJ0sjXxGZzePqvq';
     getUriData(Uri).then(data=>{        
         data.forEach(obj => {           
        //    dateinp = dateinp[0];

            var cardData=[{
                "section":obj.section,
                "byline":obj.byline,
                "date": obj.created_date.split("T")[0],
                "abstract":obj.abstract,
                "shortUrl":obj.short_url,
                "imgUrl":obj.multimedia[4].url,
                "type":obj.item_type,
                "title":obj.title
            }]
            // var card_info =createCard(cardData)
           
            if(obj.section == "travel" || obj.section == "Travel"){
                var card_info =createCard(cardData)
                travel_container.appendChild(card_info);
            }
         });
        
    
     });      
}



function CreateElementfun(element,elemClass='',elemId=''){
    var element = document.createElement(element);
    element.setAttribute('class',elemClass);
    element.setAttribute('id',elemId);
    return element;
}

function createCard(params){
    cardData = params[0];
   
    var card = CreateElementfun('div','card_box card mb-4');
    var card_row = CreateElementfun('div','row no-gutters');
    var col1 = CreateElementfun('div','col-lg-8');
    var card_body = CreateElementfun('div','card-body');
    var card_title = CreateElementfun('h5','card-title text-uppercase');
    card_title.innerHTML = cardData.section;
    var card_byline = CreateElementfun('h2','card-title');
    card_byline.innerHTML = cardData.byline;
    var card_date = CreateElementfun('h5','date-card');
    card_date.innerHTML = cardData.date;
    var card_abstract = CreateElementfun('p','abstract-card');
    card_abstract.innerHTML = cardData.abstract;
    var card_link = CreateElementfun('a','continueReading');
    card_link.innerHTML = "Continue reading";
    card_link.setAttribute('href',cardData.shortUrl)
    card_body.append(card_title,card_byline,card_date,card_abstract,card_link);
    col1.appendChild(card_body);

    var col2 = CreateElementfun('div','col-lg-4');
    var card_img = CreateElementfun('img','card-img');
    card_img.setAttribute('alt',"Thumbnail");
    card_img.setAttribute('src',cardData.imgUrl);
    col2.appendChild(card_img);

    card_row.append(col1,col2);
    card.appendChild(card_row);
    card.style.boxShadow = "3px 4px 4px gray";
   
    return card;
}

function displayContent(a_tag){
    if(a_tag==='world'){
        document.getElementById('world').style.display="";
    }else{
        document.getElementById('world').style.display='none';
    }   
    if(a_tag==='politics'){
        document.getElementById('politics').style.display="";
    }else{
        document.getElementById('politics').style.display='none';
    }
    if(a_tag==='magazine'){
        document.getElementById('magazine').style.display="";
    }else{
        document.getElementById('magazine').style.display='none';
    }
    if(a_tag==='technology'){
        document.getElementById('technology').style.display="";
    }else{
        document.getElementById('technology').style.display='none';
    }
    if(a_tag==='science'){
        document.getElementById('science').style.display="";
    }else{
        document.getElementById('science').style.display='none';
    }
    if(a_tag==='health'){
        document.getElementById('health').style.display="";
    }else{
        document.getElementById('health').style.display='none';
    }
    if(a_tag==='sports'){
        document.getElementById('sports').style.display="";
    }else{
        document.getElementById('sports').style.display='none';
    }    
    if(a_tag==='arts'){
        document.getElementById('arts').style.display="";
    }else{
        document.getElementById('arts').style.display='none';
    }
    if(a_tag==='fashion'){
        document.getElementById('fashion').style.display="";
    }else{
        document.getElementById('fashion').style.display='none';
    }
    if(a_tag==='food'){
        document.getElementById('food').style.display="";
    }else{
        document.getElementById('food').style.display='none';
    }
    if(a_tag==='travel'){
        document.getElementById('travel').style.display="";
    }else{
        document.getElementById('travel').style.display='none';
    }
    
}
