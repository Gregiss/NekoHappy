var app = new Vue({
    el: "#app",
    data: {
        menuLinksLeft: [{ "name": "Home", "icon": "fas fa-home", "acessou": true },
            { "name": "Explore", "icon": "far fa-bookmark", "acessou": false },
            { "name": "Profile", "icon": "fas fa-user", "acessou": false }
        ],
        where: { "name": "Home", "icon": "fas fa-home" },
        user: { "name": "Alexandre Silva", "avatar": "https://pbs.twimg.com/profile_images/1064957428343681024/B3-Vw14W_normal.jpg" },
        oqueQuero: "",
        notifications: [
            { "name": "Home", "count": 0 },
            { "name": "Explore", "count": 0 },
            { "name": "Profile", "count": 0 },
            { "name": "Novo", "count": 0 }
        ],
        logged: false,
        games: [{ "name": "League Of Legends" }, { "name": "Counter Strike Global Offensive" }, { "name": "Outro" }],
        gameQueroA: "",
        outro: false,
        email: "",
        senha: "",
        nome: "",
        tuturial: 0
    },
    methods: {
        acessarLink(link) {
            for (var i = 0; i < this.menuLinksLeft.length; i++) {
                this.menuLinksLeft[i].acessou = false
            }
            const index = this.menuLinksLeft.indexOf(link)
            link.acessou = true
            this.where = link
            this.menuLinksLeft[index] = link
            this.notifications[index].count = 0
            document.title = "NekoHappy - " + link.name
        },
        oqueQueroA(oque) {
            this.oqueQuero = oque
        },
        qualGame(game) {
            this.gameQueroA = game
            if (game.name == "Outro") {
                this.outro = true
                this.gameQueroA = ""
            } else {
                this.outro = false
                this.gameQueroA = game.name
            }
        },
        cadastrar() {
            this.logged = true
            this.user.name = this.nome
            if (this.oqueQuero == 'ensinar') {
                var novaArea = { "name": "Ensinar", "icon": "fas fa-chalkboard-teacher", "acessou": false }
                this.menuLinksLeft.push(novaArea)
                this.scrollToTop()
            } else if (this.oqueQuero == 'aprender') {
                var novaArea = { "name": "Aprender", "icon": "fas fa-school", "acessou": false }
                this.menuLinksLeft.push(novaArea)
                this.scrollToTop()
            }
        },
        tuto() {
            this.scrollToTop()
            if (this.tuturial == 0) {
                this.tuturial = 1
            } else if (this.tuturial == 1) {
                this.tuturial = 2;
                for (var i = 0; i < this.menuLinksLeft.length; i++) {
                    this.menuLinksLeft[i].acessou = false
                }
                this.where = { "name": "Explore", "icon": "far fa-bookmark", "acessou": true }
                this.menuLinksLeft[1] = { "name": "Explore", "icon": "far fa-bookmark", "acessou": true }
            } else {
                this.tuturial = 3
            }
        },
        scrollToTop() {
            var body = document.body; // Safari
            body.scrollTop = 0;
        }
    }
});