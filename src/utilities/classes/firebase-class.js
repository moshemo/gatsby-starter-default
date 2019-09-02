import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { firebaseConfig } from 'Config'

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
  }

  sayHello() {
    console.log('hello')
  }
  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password)
  }

  async logout() {
    await this.auth.signOut()
  }

  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    )
    return await newUser.user.updateProfile({
      displayName: name,
    })
  }

  async resetPassword(email) {
    await this.auth.sendPasswordResetEmail(email)
  }
}

export const firebase = new Firebase()
