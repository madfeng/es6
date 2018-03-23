/*模板字符串*/
let name = "madfeng";
function upper(str){
    return str.toUpperCase();
}
let template = `
    <h1>${upper("hello")} ${name}</h1>
    <p>ES6给我们提供了好用的方法和语法</p>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
`;
document.getElementById("template").innerHTML = template;
/*箭头函数
* 解决的问题：1.缩减代码，2.改变this指向
* */
const double1 = function (num) {
    return num *2;
}
console.log(double1(4));

const double2 = (num) =>{
    return num *20;
}
console.log(double2(3));

const double3 = (num) => num *10;
console.log(double3(1));

const double5 = num => num*21;
console.log(double5(10));

const double4 = (num => num*21);
console.log(double4(12));

/*两个形参，一行代码*/
const double6 = (num1,num2) => num1+num2;
console.log(double6(12,34));

/*两个形参，多行代码*/
const double7 = (num1,num2) => {
    sum = num1+num2;
    return sum;
}
console.log(double7(12,34));
/*map一个数组，让数组中的值以double形式展现*/
const nums = [1,2,3,4,6,5.3];
var newNums = nums.map((num) => {
    return num *2;
})
console.log(newNums);


/*改变this指向*/
const team1 = {
    members:["henry","esliy"],
    teamName:"ES6",
    teamSumary:function () {
        let self = this;
        return self.members.map(function (num) {
            //当前的this不知道指向谁，没有明确的指向,需要在此之前将this保存起来
            return `${num} 隶属于 ${self.teamName} 小组`;
        })
    }
};
console.log(team1.teamSumary());
const team2 = {
    members:["henry","esliy"],
    teamName:"ES6",
    teamSumary:function () {
        let self = this;
        return self.members.map(function (num) {
            //将当前的this bind到函数中
            return `${num} 隶属于 ${this.teamName} 小组`;
        }.bind(this))
    }
};
console.log(team2.teamSumary());
//es6方法
const team3 = {
    members:["henry","esliy"],
    teamName:"ES6",
    teamSumary:function () {
        let self = this;
        return self.members.map( (num) => {
            //使用箭头函数，此时的this指向，该函数的父级对象
            return `${num} 隶属于 ${this.teamName} 小组`;
        })
    }
};
console.log(team3.teamSumary());










































