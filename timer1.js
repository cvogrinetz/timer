const args = process.argv.slice(2)
let seconds = 1000;


for(let i = 0; i < args.length; i++) {

  if(args[i] < 0){
    return;
  } else if(isNaN(args[i])) {
    return;
  }
  
  setTimeout(() => {
    process.stdout.write(args[i] + ' seconds' + '\n')
    process.stdout.write("ALARM" + '\n') // This is supposed to be a beep.
  }, seconds * args[i])
}
  