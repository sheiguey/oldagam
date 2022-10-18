const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postItem = document.getElementById("posts")
  

for (let i=0; i<posts.length ;i++){
 
 postItem.innerHTML +=`<div class="post-item">
                     <div class="header-post">
                   <img  src="${posts[i].avatar}" />
                   <p class="name-author"><span> ${posts[i].name}</span><br/> ${posts[i].location}</p>
                </div>
                <div class="body-post">
                   <img id="post-img" src="${posts[i].post}"/> 
                   
                    <div class="icon">
                        <img src="images/icon-heart.png"/>
                        <img src="images/icon-comment.png"/>
                        <img src="images/icon-dm.png"/> 
                    </div>
                   <p id="likes" class="likes"> ${posts[i].likes} likes</p>
                   <p id="comments" class="comments"><span>${posts[i].username}</span> ${posts[i].comment} lol</p>
                
                 
                </div>
                </div>
                `                
             
 
   
}