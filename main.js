const app = {
    data() {
        return {
            cats: [{image: 'image/01.jpg', profile: 'image/01.jpg', ig: 'zjiasally', like: false},
                    {image: 'image/02.jpg', profile: 'image/02.jpg', ig: 'dear.mycats', like: false},
                    {image: 'image/03.jpg', profile: 'image/03.jpg', ig: 'zuzu_and_nala', like: false}
            ],       
        }
    },
    methods: {
        clickLike(index){
            this.cats[index].like = !this.cats[index].like;      
        },
        switchSearchClicked() {
            this.searchClicked = !this.searchClicked;
            if (this.searchClicked == false) {
                this.inputSearch = '';
            }
        },
    },

    computed: {
        countPhoto() {
            return this.cats.length
        },
        likeAmount() {
            return this.cats.filter(n => n.like).length;
        }

    }
}

Vue.createApp(app).mount('#app');