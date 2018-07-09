require.config({
    paths:{
        jquery:'../lib/jquery-3.3.1',
        form:'../lib/form-msg',
        common:'../lib/common',
        xZoom:'../lib/jquery-xZoom/jquery.xZoom',
        banner:'./banner',
        same:'./same',       
    },
    // 配置依赖
    shim:{
        form:['jquery'],
        common:['jquery'],
        xZoom:['jquery'],
        banner:['jquery'],
        same:['jquery'],
       
    }
});