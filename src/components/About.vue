<template>
  <div class="card">
    <div class="header">

    </div>
    <div class="body">

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Nume Eveniment</span>
        </div>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Descriere Eveniment</span>
        </div>
        <textarea class="form-control" aria-label="Descriere"></textarea>
      </div>
<br>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">subdomeniu eveniment</span>
        </div>
        <input type="text" class="form-control" placeholder="subdomeniu eveniment"
               aria-label="Username"
               aria-describedby="basic-addon1">
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
