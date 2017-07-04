###DOM回流、映射
**回流：**dom树改变一次，浏览器重新获取结构，非常耗性能
* 文档碎片 解决

**映射：**
* js获取、创建、更改都是对dom的操作，
* 即js创建更改会同步到dom树上，但是页面不显示，
* 只有appendchild添加到页面上，页面才会显示；
* 不更改dom树，更改样式就会在页面直接显示；
* **所以：获取到更改，再添加，不是复制，而是替换！！！！！**


----------

###AJAX
**前言：**前端负责把结构搭起来，样式写出来；but内容神马的，都是假的；页面真实内容是后台传给前端的，前端再将数据绑定到页面中；

**AJAX：**前端从后台获取数据的通道；
* **①创建AJAX**
	* var xhr=new XMLHttpRequest
* **②请求数据** 
	* 打开需要请求数据的文件地址；
	* xhr.open("请求方式","地址"，true/false)
	* xhr.open("get",data.txt,true)获取数据，异步请求
	*  xhr.open("get",data.txt,false)获取数据，同步请求
	* 请求方式可以为delete/put/get……
* **③获取并解析数据**
	*  JSON转成常规对象数据
	*  xhr.onreadystatechang=function(){
	if(xhr,readystate====4&&/^2\d{2}$/.test(xhr))
	{var val=xhr.responseText;
	//此步骤获取的是JSON格式的字符串
	data=utils.jsonParse(val)
	//utils是将JSON字符串转对象的兼容性方法；
	}
	}

* **④发送最终请求**
	* xhr.send(null) 


####最终源码
		var xhr=new XMLHttpRequest；//创建AJAX
		var data=null;
		
		xhr.open("get","data.txt",false)//获取对象
		
		xhr.onreadystatechange(){      //在某种状态下获取JSON数据
		if(xhr.readyState===xxx.test())
		{var val=xhr.responseText;
		data=utils.jsonParse(val);}}  //将JSON格式数据转成普通对象
		
		xhr.send(null)		

----------

###数据绑定——前端页面
**核心：**将从后台获取的数据（多维数组），绑定到页面

**绑定方法**
*  获取一个，动态创建元素节点；
* 拼接字符串
* 创建文档碎片

**方法优缺点分析**
*  **动态创建元素节点**
	* 原理： 
		* document. creatElements("标签名")
		* 某个位置 . appendChild( )
		* 创建一个，绑定一个
	* 优：对页面其他元素无影响（样式）
	* 缺： 增加了DOM回流
*  **字符串拼接**——常用（模板引擎的核心原理）
	*  原理：
		*  将标签及内容用字符串拼接
		*  再和页面的内容（字符串格式）拼接
		*  innerHTML &&  str+=
	* 优：
	* 缺： 页面原有元素绑定事件消失/但是一般情况下页面没有元素
*  **文档碎片**
	* 原理：document.creatDocumentFragment（）
	* 优：不影响页面原有元素，且引发一次回流  
	* 其他：记得销毁  null


----------
###html——table 表格
	<table>
    <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
    </tr>
	</table>
或者
			
	<table>
    <tr>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
    </tr>
</table>
都是这个样子：
<table> <tr><th></th> <th></th><th></th> <th></th></tr></table>

table：表格
tr：行
td：列
th：表头

也可以用：
thead
tbody
tfoot
####JS获取调用表格
表格独有的调用方式  行列绑定
		
	table.tHead.row[i].cells[j]
	table.tBody.……注意大写

table用 get……ById(" ") 获取

----------

###实现表格升降序
需求：
①保持隔行变色
②点击一次：升序；再点击：降序；
③各列皆可排序


----------

###封装工具包
一个JS文件：里面是对象格式类型
var obj={
a:function(){xxx},
b:function(){},
c:function(){}}

调用某个函数时，首先引入JS文件
obj.a( ) 直接调用


后台返回的JSON数据 都是数组包对象，即二维数组


同步和异步编程有什么区别？？