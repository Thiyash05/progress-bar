//progress bar

let insidebar=document.getElementById("bar");
let para=document.getElementById("download");
let barwidth=0;

let load=()=>{
	barwidth++;
	insidebar.style.width=`${barwidth}%`
	
	setTimeout(()=>{
		para.innerHTML=(barwidth==100)? `${barwidth}% download complete` : `${barwidth}% downloading`
	})
}
load()


	let intervalid=setInterval(()=>{
		if(barwidth==100){
			clearInterval(intervalid)
		}
		else{
			load()
		}
	},100)
	
