const data = [
	{site: 'https://gleimoura.github.io/fashionProject/', text: 'Projeto de uma loja que fabrica roupas personalizáveis que utiliza HTML e CSS.', title: 'FashionDriven'},
	{site: 'https://gleimoura.github.io/projeto3-driveneats/', text: 'Projeto que visou desenvolver um site de pedido de comidas rápidas utilizando JavaScript, HTML e CSS', title: 'DrivenEats'},
	{site: 'https://gleimoura.github.io/projeto4-parrotscardgame/', text: 'Um jogo da memória temático com aleatoridade, efeitos e transição, responsividade e papagaios dançantes para trabalhar JS', title: 'Parrots Card Game'},
	{site: 'https://gleimoura.github.io/projeto6-buzzquiz/', text: 'Projeto trabalhado em dupla para desenvolver um site de quizzes que utiliza uma API pública para os estudantes da Driven.', title: 'BuzzQuizz'},
	{site: 'https://projeto9-cineflex-self-kappa.vercel.app/', text: 'Single-Page Application (SPA) para um cinema, usando React Router!', title: 'CineFlex'},
	{site: 'https://projeto8-zaprecall-six-xi.vercel.app/', text: 'Flashcards são cartões de contém uma pergunta/afirmação na sua frente e uma resposta atrás. O projeto utilizou React para desenvolver o front-end.', title: 'Zap Recall'},
	{site: 'https://projeto10-trackit-psi-pink.vercel.app/', text: 'Aplicação completa de acompanhamento de hábitos! Com direito a cadastro, login e muitas bibliotecas! Utiliza React com ContextAPI para armazenar dados de usuário.', title: 'Track It'}, 
	{site: 'https://gleimoura.github.io/projeto11-tweteroo-front/', text: 'Projeto para construir uma API Rest simpres com deploy no Render.', title: 'Tweteroo front-end', backLink:'https://github.com/gleiMoura/projeto11-tweteroo', backText:'Tweteroo Back-end'}, 
	{site: 'https://projeto13-mywallet-front-six-sigma.vercel.app/', text: 'Aplicação FULLSTACK de um organizador financeiro que utiliza REACT no front, API Rest com Express no back e MONGODB no banco de dados!', title: 'My Wallet', backLink:'https://github.com/gleiMoura/projeto13-mywallet-back', backText:'Mywallet Back-end'},
	{site: 'https://projeto14-sapatin-front.vercel.app/', text: 'Projeto de um ecommerce de calçados que utiliza REACT no front, API Rest com Express no back e MONGODB no banco de dados!', title: 'Sapatin', backLink:'https://github.com/gleiMoura/projeto14-sapatin-back', backText:'Sapatin Back-end'}, 
	{site: 'https://github.com/gleiMoura/projeto18-valex', text: 'Projeto com TypeScript que cria uma API de cartões de benefícios. A API é responsável pela criação, recarga, ativação, assim como o processamento de compras. A API PostgreSQL no banco de dados.', title: 'Valex'},
	{site: 'https://github.com/gleiMoura/Drivenpass', text: 'Neste projeto desenvolvi um gerenciador de senha que utiliza Arquitetura em Camadas (controllers, middlewares, repositories, router, services), assim como a ORM Prisma. Possui documentação no Readme.', title: 'DrivenPass'},

];

function putSitesOnScreen() {
	const sites = document.querySelector(".allSites");
	for (let i = 0; i < data.length; i++) {
		if(data[i].backLink === undefined) {
			sites.innerHTML = sites.innerHTML + `
			<a href=${data[i].site} class="site">
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
		}else{
			sites.innerHTML = sites.innerHTML + `
			<a href=${data[i].site} class="site">
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
			<a href=${data[i].backLink} class="site">
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