<template>
    <div id="app">
        <preloader></preloader>
        <app-navbar v-if="this.$route.meta.dashboard == undefined ? true : false"></app-navbar>
        <app-left-navbar v-if="this.$route.meta.dashboard == undefined ? true : false"></app-left-navbar>
        <router-view></router-view>
        <!-- /.container-fluid -->
        <footer class="footer text-center" v-if="this.$route.meta.dashboard == undefined ? true : false"> 2017 &copy; EaseMyPay Theme Admin brought to you by Bajee </footer>
    </div>
</template>

<script>
//import router from '@/router/index';
import preloader from '@/components/partials/preloader.vue';

import appNavbar from '@/components/partials/navbar.vue';
import appLeftNavbar from '@/components/partials/leftNavbar.vue';

export default {
    name: 'app',

    components:{
        preloader: preloader,
        appNavbar: appNavbar,
        appLeftNavbar: appLeftNavbar,
    },

    data(){
        return{
            isActive: false,
            user: {
                status: false
            },
            dashboard: true
        }
    },

    methods:{
        toggleNav(){
            this.isActive = !this.isActive;
        }
    },

    mounted(){
        const userObj = JSON.parse(window.localStorage.getItem('authUser'));
        this.$store.dispatch('setUserObject', userObj);

        require("../static/bower_components/toast-master/js/jquery.toast.js");
        $(".preloader").fadeOut();
    }
}
</script>

<style lang="css" scoped>
    /*@import "./assets/css/style.css";*/

    @import "/static/bower_components/toast-master/css/jquery.toast.css";
    @import "/static/bower_components/morrisjs/morris.css";
</style>
