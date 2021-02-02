<template>

    <form-wizard @on-complete="onComplete"
                 shape="square"
                 color="#3498db" ref="formWiz">
      <tab-content title="Personal details"
                   icon="ti-user">
       <About/>
      </tab-content>
      <tab-content title="Additional Info"
                   icon="ti-settings">
      <Ex/>
        <div>
          <button @click="goBack">GO BACK !</button>
        </div>
      </tab-content>
      <tab-content title="Last step"
                   icon="ti-check">
  <Options/>
      </tab-content>
    </form-wizard>

</template>

<script>

import About from './components/About.vue'
import Ex from './components/Ex.vue'
import Options from './components/Options.vue'
export default {
  name: 'W',
  components: {
    About,
    Ex,
    Options
  },
  props: {
    msg: String,
    nextButtonText: {
      type: String,
      default: 'The next step'
    }
  },

  data() {
    return {
      info: null,
      selected: null,
      bySkill: 'id',
      initialValues: [5,2],
      value: null,
      options: [
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

  }
  ,methods: {
    onComplete: function () {
      alert('Alo')
    },
    goBack() {
      this.$refs.formWiz.prevTab()
    }
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
