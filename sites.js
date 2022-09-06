const data = [
	{site: 'https://gleimoura.github.io/fashionProject/', text: 'Projeto de uma loja que fabrica roupas personalizáveis que utiliza HTML e CSS.', title: 'FashionDriven'},
	{site: 'https://gleimoura.github.io/projeto3-driveneats/', text: 'Projeto que visou desenvolver um site de pedido de comidas rápidas utilizando JavaScript, HTML e CSS', title: 'DrivenEats'},
	{site: 'https://gleimoura.github.io/projeto4-parrotscardgame/', text: 'Um jogo da memória temático com aleatoridade, efeitos e transição, responsividade e papagaios dançantes para trabalhar JS', title: 'Parrots Card Game'},
	{site: 'https://gleimoura.github.io/projeto6-buzzquiz/', text: 'Projeto trabalhado em dupla para desenvolver um site de quizzes que utiliza uma API pública para os estudantes da Driven.', title: 'BuzzQuizz'},
	{site: 'https://projeto9-cineflex-self-kappa.vercel.app/', text: 'Projeto que visou desenvolver um site', title: 'CineFlex'},
	{site: 'https://gleimoura.github.io/projeto5-batepapo-uol/', text: 'Site inspirado no saudoso Bate Papo Uol para trabalhar conceitos de JavaScript', title: 'Pate Papo Uol'},
];

function putSitesOnScreen() {
	const sites = document.querySelector(".allSites");
	for (let i = 0; i < data.length; i++) {
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
		`
	};
};

putSitesOnScreen()