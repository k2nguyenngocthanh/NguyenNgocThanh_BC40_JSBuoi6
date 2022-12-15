/*Bài tập 1 */
function timSoNguyenDuong(){
    n=document.value*1;
    s=document.value*1;
    n=1;
    s=0;
    while(s<10000)
    {
        n++;
        s=s+n;
    }
    document.getElementById("tim").innerHTML=`<h2 class="mt-5 text-danger text-center">
        Số nguyên dương nhỏ nhất là ${n} </h2>`;
}

/*Bài tập 2 */
function tinhTong(){
    var x=document.getElementById("txt-x").value*1;
    var n=document.getElementById("txt-n").value*1;
    tich=document.value*1;
    sum=document.value*1;
    i=document.value*1;
    i=1;
    tich=1;
    sum=0;

    while(i <= n)
    {
        tich = tich * x;
        sum = sum + tich;
        i++;
    }
      document.getElementById("tong").innerHTML=`<h2 class="mt-5 text-danger text-center">
        Tổng của biểu thức là ${sum} </h2>`;

}
/*Bài tập 3 */
function tinhGiaiThua(){
    var y=document.getElementById("txt-y").value*1;
    var i=document.value*1;
    var giaithua=document.value*1;
    giaithua=1;
    for(i=1;i<=y;i++){
        giaithua=giaithua*i;
    }
    document.getElementById("tinhGT").innerHTML=`<h2 class="mt-5 text-danger text-center">
    Giai thừa: ${giaithua} </h2>`;
}
/*Bài tập 4 */

function taoThe(){
  var html='';
  var taotheEL=document.getElementById("resultTaoThe");
  
  taotheEL.style.display = "block";

  for ( i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      html += `<div style="background-color:red">Div chẵn ${i}</div>`;
      
     
   
    } else if (i % 2 != 0) {
      html += `<div style="background-color:blue">Div lẻ ${i}</div>`;
   
    }
    taotheEL.innerHTML = html;
  }
};