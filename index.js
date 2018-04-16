
function makeExcuse() {
let dog = ['dog','spider','chinchilla','hamster','parrot','iguanna','cat','girlfriend','boyfriend','evil step-sister','private butler','neighbor','rabbit']

let ate = ['live-tweeted','live-streamed','youtubed','snapchatted','instagramed','downvoted','confiscated','plagiarised','fossilized','ebayed','uploaded','burned','swallowed']

let homework = ['dreams','graduation photos','private diary','fried chicken','prom pictures','candle collection'] 

let who = dog[findIndexOf(dog)]; 
let did = ate[findIndexOf(ate)]; 
let what = homework[findIndexOf(homework)]

document.getElementById("excuses").innerHTML = "<div> Sorry but <br>" + "My " + who + " " + did + "<br>my " + what + ".<br>"


}

function findIndexOf(word) {
  
  return Math.floor(Math.random() * word.length)
  
}