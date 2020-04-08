
<template>
  <div>
    <h1 style="font-size:80px; text-align:center; font-family: Andale Mono, monospace;">FRC TEAM 7558 PART INDEXER</h1>
    <h1 style="font-size:20px; text-align:center;">Welcome to convenience. Welcome to Security. Welcome home.</h1>	
    <h1 style="font-size:20px; text-align:center;">In order to begin, please create a part using "create part" on the taskbar.</h1>	

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

