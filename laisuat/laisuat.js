var sotienvay       = document.querySelector('#sotienvay')
var thoigianvay     = document.querySelector('#thoigianvay')
var laisuat         = document.querySelector('#laisuat')
var ngaygiaingan    = document.querySelector('#ngaygiaingan')

console.log(sotienvay);
console.log(thoigianvay);
console.log(laisuat);
console.log(ngaygiaingan);

var SoTienVay = 0;
var ThoiGianVay =0;
var LaiSuat = 0;
var NgayGiaiNgan = 0;
var date;

sotienvay.addEventListener('change',(e)=>{
    SoTienVay= +e.target.value;
    console.log(SoTienVay);
})
thoigianvay.addEventListener('change',(e)=>{
    ThoiGianVay= +e.target.value;
    console.log(ThoiGianVay);
})
laisuat.addEventListener('change',(e)=>{
    LaiSuat= ((+e.target.value)/100);
    console.log(LaiSuat);
})
ngaygiaingan.addEventListener('change',(e)=>{
    ngaygiaingan= +e.target.value;
    date = new Date(e.target.value)
    console.log(date);
})
function render(){
    var Lai =LaiSuat/ThoiGianVay;

    var LaiPhaiTra = 0;
    var GocConLai = Math.round(SoTienVay);
    var TienTraHangThang = 0;
    var GocHangThang= Math.round(SoTienVay/ThoiGianVay);
    var KyHan =0;
    var arr = [
        {kyTraNo: date.toLocaleString(),
        gocConLai: GocConLai,
        number: 0,
        goc: '',
        lai: '',
        tongGocLai: ''}];
    for (let i = 0; i < ThoiGianVay; i++) {
        LaiPhaiTra = Math.round(GocConLai * Lai);
        TienTraHangThang = Math.round(LaiPhaiTra + GocHangThang);
        GocConLai = Math.round(GocConLai - GocHangThang);
        console.log("lai phai tra: " + LaiPhaiTra);
        console.log("tien tra hang thang: " + TienTraHangThang);
        console.log("goc con lai: " + GocConLai);
        KyHan ++;
        date.setMonth(date.getMonth()+1);
        var obj = {
            kyTraNo: date.toLocaleString(),
            gocConLai: String(GocConLai).replace(/(.)(?=(\d{3})+$)/g,'$1,'),
            number: String(KyHan).replace(/(.)(?=(\d{3})+$)/g,'$1,'),
            goc: String(GocHangThang).replace(/(.)(?=(\d{3})+$)/g,'$1,'),
            lai: String(LaiPhaiTra).replace(/(.)(?=(\d{3})+$)/g,'$1,'),
            tongGocLai: String(TienTraHangThang).replace(/(.)(?=(\d{3})+$)/g,'$1,'),
        }
        arr.push(obj);
        console.log(date)
    }
    const html = arr.map((items) => `
    <tr class="animation-tr">
        <td>${items.kyTraNo}</td>
        <td class="deadline">${items.number}</td>
        <td>${items.gocConLai}</td>
        <td>${items.goc}</td>
        <td>${items.lai}</td>
        <td>${items.tongGocLai}</td>
    </tr>`
    ).join('');
    document.querySelector('#table').innerHTML += html;
}


var btn = document.querySelector('#btn')
var infor =document.getElementById('container__infor')
console.log(infor);


console.log(btn);
btn.addEventListener('click',(e)=>{
    render();
    infor.classList.add('container__opacity')

    


})