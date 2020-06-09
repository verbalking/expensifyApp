import {firebase, provider} from '../firebase/firebase'

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const logout = () => ({
  type: 'LOGIN',
});

export const startLogin = ()=>{

  return () => {

    return firebase.auth().signInWithPopup(provider);
  };
};

export const startLogout = ()=>{
  return ()=>{
    return firebase.auth().signOut();
  };
};

