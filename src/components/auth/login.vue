<template lang="html">
    <div class="" id="login">
        <section id="wrapper" class="login-register col-xs-12">
            <div class="login-box">
                <div class="white-box">
                    <form class="form-horizontal form-material" id="loginform">
                        <router-link :to="{ name: 'Home', params: {} }" class="text-center db">
                            <img src="static/plugins/images/eliteadmin-logo-dark.png" alt="Home" />
                            <br/>EaseMyPay
                        </router-link>

                        <h3 class="box-title m-b-20">Sign In</h3>
                        <div class="form-group ">
                            <div class="col-xs-12">
                                <input class="form-control" type="text" required="" placeholder="Username" v-model="user.email">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <input class="form-control" type="password" required="" placeholder="Password" v-model="user.password">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <div class="checkbox checkbox-primary pull-left p-t-0">
                                    <input id="checkbox-signup" type="checkbox" v-model="user.rememberMe">
                                    <label for="checkbox-signup"> Remember me </label>
                                </div>
                                <a href="javascript:void(0)" id="to-recover" class="text-dark pull-right">
                                    <i class="fa fa-lock m-r-5"></i> Forgot pwd?
                                </a>
                            </div>
                        </div>
                        <div class="form-group text-center m-t-20">
                            <div class="col-xs-12">
                                <button class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="button" @click.prevent="login">Log In</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                                <div class="social">
                                    <a href="javascript:void(0)" class="btn  btn-facebook" data-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" class="fa fa-facebook"></i> </a>
                                    <a href="javascript:void(0)" class="btn btn-googleplus" data-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" class="fa fa-google-plus"></i> </a>
                                </div>
                            </div>
                        </div>
                        <div class="form-group m-b-0">
                            <div class="col-sm-12 text-center">
                                <p>
                                    Don't have an account?
                                    <router-link :to="{ name: 'Register', params: {} }"><b>Sign Up</b></router-link>
                                </p>
                            </div>
                        </div>
                    </form>
                    <form class="form-horizontal" id="recoverform">
                        <div class="form-group ">
                            <div class="col-xs-12">
                                <h3>Recover Password</h3>
                                <p class="text-muted">Enter your Email and instructions will be sent to you! </p>
                            </div>
                        </div>
                        <div class="form-group ">
                            <div class="col-xs-12">
                                <input class="form-control" type="text" required="" placeholder="Email">
                            </div>
                        </div>
                        <div class="form-group text-center m-t-20">
                            <div class="col-xs-12">
                                <button class="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="button">Reset</button>
                                <button class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="button" id="to-login">Back</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { clientId, clientSecret } from '../../env';
import { mapState } from 'vuex';

export default {
    data(){
        return{
            user: {
                email: '',
                password: '',
                rememberMe: ''
            },

            auth: false

        }
    },

    computed: {
        ...mapState({
            userStore: state => state.userStore
        })
    },

    methods:{

        login(){

            const postData = {
                grant_type: 'password',
                client_id: clientId,
                client_secret: clientSecret,
                username: this.user.email,
                password: this.user.password,
                //rememberMe: this.user.rememberMe,
                scope: ''
            }

            axios.post('http://localhost:8000/oauth/token', postData).then(response => {
                if(response.status == 200){
                    this.$store.dispatch('setUserObject', response.data);
                    axios.get('http://localhost:8000/api/user', { headers: this.$store.getters.getHeader })
                    .then(res => {
                        this.$store.dispatch('setUserObjectFinal', [response.data, res.data]);
                        window.localStorage.setItem('authUser', JSON.stringify(this.$store.getters.getAuthUser));
                        this.$router.push({name: 'Dashboard'});
                    })
                    .catch(error => {
                        var errors = error.response;

                        if(errors.status == 401){
                            this.$swal({
                                title: 'User not Verified!',
                                html: errors.data.message,
                                type: 'error',
                                animation: false,
                                customClass: 'animated tada'
                            });
                        }
                    });
                }
            }).catch(error => {
                var errors = error.response;

                if(errors.status == 401){
                    this.$swal({
                        title: 'Invalide Credentials',
                        html: errors.data.message,
                        type: 'error',
                        animation: false,
                        customClass: 'animated tada'
                    });
                }
            });
        },

    },

    created(){
        // this.authCheck();
        // console.log(this.$store.state.authUser);
    }
}
</script>

<style lang="css" scoped>

</style>
