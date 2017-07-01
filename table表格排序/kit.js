/**
 * Created by 90-ING on 2017/6/29.
 */



var kit={
    likearryay:function likearray(m){
    try{return [].slice.call(m)}
    catch(e){
        var ary=[];
        for(var i=0;i< m.length;i++){
            ary[ary.length]=m[i];

            }
        return ary }
   },//类数组转数组
    jsonparse:function jsonparse(str){
    return  "JSON" in window? JSON.parse(str):eval('("+str+")')}//JSON格式转对象
}



//JSON格式转对象
//两种方法   try catch  和  判断是否有json属性（ie是没有这个属性所以不兼容）
//function jsonparse(str){
//    var  m=null;
//    try{m=jsonparse(str)}
//    catch(e){
//            m=eval('("+str+")')
//    }
//    return m
//}

//工具包是一个对象！！！！