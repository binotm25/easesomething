<template lang="html">
    <div class="col-md-12 col-lg-6 col-sm-12">
        <div class="white-box">
            <h3 class="box-title">Recent sales
              <div class="col-md-3 col-sm-4 col-xs-6 pull-right">
                    <select class="form-control pull-right row b-none">
                        <option>March 2017</option>
                        <option>April 2017</option>
                        <option>May 2017</option>
                        <option>June 2017</option>
                        <option>July 2017</option>
                    </select>
              </div>
            </h3>
            <div class="row sales-report">
                <div class="col-md-6 col-sm-6 col-xs-6">
                    <h2>{{ currentMonth }} 2017</h2>
                    <p>SALES REPORT</p>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-6 ">
                    <h1 class="text-right text-success m-t-20">$3,690</h1>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table ">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>TYPE</th>
                            <th>DATE</th>
                            <th>AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="txt-oflo">Atom Chaoba</td>
                            <td><span class="label label-megna label-rounded">Retailer</span> </td>
                            <td class="txt-oflo">April 18</td>
                            <td><span class="text-success">Rs. 24</span></td>
                        </tr>
                        <tr>
                            <td class="txt-oflo">Pheiroijam Ravi</td>
                            <td><span class="label label-info label-rounded">Retailer</span></td>
                            <td class="txt-oflo">April 19</td>
                            <td><span class="text-info">Rs. 1250</span></td>
                        </tr>
                        <tr>
                            <td class="txt-oflo">Akoijam Kumar</td>
                            <td><span class="label label-danger label-rounded">Distributor</span></td>
                            <td class="txt-oflo">April 20</td>
                            <td><span class="text-danger">-Rs. 24</span></td>
                        </tr>
                        <tr>
                            <td class="txt-oflo">Meishnam Mangi</td>
                            <td><span class="label label-megna label-rounded">Retailer</span></td>
                            <td class="txt-oflo">April 21</td>
                            <td><span class="text-success">Rs. 24</span></td>
                        </tr>
                        <tr>
                            <td class="txt-oflo">Mutum Nungshithoi</td>
                            <td><span class="label label-success label-rounded">Distributor</span></td>
                            <td class="txt-oflo">April 22</td>
                            <td><span class="text-success">Rs. 24</span></td>
                        </tr>
                        <tr>
                            <td class="txt-oflo">Maibam Roshni Kumar</td>
                            <td><span class="label label-megna label-rounded">Distributor</span> </td>
                            <td class="txt-oflo">April 23</td>
                            <td><span class="text-danger">-Rs. 14</span></td>
                        </tr>
                        <tr>
                            <td class="txt-oflo">Shanglakpam Korou</td>
                            <td><span class="label label-success label-rounded">Retailer</span></td>
                            <td class="txt-oflo">April 22</td>
                            <td><span class="text-success">Rs. 64</span></td>
                        </tr>
                    </tbody>
                </table>
            <a href="#">Check all the sales</a> </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentMonth: ""
        }
    },

    methods:{
        getCurrentMonth(){
            let a = new Date();
            this.currentMonth = this.$store.state.month[a.getMonth()];
        }
    },

    created(){
        this.getCurrentMonth();
    }
}
</script>

<style lang="css">
</style>
