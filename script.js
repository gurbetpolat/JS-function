


/******************FONKSİYONLAR**********************/
function Hello(){
    console.log("HELLO")
 }
 
 Hello();
 
 
 
 const msg="Merhaba Dünya"
 
 function dünya(){
 
     const msg="Selammlar"
     console.log(msg)
 }
 
 dünya();
 
 
 let degusuk=dünya()
 console.log(degusuk)
 
 
 function fonksiyon(){
 
     return ["Emre","Gurbet","Polat"]
 }
  console.log(fonksiyon())
 
 
  function çarpmaislemi(sayi1,sayi2){
 
      return sayi1*sayi2;
  }
 
  let total=çarpmaislemi(5,5)
 console.log("Toplam",total)
 
 
 function sumArrayValues(array){
 
     console.log(array)
 }
 
 let array1=[1,8,7,5,9]
 
 sumArrayValues(array1)
 
 
 
 function newFunction(array){
    let total=0
    for(let i=0; i<array.length; i++){
     total+=array[i]
    }
    return total
 }
 
 let dizi=[4,8,5,7,4,2,3]
 
 console.log( "Toplam",newFunction(dizi))
 
   
 function topla(){
     let total=0
 
     for(let i=0; i<arguments.length; i++){
         total+=arguments[i]
     }
 
     return total
 }
 
 console.log(topla(5,8,7,48,7,9,6))
 
 
 const sayHello=function(name){
 
     return `Hello ${name}`
 
 }
 
 console.log(sayHello("Emre"))
 
 
 ;(function(){
     console.log("Kendi kendini çağıran fonksiyon")
 })()
 
 
 
 let Merhabalar=(function(name){
     console.log(`Merhabalarrr ${name}`)
 })("Buse")
 
 
 function Hi(name, surname)
 {
     return `Hi ${name} ${surname}`
 }
 
 console.log(Hi("Emre","Demir"))
 
 const arrayfunction=(name,surName)=>{
 
     return `Merhablar ${name} ${surName}`
 
 }
 
 console.log(arrayfunction("Sayın","Demir"))
 
 
 
 const toplama2=(...numbers)=>{
 
     console.log(numbers)
   
 
 }
 toplama2(4,8,7);
 
 function multiply(num1=8,num2=9,num3=1){
     return num1+num2+num3;
 }
 
 console.log(multiply(5,2,12))