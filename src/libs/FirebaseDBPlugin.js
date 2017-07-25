import firebase from '../helper/firebaseDB'

const db = firebase.firebaseApp.database()

// const NODE_ENV = process.env.NODE_ENV
// use test database
const DATABASE_NAME = process.env.DB_NAME
console.log(DATABASE_NAME)
const fbRef = (ref) => {
  return db.ref(`${DATABASE_NAME}/${ref}`)
}
const questions = db.ref(`${DATABASE_NAME}/questions`)
const answers = db.ref(`${DATABASE_NAME}/answers`)
const FB_MAPPING = {
  'questions': function () {
    this.$bindAsArray('questions', questions)
  },
  'question': function (param) {
    if (!param.questionKey) return
    this.$bindAsObject('question', questions.child(param.questionKey))
  },
  'answers': function (param) {
    if (!param.questionKey) return
    this.$bindAsArray('answers', answers.child(param.questionKey))
  },
  'myAnswer': function (param) {
    if (!param.questionKey) return
    if (!param.myId) return
    this.$bindAsObject('myAnswer', answers.child(param.questionKey).child(param.myId))
  }
}

const fbBinding = function () {
  let fbBind = this.$options['fbBind']
  if (typeof fbBind === 'function') fbBind = fbBind.call(this)
  if (!fbBind) return
  Object.keys(fbBind).forEach(k => {
    const b = FB_MAPPING[k]
    b.call(this, fbBind[k])
  })
}
const init = function () {
  fbBinding.call(this)
}

const install = (Vue) => {
  Vue.prototype.$fbRef = fbRef
  Vue.prototype.$fbBinding = fbBinding
  Vue.mixin({
    created: init // 1.x and 2.x
  })
}

export default {
  install
}
