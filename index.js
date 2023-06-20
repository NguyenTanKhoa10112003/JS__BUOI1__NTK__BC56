/**
 * BÀI 1
 * Input: nhập vào lương 100.000 và cho nhập vào số ngày
 * Output: tính tổng lương của nhân viên
 * Progress: B1:tạo ra biến luong1ngay = 100.000, tạo ra biến ngày chứa giá trị của số ngày và gán trá trị vảo
 *B2: tạo ra biến của tongLuong có value là luong1ngay * soNgayLam;
 B3: in ra màn hình dùng console.log(tongLuong)
 *
 *
 *
 */
var luong1ngay = 100000;
var soNgayLam = 30;
var tongLuong = luong1ngay * soNgayLam;
console.log("🚀 ~ file: index.js:13 ~ tongLuong:", tongLuong);

// BÀI 2
/**input: nhập vào năm sô1
 * output: tính trung bình của năm số đó
 * progress: khai báo biến cho 5 số xong rồi gán giá trị của từng số ra
 * khai báo biến trungBinh = 5 số đó cộng lại xong chia cho 5
 * cuối cùng thì in ra màn hình dùng console.log(trungBinh)
 *
 */
var so1 = 0;
var so2 = 1;
var so3 = 2;
var so4 = 3;
var so5 = 4;
var trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
console.log("🚀 ~ file: index.js:23 ~ trungBinh:", trungBinh);

// BÀI 3
/**
 * input: nhập vào giá của 1 giá usd có giá tri là 23500 đồng và nhập vào số lượng số tiền USD
 * output: tính ra số tiền quy đổi
 * progress: B1: tạo ra biến 1 usd có giá trị là 23500 đồng, tạo ra biến soTienUSD gán giá trị số lượng tờ tiền mà muốn gán vào
 * B2: tạo ra biến soTienQuyDoi = soTienQuyDoi = usd * soTienUSD;
 * Bước cuối: in ra màn hình bằng console.log(soTienQuyDoi);
 */
var usd = 23500;
var soTienUSD = 2;
var soTienQuyDoi = usd * soTienUSD;
console.log("🚀 ~ file: index.js:21 ~ soTienQuyDoi:", soTienQuyDoi);

// BÀI 4
/**
 * input:  chiều dài,  chiều rộng của hình chũ nhật
 * output: chu vi và diện tích của hình chữ nhật
 * progress: B1: tạo hai cái biến chieuDai và chieuRong xong gán giá trị cho mỗi chiều
 * B2: tạo ra biến cho chuVi và dienTich, chuVi thì value là  (chieuDai + chieurong) * 2, còn dienTich là chieuDai * chieurong
 * B3: in ra màn hình dùng console.log(chuVi) và console.log(dienTich)
 */
var chieuDai = 50;
var chieurong = 30;
var chuVi = (chieuDai + chieurong) * 2;
console.log("🚀 ~ file: index.js:21 ~ chuVi:", chuVi);
var dienTich = chieuDai * chieurong;
console.log("🚀 ~ file: index.js:23 ~ dienTich:", dienTich);

// BÀI 5
/**
 * input: nhập vào số có 2 chữ số
 * output: tính tổng của các ký số của 2 chữ số mình nhập
 * progress: B1: tạo ra biến so có value là 2 chữ số
 * B2: tạo ra biến hangDonvi có value là hangDonVi = so % 10
 * B3: tạo ra biến hangChuc có value là Math.floor(so / 10)
 * B4: tạo ra biến tongCacKySo có value là hangChuc + hangDonVi
 * B5: in ra màn hình dùng console.log( tongCacKySo )
 */
var so = 13;
var hangChuc = Math.floor(so / 10);

var hangDonVi = so % 10;
var tongCacKySo = hangChuc + hangDonVi;
console.log("🚀 ~ file: index.js:45 ~ tongCacKySo :", tongCacKySo);
