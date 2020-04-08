
<template>

  <div>
    <h1 style="font-size:80px;  font-family: Andale Mono, monospace; color: white; position: absolute; left:8%;">FRC TEAM 7558 PART INDEXER</h1>
    <h1 style="font-size:20px; text-align:center; color: white; position: absolute; top: 22.5%;">Welcome to Convenience. Welcome to Security. Welcome Home.</h1>	
    <h1 style="font-size:20px; text-align:center; color: white; position: absolute; top:27.5%;">In order to begin, please select "Create Part" on the taskbar.</h1>	
    <img src="@/assets/robo_cad.png" style="position: relative; left: 50%; transform: translate(-40%, -25%);"/>

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
	
	
};
	
</script>

