import 'babel-polyfill'
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp(functions.config().firebase)

const setFirebaseRef = async (ref, index, plusOrMinus) => {
  let countRef = ref.child(`${index}/count`)
  let countValue = (await countRef.once('value')).val()
  countRef.set(countValue + plusOrMinus)
}

export const countSelect = functions.database.ref('/totalizer/answers/{questionKey}/{userId}')
  .onWrite(async event => {
    console.log('on write')
    let selectionRef = admin.database().ref(`/totalizer/questions/${event.params.questionKey}/selections`)
    if (event.data.previous.exists()) {
      console.log('update')
      let prevIndex = event.data.previous.val()
      await setFirebaseRef(selectionRef, prevIndex, -1)
      let newIndex = event.data.val()
      await setFirebaseRef(selectionRef, newIndex, 1)
    } else {
      console.log('create')
      let index = event.data.val()
      await setFirebaseRef(selectionRef, index, 1)
    }
  })
