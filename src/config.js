export const apiDomain = "http://localhost:8000/api/";

export const addDistributorDomain = apiDomain + "manage/addDistributor";
export const addClientDomain = apiDomain + "manage/addClient";
export const addRetailerDomain = apiDomain + "manage/addRetailer";

export const getHeaderMain = function(){
    const tokenData = JSON.parse(window.localStorage.getItem('authUser'));
    const headers = {
        'Accept'        :   'application/json',
        'Authorization' :   'Bearer '+ tokenData.access_token
    }

    return headers;
}
