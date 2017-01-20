"use strict";

var HClass = require('../common/HClass');
var slider = HClass.extend({
    sliderId:"",
    maxLength:200,
    ctor:function(options){
        this.sliderId = options["id"];
        this.maxLength = options["maxLength"]||200;
        this.init();
    },
    init:function(){
        console.log("slider init");
        if(!this.sliderId){
            throw "slider id 不能为空啊！";
            return;
        }
        //将html结构放入对应节点

    },
    initListener:function(){


    }
});

module.exports = slider;


