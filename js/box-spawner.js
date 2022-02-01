WL.registerComponent('box-spawner', {
}, {   
    start: function() {
        setInterval(()=>{
            let b = this.object.children[0].getComponent("box-animator");
            b.go();
        },5000);
    },
    
});
