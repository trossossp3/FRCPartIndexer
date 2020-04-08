// IndexComponent.vue

<template>
  <div>
      <h1 style="font-size:75px; font-family: Andale Mono, monospace; text-align:center;">PARTS TO MACHINE</h1>
      <h1 style="font-size:20px;">Please mark any completed parts with a check under "Status". If the project is finished, delete the parts to clear space.</h1>

        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">CREATE PART</router-link>
          </div>
        </div><br />

        <table class="table table-hover" style="font-size: 15px;">
            <thead>
            <tr>
              <th>Part ID</th>
              <th>Material</th>
              <th>Dimensions</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post._id">
                  <td>{{ post.partId}}</td>
                  <td>{{ post.material}}</td>
                  <td>{{ post.dimensions}}</td>
                  <td>{{ post.quantity}}</td>
                  <td><input type="checkbox"></td>
                  <td><router-link :to="{name: 'edit', params: { id: post._id }}" class="btn btn-primary">EDIT</router-link></td>
                  <td><button class="btn btn-danger" @click.prevent="deletePost(post._id)" onClick="window.location.reload();">DELETE</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          posts: []
        }
      },
      created() {
      let uri = 'http://localhost:4000/posts';
      this.axios.get(uri).then(response => {
        this.posts = response.data;
      });
    },
    methods: {
      deletePost(id)
      {
        let uri = `http://localhost:4000/posts/delete/${id}`;
        this.axios.delete(uri)
          this.posts.splice(this.posts.indexOf(id), 1);
        
      }
    }
  }
</script>