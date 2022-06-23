import Vue from 'vue';
import VueAcl from 'vue-browser-acl';

import App from './App.vue';

window.user = {
  // role: ['admin', 'user'],
  role: 'admin',
  // role: null
};

const checkRole = role => user => {
  if (!user) return false;
  if (Array.isArray(user.role)) {
    return user.role.includes(role);
  }
  return user.role === role;
};

Vue.use(VueAcl, window.user, acl => {
  acl.rule('user', checkRole('user'));
  acl.rule('admin', checkRole('admin'));
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
