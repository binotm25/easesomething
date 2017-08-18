<template lang="html">
    <div class="" id="left-navbar">
        <div class="navbar-default sidebar" role="navigation">
            <div class="sidebar-nav navbar-collapse slimscrollsidebar">
                <ul class="nav" id="side-menu">
                    <li class="sidebar-search hidden-sm hidden-md hidden-lg top-li">
                        <!-- input-group -->
                        <div class="input-group custom-search-form">
                            <input type="text" class="form-control" placeholder="Search...">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button"> <i class="fa fa-search"></i> </button>
                            </span>
                        </div>
                        <!-- /input-group -->
                    </li>
                    <li class="user-pro">
                        <a href="javascript:void(0)" class="waves-effect">
                            <img src="static/plugins/images/users/varun.jpg" alt="user-img" class="img-circle">
                            <span class="hide-menu">
                                {{ userStore.authUser.username ? userStore.authUser.username : 'Admin' }}<span class="fa arrow"></span>
                            </span>
                        </a>
                        <ul class="nav nav-second-level">
                            <li><a href="javascript:void(0)"><i class="ti-user"></i> My Profile</a></li>
                            <li><a href="javascript:void(0)"><i class="ti-wallet"></i> My Balance</a></li>
                            <li><a href="javascript:void(0)"><i class="ti-email"></i> Inbox</a></li>
                            <li><a href="javascript:void(0)"><i class="ti-settings"></i> Account Setting</a></li>
                            <li><a @click="handleLogout()" href="javascript:void(0)"><i class="fa fa-power-off"></i> Logout</a></li>
                        </ul>
                    </li>
                    <li class="nav-small-cap m-t-10">--- Main Menu</li>

                    <li class="top-li">
                        <a href="javascript:void(0)" class="waves-effect" v-bind:class="{ active: isDashboard }">
                            <i class="zmdi zmdi-view-dashboard zmdi-hc-fw fa-fw"></i>
                            <span class="hide-menu"> Dashboard
                                <span class="fa arrow"></span>
                                <span class="label label-rouded label-custom pull-right">4</span>
                            </span>
                        </a>
                        <ul v-bind:class="{ 'in active': isDashboard }" class="nav nav-second-level collapse" ref="dashoardMainDropDown">
                            <li>
                                <router-link :to="{ name: 'Dashboard', params: {} }">Welcome</router-link>
                            </li>
                            <li v-if="(isAdmin)"> <a href="javascript:void(0)">Distributor</a> </li>
                            <li v-if="(isAdmin)"> <a href="javascript:void(0)">Client</a> </li>
                            <li v-if="(isAdmin)"> <a href="javascript:void(0)">Retailer</a> </li>
                            <li v-if="(isDistributor)"> <a href="javascript:void(0)">Recharge A Retailer</a> </li>
                            <li v-if="(isClient)"> <a href="javascript:void(0)">Recharge a Distributor</a> </li>
                            <li v-if="(isRetailer)">
                                <router-link :to="{ name: 'recharge.retailer', params: {} }">Pay A Fee</router-link>
                            </li>
                        </ul>
                    </li>
                </li>
                <li class="top-li">
                    <a href="javascript:void(0)" class="waves-effect" v-bind:class="{ active: isManage }">
                        <i class="zmdi zmdi-apps zmdi-hc-fw fa-fw"></i>
                        <span class="hide-menu">Manage
                            <span class="fa arrow"></span>
                            <span class="label label-rouded label-custom pull-right">3</span>
                        </span>
                    </a>
                    <ul v-bind:class="{ in: isManage }" class="nav nav-second-level collapse">
                        <!-- v-if doesn't works with the matis dropdown so v-show is used! -->
                        <li v-if="(isAdmin)">
                            <a href="javascript:void(0)" class="waves-effect" v-bind:class="{ active: manage.distributor }">
                                Distributor<span class="fa arrow"></span>
                            </a>
                            <ul v-bind:class="{ 'in active': manage.distributor }" class="nav nav-third-level collapse">
                                <li>
                                    <router-link :to="{ name: 'distributor.add', params: {} }" v-bind:class="{ 'active': add.distributor }">
                                        Add Distributor
                                    </router-link>
                                </li>
                                <li>
                                    <router-link v-bind:class="{ 'active': total.distributor }" :to="{ name: 'distributor.total', params: {} }">
                                        Total Distributor
                                    </router-link>
                                </li>
                                <li>
                                    <a v-bind:class="{ 'active': (edit.distributor || single.distributor) }" href="javascript:void(0)">
                                        Edit Distributor
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li v-if="(isAdmin || isClient)">
                            <a href="javascript:void(0)" class="waves-effect" v-bind:class="{ active: manage.client }">
                                Clients<span class="fa arrow"></span>
                            </a>
                            <ul v-bind:class="{ in: manage.client }" class="nav nav-third-level collapse">
                                <li>
                                    <router-link :to="{ name: 'client.add', params: {} }" v-bind:class="{ 'active': add.client }">
                                        Add Client
                                    </router-link>
                                </li>

                                <li>
                                    <router-link v-bind:class="{ 'active': total.client }" :to="{ name: 'client.total', params: {} }">
                                        Total Clients
                                    </router-link>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" v-bind:class="{ 'active': (edit.client || single.client) }">
                                        Edit Clients
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li v-if="(isAdmin || isDistributor)">
                            <a href="javascript:void(0)" class="waves-effect" v-bind:class="{ active: manage.retailer }">
                                Retailer<span class="fa arrow"></span>
                            </a>
                            <ul v-bind:class="{ in: manage.retailer }" class="nav nav-third-level collapse">
                                <li>
                                    <router-link :to="{ name: 'retailer.add', params: {} }" v-bind:class="{ 'active': add.retailer }">
                                        Add Retailer
                                    </router-link>
                                </li>
                                <li>
                                    <router-link v-bind:class="{ 'active': total.retailer }" :to="{ name: 'retailer.total', params: {} }">
                                        Total Retailers
                                    </router-link>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" v-bind:class="{ 'active': (edit.retailer || single.retailer) }">
                                        Edit Retailers
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="nav-small-cap">--- Other Reports</li>
                <li class="top-li">
                    <a href="javascript:void(0);" class="waves-effect">
                        <i class="linea-icon linea-basic fa-fw text-danger" data-icon="7"></i>
                        <span class="hide-menu text-danger"> Reports <span class="fa arrow"></span>
                            <span class="label label-rouded label-danger pull-right"></span>
                        </span>
                    </a>
                    <ul class="nav nav-second-level">
                        <li> <a href="javascript:void(0)">Sale Reports</a> </li>
                        <li> <a href="javascript:void(0)">Client Reports</a> </li>
                        <li> <a href="javascript:void(0)">Payment Reports</a> </li>
                        <li> <a href="javascript:void(0)">Commision Reports</a> </li>
                    </ul>
                </li>

                <li class="nav-small-cap">--- Modules</li>
                <li>
                    <a href="gallery.html" class="waves-effect"><i class="fa fa-circle-o text-info"></i>
                        <span class="hide-menu">Libray</span>
                    </a>
                </li>
                <li>
                    <a href="faq.html" class="waves-effect">
                        <i class="fa fa-circle-o text-success"></i> <span class="hide-menu">HRIS</span>
                    </a>
                </li>
                <li class="nav-small-cap">--- Support</li>
                <li>
                    <a href="documentation.html" class="waves-effect">
                        <i class="fa fa-circle-o text-danger"></i> <span class="hide-menu">Documentation</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>

import { mapState } from 'vuex';
export default {
    data(){
        return{
            //authUser: this.$store.state.authUser,
            authUser: 'Admin',

            // isDistributor: false, isClient: false, isRetailer: false, isAdmin: false,

            isDashboard: false, isReport: false, isManage: false,

            manage: {
                distributor: false, retailer: false, client: false
            },

            add:{
                distributor: false, retailer: false, client: false
            },

            edit:{
                distributor: false, retailer: false, client: false
            },

            total:{
                distributor: false, retailer: false, client: false
            },

            single: {
                distributor: false, retailer: false, client: false
            }

        }
    },

    computed: {
        ...mapState({
            userStore: state => state.userStore,
        }),

        isDistributor(){
            return this.userStore.authUser.type == 2;
        },

        isClient(){
            return this.userStore.authUser.type == 3;
        },

        isRetailer(){
            return this.userStore.authUser.type == 1;
        },

        isAdmin()
        {
            return this.userStore.authUser.type == 4;
        }
    },

    // This is required because everytime a route is change the active classes needs to change and to make it
    // inactive so to apply the active class on the current route name!
    methods: {
        resetRoutes(){
            this.isDashboard = false;
            this.isReport= false;
            this.isManage= false;
            for(var p in this.manage){
                if(this.manage.hasOwnProperty(p)){
                    this.manage[p] = false;
                }

                if(this.add.hasOwnProperty(p)){
                    this.add[p] = false;
                }

                if(this.edit.hasOwnProperty(p)){
                    this.edit[p] = false;
                }

                if(this.total.hasOwnProperty(p)){
                    this.total[p] = false;
                }

                if(this.single.hasOwnProperty(p)){
                    this.single[p] = false;
                }
            }
        },

        setActiveLinks(){
            var pathArray = this.$route.path.split( '/' );
            var checkPath = pathArray[1];
            var secondCheck = pathArray[2];
            var thirdCheck = pathArray[3];
            var fourthheck = pathArray[4];

            if(checkPath == "dashboard"){
                this.isDashboard = true;
            }else if(checkPath == 'manage'){
                this.isManage = true;
                this.manage[secondCheck] = true;
                this[thirdCheck][secondCheck] = true;
            }
        },

        handleLogout(){
            this.$store.dispatch('clearAuthUser');
            window.localStorage.removeItem('authUser');
            this.$router.push({name: 'Login'});
        }
    },


    // Listen or Watch for the event of change in routes to get the paths and determine
    // which one to be activate in the sidebar of the dashboard!
    watch: {
        '$route' () {
            this.resetRoutes();
            this.setActiveLinks();
        }
    },

    mounted(){

        this.setActiveLinks();
        require("../../../static/bower_components/sidebar-nav/dist/sidebar-nav.min.js");

    },

    // the reason we are using on updated life cycle is because the computation is done after mounted life cycle and before
    // updated and as a result the computed properties which determines the user types is not yet defined by the time
    // metis menu is called on the left sidebar and as a result the navs doesn't work properly.
    updated(){
        $("#side-menu").metisMenu();
    }
}
</script>

<style lang="css" scoped>
    @import "../../../static/bower_components/sidebar-nav/dist/sidebar-nav.min.css";
</style>
