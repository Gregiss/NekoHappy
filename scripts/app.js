var app = new Vue({
    el: "#app",
    data: {
        menuLinksLeft: [{"name" : "Home", "icon" : "fas fa-home", "acessou" : true}, 
        {"name" : "Explore", "icon" : "far fa-bookmark",  "acessou" : false},
         {"name" : "Profile", "icon" : "fas fa-user",  "acessou" : false}],
        where: {"name" : "Home", "icon" : "fas fa-home"},
        user: {"name": "Alexandre Silva", "avatar": "https://pbs.twimg.com/profile_images/1064957428343681024/B3-Vw14W_normal.jpg"},
        notifications : [
        {"name" : "Home", "count" : 10},
        {"name" : "Explore", "count" : 0},
        {"name" : "Profile", "count" : 50}    
    ]
    },
    methods: {
        acessarLink(link){
            for(var i = 0; i < this.menuLinksLeft.length; i++){
                this.menuLinksLeft[i].acessou = false
            }
            const index = this.menuLinksLeft.indexOf(link)
            link.acessou = true
            this.where = link
            this.menuLinksLeft[index] = link
        }
    }
});