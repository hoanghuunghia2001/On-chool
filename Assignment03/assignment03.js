var show = document.querySelector('.show');
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
console.log(btn2);
// console.log(show);
class students {
    constructor(ten, diemtrungbinh, gioitinh, monhoc ){
        this.ten = ten;
        this.diemtrungbinh=diemtrungbinh;
        this.gioitinh=gioitinh;
        this.monhoc=monhoc;
    }
    showInfo(){
        console.log("ten" +this.name,),
        console.log("diemtrungbinh" +this.diemtrungbinh),
        console.log("gioitinh"+this.gioitinh),
        console.log("monhoc"+this.monhoc)
    }
}
var student = new students("Hoang Huu Nghia",8,"nam",[{"ly":8},{"hoa":4}])
var student1 = new students("Hoang Huu N",7,"nữ",[{"ly":7},{"hoa":6}])
var student2 = new students("Hoang Huu C",9,"nam",[{"ly":8},{"hoa":9}])
var student3 = new students("Hoang Huu X",5,"nam",[{"ly":7},{"hoa":2}])
var student4 = new students("Hoang Huu Y",6,"nu",[{"ly":6},{"hoa":6}])
var student5 = new students("Hoang Huu Z",4,"nam",[{"ly":5},{"hoa":3}])
var student6 = new students("Hoang Huu G",8,"nu",[{"ly":6},{"hoa":5}])
var student7 = new students("Hoang Huu H",7,"nam",[{"ly":7},{"hoa":4}])
var student8 = new students("Hoang Huu I",9,"nu",[{"ly":8},{"hoa":5}])
var student9 = new students("Hoang Huu K",2,"nam",[{"ly":9},{"hoa":5}])
var student10 = new students("Hoang Huu j",8,"nu",[{"ly":9},{"hoa":1}])
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);
console.log(student6);
console.log(student7);
console.log(student8);
console.log(student9);

var danhsach = [];
danhsach.push(student, student1, student2,student3,student4,student5,student6,student7,student8,student9,student10);

var DanhSach = [...danhsach]

function aDanhSach(arr){
    var html = arr.map( (std)=>`
        <tr class="student">
            <td>${std.ten}</td>
            <td>${std.diemtrungbinh}</td>
            <td>${std.gioitinh}</td>
            <td>${std.monhoc[0].ly}</td>
            <td>${std.monhoc[1].hoa}</td>
        </tr>
        `).join('');
        document.querySelector('#table').innerHTML += html;
        
}
// aDanhSach(danhsach);
btn1.addEventListener('click',(e)=>{
    danhsach = [...DanhSach];
    aDanhSach(DanhSach);
})
// 2. SẮP XẾP DANH SÁCH THEO THỨ TỰ TỪ BÉ ĐẾN LỚN
function sapXepDanhSachTuBeDenLon (arr){
    
    function compareMarkASC( a, b ) {
        if ( a.diemtrungbinh < b.diemtrungbinh ){
          return -1;
        }
        if ( a.diemtrungbinh > b.diemtrungbinh ){
          return 1;
        }
        return 0;
      }
    var danhSachDiemASC = arr.sort(compareMarkASC);
    console.log(danhSachDiemASC);
    aDanhSach(danhSachDiemASC);
}
btn2.addEventListener('click',function(){
    
    sapXepDanhSachTuBeDenLon(danhsach);
});


