const  app = Vue.createApp({
data(){
  return {
    counter:0,
    counter2:0,
  };
},
 methods: {/* 
    getCounterResult(){
      console.log("Counter 1 Çalıştı");
      return this.counter > 5 ? 'büyük' : 'küçük';
    },
    getCounter2Result(){
      console.log("Counter 2 Çalıştı");
      return this.counter2 > 5 ? 'büyük' : 'küçük';
    },
  */},
  //Computed degisiklige gore spesifik degisiklikler yapar
  // *** Reactivity
  computed : {
    getCounterResult(){
      console.log("Counter 1 Çalıştı");
      return this.counter > 5 ? 'büyük' : 'küçük';
    },
    getCounter2Result(){
      console.log("Counter 2 Çalıştı");
      return this.counter2 > 5 ? 'büyük' : 'küçük';
    },
  },
  //Eski ve yeni bilgileri izleyebiliyoruz
  watch :{
  counter(newValue, oldValue){
      console.log(oldValue, "",newValue);
  }    
  }
  
}).mount("#app");

//alert("ok");