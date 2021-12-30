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

function openMyTransactions(payloadMap) {
    try {
       dsBridge.call("marketplaceweb.openMyTransactions",payloadMap);
    }
    catch (e) {
        console.log(`marketplaceweb not found !`);
    }
}

function openCouponScreen(payloadMap) {
    try {
       dsBridge.call("marketplaceweb.openCouponScreen",payloadMap);
    }
    catch (e) {
        console.log(`marketplaceweb not found !`);
    }
}

function openWebView(payloadMap){
     dsBridge.call("marketplaceweb.openWebView",payloadMap);
}

function downloadDocument(payloadMap){
     dsBridge.call("marketplaceweb.downloadDocument",payloadMap);
}

function shareDocument(payloadMap){
     dsBridge.call("marketplaceweb.shareDocument",payloadMap);
}


function askContactPermission() {
    try {
        host = NativeFlutterInterface.askContactPermission() ;
        return host;
    }
    catch (e) {
        console.log(`NativeFlutterInterface not found !`);
    }
}

function openCustomerSupport(payloadMap) {
    try {
        dsBridge.call("marketplaceweb.openCustomerSupport",payloadMap) ;
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

function getContacts() {
  return new Promise((resolve, reject) => {
    console.log(`JS: calling getContacts`);
    dsBridge.call("marketplaceweb.getContacts", function (v) {
      console.log(`JS: data received from getContacts : ${v}`);
      console.log(`JS: send the received getContacts : ${v}`);
      resolve(v);
    });
  });
}

