
$(".video-url-video-overly").toggle();

let html="";
let htm2="";



let width=window.innerWidth;
if(width<=600)
{
	html=`	<div class="icons click-icons Home">
			<i class="fa-solid fa-house-chimney"></i>
			<h1>home</h1>
	</div>
<div class="icons click-icons About">
			<i style="font-size:23px;" class="bi bi-person-fill"></i>
		    <h1>About</h1>

	</div>
<div class="icons click-icons Portfolio">
			<i class="bi bi-briefcase-fill"></i>
		    <h1>Portfolio</h1>

	</div>
<div class="icons click-icons Contact">
			<i class="bi bi-envelope-open-fill"></i>
		    <h1>Contact</h1>

	</div>
`
$(".icon-small").html(html)
}
else
{
	htm2=`

	<div class="img-container click-icons Home">
		    <span class="background-items">home</span>
			<i class="fa-solid fa-house-chimney background-items"></i>
	</div>
<div class="img-container click-icons About">
		    <span class="background-items">About</span>
			<i style="font-size:23px;" class="bi bi-person-fill background-items"></i>
	</div>
<div class="img-container click-icons Portfolio">
		    <span class="background-items">Portfolio</span>
			<i class="bi bi-briefcase-fill background-items"></i>
	</div>
<div class="img-container click-icons Contact">
		    <span class="background-items">Contact</span>
			<i class="bi bi-envelope-open-fill background-items"></i>
	</div>`

	$(".icon-small").html(htm2);
}







let condastion=false;

$("#nav-toggle").click(()=>{

if(condastion !=true)
{
	condastion=true;
	$("#nav-bar").css({background:"rgba(0,0,0,0.9)"});
}
else{
	condastion=false;
	$("#nav-bar").css({background:"transparent"});

}
});



// ------slide-start-----------



// ------click-menu-items-start----------


$(".Home").click(()=>{
 setTimeout(()=>{
window.location.assign("index.html");
 $(".about-containar").css({display:"none"});
 $(".portfolio-containar").css({display:"none"});
 $(".contact-overly").css({display:"none"});
 },1300);
});

$(".About").click(()=>{
 setTimeout(()=>{
 	$(".about-containar").css({display:"block"});
     $(".home_containar").css({display:"none"});
 $(".portfolio-containar").css({display:"none"});
 $(".contact-overly").css({display:"none"});

 },1300)
});


$(".Portfolio").click(()=>{
 setTimeout(()=>{
 	$(".about-containar").css({display:"none"});
     $(".home_containar").css({display:"none"});
 $(".portfolio-containar").css({display:"block"});
 $(".contact-overly").css({display:"none"});

 },1300)
});


$(".Contact").click(()=>{
 setTimeout(()=>{
 	$(".about-containar").css({display:"none"});
     $(".home_containar").css({display:"none"});
 $(".portfolio-containar").css({display:"none"});
 $(".contact-overly").css({display:"block"});

 },1300)
});

// ------click-menu-items-end----------


$(".click-icons").click(()=>{
resetSlide();

	let slides=$(".click-slide").children();

     $(".slide-rows").toggle();

	setTimeout(()=>{
		$(slides[0]).css({top:"100%"});
	},200);
	setTimeout(()=>{
		$(slides[1]).css({top:"100%"});
	},400)
setTimeout(()=>{

		$(slides[2]).css({top:"100%"});
	},600)
	setTimeout(()=>{

		$(slides[3]).css({top:"100%"});

},800)
});


function resetSlide()
{
 $(".slide-rows").toggle();
 $(".slide-rows").css({top:"-100%"});
	
}

// ------slide-end-----------




// -------change-background-start-----------

let changeBackground=true

$(".change-background").click(()=>{

	if(changeBackground==true)
{
	changeBackground=false;
	$(".setting").toggle();
	$(".moon").toggle();
	$("body").css({background:"#fff",color:"#999"});
	$(".nav-toggle>i").css({color:"#000"});
	$(".rotate-icon").css({background:"#000",color:"#fff"});
	$(".color-items").css({color:"#999"});
	
	$(".input-items-co-bac").css({background:`rgba(225, 225, 225,0.5)`,color:`rgba(0, 0,0,0.5)`});
	$("#Message-Submit").css({color:"#999"});


	
}
else
{
	changeBackground=true;
	$(".setting").toggle();
	$(".moon").toggle();
	$("body").css({background:"rgba(0, 0, 0,0.9)",color:"#fff"});
	$(".nav-toggle>i").css({color:"#fff"});
	$(".rotate-icon").css({background:"#fff",color:"#000"})
	$(".color-items").css({color:"#fff"});
	$(".input-items-co-bac").css({background:`rgba(225, 225, 225,0.2)`,color:`#fff`});
	$("#Message-Submit").css({color:"#fff"});


    
}
});

// -------change-background-end-----------


// --------color-icon-start---------

$(".color-icon").click((event)=>{
	 let colorGet=$(event.target).attr("color");

	// alert(colorGet);

	$(".background-items").css({background:`${colorGet}`});
	$(".text-color").css({color:`${colorGet}`});
	$(".border-color").css({border:`2px solid ${colorGet}`});

})

// --------color-icon-end---------

// ---------show-and-hide-color-btn-start-----------

$("#show-colorBtn").click(()=>{
	$(".color-icons-items").toggle();
});
$("#close-colorBtn").click(()=>{
		$(".color-icons-items").toggle();

})


// ---------show-and-hide-color-btn-end-----------









// ----------skills-start--------


let skillsText=$(".Percentage");
let skillsBackground=$(".skills-show");

for(let i=0;i<skillsBackground.length;i++)
    {
 let skillBackground=$(skillsBackground[i]).attr("data")+"%";
      console.log(skillBackground);
     $(skillsBackground[i]).css({width:`${skillBackground}`});
      $(skillsText[i]).text(skillBackground);
}


// ----------skills-end--------




let videoinfo=[{"videoName":"online shoping",
	"project":"webside",
	"client":"pratice-project",
	"Langages":"HTML,CSS,JAYASCRIPT,JQERY,JSON",
	"PreView":"grocery-webside/index.html",
	"id":"1",
	"projectUrl":"file:///E:/grocery-webside/index.html",
    "videoUrl":"video/grocery.mp4"},

     {"id":"1",
     "videoName":"portfolio",
	"project":"webside",
	"client":"pratice-project",
	"Langages":"HTML,CSS,JAYASCRIPT,JQERY",
	"PreView":"grocery-webside/index.html",
	
	"projectUrl":"http://portfolio.html-5.me/?i=1",
    "videoUrl":"video/portfolio.mp4"},

	];


$(".video-CutBtn").click(()=>{
$(".video-url-video-overly").toggle();
	$(".change-background").toggle();


});



$(".work-video-overly").click((event)=>{
	let WorkId=$(event.target).attr("id");
	$(".change-background").toggle();
	$(".video-url-video-overly").toggle();

	let videoItems=videoinfo[WorkId];
console.log(videoItems)
let videoOverly= document.querySelector(".overly-video-detail");
videoOverly.innerHTML=videoinfoHtml(videoItems);
 let overlyBackground=$(".work-video-overly").css("background-color");
$(".text-color").css({color:`${overlyBackground}`});
});

    function videoinfoHtml(video)
    {
    	let videoIO="";
    	for(let i=0;i<1;i++)
    	{
    		videoIO+=`
			<div class="video-name text-color">
				${video.videoName}
			</div>
			<div class="video-detail">
				<div class="Project-detail">
				<i class="bi bi-file-earmark-text"></i> Project : <span> ${video.project} </span>	
				</div>

				<div class="Project-detail">
					 <i class="bi bi-person"></i> Client : <span> ${video.client} </span>
				</div>
				<div class="Project-detail">
				<i class="bi bi-code-slash"></i> Langages : <span> 	  ${video.Langages} </span>
				</div>

				<div class="Project-detail">
					 <i class="bi bi-box-arrow-up-right"></i> Preview: <span>  <a href=" ${video.projectUrl}" class=" prject-link text-color">${video.projectUrl}</a> 
					 </span>
				</div>
				
			</div>

			<div class="video-containar">

       <video  src="${video.videoUrl}" type="video/mp4" controls muted autoplay></video>
			</div>

		`
		// alert(video.videoUrl);
    	}
    	return videoIO; 
    }

