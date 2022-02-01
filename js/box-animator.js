WL.registerComponent('box-animator', {
    speed: {type: WL.Type.Float, default: 10.0},
}, {   
    start: function() {
        this.m = this.object.getComponent("mesh");
        this.m.active = false;
        let target = this.object.getComponent("cursor-target");
        target.addUpFunction(()=>{
            this.m.active = false;
        });
    },

    go(){
        this.object.setTranslationWorld([Math.random()*6-3,10,-Math.random()*3]);
        this.m.active = true;
    },
    update: function(dt) {
        if(this.m.active){
            let p = this.object.getTranslationWorld([]);
            p[1] -= this.speed * dt;
            if(p[1] <= 0 ){
                this.m.active = false;
            }
            this.object.setTranslationWorld(p);
        }
    },
});
