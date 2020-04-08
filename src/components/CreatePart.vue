//CreateComponenet.vue
<template>
  <div> 
   
    <h1 style="font-size:80px; font-family: Andale Mono, monospace; text-align:center;">NEW PART</h1>
    
    <br>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
        <p id="vuejs_date_time"></p>


          <b-field label="Part Number">
            <b-input type=text v-model="post.partId" placeholder="0000-00"></b-input>
          </b-field>
          <b-field label="Material">
            <b-input type=text v-model="post.material" placeholder='1/8" Aluminum Box Tube'></b-input>
          </b-field>
          <b-field label="Dimensions">
            <b-input type=text v-model="post.dimensions" placeholder='2" x 1" x 8"'>
            </b-input>
          </b-field>
          <b-field label="Quantity">
            <b-input type="number" v-model="post.quantity" placeholder="2"></b-input>
          </b-field>
        </div>
      </div>
      <br>

      <div class="form-group">
        <button on-click="addPost()" class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>


<script>

  export default {
    data() {
      return {
        post: {}
      }
    },
    methods: {
      addPost() {

        let uri = 'http://localhost:4000/posts/add';
        this.axios.post(uri, this.post).then(() => {
          this.$router.push({ name: 'posts' });
        });
      }
    }

  }

</script>