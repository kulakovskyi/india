"use strict";var playBtn=document.querySelector(".bonus__main-wheel-btn"),main=document.querySelector(".bonus__main"),chips=document.querySelectorAll(".bonus__chip"),popupChips=document.querySelectorAll(".bonus__overlay-chip"),firstWoman=document.querySelector(".bonus__overlay-firstWoman"),secondWoman=document.querySelector(".bonus__overlay-secondWoman"),wheel=document.querySelector(".bonus__main-wheel-reel"),overlay=document.querySelector(".bonus__overlay"),popupFirst=document.querySelector(".bonus__firstWin"),popupFirstBtn=document.querySelector(".bonus__firstWin-btn"),popupSecond=document.querySelector(".bonus__secondWin"),rules=document.querySelector(".bonus__rules"),footerRulesBtn=document.querySelector(".bonus__footer-rules"),overflow=document.querySelector("body"),popupClose=document.querySelector(".bonus__rules-close"),video=document.querySelector(".bonus__main-video-bg"),wrapper=document.querySelector(".bonus"),bonusText=document.querySelector(".bonus__main-bubble"),bonusLink=document.querySelector(".bonus__secondWin-btn"),audioMain=document.querySelector(".main-audio"),audioWheel=document.querySelector(".wheel-audio"),audioPopup=document.querySelector(".popup-audio"),clickAudio=document.querySelector(".click-audio");function videoSource(e,o,t){var s;1024<window.innerWidth&&((s=document.createElement("source")).src=o,s.type=t,video.appendChild(s))}audioMain.volume=1,audioWheel.volume=.2,clickAudio.volume=.2,window.onload=videoSource(video,"img/video.mp4","video/mp4");var triesCounter=0;function runFirstRotation(){wheel.classList.add("reel-rotation-first"),playBtn.classList.remove("pulse-btn"),playBtn.style.cursor="default",wrapper.style.pointerEvents="none",audioWheel.play(),setTimeout(function(){doAfterFirstRotation()},6e3),triesCounter++}function doAfterFirstRotation(){wheel.style.transform="rotate(992deg)",wheel.classList.remove("reel-rotation-first"),overlay.classList.add("win-tab"),overlay.classList.add("win-mob"),firstWoman.classList.remove("hide"),displayPopup(popupFirst),wrapper.style.pointerEvents="auto",overflow.style.overflow="hidden",audioWheel.pause(),audioPopup.play(),setTimeout(function(){playBtn.classList.add("pulse-btn"),playBtn.style.cursor="pointer",bonusText.style.display="none"},1200)}function runSecondRotation(){wheel.classList.add("reel-rotation-second"),playBtn.classList.remove("pulse-btn"),playBtn.style.cursor="default",overflow.style.overflow="hidden",wrapper.style.pointerEvents="none",audioWheel.play(),setTimeout(function(){doAfterSecondRotation()},6e3),triesCounter++}function doAfterSecondRotation(){overlay.classList.add("win-tab"),overlay.classList.add("win-mob"),secondWoman.classList.remove("hide"),displayPopup(popupSecond),wrapper.style.pointerEvents="auto",audioWheel.pause(),audioPopup.play()}function displayPopup(e){overlay.classList.remove("opacity-overlay"),e.classList.remove("hide"),main.classList.add("blur"),chips.forEach(function(e){e.classList.add("blur")}),popupChips.forEach(function(e){e.classList.remove("hide")})}footerRulesBtn.addEventListener("click",function(){clickAudio.play(),overlay.classList.remove("opacity-overlay"),rules.classList.remove("hide"),main.classList.add("blur"),chips.forEach(function(e){e.classList.add("blur")}),popupChips.forEach(function(e){e.classList.add("hide")})}),popupClose.addEventListener("click",function(){clickAudio.play(),main.classList.remove("blur"),overlay.classList.add("opacity-overlay"),rules.classList.add("hide"),overflow.style.overflow="unset",chips.forEach(function(e){e.classList.remove("blur")})}),playBtn.addEventListener("click",function(){0===triesCounter?(runFirstRotation(),audioMain.play()):runSecondRotation()}),bonusLink.addEventListener("click",function(){clickAudio.play()}),popupFirstBtn.addEventListener("click",function(){clickAudio.play(),main.classList.remove("blur"),firstWoman.classList.add("hide"),chips.forEach(function(e){e.classList.remove("blur")}),overlay.classList.add("opacity-overlay"),popupFirst.classList.add("hide"),overflow.style.overflow="unset",overlay.classList.remove("win-tab"),overlay.classList.remove("win-mob")}),function(){var s=new URL(window.location.href),a=["l","utm_source","utm_medium","utm_campaign","utm_term","utm_content","param1","param2"];a.forEach(function(e){s.searchParams.has(e)&&localStorage.setItem(e,s.searchParams.get(e))}),["affid","cpaid"].forEach(function(e){s.searchParams.has(e)&&localStorage.setItem(e,s.searchParams.get(e))}),window.addEventListener("click",function(e){var o,t=e.target.closest("a");t&&(e.preventDefault(),o=new URL(t.href),e=localStorage.getItem("affid"),t=localStorage.getItem("cpaid"),e&&t&&(o.pathname="/"+e+"/"+t),a.forEach(function(e){s.searchParams.has(e)&&o.searchParams.set(e,localStorage.getItem(e))}),document.location.href=o)})}();