<template>
  <div>
    <section class="hero is-primary is-fullheight is-bold">
      <div class="hero-head">
        <div class="level is-mobile">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Client Link</p>
              <p class="">
                <a :href="question['guestURL']">
                  {{ question['guestURL']}}
                </a>
              </p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Answered</p>
              <p class="title">
                {{answers.length}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="title has-text-centered question-title">
            <i class="fa fa-quote-left fa-3x fa-border" aria-hidden="true"></i>
            {{question.subject}}
          </div>
          <div class="columns is-mobile" v-for="(selection,index) in question.selections" :key="index">
            <div class="column">
              <p class="notification is-info">
                {{selection.subject}}
              </p>
            </div>
            <div class="column is-narrow">
              <p class="notification is-warning result-count">
                {{selection.count}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
  .hero{
    text-align: initial;
  }
  .box {
    color: black;
  }
  .result-count {
    width: 50px;
    height: 100%;
  }
  .columns
  {
    word-break: break-all;
  }
  .question-title
  {
    word-break: break-all;
  }
</style>
<script type="text/babel">
  export default {
    fbBind: function () {
      return {
        'question': {questionKey: this.$route.params.key},
        'answers': {questionKey: this.$route.params.key}
      }
    },
    data () {
      return {
        user: null,
        radio: null,
        questionKey: this.$route.params.key
      }
    }
  }
</script>
