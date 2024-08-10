<template>
 <h1>Job Details Component</h1>
  <h2>User ID: {{id}}</h2>
</template>

<script>
 export default {
   name: 'jobDetails',
   data(){
     return{
       id:this.$route.params.id
     }
   }
 }
</script>


<style scoped>

</style>