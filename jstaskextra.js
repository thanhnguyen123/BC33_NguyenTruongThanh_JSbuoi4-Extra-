/* Bài 1********************************************************
 *Input: Ngày Tháng Năm
 *
 *Process:
 *   1. Lấy được input
 *   2. Ngày hôm qua bằng ngày hôm nay giảm đi 1 và xét các trường hợp riêng biệt khác
 *      Ngày mai bằng ngày hôm nay tăng thêm 1 và xét các trường hợp riêng biệt khác
 *
 *   3. Xuất ngày hôm qua và ngày mai ra màn hình
 *
 * Output: Ngày hôm qua và Ngày mai
 */
console.log("Bài tập 1");

var day = 31;
var month = 12;
var year = 2022;
var dayPrev = day - 1;
var monthPrev = month - 1;
var dayNext = day + 1;
var monthNext = month + 1;
var previousDay = "yesterday";
var nextDay = "tomorrow";
//Hom nay
if (day > 0 && day < 32 && month > 0 && month < 13) {
  console.log("Hôm  nay là:", day, "/", month, "/", year);
} else {
  console.log("Nhập sai rồi, xin mời nhập lại ");
}

//Ngay hom qua
if (day == 1 && month > 1 && month <= 12) {
  dayPrev = 31;
  monthPrev;
  console.log("Hôm  qua là:", dayPrev, "/", monthPrev, "/", year);
} else if (day == 1 && month == 1) {
  dayPrev = 31;
  monthPrev = 12;
  year = year - 1;
  console.log("Hôm  qua là:", dayPrev, "/", monthPrev, "/", year);
} else if (day > 0 && day < 32 && month > 0 && month < 13) {
  console.log("Hôm  qua là:", dayPrev, "/", month, "/", year);
} else {
  console.log("Nhập sai rồi, xin mời nhập lại");
}

// Ngay Mai
if (day == 31 && (month > 0) & (month < 12)) {
  dayNext = 1;
  monthNext;
  console.log("Ngày mai là:", dayNext, "/", monthNext, "/", year);
} else if (day == 31 && month == 12) {
  dayNext = 1;
  monthNext = 1;
  year = year + 1;
  console.log("Ngày mai là:", dayNext, "/", monthNext, "/", year);
} else if (day > 0 && day < 32 && month > 0 && month < 13) {
  console.log("Ngày mai là:", dayNext, "/", month, "/", year);
} else {
  console.log("Nhập sai rồi, xin mời nhập lại");
}

/* Bài 2********************************************************
 *Input: Tháng và năm
 *
 *Process:
 *   1. Lấy được input
 *   2. So sánh các trường hợp với nhau để tìm với số ngày ứng với tháng đó
 *   3. Xuất số ngày của tháng,năm ra màn hình
 *
 * Output: Số ngày của tháng đó và năm
 */
console.log("Bài tập 2");

var yearChoose = 2022;
// var monthChoose = "Jan";
// var monthChoose = "Feb";
// var monthChoose = "Mar";
// var monthChoose = "Apr";
// var monthChoose = "May";
var monthChoose = "Jun";
// var monthChoose = "Jul";
// var monthChoose = "Aug";
// var monthChoose = "Sep";
// var monthChoose = "Oct";
// var monthChoose = "Nov";
// var monthChoose = "Dec";
if (monthChoose === "Jan") {
  console.log("Tháng 1 năm", yearChoose, "có 31 ngày");
} else if (monthChoose === "Feb" && yearChoose % 4 == 0) {
  console.log("Tháng 2 năm", yearChoose, "có 29 ngày");
} else if (monthChoose === "Feb") {
  console.log("Tháng 2 năm", yearChoose, "có 28 ngày");
} else if (monthChoose === "Mar") {
  console.log("Tháng 2 năm", yearChoose, "có 31 ngày");
} else if (monthChoose === "Apr") {
  console.log("Tháng 4 năm", yearChoose, "có 30 ngày");
} else if (monthChoose === "May") {
  console.log("Tháng 5 năm", yearChoose, "có 31 ngày");
} else if (monthChoose === "Jun") {
  console.log("Tháng 6 năm", yearChoose, "có 30 ngày");
} else if (monthChoose === "Jul") {
  console.log("Tháng 7 năm", yearChoose, "có 31 ngày");
} else if (monthChoose === "Aug") {
  console.log("Tháng 8 năm", yearChoose, "có 31 ngày");
} else if (monthChoose === "Sep") {
  console.log("Tháng 9 năm", yearChoose, "có 30 ngày");
} else if (monthChoose === "Oct") {
  console.log("Tháng 10 năm", yearChoose, "có 31 ngày");
} else if (monthChoose === "Nov") {
  console.log("Tháng 11 năm", yearChoose, "có 30 ngày");
} else if (monthChoose === "Dec") {
  console.log("Tháng 12 năm", yearChoose, "có 31 ngày");
} else {
  console.log("Xin mời nhập lại");
}
/* Bài 3********************************************************
 *Input: Số có 3 chữ số
 *
 *Process:
 *   1. Lấy được input
 *   2. Tách 3 số ra thành hàng trăm, chục , đơn vị
 *      Chuyển số thành chữ
 *   3. Xuất cách đọc của chữ số ra màn hình
 *
 * Output: Cách đọc chữ số
 */
console.log("Bài tập 3");

var n1Number = 165;
var num1 = Math.floor(n1Number / 100);
var num2 = Math.floor((n1Number % 100) / 10);
var num3 = n1Number % 10;
console.log(num1, num2, num3);

//Hang tram
if (num1 == 1) {
  num1 = "Một trăm";
} else if (num1 == 2) {
  num1 = "Hai trăm";
} else if (num1 == 3) {
  num1 = "Ba trăm";
} else if (num1 == 4) {
  num1 = "Bốn trăm";
} else if (num1 == 5) {
  num1 = "Năm trăm";
} else if (num1 == 6) {
  num1 = "Sáu trăm";
} else if (num1 == 7) {
  num1 = "Bảy trăm";
} else if (num1 == 8) {
  num1 = "Tám trăm";
} else if (num1 == 9) {
  num1 = "Chín trăm";
} else {
  console.log("Xin nhập lại");
}
//Hang Chuc
if (num2 == 0) {
  num2 = "linh";
} else if (num2 == 1) {
  num2 = "mười";
} else if (num2 == 2) {
  num2 = "hai mươi";
} else if (num2 == 3) {
  num2 = "ba mươi";
} else if (num2 == 4) {
  num2 = "bốn mươi";
} else if (num2 == 5) {
  num2 = "năm mươi";
} else if (num2 == 6) {
  num2 = "sáu mươi";
} else if (num2 == 7) {
  num2 = "bảy mươi";
} else if (num2 == 8) {
  num2 = "tám mươi";
} else if (num2 == 9) {
  num2 = "chín mươi";
} else {
  console.log("Xin nhập lại");
}
//Don vi
if (num3 == 0 && n1Number > 99) {
  num3 = " ";
} else if (num3 == 1) {
  num3 = "một";
} else if (num3 == 2) {
  num3 = "hai";
} else if (num3 == 3) {
  num3 = "ba";
} else if (num3 == 4) {
  num3 = "bốn";
} else if (num3 == 5) {
  num3 = "năm";
} else if (num3 == 6) {
  num3 = "sáu";
} else if (num3 == 7) {
  num3 = "bảy";
} else if (num3 == 8) {
  num3 = "tám";
} else if (num3 == 9) {
  num3 = "chín";
} else {
  console.log("Xin nhập lại");
}
if (n1Number > 99 && n1Number < 1000) {
  console.log(num1, num2, num3);
} else {
  console.log("Xin nhập lại");
}

/* Bài 4********************************************************
 *Input: Tên của 3 sinh viên, tọa độ của 3 sinh viên
 *       Tên trường , tọa độ của trường
 *
 *Process:
 *   1. Lấy được input
 *   2. Tính độ dài quảng đường
 *      So sánh các độ dài
 *   3. Xuất độ dài quảng đường dài nhất ra màn hình
 *
 * Output: Sinh viên xa trường nhất
 */
console.log("Bài tập 4");

var school = "CyberSoft";
var xSchool = 10;
var ySchool = 20;
var student1 = "Steve";
var x1 = 55;
var y1 = 66;
var student2 = "John";
var x2 = 35;
var y2 = 34;
var student3 = "Lucas";
var x3 = 16;
var y3 = 12;

var long1 = Math.sqrt(Math.pow(x1 - xSchool, 2) + Math.pow(y1 - ySchool, 2));
var long2 = Math.sqrt(Math.pow(x2 - xSchool, 2) + Math.pow(y2 - ySchool, 2));
var long3 = Math.sqrt(Math.pow(x3 - xSchool, 2) + Math.pow(y3 - ySchool, 2));

console.log(long1, long2, long3);
if (long1 > long2 && long1 > long3) {
  console.log("Sinh vien xa trường nhất", student1);
} else if ((long2 > long1) & (long2 > long3)) {
  console.log("Sinh vien xa trường nhất", student2);
} else {
  console.log("Sinh vien xa trường nhất", student3);
}
