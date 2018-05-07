'use strict';

var DepositeContent = function (text){
    if (text) {
        var o = JSON.parse(text);
        this.balance = new BigNumber(o.balance);
        this.expiryHeight = new BigNumber(o.expiryHeight);
    }else{
        this.balance = new BigNumber(0);
        this.expiryHeight = new BigNumber(0);
    }
};

DepositeContent.prototype = {
    toString : function(){
        return JSON.stringify(this);
    }
};

var BankVaultContract = function(){
    LocalContractStorage.defineMapProperty(this,"bankVault",{
        parse: function(text){
            return new DepositeContent(text);
        },
        stringify : function(o){
            return o.toString();
        }
    });
};


