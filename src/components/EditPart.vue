// EditComponent.vue

<template>
  <div>
    <h1 style="font-size:100px; font-family: Andale Mono, monospace; text-align:center; color: white;">Edit Part</h1>
    <form @submit.prevent="updatePost()">
       <div class="row">
        <div class="col-md-6">


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
        <span style="float: right; width: 450px; margin-left: 120px">
          <img src="@/assets/frc_logo.png" />
        </span>
      </div>
      <br>
        <div class="form-group">
          <button class="btn btn-primary" onclick="updatePost()">Update</button>
        </div>
    </form>
    <img src="@/assets/background.jpg" />
  </div>
</template>

<script>
    export default {

      data() {
        return {
          post: {}
        }
      },
      created() {
        let uri = `http://localhost:4000/posts/edit/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.post = response.data;
        });
      },
      methods: {
        updatePost() {
          let uri = `http://localhost:4000/posts/update/${this.$route.params.id}`;
          this.axios.post(uri, this.post).then(() => {
            this.$router.push({name: 'list'});
          });
        }
      }
    }
</script>