import {State} from './classes/gameState';

WL.registerComponent('game', {
    playerObject: { type: WL.Type.Object }
}, {
    init: function() {        
        WL.onXRSessionStart.push(() => Catcher.gameState.isInVR = true);
        WL.onXRSessionEnd.push(() => Catcher.gameState.isInVR = false);
        WL.onXRSessionStart.push(() => {
            Catcher.soundFxPlayer.initAudio();
            Catcher.musicPlayer.initAudio();
        });
    },
    start: function() {
        Catcher.gameState.state = State.Title;
    },
    update: function(dt) {
  
    },
});
