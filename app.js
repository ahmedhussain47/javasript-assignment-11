// function square(a,b)
// {
//     x = Math.pow(a,b);
//     document.write(x)
// }
// square(2,3)

// document.write("<br><br>")
// function leapYear(year)
// {
//   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }
//     var year = window.prompt("Enter Year to find leap year or not")
//     if(leapYear(year))
//         document.write("The given year is a leap year");
//     else
//         document.write("The given year is not a leap year");

// var x = +prompt("Enter the obtained marks in first subject") 
 // var y = +prompt("Enter the obtained marks in second subject") 
 // var z = +prompt("Enter the obtained marks in third subject") 
  
 // function main() { 
 //     var j = avg(x,y,z); 
 //     var h = perc(x,y,z); 
 //     document.write( j + " is the average") 
 //     document.write( h + " is the percentage") 
  
 // } 
 // function avg(a,b,c) { 
 //     var f = (a+b+c) / 3 ; 
 //     return f; 
 // } 
 // function perc(a,b,c) { 
 //     var g = (a+b+c) / 300 * 100 ; 
 //     return g ; 
 // } 
//  flag=false
// function indexof(user,find){
//     for(var i=0; i < user.length; i++){
//         if(user[i]===find){
// alert([i])
//         }
//        flag=true
       

//     }

//     if(flag ===false){
//         alert(-1)
//     }
// }

// indexof("ahmed","o")

// function remVowel(str)
// {
//     let al = [ 'a', 'e', 'i', 'o', 'u',
//                'A', 'E', 'I', 'O', 'U' ];
//     let result = "";
     
//     for(let i = 0; i < str.length; i++)
//     {
         
//         if (!al.includes(str[i]))
//         {
//             result += str[i];
//         }
//     }
//     return result;
// }
 
// // Driver code
// let str = "Muhammad Ahmed Raza Hussain";
// document.write(remVowel(str));
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity Such occurrences are ea, ea, ui";
//     var res = str.match(/[aeiou]{2}/g);
//     return res ? res.length : 0;
//   }
  
//   var found = findOccurrences();
  
//   console.log(found);

// function distance(){
//     b = a * 1000;
//     c = b * 3.28;
//     d = c * 12;
//     f = d * 30;
//     document.write ("Distance in meters ",b);
//     document.write ("Distance in feets ",c);
//     document.write ("Distance in inches ",d);
//     document.write ("Distance in centimeters ",f);
//     }
//     distance()

// function overtime(i,hr, bonus){
// 	for(i = 1 ; i <= 10 ; i++) 
// 	{
// 		hr = +prompt("Enter the working hour of the employ : ");
		
// 		if(hr>40)
// 		{
// 			bonus = (hr - 40)*12;
// 			document.write("Rs. is the bonus of the employ.", + bonus);
// 		}
// 		else
// 			document.write("This employ has not done overtime.");
// 	}
// 	return 0
// }
// overtime()


// function cash(){ 
//        var currency=prompt("Enter Cash"); 
//         
//        console.log(currency[0]+" "+"100 notes") 
//        if(currency[1]<5){ 
//          console.log(currency[1]+"10 notes") 
//           
//        } 
//        else  { 
//           
//          console.log("1"+" "+"50 note" ) 
//          document.write("<br>") 
//          console.log((currency[1]-5)+" "+"10 note") 
//         
//        } 
//        
//      } 
//      cash();