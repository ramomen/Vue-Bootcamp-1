const app = Vue.createApp({
  data(){
    return{
    search:"",
    itemList: ["dönüşüm","1984","boğulmamak için","satranç","zamanın kısa tarihi","fahreneit","nutuk"],
   // filteredList :[],
    }
  },
  methods:{
    searchList(){
   //  this.filteredList = this.itemList.filter((i)=> i.includes(this.search));
    }
  },
  computed:{
    filteredList(){
      return this.itemList.filter((i)=> i.includes(this.search));
    }
  },
  watch:{}
});
app.mount("#app");

//console.log("ok");