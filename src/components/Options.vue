<template>
  <div class="card">
    <div class="header">

    </div>
    <div class="body">

      <div class="input-group">

        <div class="input-group-prepend">
          <span class="input-group-text">Alege Tip gameplay</span>
        </div>

        <select class="custom-select" id="inputGroupSelect04">
          <option selected="">Echipa</option>
          <option value="1">Individual</option>
        </select>

      </div>
<br>
      <div class="input-group">

        <div class="input-group-prepend">
          <span class="input-group-text">Optiune Scor</span>
        </div>

        <select class="custom-select" id="inputGroupSelect04">
          <option selected="">dinamic </option>
          <option value="1">Flat</option>
        </select>

      </div>


      <div>
        <label>Range</label>
        <div class="input-daterange input-group" data-provide="datepicker">
          <span class="input-group-addon range-to">Start</span>
          <input type="text" class="input-sm form-control" name="start">
          <span class="input-group-addon range-to">Stop</span>
          <input type="text" class="input-sm form-control" name="end">
        </div>
      </div>


      <div class="input-group">

        <div class="input-group-prepend">
          <span class="input-group-text">Numar Maxim de Locuri</span>
        </div>

        <select class="custom-select" id="inputGroupSelect04">
          <option selected="">2</option>
          <option >3 </option>
          <option >4 </option>
          <option >5 </option>
          <option >6 </option>
          <option >7 </option>
          <option >8 </option>
          <option >9 </option>
          <option >10 </option>
        </select>

      </div>

      <div class="input-group">

        <div class="input-group-prepend">
          <span class="input-group-text">Acces Public</span>
        </div>

        <select class="custom-select" id="inputGroupSelect04">
          <option selected="">Public </option>
          <option value="1">Restrictionat</option>
        </select>

      </div>



<!--      <div class="input-group">-->
<!--        <div class="input-group-prepend">-->
<!--          <span class="input-group-text">Descriere Eveniment</span>-->
<!--        </div>-->
<!--        <textarea class="form-control" aria-label="Descriere"></textarea>-->
<!--      </div>-->
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
  name: 'Options',
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
