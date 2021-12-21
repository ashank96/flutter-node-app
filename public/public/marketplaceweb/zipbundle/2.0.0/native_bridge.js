var dsBridge = require("dsbridge")


function getHostName() {
    let host = '{}' ;
    try {
        host = dsBridge.call("NativeFlutterInterface.getHostName","") ;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
    console.log(`JS : Returning HOST : ${host}`);
    return host;
}

function openMyTransactions() {
    try {
       dsBridge.call("NativeFlutterInterface.openMyTransactions","");
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
}

function openCustomerSupport() {
    try {
        dsBridge.call("NativeFlutterInterface.openCustomerSupport","") ;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
}

function openCalendar(date) {
    try {
        dsBridge.call("NativeFlutterInterface.openCalendar",date) ;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
}

function onAppInit() {

    try {
        dsBridge.call("NativeFlutterInterface.onAppInit","") ;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
}


function closeFlutterView() {
    try {
        dsBridge.call("NativeFlutterInterface.closeFlutterView","") ;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
}

function partnerMenuOptionClicked(menuTitle) {

    try {
        dsBridge.call("NativeFlutterInterface.partnerMenuOptionClicked",menuTitle) ;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
}



function getPartnerMenuOptions() {
    let result = '[]' ;
    try {
        result = dsBridge.call("NativeFlutterInterface.getPartnerMenuOptions","") ;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
    return result;
}


function getRequestHeaders() {
    let result = "{}";
    try {
        result = dsBridge.call("NativeFlutterInterface.getRequestHeaders","") ;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
    return result ;
}

function getThemeData() {
    let result = '{}' ;
    try {
        result = dsBridge.call("NativeFlutterInterface.getThemeData","") ;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
    return result;
}

function makePaymentCallbackToPartner(paymentInitData) {
    let result = '{}' ;
     try {
            result = dsBridge.call("NativeFlutterInterface.makePaymentCallbackToPartner",paymentInitData);
        }
        catch (e) {
            console.log(`NativeFlutterInterface not found !`);
        }
     return result;
}

