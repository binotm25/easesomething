<template lang="html">
    <div class="" id="popups">

        <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;" ref="paymentModal" id="paymentModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content custom-top">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title" id="myLargeModalLabel">{{ popStore.payment.status }}</h4>
                    </div>
                    <div class="modal-body">
                        <h4>{{ popStore.payment.title }}</h4>
                        <p>{{ popStore.payment.message }}</p>
                        <p v-if="popStore.payment.link">{{ popStore.payment.link }}</p>
                    </div>
                    <div class="modal-footer">
                        <!-- <button type="button" class="btn btn-danger waves-effect text-left" data-dismiss="modal">Close</button> -->
                        <button type="button" class="btn btn-info waves-effect text-left">Print Invoice</button>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->

    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    computed:{
        ...mapState({
            popStore : state => state.popInfoStore
        })
    }
}
</script>

<style lang="css">
    .custom-top{
        position: relative;
        top: 100px;
    }
</style>
