<template lang="html">
    <div class="" id="register">
        <section id="wrapper" class="step-register">
            <div class="register-box">
                <div class="">
                    <router-link :to="{ name: 'Home', params: {} }" class="text-center db m-b-40">
                        <img src="static/plugins/images/eliteadmin-logo-dark.png" alt="Home" />
                        <br/>EaseMyPay
                    </router-link>
                    <!-- multistep form -->
                    <form id="msform" @submit.prevent="registerUser">
                        <!-- progressbar -->
                        <ul id="eliteregister">
                            <li class="active">Account Setup</li>
                            <li>Social Profiles</li>
                            <li>Personal Details</li>
                        </ul>
                        <!-- fieldsets -->
                        <fieldset>
                            <h2 class="fs-title">Create your account</h2>
                            <h3 class="fs-subtitle">This is step 1</h3>
                            <input type="text" name="email" placeholder="Email" v-model="register.email" />
                            <input type="password" name="pass" placeholder="Password" v-model="register.password" />
                            <input type="password" name="cpass" placeholder="Confirm Password" v-model="register.cpassword" />
                            <input type="button" name="next" class="next action-button" value="Next" />
                        </fieldset>
                        <fieldset>
                            <h2 class="fs-title">Social Profiles</h2>
                            <h3 class="fs-subtitle">Your presence on the social network</h3>
                            <input type="text" name="twitter" placeholder="Twitter" />
                            <input type="text" name="facebook" placeholder="Facebook" />
                            <input type="text" name="gplus" placeholder="Google Plus" />
                            <input type="button" name="previous" class="previous action-button" value="Previous" />
                            <input type="button" name="next" class="next action-button" value="Next" />
                        </fieldset>
                        <fieldset>
                            <h2 class="fs-title">Personal Details</h2>
                            <h3 class="fs-subtitle">We will never sell it</h3>
                            <input type="text" name="fname" placeholder="First Name" v-model="register.fname" />
                            <input type="text" name="lname" placeholder="Last Name" v-model="register.lname" />
                            <input type="text" name="phone" placeholder="Phone" v-model="register.phone" />
                            <textarea name="address" placeholder="Address" v-model="register.address"></textarea>

                            <button type="button" name="previous" class="previous action-button">Previous</button>
                            <button type="submit" name="submit" class="submit action-button">Submit</button>
                        </fieldset>
                    </form>
                    <div class="clear"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            register: {
                fname: '', lname: '', address: '', phone: '', email: '', password: '', cpassword: ''
            }
        }
    },

    methods: {
        registerUser(){
            axios.post('http://localhost:8000/api/register', {
                user: this.register
            }).then(response => {
                console.log(response);
                this.$router.push('Home');
            }).catch(error => {
                console.log(error);
            });
        }
    },

    mounted(){
        require("../../../static/bower_components/sidebar-nav/dist/sidebar-nav.min.js");
        require("../../../static/bower_components/register-steps/jquery.easing.min.js");
        require("../../../static/bower_components/register-steps/register-init.js");
    }
}
</script>

<style lang="css" scoped>
    @import "../../../static/bower_components/register-steps/steps.css";
</style>
