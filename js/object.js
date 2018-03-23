/*
* 增强对象字面量:可以将对象中的属性和方法进行简写
* 解决问题：缩减代码
* */
//new Object();{}
function creatBookShop(iventory) {
    return{
        iventory,/*== iventory：iventory*/
        iventoryValue() {/*==iventoryValue:function (){}*/
            return this.iventory.reduce((totlePrice,val) => totlePrice + val.price,0
            )
        },
        priceTitle(title) {/*==priceTitle:function(title){}*/
            return iventory.find(value => value.title === title).price;
        }
    }
}
const iventory =[
    {title:"vue",price:30},
    {title:"angular",price:32}
];
const bookShop = creatBookShop(iventory);
/*console.log(bookShop.iventoryValue());
console.log(bookShop.priceTitle("vue"));*/
function saveFile(url,data) {
    $.ajax({
        method:"post",
        url,/*==url:url*/
        data/*==data:data*/
    });
}
const url = "http://fileUpload.com";
const data={color:"red"};

saveFile(url,data);
































