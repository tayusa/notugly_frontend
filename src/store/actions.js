import firebase from "firebase";

import userService from "@/api/user";
import * as types from "./mutation-types";

export default {
  createUser: async ({ state }, payload) => {
    userService.post(payload, state.auth.token).catch(err => {
      throw err;
    });
  },
  signUp: async ({ commit }, payload) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        localStorage.setItem("token", res.user.ra);
        commit(types.AUTH_SIGN, {
          token: res.user.ra,
          uid: res.user.uid
        });
      })
      .catch(err => {
        throw err;
      });
  },
  signIn: async ({ commit }, payload) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        localStorage.setItem("token", res.user.ra);
        commit(types.AUTH_SIGN, {
          token: res.user.ra,
          uid: res.user.uid
        });
      })
      .catch(err => {
        throw err;
      });
  },
  signOut: async ({ commit }) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("token");
        commit(types.AUTH_SIGNOUT);
      })
      .catch(err => {
        throw err;
      });
  }
};
