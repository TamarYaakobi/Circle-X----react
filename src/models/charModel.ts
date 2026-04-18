export class charModel {
    value! : string 
    color !: string 
    isBold!: boolean
    fontSize! : number
   
    constructor( value : string , color : string , isBold: boolean, fontSize : number) {
      this.value=value,
      this.color=color,
      this.isBold=isBold,
        this.fontSize=fontSize

    }
}