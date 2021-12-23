var dsBridge = require("dsbridge")


function getHostName() {
    let host = '{}' ;
    try {
        host = dsBridge.call("marketplaceweb.getHostName","") ;
    }
    catch (e) {
        console.log(`marketplaceweb not found !`);
    }
    console.log(`JS : Returning HOST : ${host}`);
    return host;
}

function openMyTransactions() {
    try {
       dsBridge.call("marketplaceweb.openMyTransactions","");
    }
    catch (e) {
        console.log(`marketplaceweb not found !`);
    }
}

function openCustomerSupport() {
    try {
        dsBridge.call("marketplaceweb.openCustomerSupport","") ;
    }
    catch (e) {
        console.log(`marketplaceweb not found !`);
    }
}

function openCalendar(date) {
    try {
        dsBridge.call("marketplaceweb.openCalendar",date) ;
    }
    catch (e) {
        console.log(`marketplaceweb not found !`);
    }
}

function onAppInit() {

    try {
        dsBridge.call("marketplaceweb.onAppInit","") ;
    }
    catch (e) {
        console.log(`marketplaceweb not found !`);
    }
}


function closeFlutterView() {
    try {
        dsBridge.call("marketplaceweb.closeFlutterView","") ;
    }
    catch (e) {
        console.log(`marketplaceweb not found !`);
    }
}

function partnerMenuOptionClicked(menuTitle) {

    try {
        dsBridge.call("marketplaceweb.partnerMenuOptionClicked",menuTitle) ;
    }
    catch (e) {
        console.log(`marketplaceweb not found !`);
    }
}



function getPartnerMenuOptions() {
    let result = '[]' ;
    try {
        result = dsBridge.call("marketplaceweb.getPartnerMenuOptions","") ;
    }
    catch (e) {
        console.log(`marketplaceweb not found !`);
    }
    return result;
}


function getRequestHeaders() {
    let result = "{}";
    try {
        result = dsBridge.call("marketplaceweb.getRequestHeaders","") ;
    }
    catch (e) {
        console.log(`marketplaceweb not found !`);
    }
    return result ;
}

function getThemeData() {
    let result = '{}' ;
    try {
        result = dsBridge.call("marketplaceweb.getThemeData","") ;
    }
    catch (e) {
        console.log(`marketplaceweb not found !`);
    }
    return result;
}

function makePaymentCallbackToPartner(paymentInitData) {
    let result = '{}' ;
     try {
            result = dsBridge.call("marketplaceweb.makePaymentCallbackToPartner",paymentInitData);
        }
        catch (e) {
            console.log(`marketplaceweb not found !`);
        }
     return result;
}

