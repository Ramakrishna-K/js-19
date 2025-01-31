let a=10
a="ramakrishna"
console.log(a)

var b=20
b="krishna"
console.log(b)

const c=3000
// c="tiru"
console.log(c)

//----------------- Arrow function ---------///
let arrow=(a)=>{
    console.log(a*a)
}
arrow(5)

let arr=[1,3,2,5,3,55,543,22]
let arro=(...arr)=>{
    console.log(arr)
    console.log(Math.max(...arr))
}
arro(...arr)

///---------------- templete literals---------////

let a1="string"
for(i=0;i<a1.length;i++){
    console.log(`${a1[i]} index is ${i}`)
}

//----------------destructuring----------////

let arr1=[1,3,2]
let [x,y,z,]=arr1
console.log(x,y,z)

let obj={name:"ram",age:3000}
let {name:n,age:ag}=obj
console.log(n,ag)

//-------------- default values-------//////

function power(a,b=2){
    console.log(a**b)
}power(3)

function div(a=5,b=2){
    console.log(a%b)
}div(13)

//---------------spread operator ----------////

let arr3=[12,3,4,54,2,333]
let arr4=[...arr3]
console.log(arr4)

let obj2={first_name:"ramakrishna"}
let obj3={second_name:"krishnag"}
let obj4={...obj2,...obj3}
// let obj4=Object.assign(obj2,obj3)
console.log(obj4)

////--------------Rest parameters --------////////

let arr5=[8,293,398,33]
function add(x,...a){
    console.log(x)
    console.log(a)
    // for(i of a){
    //     console.log(i)
    // }
}add(...arr5)

let arr6=[1,4,2,4,2,4,2,3]
function ad(...b){
    s=0
    for(i of b){
        s=s+i
    }
    console.log(s)
}ad(...arr6)

let obj5={name:"ram"}
let obj6={age:2000,batch:20}
let obj7={...obj5,...obj6}
console.log(obj7)
function det(...z){
    // console.log(obj7)
    let arr8=z
    console.log(arr8[0].age)
}det(obj7)

///---------------------shallow copy---------///

let arr9=[10,30,20]
arr9[1]=15
console.log(arr9)

let obj9={name:"ram"}
obj9.name="ramakrishna"
console.log(obj9)

///--------------------deep copy----------///

let arr10=[10,30,20]
let arr11=JSON.parse(JSON.stringify(arr10))
arr11[1]=15
console.log(arr10)

let obj10={name:"ram",age:10000}
let obj11=JSON.parse(JSON.stringify(obj10))
obj11.name="ramakrishna"
console.log(obj10)