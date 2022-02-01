const { GameState } = require('./js/classes/gameState');
const { MusicPlayer } = require('./js/utils/music-player');
const { SoundfxPlayer } = require('./js/utils/soundfx-player');

require('@wonderlandengine/api');
require('@wonderlandengine/components/cursor');
require('@wonderlandengine/components/cursor-target');
require('@wonderlandengine/components/wasd-controls');
require('@wonderlandengine/components/mouse-look');
require('@wonderlandengine/components/vr-mode-active-switch');
require('@wonderlandengine/components/finger-cursor');
require('@zestymarket/wonderland-sdk');

require('./js/game');
require('./js/teleport');
require('./js/player-height');
require('./js/tags');
require('./js/button-handler');
require('./js/box-animator');
require('./js/box-spawner');

window.Catcher = {
    gameState: new GameState(),    
    soundFxPlayer: new SoundfxPlayer(),
    musicPlayer:new MusicPlayer()
}

