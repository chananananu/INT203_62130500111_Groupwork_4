const app = {
    data() {
        return {
            cats: [{image: 'image/01.jpg', profile: 'image/01.jpg', ig: 'zjiasally', like: false},
                    {image: 'image/02.jpg', profile: 'image/02.jpg', ig: 'dear.mycats', like: false},
                    {image: 'image/03.jpg', profile: 'image/03.jpg', ig: 'zuzu_and_nala', like: false}
            ],    
            search: false,
            searchCat: '',
 
        }
    },
    methods: {
        clickLike(index){
            this.cats[index].like = !this.cats[index].like;      
        },
        toggleSearch() {
            this.search = !this.search;
        }

    },

    computed: {
        countPhoto() {
            return this.cats.length
        },
        likeAmount() {
            return this.cats.filter(n => n.like).length;
        },

        inputSearch (){
            if (this.inputSearch == '') {
                return this.cats;
            }
            else {
                return this.cats.filter(p => p.ig.includes(this.searchCat.toLowerCase()))
            }
            
         },
    }
}

Vue.createApp(app).mount('#app');