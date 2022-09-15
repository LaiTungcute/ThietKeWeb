// console.log("Hello world");

// a = 2;
// console.log(a);

// var a; //Khai báo trước hoặc sau khi gán giá trị. Mình có thể thay đổi giá trị của biến
// a = 3;
// // console.log("This is " + a);
// // console.log(a);

// var b = "Lại Hoàng Tùng";
// console.log(b);
// // let
// // const

// let c = "Hello"; //khai báo trước rồi mới gán giá trị. Mình có thể thay đổi giá trị của biến
// console.log(c);

// const d = "Good morning"; //Khai báo trước rồi mới gán giá trị. Ko thay đổi giá trị của biến
// console.log(d);

// let, const 

//Kiểu dữ liệu: số nguyên, số thực, ký tự, string, boolean, object, array
//Muốn xét xem biến này thuộc kiểu gì thì dùng typeof(biến);

// !=, !==, ==, ===, = , +, %, /, * , - , 3 ngôi, ++, --, +=, -= (x = x + 2 <=> x+=2)

// x++;
// x+=2;

// !=, !==, ==, ===

let a = 1;
let b = 1;

console.log(a===b);

// let c = b++;
// console.log(c);

// let d = b+=2;
// console.log(d);

if(a===b) {
    console.log("a bằng b");
}
else {
    console.log("a khác b");
}

if(a<0) {
    console.log("a âm");
}
else if(a===0) {
    console.log("a bằng 0");
}
else {
    console.log("a dương");
}

let d = a<0 ? "a âm" : "a ko âm";  //toán tử 3 ngôi
console.log(d);

let e = 5;


switch (e) {
    case 1:
    case 3: 
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:  
        {
            console.log("Tháng này có 31 ngày");
            break;
        }
    case 2:
        {
            console.log("Tháng này có 28 hoặc 29 ngày");
            break;
        }
    default:    
        {
            console.log("Tháng ko hợp lệ");
            break;
        }
}

e = 5;
// for, while, do-while
for(let i = 0; i< e ; i++) {
    console.log(i);
}

// while (e == 5) {
//     console.log(e);
//     // e++;
// }

e=1;
do {
    console.log(e);
    e+=1;
} while(e%2==0);

/**
 * 1. Tính tổng của s = 1+2+...+n;
 *    
 * 2. Tính n! = n*(n-1)*...*1 = 1*2*3*...*n; 
 * 
 * 3. Nhập 1 số n. Xét xem nó là số âm hay dương
 * 
 * 4. Nhập 1 số n. Xét xem nó có phải là số nguyên tố hay ko? (Số nguyên tố là số chỉ chia hết cho 1 và chính nó (trừ số 1))
 *
 */