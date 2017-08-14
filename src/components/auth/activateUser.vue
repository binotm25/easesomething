<template lang="html">
    <div class="">
        <section id="wrapper" class="login-register">
            <div class="login-box">
                <div class="white-box">
                    <h2>User Email : {{ $route.params.email }} </h2>
                    <p>
                        {{ message }}
                    </p>
                    <router-link v-if="activation" class="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" :to="{ name: 'Login' }">Login</router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import { apiDomain } from '../../config';

export default {

    data(){
        return{
            message: 'Has been activated! Please click here to login!',
            activation : true
        }
    },

    mounted(){
        let email = this.$route.params.email;
        let code = this.$route.params.code;

        axios.post(apiDomain+'api/activate/email/'+email, { code: code })
        .then(res => {
            let status = res.data.status;
            if(status != 1){
                this.message = res.data.message;
                if(status == 2){
                    this.activation = true;
                }else{
                    this.activation = false;
                }
            }
        }).catch(error => {
            this.activation = false;
            console.log(error);
        });
    }
}
</script>

<style lang="css" scoped>
    .login-box{
        width: 600px;
        text-align: center;
    }
</style>
