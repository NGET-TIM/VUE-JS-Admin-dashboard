<template>
  <div class="container">
    <div class="row g-3">
      <div class="col-6 offset-3">
        <form class="">
          <h1 class="mt-3">Add New Book</h1>
          <div class="form-group mb-3">
            <label for="title" class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="title"
              autocomplete="off"
            />
          </div>
          <div class="form-group mb-3">
            <label for="description" class="form-label">Description</label>
            <input
              type="text"
              class="form-control"
              id="description"
              v-model="description"
              autocomplete="off"
            />
          </div>
          <div class="form-group text-right">
            <button type="submit" @click="submit" class="btn btn-primary">
              Submit
            </button>
            <p class="text-success">Typing Title: {{ title }}</p>
            <p class="text-success">Typing Description: {{ description }}</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script module lang="ts">import { readSync } from "fs";

export default {
  data() {
    return {
      text: "Hello From Form Add New Book",
      page_title: "Add New Book",
      title: "",
      description: "",
    };
  },
  computed: {
    page_title: "Add New Book",
  },
  methods: {
    submit(e) {
      e.preventDefault();
      const getTitle = this.title;
      const getDescription = this.description;
    },
  },
};
</script>

