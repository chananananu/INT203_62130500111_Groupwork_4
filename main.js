const app = {
    data() {
        return {
            cats: [{image: 'image/Britain-shorthair.jpg', profile: 'image/Britain-shorthair.jpg', name: 'บริติช ช็อตแฮร์ (British Shorthair)', like: false},
                    {image: 'image/Exotic-shorthair.jpg', profile: 'image/Exotic-shorthair.jpg', name: 'เอ็กโซติก ช็อตแฮร์ (Exotic Shorthair)', like: false},
                    {image: 'image/munchkin.jpg', profile: 'image/munchkin.jpg', name: 'มันช์กิ้น (Munchkin)', like: false},
                    {image: 'image/persian.jpg', profile: 'image/persian.jpg', name: 'เปอร์เซีย (Persian)', like: false},
                    {image: 'image/scottish-fold.jpg', profile: 'image/scottish-fold.jpg', name: 'สก็อตติช โฟลด์ (Scottish Fold)', like: false},
                    {image: 'image/Siamese.jpg', profile: 'image/Siamese.jpg', name: 'วิเชียรมาศ (Siamese)', like: false}
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
                return this.cats.filter(p => p.name.includes(this.searchCat.toLowerCase()))
            }
            
         },
    }
}

Vue.createApp(app).mount('#app');