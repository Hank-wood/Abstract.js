;(function(){
    var MutexModel = Model.Class("RelationModel", {
        constructor: function(opt){
             this.callSuper(opt);

            // 监听子元素的激活事件
            this.addEventListener("actived", function(e){
                // 如果子元素是直属子元素 则处理其他子元素关系
                var target = e.target;

                if(! target){
                    return;
                }

                if(target.parent === this){
                    if(this.currChild === this){
                    }else{
                        for(var i = 0; i < this.children.length; i ++){
                            var child = this.children[i];

                            if(child !== target){
                                child.stop();
                            }
                        }
                    }
                }
            });
        },
        // mutex激活 
        // 激活对应的activeChild即可
        active: function(event){
            if(this.currChild){
                this.currChild.rock(event);

            // 如果不存currChild
            }else{
                this.currChild = this.children[0];

                this.currChild && this.currChild.rock(event);
            }
        },

        // 如果不激活了 不激活相应当前child即可
        unactive: function(eventName){
            /*
            this.children.map(function(item){
                if(item.status === "active"){
                    item.stop(eventName);
                }
            });
            */
            if(this.currChild){
                this.currChild.stop(eventName);
            }
        }
    });

    Model.external("MutexModel", MutexModel);
})();
