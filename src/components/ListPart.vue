<template>
  <div>
      <h1>Contacts</h1>
        
        <table class="table table-hover">
            <thead>
            <tr>
              <th>Part ID</th>
              <th>Material</th>
              <th>Dimensions</th>
              <th>Quantity</th>
              <th>Status<th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post._id">
                  <td>{{ post.partId }}</td>
                  <td>{{ post.material }}</td>
                  <td>{{ post.dimensions }}</td>
                  <td>{{ post.qunatity }}</td>
                  <td>{{ post.status }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: post._id }}" class="btn btn-primary">Edit</router-link></td>
                  <td><button class="btn btn-danger" @click.prevent="deletePost(post._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>