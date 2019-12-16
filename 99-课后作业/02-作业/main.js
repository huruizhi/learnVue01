 const app = new Vue({
        el: "#app",
        data: {
            books: [
                {"name": '《算法导论》', 'publicDate':'2006-9','price':85, 'num':1},
                {"name": '《UNIX编程艺术》', 'publicDate':'2006-2','price':59, 'num':1},
                {"name": '《编程珠玑》', 'publicDate':'2006-10','price':39, 'num':1},
                {"name": '《代码大全》', 'publicDate':'2006-3','price':128, 'num':1},
            ],
        },
        methods:{
            numIncrease(i) {
                this.books[i].num ++
            },
            numDecrease(i) {
                this.books[i].num --
            },
            itemRemove(i) {
                this.books.splice(i,1)
            }
        },
        computed:{
            totalPrice:{
                get() {
                    // 箭头函数
                    return this.books.reduce((preValue, bookObj) => preValue + bookObj.num * bookObj.price, 0)
                }
            }
        },
        filters: {
            fixed(num) {
                return num.toFixed(2)
            }
        }
    });