WL.registerComponent('button-handler', {
    cursorTarget: { type: WL.Type.Object }
}, {
    init: function () {
        let target = this.cursorTarget.getComponent('cursor-target');
        target.addUpFunction(() => {

        });
    }
});