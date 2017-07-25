<template>
  <section class="hero is-dark is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <h1 class="title">ABEJA Totalizer</h1>
            <div class="box">
              <b-field label="Description"
                       placeholder="describe your question"
                       v-model="question.subject"
                       autofocus required
              >

              </b-field>
              <label class="label has-text-left">Description</label>
              <p class="control">
                <input class="input" type="text" placeholder="describe your question"
                        v-model="question.subject"
                        @keydown.enter.prevent=''
                        autofocus required>
              </p>
              <label class="label has-text-left m-t">Selections</label>
              <input class="input" v-model="inputSelect" v-focus
                     @keydown.enter.prevent="addSelection()"
                     placeholder="press enter to add new selection" required>
              <hr>
              <draggable v-model="question.selections">
                <b-field grouped v-for="(selection, index) in question.selections" :key="index">
                  <b-icon icon="drag_handle" size="is-medium"></b-icon>
                  <input class="input" v-model="question.selections[index].subject" required>
                  <button class="button is-danger is-outlined m-l" @click="removeSelection(index)">
                    <b-icon icon="delete"></b-icon>
                  </button>
                </b-field>
              </draggable>
              <hr>
              <p class="has-text-centered">
                <button type="submit" class="button is-default" @click="create">Create</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/babel">
import draggable from 'vuedraggable'

export default {
  fbBind: function () {
    return {
      'questions': {}
    }
  },
  components: {
    draggable
  },
  data () {
    return {
      question: {
        subject: '',
        selections: []
      },
      inputSelect: ''
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  },
  methods: {

    async create () {
      if (!this.question.subject) { return }
      console.log(this.question.selections)
      this.question.selections = this.question.selections.filter(selection => selection)
      console.log(this.question.selections)
      const key = await this.$firebaseRefs.questions.push(this.question).key
      const guestURL = `${process.env.HOST}/#/${key}/guest`
      await this.$firebaseRefs.questions.child(key).set(Object.assign(this.question, {
        guestURL
      }))
      this.$router.push(`/${key}/host`)
    },
    addSelection () {
      if (!this.inputSelect) {
        return
      }
      this.question.selections.push({subject: this.inputSelect, count: 0})
      this.inputSelect = ''
    },
    removeSelection (index) {
      if (Object.keys(this.question.selections).length === 1) { return }
      this.question.selections.splice(index, 1)
    }
  }
}
</script>
