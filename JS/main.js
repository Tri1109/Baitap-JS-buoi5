//--------------Bài 1: Quản lí tuyển sinh-----------------//

// Hàm lấy thuộc tính
function getEle(id) {
    return document.getElementById(id);
}

// Hàm xét kết quả
function result(point1, point2, point3, comparePoint, totalPoint, extraPoint, areaPoint, targetPoint) {
    if (point1 === 0 || point2 === 0 || point3 === 0) {
        return "Bạn đã rớt vì có điểm liệt";
    } else if (totalPoint < comparePoint) {
        return "Bạn đã rớt vì điểm tổng kết không đạt chuẩn";
    } else {
        return `Xin chúc mừng bạn đã đậu với điểm tổng kết là ${totalPoint}đ. <br> Tổng điểm ưu tiên của bạn là ${extraPoint}đ`;
    }
}

function handlePoint() {
    var comparePoint = +getEle("diemChuan").value;
    // Điểm thi 3 môn
    var point1 = +getEle("diemMon1").value;
    var point2 = +getEle("diemMon2").value;
    var point3 = +getEle("diemMon3").value;
    // Điểm ưu tiên khu vực
    var areaPoint = +getEle("khuVuc").value;
    //Điểm uu tiên đối tượng
    var targetPoint = +getEle("doiTuong").value;
    // Tổng điểm thi 3 môn
    var sumPoint = point1 + point2 + point3;
    // Tổng điểm ưu tiên
    var extraPoint = areaPoint + targetPoint;
    // Điểm tổng kết 
    var totalPoint = sumPoint + extraPoint;

    getEle("result1").innerHTML = result(point1, point2, point3, comparePoint, totalPoint, extraPoint, areaPoint, targetPoint);
}

//--------------Bài 2: Tính tiền điện-----------------//
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

function handleMoney() {
    //Giá trị input
    var elecNum = +getEle("elecNum").value;
    var name = getEle("name").value;
    var totalMoney = 0;

    //Tiền điện tính trên số kw
    var tienDien50KwDauTien = 500;
    var tienDien50KwTiepTheo = 650;
    var tienDien100KwTiepTheo = 850;
    var tienDien150KwTiepTheo = 1100;
    var tienDienSau350Kw = 1300;
    
    // Đặt điều kiện xét giá tiền điện
    if (elecNum <= 50) {
        totalMoney = elecNum * tienDien50KwDauTien;
    } else if (elecNum <= 100) {
        totalMoney = tienDien50KwDauTien * 50 + tienDien50KwTiepTheo * (elecNum - 50);
    } else if (elecNum <= 200) {
        totalMoney = tienDien50KwDauTien * 50 + tienDien50KwTiepTheo * 50 + tienDien100KwTiepTheo * (elecNum - 100);
    } else if (elecNum <= 350) {
        totalMoney = tienDien50KwDauTien * 50 + tienDien50KwTiepTheo * 50 + tienDien100KwTiepTheo * 100 + tienDien150KwTiepTheo * (elecNum - 200);
    } else {
        totalMoney = tienDien50KwDauTien * 50 + tienDien50KwTiepTheo * 50 + tienDien100KwTiepTheo * 100 + tienDien150KwTiepTheo * 150 + tienDienSau350Kw * (elecNum - 350);
    }

    getEle("result2").innerHTML = `Tiền điện của khách hàng ${name} là ${VND.format(totalMoney)} trên ${elecNum}kw`;
}

//----------Bài 3: Tính thuế thu nhập cá nhân--------------//
function thueSuatDuoi60tr(thuNhapChiuThue, thueTNCN) {
    return thueTNCN = thuNhapChiuThue * 0.05;
}
function thueSuatTu60Den120tr(thuNhapChiuThue, thueTNCN) {
    return thueTNCN = 60e+6 * 0.05 + (thuNhapChiuThue - 60e+6) * 0.1;
}
function thueSuatTu120Den210tr(thuNhapChiuThue, thueTNCN) {
    return thueTNCN = 60e+6 * 0.05 + 60e+6 * 0.1 + (thuNhapChiuThue - 120e+6) * 0.15;
}
function thueSuatTu210Den384tr(thuNhapChiuThue, thueTNCN) {
    return thueTNCN = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + (thuNhapChiuThue - 210e+6) * 0.2;
}
function thueSuatTu384Den624tr(thuNhapChiuThue, thueTNCN) {
    return thueTNCN = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + (thuNhapChiuThue - 384e+6) * 0.25;
}
function thueSuatTu624Den960tr(thuNhapChiuThue, thueTNCN) {
    return thueTNCN = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + (thuNhapChiuThue - 624e+6) * 0.3;
}
function thueSuatTren960tr(thuNhapChiuThue, thueTNCN) {
    return thueTNCN = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (thuNhapChiuThue - 960e+6) * 0.35;
}

function tinhThue() {
    var salary = +getEle("salary").value;
    var name3 = getEle("name3").value;
    var person = +getEle("person").value;
    var thuNhapChiuThue = salary - 4e+6 - (person * 1600000);
    var thueTNCN = 0;

    if (thuNhapChiuThue <= 60e+6) {
        thueTNCN = thueSuatDuoi60tr(thuNhapChiuThue, thueTNCN);
    } else if (thuNhapChiuThue <= 120e+6) {
        thueTNCN = thueSuatTu60Den120tr(thuNhapChiuThue, thueTNCN);
    } else if (thuNhapChiuThue <= 210e+6) {
        thueTNCN = thueSuatTu120Den210tr(thuNhapChiuThue, thueTNCN);
    } else if (thuNhapChiuThue <= 384e+6) {
        thueTNCN = thueSuatTu210Den384tr(thuNhapChiuThue, thueTNCN);
    } else if (thuNhapChiuThue <= 624e+6) {
        thueTNCN = thueSuatTu384Den624tr(thuNhapChiuThue, thueTNCN);
    } else if (thuNhapChiuThue <= 960e+6) {
        thueTNCN = thueSuatTu624Den960tr(thuNhapChiuThue, thueTNCN);
    } else {
        thueTNCN = thueSuatTren960tr(thuNhapChiuThue, thueTNCN);
    }

    getEle("result3").innerHTML = `Thuế TNCN của ${name3} là ${VND.format(thueTNCN)}`;
}

//--------------Bài 4: Tính tiền cáp-----------------//
function toggleInfoInput() {
    var typeSelect = getEle("type");
    var businessInfo = getEle("businessInfo");

    if (typeSelect.value === "doanh_nghiep") {
        businessInfo.style.display = "block";
    } else {
        businessInfo.style.display = "none";
    }
}

function tinhTienNhaDan(channel, costBasic, costHoaDon, costVip, totalCost) {
    costHoaDon = 4.5;
    costBasic = 20.5;
    costVip = 7.5;
    totalCost = costHoaDon + costBasic + costVip * channel;
    return totalCost;
}

function tinhTienDoanhNghiep(channel, costBasic, costHoaDon, costVip, business, totalCost) {
    costHoaDon = 15;
    costBasic = 75;
    costVip = 50;
    if (business <= 10) {
        return totalCost = costHoaDon + costBasic + costVip * channel;
    } else {
        return totalCost = costHoaDon + 75 + 5 * (business - 10) + costVip * channel;
    }
}
function tinhTienCap() {
    var code = +getEle("code").value;
    var channel = +getEle("channel").value;
    var business = +getEle("business").value;
    var loaiKhachHang = getEle("type").value;
    var costHoaDon = 0;
    var costBasic = 0;
    var costVip = 0;
    var totalCost = 0;

    if (loaiKhachHang === "nha_dan") {
        if (channel < 1) {
            getEle("result4").innerHTML = "Vui lòng nhập đúng giá trị";
        } else {
            getEle("result4").innerHTML = `Mã khách hàng ${code}. <br> Tiền cáp là : ${tinhTienNhaDan(channel, costBasic, costHoaDon, costVip, totalCost)}$`;
        }
    } else {
        if (channel < 1 || business < 1) {
            getEle("result4").innerHTML = "Vui lòng nhập đúng giá trị";
        } else {
            getEle("result4").innerHTML = `Mã khách hàng ${code}. <br> Tiền cáp là : ${tinhTienDoanhNghiep(channel, costBasic, costHoaDon, costVip, business, totalCost)}$`;
        }
    }
}
