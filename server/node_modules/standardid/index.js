module.exports = class{
  constructor(blueprint){
    this.specifiers = {
      "A":"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "a":"abcdefghijklmnopqrstuvwxyz",
      "0":"0123456789"
    }
    this.blueprint = blueprint;
  }

  generate(){
    if(this.blueprint.length==0 || this.blueprint==undefined){
      throw new Error('There is no blueprint')
    }

    let generated = ""

    this.blueprint.split("").forEach(current => {
      if(this.specifiers[current]==undefined){
        generated += current;
      } else {
        generated += this.specifiers[current].charAt(Math.floor(Math.random() * this.specifiers[current].length))
      }
    })

    return generated;
  }
}
