// ==UserScript==
// @name        Flash你妈死了_超星学术视频
// @namespace     https://www.zhihu.com/people/qinlili233
// @version      0.1
// @description  使用H5播放器代替Flash
// @author       琴梨梨
// @match        http://video.chaoxing.com/cxvideo/play/*
// @grant        none
//@run-at  document-end
// ==/UserScript==

(function() {
    'use strict';
   const H5Video = document.createElement('video');
    H5Video.src=document.getElementById("downVideo").href;
    H5Video.className="Video-main fl";
    H5Video.id="playerContent";
    H5Video.preload=true;
    H5Video.controls=true;
    document.getElementsByClassName("Wid1200 Playvideo1200")[0].removeChild(document.getElementById("playerContent"));
    document.getElementsByClassName("Wid1200 Playvideo1200")[0].appendChild(H5Video);
})();
