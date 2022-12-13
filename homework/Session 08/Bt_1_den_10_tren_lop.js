// ----------------------------------Cong Thuc Xai ----------------------------------

// >, < , >= , <=
// +,- , * , / , %
//  so sanh ket qua bang nhau thi dung: ===

//  khi ma` 2 cau dieu kien xay ra cung mot thoi diem thi` dung` : &&
// khi muon su dung 2 cau dieu kien chon 1 trong 2 thi` dung`  : ||

// ----------------------------------Cong Thuc Xai ----------------------------------
// const ten_dau = 'My'
// const ten_cuoi = 'Nguyen'

// let tong_ten_cong_ali = ten_dau + ' ' + ten_cuoi

// console.log(tong_ten_cong_ali);

// const a = 100

// const  b = 25

// let ket_qua = a % b

// console.log(ket_qua);

// const thoi_tiet = 'mua'

// if (thoi_tiet === 'nang') {
//     console.log('anh di tap the duc');
// } else{
//     console.log('anh o nha');
// }

// const tien_minh_dang_co_trong_nguoi  = 25

// const tien_mua_banh_mi = 12

// const tien_mua_loc_sua = 20

// if (tien_minh_dang_co_trong_nguoi> tien_mua_banh_mi && tien_minh_dang_co_trong_nguoi> tien_mua_loc_sua) {
//     console.log('minh` co the? mua  sua va banh mi');
// } else if(tien_minh_dang_co_trong_nguoi > tien_mua_loc_sua) {
//     console.log('minh` co the? mua loc sua');

// } else if(tien_minh_dang_co_trong_nguoi> tien_mua_banh_mi){
//     console.log('minh` co the? banh mi');
// }else{
//     console.log('khong du tien mua gi het');
// }

// cho a  = 100 , b = 2  viet mot. ung' dung. check neu' a / b = 50 thi` in ra so' nay` chia het' cho 2

// const a = 100;
// const b = 2;
// let ket_qua = a / b;
// if (ket_qua === 50) {
//     console.log('so nay chia het cho 2');
// }

// cho a  = 50 , b = 20 , c = 2  viet mot. ung' dung. check neu' a + b - c = 68 thi` in ra so nay ket qua la 68:
// const a = 50;
// const b = 20;
// const c = 2;
// let ket_qua = a + b - c;
// if (ket_qua === 68) {
//     console.log('ket qua la 68');
// }

// cho a = 100 neu' ma` a chia het' 2 === 0 thi` tra? ket' qua? so' a chia het' 2
// const a = 100;

// if (a % 2 === 0) {
//     console.log("ket' qua? so' a chia het' 2");
// }

// cho a = 100 neu' a la so chan~ thi in ra a la` chan~ con` khong^ thi` ngc lai a la` so' le~
// const prompt = require('prompt-sync')();
// const a = parseInt(prompt('Nhap so vao o nay` :'))
// if (a % 2 === 0) {
//     console.log('a la` chan~');
// } else{
//     console.log("a la` so' le~");
// }

// cho a = 100 neu' a chia het' cho 2 === 0 va` a chia het cho 5  === 0 in so' nay` vua` chia het' 2 va` 5
// const a = 100
// if (a % 2 === 0 && a % 5 === 0) {
//     console.log("so' nay` vua` chia het' 2 va` 5");
// }

// Bai-tap1:
// const prompt = require('prompt-sync')();
// const a = parseInt(prompt("Nhap so' vao` o^ nay` : "))
// const ket_qua = a * 2
// console.log(ket_qua);

// Bai-tap2:
// const prompt = require("prompt-sync")();
// let a = parseInt(prompt("Nhap so' thu 1 vao` o^ nay` : "));
// const b = parseInt(prompt("Nhap so' thu 2 vao` o^ nay` : "));
// const c = parseInt(prompt("Nhap so' thu 3 vao` o^ nay` : "));
// const d = parseInt(prompt("Nhap so' thu 4 vao` o^ nay` : "));
// if (b < a) {
//   a = b;
// }
// if (c < a) {
//   a = c;
// }
// if (d < a) {
//   a = d;
// }
// console.log(a);

// Bai-tap3:
// const prompt = require("prompt-sync")();
// let so_nguyen_duong = parseInt(prompt("Nhap so' vao` o^ nay` : "))
// let ket_qua = parseInt((so_nguyen_duong - 1)/2)
// console.log(ket_qua);

// Bai-tap4:

// ca'ch-1
// const prompt = require("prompt-sync")();
// let so_nguyen = parseInt(prompt("Nhap so' vao` o^ nay` : "));
// let ket_qua = (so_nguyen / 10 ).toString()
// let tach_gia_tri = ket_qua.split(".")
// let gia_tri1 = tach_gia_tri[0]
// let gia_tri2 = tach_gia_tri[1]
// console.log(gia_tri1);
// console.log(gia_tri2);

// ca'ch-2
// const prompt = require("prompt-sync")();
// let so_nguyen = parseInt(prompt("Nhap so' vao` o^ nay` : "));
// var sohangchuc =  parseInt(so_nguyen / 10)
// console.log(sohangchuc);
// var sodonvi = so_nguyen % 10
// console.log(sodonvi);

// Bai-tap5:
// const prompt = require("prompt-sync")();
// let n = parseInt(prompt("Nhap so' vao` o^ nay` : "));
// if (n > 1 && n % 2 === 0 || n % 3 === 0) {
//   console.log('NO');
// } else {
//   console.log('YES');
// }

// Bai-tap6:
// Vidu
// const a = 54;
// const b = 72;
// let list_1 = [];
// let list_2 = [];
// let ket_qua;
// for (let x = 1; x < a && x < b; x++) {
//   if (a % x === 0 && b % x === 0) {
//     ket_qua = x;
//   }
// }
// console.log(ket_qua);
// for (let x = 1; x <= a; x++) {
//     if (a % x === 0) {
//         list_1.push(x)
//     }
// }
// for (let x = 1; x <= b; x++) {
//     if (b % x === 0) {
//         list_2.push(x)
//     }
// }
//
//Thuc hanh Bai tap 6
// const prompt = require("prompt-sync")();
// let n = parseInt(prompt("so_nguyen_duong_n "));
// let m = parseInt(prompt("so_nguyen_duong_m "));
// let ket_qua
// for (let p = 1; p < n && p < m; p++) {
//     if (n % p === 0 && m % p === 0) {
//         ket_qua = p
//     }
// }
// console.log(ket_qua);

// Bai-tap7:

const prompt = require("prompt-sync")();
let str = 'dEAR hAI'
let newstr = str[0].toUpperCase() + str.slice(1);
console.log(newstr);

