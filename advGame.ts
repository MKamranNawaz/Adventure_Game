import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.yellow.italic("Tom & Jerry"));
class Tom {
  name:string;
  energy:number=100

  constructor(name:string){
    this.name=name
  }
  energyDecrese(){
    this.energy = this.energy-25
    this.energy = this.energy
  }

  energyIncrease(){
    this.energy= 100
  }
}

class Jerry {
  name:string;
  energy:number=100

  constructor(name:string){
    this.name=name
  }
 energyDecrese(){
  this.energy= this.energy-25
  this.energy=this.energy
 }

 energyIncrease(){
  this.energy= 100
 }
}

let T1 = new Tom(Tom.name)
let J1 = new Jerry(Jerry.name)
do{
  let answer= await inquirer.prompt({
    type:"list",
    choices:["Tom","Jeery"],
    name:"play",
    message:"Select any one chararacter"
 })
 if(answer.play =="Tom"){
  let Tom = await inquirer.prompt({
    type:"list",
    name:"select",
    message:"Select any one:",
    choices:["Drink milk","talking with Tomes","fight"]
   })
   
    if(Tom.select == "Drink milk"){
    T1.energyIncrease()
    console.log(`${chalk.green.bold.italic(T1.name)} energy is ${chalk.green.bold.italic(T1.energy)}`);
    }
    if(Tom.select == "talking with Tomes"){
      console.log(chalk.green.italic("Tom Smiles hi hi hi")); 
    }
    if(Tom.select=="fight"){
      let num =Math.floor(Math.random() *2)
       if(num > 0){
        T1.energyDecrese()
         console.log(`${chalk.gray.bold.italic(T1.name)} energy =  ${chalk.gray.bold.italic(T1.energy)}`);
         console.log(`${chalk.gray.bold.italic(J1.name)} energy =  ${chalk.gray.bold.italic(J1.energy)}`); 
         process.exit()       
        }
       if(num <= 0){
        J1.energyDecrese()
       console.log(`${chalk.green.bold.italic(J1.name)} energy = ${chalk.green.bold.italic(J1.energy)}`);
       console.log(`${chalk.green.bold.italic(T1.name)} energy = ${chalk.green.bold.italic(T1.energy)}`);
       process.exit() 
      }
    }
  }
 if (answer.play == "Jeery"){
  let ans1= await inquirer.prompt({
    type:"list",
    name:"select",
    message:"Select any one",
    choices:["Napping" , "irritating the Tom" , "Eating Cheez"]
   })
   if(ans1.select== "Napping"){
    console.log(chalk.blue.bold("No Go Zone!"));
   }
   if(ans1.select=="irritating the Tom"){
    let num =Math.floor(Math.random() *2)
       if(num > 0){
        T1.energyDecrese()
        console.log(`${chalk.gray.bold.italic(T1.name)} energy =  ${chalk.gray.bold.italic(T1.energy)}`);
        console.log(`${chalk.gray.bold.italic(J1.name)} energy =  ${chalk.gray.bold.italic(J1.energy)}`); 
         process.exit()       
        }
       if(num <= 0){
        J1.energyDecrese()
        console.log(`${chalk.green.bold.italic(J1.name)} energy = ${chalk.green.bold.italic(J1.energy)}`);
        console.log(`${chalk.green.bold.italic(T1.name)} energy = ${chalk.green.bold.italic(T1.energy)}`);
      }
    }
   if(ans1.select=="Eating Cheez"){
    J1.energyIncrease()
   console.log(`${chalk.green.bold.italic(J1.name)} energy is ${chalk.green.bold.italic(J1.energy)}`);
   process.exit() 
  }
 }
}
while(true)