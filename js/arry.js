var colors =["red","green","orange"];
/*Es5遍历方法，for循环*/
/*es6 forEach*/
colors.forEach(function (value) {
    console.log(value);
});
//练习，遍历数组中的值，并计算总和
var numbers = [1,2,3,4,5];
var sum = 0;
function adder (value) {
    sum += value;
}
numbers.forEach(adder);
console.log(sum)
/*数值数组A,将A数组的值以双倍的形式放到B组*/
var num = [1,2,3,4];
var dbnum=[];
for(var i=0;i<num.length;i++){
    dbnum.push(num[i]*2);
}
console.log(dbnum);
/*===================================================================================map*/
var dbed = num.map(function (value) {
    return value*2;
})
console.log(dbed)
/*================================================================================forEach*/
num.forEach(function (value) {
    console.log(value*2);
})
/*对象数组，将A数组中的对象的某个属性存储到B数组中*/
var cars =[{model:"buick",price:"cheap"},{model:"BMW",price:"expensive"}];

var peices = cars.map(function (value) {
    return value.price;
})
console.log(peices);
/*===============================================================================filter*/
/*对象数组A，获取数组中指定类型的对象放到B数组*/
var products =[
    {name:"cucumber",type:"vegetable"},
    {name:"banana",type:"fruit"},
    {name:"celery",type:"vegetable"},
    {name:"orange",type:"fruit"}
];
//ES5
var filteredpros = [];
for(var i=0;i<products.length;i++){
    if(products[i].type === "fruit"){
        filteredpros.push(products[i]);
    }
}
console.log(filteredpros);
//ES6
var filtered2 = products.filter(function (value) {
    return value.type === 'vegetable';
})
console.log(filtered2);
/*数组A，过滤掉不满足一下条件的对象，条件：蔬菜数量大于0，价格小于10*/
var vegetables = [
    {name:"cucumber",type:"vegetable",quantity:0,price:10},
    {name:"banana",type:"fruit",quantity:10,price:18},
    {name:"celery",type:"vegetable",quantity:30,price:1},
    {name:"orange",type:"fruit",quantity:3,price:6}
];
vegetables = vegetables.filter(function (value) {
    return value.type === "vegetable" && value.quantity >0 && value.price<10;
})
console.log(vegetables);
/*两个数组（A，B）根据A中id值，过滤掉B数组不符合的数据*/
var post={id:4,title:"javascript"};
var comments = [
    {postId:4,content:"angular4"},
    {postId:2,content:"vue.js"},
    {postId:3,content:"reactjs"},
    {postId:4,content:"nodejs"},
    {postId:5,content:"jquery"}
];
function commentForPost(psot,comments){
    return comments.filter(function (value) {
        return value.postId === psot.id;
    })
}
console.log(commentForPost(post,comments));
/*=========================================================================================find*/
/*对象数组A，找到符合条件的对象*/
var users = [
    {name:"jill"},
    {name:"alex"},
    {name:"bill"}
];
//ES5
/*弊端：当找到结果时，数组仍然会继续执行过滤下一个对象，知道数组循环结束，需在条件中加上break结束*/
var user;
for (var i=0;i<users.length;i++){
    if(users[i].name === "alex"){
        user = users[i];
        break;
    }
}
console.log(user);
//ES6 优点：当找到条件时，数组自动结束循环只找到第一个符合条件的对象
user = users.find(function (value) {
    return value.name === "bill"
})
console.log(user)
/*对象数组A，根据指定对象的条件找到数组中符合条件的对象*/

var posts =[
    {id:1,title:"nodejs"},
    {id:2,title:"reactjs"}
];
var commnt = {postId:1,content:"helloWorld"}
function postForCommnt(posts,commnt){
    return posts.find(function (value) {
        value.id === commnt.postId;
    })
}
console.log(postForCommnt(posts,commnt));
//======================================================================================every  && some
/*计算对象数组中每个电脑的操作系统是否可用，大于16位操作系统表示可用，否则表示不可用*/
//ES5
computers =[
    {name:"aplle",ram:16},
    {name:"IBM",ram:4},
    {name:"acer",ram:32}
]
var everyComCanRun = true;
var someComCanRun = false;
 for(var i=0;i<computers.length;i++){
     if (computers[i].ram <16){
         everyComCanRun = false;
     }else {
         someComCanRun =true;
     }
 }
console.log(everyComCanRun);
 console.log(someComCanRun);
 //every：一假即假:只要有一个条件为假，就不再继续执行，返回false
//some:一真即真：只要有一个条件为真，就返回真,除非全部为假
//es6
computers.every(function (value) {
    return value.ram >16;
})
/*假定有一个注册页面，判断所有input内容的长度是否大于0*/
function filed(value) {
    this.value = value;
}
filed.prototype.validate = function () {
    return this.value.length >0;
}
var username = new filed("fengzixu");
var telphone = new filed("1232223432");
var password = new filed("my_password");
console.log(username.validate());
var fileds = [username,telphone,password];

var isValied = fileds.every(function (value) {
    return value.validate();
});
console.log(isValied);
if(isValied){
    //注册成功
}else{
    //给用户一个友善的提醒
}
/*==================================================================================reduce*/
//计算数组中所有值的总和
/*ES5*/
var shuzi = [10,20,30];
var sum= 0;
for(var i=0;i<shuzi.length;i++){
    sum +=shuzi[i];
}
/*ES6*/
//有两个参数，第一个值必须有初始值。第二个值为迭代出来的数组中的值，代替forEach
shuzi.reduce(function (sum,shu) {
    return sum + shu;
},0)
//将数组中对象的某个属性抽离到另外一个数组中  //数组的splice增删该查
var primaryColors =[
    {color:"red"},
    {color:"yellow"},
    {color:"blue"}
];
var finalColor=primaryColors.reduce(function (previous,primaryColor) {
    previous.push(primaryColor.color);
    return previous;
},[])
console.log(finalColor);
/*判断字符串中括号是否对称*/
function balanceParens(string) {
    return !string.split("").reduce(function (previous, char) {
        if(previous <0){
            return previous;
        }
        if(char === "("){
            return  ++previous;
        }
        if(char === ")"){
            return  --previous;
        }
        return previous;
    },0)
}
console.log(balanceParens(")(((())"))























































































