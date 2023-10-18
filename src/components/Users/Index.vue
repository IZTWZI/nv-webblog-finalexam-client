<template>
  <div>
    <h1>Get All Users</h1>
    <div>จํานวนผู้ใช้งาน {{ books.length }}</div>
    <div v-for="book in books" v-bind:key="book.id">
      <div>id: {{ book.id }}</div>
      <div>title: {{ book.title }}</div>
      <div>author: {{ book.author }}</div>
      <div>total_page: {{ book.total_page }}</div>
      <div>publisher: {{ book.publisher }}</div>
      <div>category: {{ book.category }}</div>
      <div>price: {{ book.price }}</div>
      <p>
        <button v-on:click="navigateTo('/book/' + book.id)">
          ดูข้อมูลผู้ใช้
        </button>
        <button v-on:click="navigateTo('/user/edit/' + book.id)">
          แกไขข้อมูล
        </button>
        <button v-on:click="deleteUser(book)">ลบข้อมูล</button>
      </p>
      <hr/>
    </div>
  </div>
</template>
<script>
import UserServices from "@/services/UserService";
export default {
  data() {
    return {
      books: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(book) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await UserServices.delete(book);
          this.refreshData()
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.books = (await UserServices.index()).data;
    }
  },
  async created() {
    this.books = (await UserServices.index()).data;
  }
};
</script>
<style scoped></style>
