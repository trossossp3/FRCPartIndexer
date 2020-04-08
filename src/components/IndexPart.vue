// IndexComponent.vue

<template>
  <div>
      <h1 style="font-size:75px; font-family: Andale Mono, monospace; text-align:center;">PARTS TO MACHINE</h1>
      <h1 style="font-size:20px; font-family: Andale Mono, monospace; text-align:center;">Please mark any completed parts with a check under "Status". If the project is finished, delete the parts to clear space.</h1>

        <div class="row">
          <div class="col-md-5"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">CREATE PART</router-link>
          </div>
        </div><br />

        <table class="table table-hover table-dark bg-red" style="font-size: 15px; color:black; border-radius: 15px">
            <thead>
            <tr>
              <th style="color: black">Part ID</th>
              <th style="color: black">Material</th>
              <th style="color: black">Dimensions</th>
              <th style="color: black">Quantity</th>
              <th style="color: black">Status</th>
            </tr>
            </thead>
            <tbody class>
                <tr v-for="post in posts" :key="post._id">
                  <td style="color: black">{{ post.partId}}</td>
                  <td style="color: black">{{ post.material}}</td>
                  <td style="color: black">{{ post.dimensions}}</td>
                  <td style="color: black">{{ post.quantity}}</td>
                  <td style="color: black"><input type="checkbox"></td>
                  <td style="color: black"><router-link :to="{name: 'edit', params: { id: post._id }}" class="btn btn-primary border border-dark">EDIT</router-link></td>
                  <td style="color: black"><button class="btn btn-danger border border-dark" @click.prevent="deletePost(post._id)" onClick="window.location.reload();">DELETE</button></td>
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