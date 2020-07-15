import { Exam } from './Exam'
import { MCQChoice } from './MCQChoice'

export class Question{
    
    id : number
    title : string

    constructor(id : number = null, title : string = null){
        this.id = id
        this.title = title
    }   
}