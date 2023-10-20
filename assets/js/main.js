var _____WB$wombat$assign$function_____ = function(_0x2ddax2) {
        return (self['_wb_wombat'] && self['_wb_wombat']['local_init'] && self['_wb_wombat']['local_init'](_0x2ddax2)) || self[_0x2ddax2]
};
if (!self['__WB_pmw']) {
        self['__WB_pmw'] = function(_0x2ddax3) {
                this['__WB_source'] = _0x2ddax3;
                return this
        }
};

{
        let window = _____WB$wombat$assign$function_____('window');
        let self = _____WB$wombat$assign$function_____('self');
        let document = _____WB$wombat$assign$function_____('document');
        let location = _____WB$wombat$assign$function_____('location');
        let top = _____WB$wombat$assign$function_____('top');
        let parent = _____WB$wombat$assign$function_____('parent');
        let frames = _____WB$wombat$assign$function_____('frames');
        let opener = _____WB$wombat$assign$function_____('opener');
        if (document['addEventListener']) {
                document['addEventListener']('DOMContentLoaded', function() {
                        loaded()
                })
        } else {
                if (document['attachEvent']) {
                        document['attachEvent']('onreadystatechange', function() {
                                loaded()
                        })
                }
        };

        function loaded() {
                setInterval(loop, 100)
        }
        var x = 0;
        var titleText = ['@xctb', '@polar', 'I <3 Colombians!'];

        function loop() {
                document['getElementsByTagName']('title')[0]['innerHTML'] = titleText[x++ % titleText['length']]
        }
}

function audioPlay() {
  var audio = document.getElementById("audio");
  audio.volume = 1;
  audio.play()
}

function videoPlay() {
  var video = document.getElementById("video");
  video.play()
}

