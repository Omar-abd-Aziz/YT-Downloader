
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
			showAllUrls(AllUrls,data.thumb,data.meta.title);

		})
		.catch((error) => {
			console.error('Error:', error);
		});



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




function showAllUrls(AllUrls,img,title){
	document.querySelector(".LinksDad").innerHTML=`
	
	<img src="${img}" alt="" style="width: 80%; margin: 0 auto 30px auto; border-radius: 20px;">
	<br>
	<h1 style="text-align: center;">${title}</h1>
	<br>
	<br>
	
	`;
	AllUrls.forEach((e) => {

		if(e.attr.class==""){

			let x = parseInt(e.filesize);
			
			document.querySelector(".LinksDad").innerHTML+=`
			<div style="margin: 10px 0px; min-width: 200px; display: flex; justify-content: center;">
				<a href="${e.url}" class="Link">${e.quality}p${!isNaN(x)?"_"+parseInt(x/1000000)+"MB":""}.${e.type} ${e.attr.class}</a>
			</div>
			`

		}

	});
};

