
<template>
<h1>Job Component</h1>
<ul>
  <li v-for="user in users" >
    <router-link :to="{name:'jobDetails', params:{id:user.id}}">
      <h3>{{user.name}}  {{user.title}}</h3>
    </router-link>
  </li>
</ul>
</template>
<script>
export default {
    data(){
       return{
          users:[
            {id:1, name:'Shohruh', title:'Frontend Developer'},
            {id:2, name:'Ismoil', title:'Backend Developer'},
            {id:3, name:'Nazarbek', title:'Backend Developer'}
          ]
    }
  }
}
</script>

<style scoped>
ul{
  list-style: none;
}
</style>