<template>
  <div>
    <h1>Edit Users</h1>
    <h1>Edit User</h1>
    <form v-on:submit.prevent="editUser">
      <p>title: <input type="text" v-model="book.title" /></p>
      <p>author: <input type="text" v-model="book.author" /></p>
      <p>total_page: <input type="text" v-model="book.total_page" /></p>
      <p>publisher: <input type="text" v-model="book.publisher" /></p>
      <p>category: <input type="text" v-model="book.category" /></p>
      <p>price: <input type="text" v-model="book.price" /></p>
      <p><button type="submit">edit user</button></p>
    </form>
    <hr />
    <div>
      <p>title: {{book.title}}</p>
      <p>author: {{book.author}}</p>
      <p>total_page: {{book.total_page}}</p>
      <p>publisher: {{book.publisher}}</p>
      <p>category: {{book.category}}</p>
      <p>price: {{book.price}}</p>
      <p></p>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UserService";
export default {
  data() {
    return {
      book: {
        title: "",
        author: "",
        total_page: "",
        publisher: "",
        category: "",
        price: ""
      }
    };
  },
  methods: {
    async editUser() {
      try {
        await UsersService.put(this.book);
        this.$router.push({
          name: "books"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let bookId = this.$route.params.bookId;
      this.book = (await UsersService.show(bookId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>
