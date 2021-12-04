const app = Vue.createApp({
  data() {
    return {
      title: "Test Başlığı",
      itemList:
  };
  },
  beforeCreate() {
    console.log("beforeCreate Çalıştı...");
  },
  created() {
    console.log("created Çalıştı...");
  },
  beforeMount() {
    console.log("beforeMount Çalıştı...");
  },
  mounted() {
    console.log("mounted Çalıştı...");
  },
  beforeUpdate() {
    console.log("beforeUpdate Çalıştı...");
  },
  updated() {
    console.log("updated Çalıştı...");
  },
  beforeUnmount() {
    console.log("beforeUnmount Çalıştı...");
  },
  beforeUnmounted() {
    console.log("beforeUnmounted Çalıştı...");
  },
});
app.mount('#app');

//console.log(document.title);