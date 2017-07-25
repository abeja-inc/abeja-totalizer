<template>
  <section class="hero is-fullheight is-primary is-bold">
    <div class="hero-head">
      <nav class="level is-mobile">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Answers</p>
            <p class="title">{{answers.length}}</p>
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="title has-text-centered question-title">
          <i class="fa fa-quote-left fa-3x fa-border" aria-hidden="true"></i>
          {{question.subject}}
        </div>
        <b-radio-group v-model="myAnswer['.value']" button-size="is-large" @change="changeSelect">
          <div class="field" v-for="(selection, index) in question.selections" :key="index">
            <b-radio :value="index">
              {{ selection.subject }}
            </b-radio>
          </div>
        </b-radio-group>
      </div>
    </div>
     <div class="hero-foot">
      <nav class="level is-mobile">
        <div class="level-item has-text-centered" v-for="(selection, index) in question.selections" :key="index">
          <div>
            <p class="heading">{{ selection.subject }}</p>
            <p class="title">{{ selection.count }}</p>
          </div>
        </div>
      </nav>
    </div> 
  </section>
</template>
<style>
  .custom-answer-input {
    width: 60%;
  }
  @media (max-width: 700px) {
    .custom-answer-input {
      width: 100%;
    }
  }
</style>
<script type="text/babel">
  import Util from '../libs/util'

  export default {
    fbBind: function () {
      return {
        'question': { questionKey: this.$route.params.key },
        'answers': { questionKey: this.$route.params.key },
        'myAnswer': { questionKey: this.$route.params.key, myId: this.user.userId }
      }
    },
    data () {
      return {
        radio: null,
        questionKey: this.$route.params.key
      }
    },
    computed: {
      user () {
        return this.getLocalCache()
      }
    },
    methods: {
      getLocalCache () {
        const localCache = this.$getLocal()
        if (localCache) { return localCache }
        const user = {
          userId: Util.generateID()
        }
        this.$setLocal(user)
        return user
      },
      changeSelect (newSelect) {
        this.$firebaseRefs.myAnswer.set(newSelect)
      }
    }
  }
</script>
