var titleText = [
        'i <3 colombians',
        'polar',
        'hai',
      ];
      
      function loop() {
        var titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = titleText[x++ % titleText.length];
      }
      
      function loaded() {
        setInterval(loop, 300);
      }
      
      var x = 0;
      
      if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function () {
          loaded();
        });
      } else {
        if (document.attachEvent) {
          document.attachEvent('onreadystatechange', function () {
            if (document.readyState === 'complete') {
              loaded();
            }
          });
        }
      }
      
      (function () {
        var window = self;
        var self = window;
        var document = window.document;
        var location = window.location;
        var top = window.top;
        var parent = window.parent;
        var frames = window.frames;
        var opener = window.opener;
      
        if (!self.__WB_pmw) {
          self.__WB_pmw = function (src) {
            this.__WB_source = src;
            return this;
          };
        }
      })();


      function audioPlay() {
        var audio = document.getElementById("audio");
        audio.volume = 0.7;
        audio.play()
      }
      
      function videoPlay() {
        var video = document.getElementById("video");
        video.play()
      }
      