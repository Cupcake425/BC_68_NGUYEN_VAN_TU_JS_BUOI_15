// BÀI 1
document.getElementById("btn1").onclick = function () {
  diemChuan = document.getElementById("diemChuan").value * 1;
  khuVuc = document.getElementById("khuVuc").value * 1;
  doiTuong = document.getElementById("doiTuong").value * 1;
  diem1 = document.getElementById("diem1").value * 1;
  diem2 = document.getElementById("diem2").value * 1;
  diem3 = document.getElementById("diem3").value * 1;
  diemTong = diem1 + diem2 + diem3 + khuVuc + doiTuong;
  ketQua = "";

  if (khuVuc == 10 && doiTuong == 10) {
    ketQua = "xin vui lòng chọn khu vực và đối tượng";
  } else if (doiTuong == 10) {
    ketQua = "Xin vui lòng chọn đối tượng";
  } else if (khuVuc == 10) {
    ketQua = "xin vui lòng chọn khu vực";
  } else if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
    ketQua = "bạn đã rớt";
  } else if (diemTong < diemChuan) {
    ketQua =
      "bạn đã rớt do điểm tổng của bạn: " +
      diemTong +
      " < điểm chuẩn: " +
      diemChuan;
  } else if ((diemTong) => diemChuan) {
    ketQua =
      "Bạn đã đậu, điểm tổng của bạn là: " +
      diemTong +
      ", điểm chuẩn của trường là: " +
      diemChuan;
  }

  document.getElementById("ketQua1").innerHTML = ketQua;
};

// BÀI 2
document.getElementById("btn2").onclick = function () {
  hoTen = document.getElementById("hoTen").value;
  soKw = document.getElementById("soKw").value * 1;
  ketQua = "";
  if (soKw <= 50) {
    ketQua = soKw * 500;
  } else if (soKw > 50 && soKw <= 100) {
    ketQua = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw > 100 && soKw <= 200) {
    ketQua = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw > 200 && soKw <= 350) {
    ketQua = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    ketQua = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }
  document.getElementById("ketQua2").innerHTML =
    "Tiền điện của khách hàng " +
    hoTen +
    " là: " +
    ketQua.toLocaleString("vi", {
      currency: "VND",
      style: "currency",
    });
};

// BÀI 3
document.getElementById("btn3").onclick = function () {
  hoTen = document.getElementById("hoTen2").value;
  tongThuNhap = document.getElementById("tongThuNhap").value * 1;
  soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
  ketQua = "";
  if (thuNhapChiuThue <= 60000000) {
    ketQua = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    ketQua = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    ketQua = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    ketQua = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    ketQua = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    ketQua = thuNhapChiuThue * 0.3;
  } else {
    ketQua = thuNhapChiuThue * 0.35;
  }
  document.getElementById("ketQua3").innerHTML =
    "Tiền thuế của khách hàng " +
    hoTen +
    " là: " +
    ketQua.toLocaleString("vi", {
      currency: "VND",
      style: "currency",
    });
};

// BÀI 4
// Bấm vào ẩn hiện input số kết nối
function anHien() {
  if (document.getElementById("nhaDan").checked) {
    document.getElementById("anHien").style.display = "none";
  } else if (document.getElementById("doanhNghiep").checked) {
    document.getElementById("anHien").style.display = "block";
  }
}

const NHA_DAN = "nhaDan";
const DOANH_NGHIEP = "doanhNghiep";
function phiXuLyHoaDon(loaiKhachHang) {
  switch (loaiKhachHang) {
    case NHA_DAN:
      return 4.5;
    case DOANH_NGHIEP:
      return 15;
  }
}
function phiXuLyDichVuCoBan(loaiKhachHang) {
  switch (loaiKhachHang) {
    case NHA_DAN:
      return 20.5;
    case DOANH_NGHIEP:
      return 75;
  }
}
function thueKenhCaoCap(loaiKhachHang) {
  switch (loaiKhachHang) {
    case NHA_DAN:
      return 7.5;
    case DOANH_NGHIEP:
      return 50;
  }
}
