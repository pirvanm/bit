<template>
  <div class="card">
    <div id="app">
      {{ info }}
    </div>

    <multiselect :track-by="trackBy"
                   :options="options"
                   v-model="value"
                   label="name"
                   multiple
    :max="5">
    </multiselect>
    <pre>{{ value }}</pre>
<!--    <multiselect-->
<!--        v-model="selected"-->
<!--        :options="options"-->
<!--    :multiple="true">-->
<!--    </multiselect>-->

  </div>
</template>

<script>
import axios from 'axios';
import Multiselect from 'vue-multiselect'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export default {
  name: 'Ex',
  components: {
    Multiselect
  },
  props: {
    msg: String
  },

  data() {
    return {
      info: null,
      selected: null,
      bySkill: 'id',
      initialValues: [5,2],
      value: null,
      options: [
        // { id: 1, name: 'Vue.js', language: 'JavaScript' },
        // { id: 2, name: 'Rails', language: 'Ruby' },
        // { id: 3, name: 'Sinatra', language: 'Ruby' },
        // { id: 4, name: 'Laravel', language: 'PHP' },
        // { id: 5, name: 'Phoenix', language: 'Elixir' }


      ]
    }
  },
  watch: {
    initialValues: {
      immediate: true,
      handler(values) {
        this.value = this.options.filter(x => values.includes(x[this.bySkill]));
      }
    }
  },
  mounted() {
    // axios
    //     .get('https://api.cyberedu.ro/v1/challenge')
    //     .then(response => (this.info = response))

    // axios({
    //   method: 'GET',
    //   url: `https://api.cyberedu.ro/v1/challenge`,
    //
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-type': 'application/json',
    //   }
    // })


    this.axios.get('https://api.cyberedu.ro/v1/challenge', this.info, {
      headers: {
        'Access-Control-Allow-Origin': '*',
          //  'Content-type': 'application/json',
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err.response);
    });
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
