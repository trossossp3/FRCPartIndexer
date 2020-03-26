
<template>
	
  <div>
	
    <p>Event timestamp: {{ fields.eventTimestamp }}</p>
	
  </div>
	
</template>
	
 
	
<script>
	
export default {
	
  data () {
	
    return {
	
      fields: {
	
        eventTimestamp: null
	
      }
	
    };
	
  },
	
  methods: {
	
    // This is an example query, the important part is above.
	
    getContent () {
	
      this.$prismic.client.getSingle('example')
	
        .then((document) => {
	
          this.fields.eventTimestamp = document.data.event_timestamp;
	
        })
	
    }
	
  },
	
  created () {
	
    this.getContent();
	
  }
	
};
	
</script>

