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
  computed : {
        getCounterResult(){
      console.log("Counter 1 Çalıştı");
      return this.counter > 5 ? 'büyük' : 'küçük';
    },
    getCounter2Result(){
      console.log("Counter 2 Çalıştı");
      return this.counter2 > 5 ? 'büyük' : 'küçük';
    },
  }
  
}).mount("#app");

//alert("ok");