/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'FutureGlyphs\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-futurecom': '&#xe600;',
		'icon-blog': '&#xe601;',
		'icon-app': '&#xe602;',
		'icon-home': '&#xe603;',
		'icon-menu': '&#xe604;',
		'icon-en': '&#xe605;',
		'icon-es': '&#xe606;',
		'icon-pt': '&#xe607;',
		'icon-mapa': '&#xe608;',
		'icon-compartilhar': '&#xe670;',
		'icon-nova-janela': '&#xe60c;',
		'icon-seta-cima': '&#xe60d;',
		'icon-seta-direita': '&#xe60e;',
		'icon-seta-baixo': '&#xe60f;',
		'icon-seta-esquerda': '&#xe610;',
		'icon-seta-horario-cima': '&#xe611;',
		'icon-seta-horario-direita': '&#xe612;',
		'icon-seta-horario-esquerda': '&#xe613;',
		'icon-seta-anti-horario-cima': '&#xe614;',
		'icon-seta-horario-baixo': '&#xe615;',
		'icon-seta-anti-horario-direita': '&#xe616;',
		'icon-seta-anti-horario-esquerda': '&#xe617;',
		'icon-seta-anti-horario-baixo': '&#xe618;',
		'icon-seta-horario-cima-02': '&#xe6b7;',
		'icon-seta-horario-direita-02': '&#xe6b8;',
		'icon-seta-horario-baixo-02': '&#xe6b9;',
		'icon-seta-horario-esquerda-02': '&#xe6ba;',
		'icon-seta-anti-horario-cima-02': '&#xe6bb;',
		'icon-seta-anti-horario-direita-02': '&#xe6bc;',
		'icon-seta-anti-horario-baixo-02': '&#xe6bd;',
		'icon-seta-anti-horario-esquerda-02': '&#xe6be;',
		'icon-seta-diagonal-cima-direita': '&#xe619;',
		'icon-seta-diagonal-cima-esquerda': '&#xe61a;',
		'icon-seta-diagonal-baixo-direita': '&#xe61b;',
		'icon-seta-diagonal-baixo-esquerda': '&#xe61c;',
		'icon-download': '&#xe61d;',
		'icon-upload': '&#xe61e;',
		'icon-maximizar': '&#xe61f;',
		'icon-minimizar': '&#xe620;',
		'icon-setas-circulo': '&#xe621;',
		'icon-check': '&#xe622;',
		'icon-tres-tracos': '&#xe623;',
		'icon-seta-cima-02': '&#xe624;',
		'icon-seta-direita-02': '&#xe625;',
		'icon-seta-baixo-02': '&#xe626;',
		'icon-seta-esquerda-02': '&#xe627;',
		'icon-dowload-02': '&#xe628;',
		'icon-seta-cima-03': '&#xe629;',
		'icon-seta-direita-03': '&#xe62a;',
		'icon-seta-baixo-03': '&#xe62b;',
		'icon-seta-esquerda-03': '&#xe62c;',
		'icon-seta-esquerda-04': '&#xe671;',
		'icon-seta-direita-04': '&#xe672;',
		'icon-triangulo-cima': '&#xe62d;',
		'icon-triangulo-direita': '&#xe62e;',
		'icon-triangulo-baixo': '&#xe62f;',
		'icon-triangulo-esquerda': '&#xe630;',
		'icon-triangulos-vertical': '&#xe631;',
		'icon-triangulo-cima-02': '&#xe632;',
		'icon-triangulo-direita-02': '&#xe633;',
		'icon-triangulo-baixo-02': '&#xe634;',
		'icon-triangulo-esquerda-02': '&#xe635;',
		'icon-triangulos-vertical-02': '&#xe63a;',
		'icon-triangulo-cima-03': '&#xe636;',
		'icon-triangulo-direita-03': '&#xe637;',
		'icon-triangulo-baixo-03': '&#xe638;',
		'icon-triangulo-esquerda-03': '&#xe639;',
		'icon-xis': '&#xe609;',
		'icon-xis-02': '&#xe6b4;',
		'icon-mais': '&#xe60a;',
		'icon-mais-02': '&#xe6b5;',
		'icon-menos': '&#xe60b;',
		'icon-menos-02': '&#xe6b6;',
		'icon-estrela': '&#xe63b;',
		'icon-estrela-02': '&#xe63c;',
		'icon-coracao': '&#xe63d;',
		'icon-coracao-02': '&#xe63e;',
		'icon-info': '&#xe652;',
		'icon-info-02': '&#xe675;',
		'icon-exclamacao': '&#xe653;',
		'icon-exclamacao-02': '&#xe676;',
		'icon-flamula': '&#xe654;',
		'icon-flamula-02': '&#xe677;',
		'icon-flamula-estrela-02': '&#xe678;',
		'icon-flamula-03': '&#xe656;',
		'icon-sino': '&#xe650;',
		'icon-sino-02': '&#xe674;',
		'icon-cruz': '&#xe64c;',
		'icon-cruz-02': '&#xe6aa;',
		'icon-pino': '&#xe66a;',
		'icon-pin-02': '&#xe67e;',
		'icon-homem': '&#xe65b;',
		'icon-homem-02': '&#xe67f;',
		'icon-homem-mais': '&#xe680;',
		'icon-homem-menos': '&#xe681;',
		'icon-homem-gravata': '&#xe65c;',
		'icon-figura-homem': '&#xe682;',
		'icon-figura-mulher': '&#xe683;',
		'icon-homem-mulher': '&#xe684;',
		'icon-cadeira-rodas': '&#xe685;',
		'icon-gravida': '&#xe686;',
		'icon-idoso': '&#xe687;',
		'icon-massagem': '&#xe6ab;',
		'icon-velocimetro': '&#xe679;',
		'icon-tabela': '&#xe67a;',
		'icon-documento': '&#xe63f;',
		'icon-lupa': '&#xe65a;',
		'icon-clipe': '&#xe640;',
		'icon-lapis': '&#xe641;',
		'icon-lapis-02': '&#xe6c1;',
		'icon-lixeira': '&#xe642;',
		'icon-lixeira-02': '&#xe6c2;',
		'icon-disquete': '&#xe6bf;',
		'icon-disquete-02': '&#xe6c0;',
		'icon-proibido': '&#xe643;',
		'icon-nuvem': '&#xe644;',
		'icon-nuvem-download': '&#xe645;',
		'icon-nuvem-upload': '&#xe646;',
		'icon-globo': '&#xe647;',
		'icon-impressora': '&#xe648;',
		'icon-maquina-escrever': '&#xe649;',
		'icon-flipchart': '&#xe6ac;',
		'icon-engrenagem': '&#xe64a;',
		'icon-engrenagem-02': '&#xe673;',
		'icon-salva-vidas': '&#xe67b;',
		'icon-escudo': '&#xe67c;',
		'icon-cadeado': '&#xe64b;',
		'icon-cadeado-02': '&#xe6ad;',
		'icon-pasta': '&#xe64d;',
		'icon-pasta-mais': '&#xe64e;',
		'icon-pasta-menos': '&#xe64f;',
		'icon-link': '&#xe651;',
		'icon-flamula-estrela': '&#xe655;',
		'icon-calendario': '&#xe669;',
		'icon-relogio': '&#xe668;',
		'icon-telefone': '&#xe660;',
		'icon-celular': '&#xe662;',
		'icon-sim-card': '&#xe6c3;',
		'icon-sim-card-02': '&#xe6c4;',
		'icon-computador': '&#xe66c;',
		'icon-envelope': '&#xe663;',
		'icon-envelope-02': '&#xe664;',
		'icon-etiqueta': '&#xe67d;',
		'icon-grafico': '&#xe66d;',
		'icon-grafico-02': '&#xe66e;',
		'icon-grafico-03': '&#xe66f;',
		'icon-balao': '&#xe657;',
		'icon-balao-02': '&#xe658;',
		'icon-balao-voip': '&#xe659;',
		'icon-aviao': '&#xe689;',
		'icon-onibus': '&#xe68a;',
		'icon-caminhao': '&#xe68b;',
		'icon-van': '&#xe68c;',
		'icon-carro': '&#xe68d;',
		'icon-taxi': '&#xe68e;',
		'icon-motocicleta': '&#xe68f;',
		'icon-segway': '&#xe690;',
		'icon-genie': '&#xe691;',
		'icon-carrinho': '&#xe692;',
		'icon-carrinho-02': '&#xe693;',
		'icon-ingresso': '&#xe65d;',
		'icon-ingresso-bts': '&#xe65e;',
		'icon-ingresso-congresso': '&#xe65f;',
		'icon-mala': '&#xe688;',
		'icon-credencial': '&#xe66b;',
		'icon-estande': '&#xe667;',
		'icon-microfone': '&#xe694;',
		'icon-fone': '&#xe695;',
		'icon-medalha': '&#xe696;',
		'icon-valize': '&#xe6ae;',
		'icon-escada-cima': '&#xe6af;',
		'icon-escada-baixo': '&#xe6b0;',
		'icon-cafe': '&#xe697;',
		'icon-bandeja': '&#xe698;',
		'icon-sapato': '&#xe6b1;',
		'icon-raio': '&#xe699;',
		'icon-bateria': '&#xe69a;',
		'icon-capacete': '&#xe69b;',
		'icon-caixa': '&#xe661;',
		'icon-cifrao': '&#xe665;',
		'icon-cifrao-02': '&#xe69c;',
		'icon-corneta': '&#xe666;',
		'icon-atomo': '&#xe6b2;',
		'icon-erlenmeyer': '&#xe6b3;',
		'icon-codigo-barras': '&#xe69d;',
		'icon-cartao-credito': '&#xe69e;',
		'icon-visa': '&#xe69f;',
		'icon-master': '&#xe6a0;',
		'icon-amex': '&#xe6a1;',
		'icon-facebook': '&#xe6a2;',
		'icon-twitter': '&#xe6a3;',
		'icon-youtube': '&#xe6a4;',
		'icon-instagram': '&#xe6a5;',
		'icon-flickr': '&#xe6a6;',
		'icon-linkedin': '&#xe6a7;',
		'icon-google-plus': '&#xe6a8;',
		'icon-pdf': '&#xe6a9;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
