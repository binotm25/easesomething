// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store/store';
import VeeValidate from 'vee-validate';
import axios from 'axios';
import VueSweetAlert from 'vue-sweetalert';
import VueRouter from 'vue-router';
import Routes from './router/index';

window.axios = axios;

Vue.config.productionTip = false;

const config = {
    errorBagName: 'errors', // change if property conflicts.
    fieldsBagName: 'fields',
    delay: 0,
    locale: 'en',
    dictionary: null,
    strict: true,
    enableAutoClasses: false,
    classNames: {
        touched: 'touched', // the control has been blurred
        untouched: 'untouched', // the control hasn't been blurred
        valid: 'valid', // model is valid
        invalid: 'invalid', // model is invalid
        pristine: 'pristine', // control has not been interacted with
        dirty: 'dirty' // control has been interacted with
    },
    events: 'input|blur',
    inject: true
};

Vue.use(VeeValidate, config);
Vue.use(VueSweetAlert);
Vue.use(VueRouter);

const routes = new VueRouter({
    routes: Routes
});

routes.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    const authUser = JSON.parse(window.localStorage.getItem('authUser'));

    if(to.name == "Login"){
        if(authUser != null && authUser.access_token){
            next({ name: 'Dashboard'});
        }
    }

    if(to.meta.requiresAuth){

        if(authUser != null && authUser.access_token){

            if(to.meta.requiresAdmin){
                if(authUser.type < 3){
                    next({ name: 'Dashboard'});
                }
            }
            
            next();
        }else{
            // redirect to the route with the name of Login!
            next({ name: 'Login'});
        }
    }else{
        next();
    }

});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router: routes,
    template: '<App/>',
    components: { App }
})
