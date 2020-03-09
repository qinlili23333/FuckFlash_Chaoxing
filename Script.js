// ==UserScript==
// @name         Flash你妈死了_超星
// @namespace    https://www.zhihu.com/people/qinlili233
// @version      0.1
// @description  强制使用H5播放器播放超星视频
// @author       琴梨梨
// @match      *://*.chaoxing.com/ananas/modules/video/*
// @grant        none
//@run-at document-start

// ==/UserScript==



(function(){
  window.frameElement.setAttribute('data',window.frameElement.getAttribute('data').replace(/"danmaku":1/, "\"danmaku\":0"));

})();
