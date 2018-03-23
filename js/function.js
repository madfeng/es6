/*
* 函数参数默认值
* 优化代码
* */
/*function makeAjaxRequest(url,method) {
    if(!method){
        method = "GET";
    }
    return method;
}*/
/*
function makeAjaxRequest(url,method="GET") {
    return method;
}
console.log(makeAjaxRequest("http://www.baidu.com"));
console.log(makeAjaxRequest("http://www.baidu.com","post"));*/
function User(id) {
    this.id = id;
}
function randomId() {
    return Math.round(Math.random() * 90000) ;
}
console.log(new User(randomId()))

function createAdmin(user=new User(randomId())) {
    user.admin = true;
    return user;
}
const user = new User(1);
console.log(createAdmin());









































