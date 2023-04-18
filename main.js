
document.querySelector(".download").addEventListener("click",()=>{
	let link = document.querySelector(".linkOfVideo").value;
		const data = {
			"url": `${link}`
		};
		
		fetch('https://save-from.net/api/convert', {
		  method: 'POST', // or 'PUT'
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
		})
		  .then((response) => response.json())
		  .then((data) => {
			const AllUrls = data.url;

			console.log(data);

			showAllUrls(data.hosting,AllUrls,data.thumb,data.meta.title,data.id);

		})
		


		// https://apiyt.com/iframe/?vid=vI2L0ADzziI

		// fetch(`https://api.snappea.com/v1/video/details?url=${link}`, {
		//   method: 'GET', // or 'PUT'
		//   headers: {
		// 	'Content-Type': 'application/json',
		//   },
		// })
		//   .then((response) => response.json())
		//   .then((data) => {
		// 	console.log(data.videoInfo);
		// })
		// .catch((error) => {
		// 	console.error('Error:', error);
		// });







})




function showAllUrls(isFacebook,AllUrls,img,title,id){
	


	if(isFacebook=="facebook.com"){



		document.querySelector(".LinksDad").innerHTML=`
	
		<img src="${img}" alt="" style="width: 80%; margin: 0 auto 30px auto; border-radius: 20px;">
		<br>
		<h1 style="text-align: center;">Video From Facebook</h1>
		<br>
		<br>
		
		`;


		AllUrls.forEach((e) => {

			if(e.type=="mp4"){
	
				let x = parseInt(e.filesize);
				
				document.querySelector(".LinksDad").innerHTML+=`
				<div style="margin: 10px 0px; min-width: 200px; display: flex; justify-content: center;">
	
					<a href="${e.url}" class="Link">${e.subname}.${e.type}</a>
				</div>
				`
	
			};
	
		});
	} else {



		document.querySelector(".LinksDad").innerHTML=`
	
		<img src="${img}" alt="" style="width: 80%; margin: 0 auto 30px auto; border-radius: 20px;">
		<br>
		<h1 style="text-align: center;">${title}</h1>
		<br>
		<iframe rel="nofollow" style="display: none!important; width:200px; height:35px; border:none; border-radius: 6px; display:block;" src="https://apiyt.com/iframe/?vid=${id}"></iframe>
		<br>
		
		`;

		AllUrls.forEach((e) => {

			if(e.attr.class==""&&e.type=="mp4"){
	
				let x = parseInt(e.filesize);
				
				document.querySelector(".LinksDad").innerHTML+=`
				<div style="margin: 10px 0px; min-width: 200px; display: flex; justify-content: center;">
	
					<a href="${e.url}" class="Link">${e.quality}p${!isNaN(x)?"_"+parseInt(x/1000000)+"MB":""}.${e.type} ${e.attr.class}</a>
				</div>
				`
	
			};
	
		});

	};



	
};

