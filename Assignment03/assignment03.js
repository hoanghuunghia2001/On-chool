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
var student = new students("A",8,"nam",[{"ly":8,"hoa":4}])
var student1 = new students("B",7,"nữ",[{"ly":7,"hoa":6}])
var student2 = new students("C",9,"nam",[{"ly":8,"hoa":9}])
var student3 = new students("X",5,"nam",[{"ly":7,"hoa":2}])
var student4 = new students("Y",6,"nam",[{"ly":6,"hoa":6}])
var student5 = new students("Z",4,"nam",[{"ly":5,"hoa":3}])
var student6 = new students("G",8,"nam",[{"ly":6,"hoa":5}])
var student7 = new students("H",7,"nam",[{"ly":7,"hoa":4}])
var student8 = new students("I",9,"nam",[{"ly":8,"hoa":5}])
var student9 = new students("K",2,"nam",[{"ly":9,"hoa":5}])
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);
console.log(student6);
console.log(student7);
console.log(student8);
console.log(student9);
