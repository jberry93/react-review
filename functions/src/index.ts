import * as functions from 'firebase-functions'

export let helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!")
})
