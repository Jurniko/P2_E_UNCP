import { Problem } from "../interfaces/problem.interface"
import { Questions } from "../interfaces/questions.interface";

/*
*
* selectAlternatives, structure :
* {
*   question1: value,
*   question2: value,
*   question3: value,
*   question4: value,
* }
*
* value = id of alternative
*
* questions_id = id of question
*
*/
export function extractCorrectAternatives( questions : Questions[],selectedAlternatives: any) : string[]{
  let questions_id:string[]=[]
  let count = 0 ;
  for(let question of questions){
    count ++
    for(let alternative of question.alternatives){
      let alternativeSelect:number = Number(selectedAlternatives["question"+String(count)])

      if( alternativeSelect == alternative.id && alternative.is_correct ){
        questions_id.push(String(question.id))
      }
    }
  }
  return questions_id;
}
