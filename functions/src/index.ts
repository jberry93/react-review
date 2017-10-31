import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp(functions.config().firebase)

let db = admin.firestore()
let allCards = db.collection('cards')

export let helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!")
})

export let getCards = functions.https.onRequest((request, response) => {
  let cards = []

  allCards.get().then(snapshot => {
    snapshot.forEach(doc => {
      cards.push(doc.data())
    })
    response.send(cards.reverse())
  }).catch(error => {
    console.error('Error getting cards:', error)
  })
})

// export let postCard

// export let updateCard

// export let deleteCard
