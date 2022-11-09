const data = [
	{site: 'https://gleimoura.github.io/fashionProject/', text: 'Projeto de uma loja que fabrica roupas personalizáveis que utiliza HTML e CSS.', title: 'FashionDriven'},
	{site: 'https://gleimoura.github.io/projeto3-driveneats/', text: 'Projeto que visou desenvolver um site de pedido de comidas rápidas utilizando JavaScript, HTML e CSS', title: 'DrivenEats'},
	{site: 'https://gleimoura.github.io/projeto4-parrotscardgame/', text: 'Um jogo da memória temático com aleatoridade, efeitos e transição, responsividade e papagaios dançantes para trabalhar JS', title: 'Parrots Card Game'},
	{site: 'https://projeto9-cineflex-self-kappa.vercel.app/', text: 'Single-Page Application (SPA) para um cinema, usando React Router!', title: 'CineFlex'},
	{site: 'https://projeto8-zaprecall-six-xi.vercel.app/', text: 'Flashcards são cartões de contém uma pergunta/afirmação na sua frente e uma resposta atrás. O projeto utilizou React para desenvolver o front-end.', title: 'Zap Recall'},
	{site: 'https://projeto10-trackit-psi-pink.vercel.app/', text: 'Aplicação completa de acompanhamento de hábitos! Com direito a cadastro, login e muitas bibliotecas! Utiliza React com ContextAPI para armazenar dados de usuário.', title: 'Track It'}, 
	{site: 'https://gleimoura.github.io/projeto11-tweteroo-front/', text: 'Projeto para construir uma API Rest simpres com deploy no Render.', title: 'Tweteroo front-end', backLink:'https://github.com/gleiMoura/projeto11-tweteroo', backText:'Tweteroo Back-end'}, 
	{site: 'https://projeto14-sapatin-front.vercel.app/', text: 'Projeto de um ecommerce de calçados que utiliza REACT no front, API Rest com Express no back e MONGODB no banco de dados!', title: 'Sapatin', backLink:'https://github.com/gleiMoura/projeto14-sapatin-back', backText:'Sapatin Back-end'}, 
	{backLink: 'https://github.com/gleiMoura/projeto18-valex', text: 'Projeto com TypeScript que cria uma API de cartões de benefícios. A API é responsável pela criação, recarga, ativação, assim como o processamento de compras. Usa PostgreSQL no banco de dados.', backText: 'Valex'},
	{backLink: 'https://github.com/gleiMoura/Drivenpass', text: 'Neste projeto desenvolvi um gerenciador de senha que utiliza Arquitetura em Camadas (controllers, middlewares, repositories, router, services), assim como a ORM Prisma.', backText: 'DrivenPass'},

];

function putSitesOnScreen() {
	const sites = document.querySelector(".portfolio__sites");
	for (let i = 0; i < data.length; i++) {
		if(data[i].backLink === undefined) {
			sites.innerHTML = sites.innerHTML + `
			<a href=${data[i].site} class="portfolio__site" target="_blanck">
				<h1>${data[i].title}</h1>
				<video
					width="320" 
					height="240" 
					autoplay 
					loop
					preload=''
					muted
				>
  				<source src='images/videos/video${i}.mp4' type="video/mp4">
					Your browser does not support the video tag.
				</video>
				<div class="text">
					<p>${data[i].text}</p>
				</div>
			</a>`
		}else if(data[i].site === undefined){
			sites.innerHTML = sites.innerHTML + 
			`<a href=${data[i].backLink} class="portfolio__site" target="_blanck">
				<h1>${data[i].backText}</h1>
				<img src='images/siteImage${i}.png' alt=${data[i].backText}/>
				<div class="text">
					<p>${data[i].text}</p>
				</div>
			</a>`
		}else{
			sites.innerHTML = sites.innerHTML + `
			<a href=${data[i].site} class="portfolio__site" target="_blanck">
				<h1>${data[i].title}</h1>
				<video
					width="320" 
					height="240" 
					autoplay 
					loop
					preload=''
					muted
				>
  				<source src='images/videos/video${i}.mp4' type="video/mp4">
					Your browser does not support the video tag.
				</video>
				<div class="text">
					<p>${data[i].text}</p>
				</div>
			</a>
			<a href=${data[i].backLink} class="portfolio__site" target="_blanck">
				<h1>${data[i].backText}</h1>
				<img src='images/siteImage${i}.png' alt=${data[i].backText}/>
				<div class="text">
					<p>${data[i].text}</p>
				</div>
			</a>`
		} 
	};
};

putSitesOnScreen();