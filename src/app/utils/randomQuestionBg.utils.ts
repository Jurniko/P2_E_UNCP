export function randomQuestionBg() : string{
   let result : string ;

   let images =[
     "background-image: url('assets/sala/questions/gato-bg.svg')",
     "background-image: url('assets/sala/questions/sofa-bg.svg')",
     "background-image: url('assets/sala/questions/raton-bg.svg')",
     "background-image: url('assets/sala/questions/hojas-bg.svg')",
     "background-image: url('assets/sala/questions/mar-bg.svg')",
     "background-image: url('assets/sala/questions/verano-bg.svg')",
     //----//
     "background-image: url('assets/sala/questions/hojas-bg.svg')",
     "background-image: url('assets/sala/questions/sofa-bg.svg')",
     "background-image: url('assets/sala/questions/verano-bg.svg')",
   ]

   result = images[Math.floor(Math.random() * 10)]

   return result;

}
