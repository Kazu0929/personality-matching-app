import firebase from 'firebase/app';
export default ({ store, route, redirect }) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (store.getters.getHasUser) {
      return;
    }
    if (user) {
      store.dispatch('setPersonalityType', user.uid);
      console.log(user);
      store.dispatch('setUser', user);
      if (user.uid === 'D3Ylfh08vwanAb8nfIeLPgswAjp2') {
        store.dispatch('checkIsAdmin');
      }
    } else if (
      !user &&
      (route.name === 'diagnose' ||
        route.name === 'mypage' ||
        route.name === 'personality' ||
        route.name === 'messages' ||
        route.name === 'admin')
    ) {
      redirect('/');
    }
  });
};
