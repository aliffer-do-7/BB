var _paq_pars = {	siteId : '184',	urlPiwik : 'eni.bb.com.br/eni2',	customVars : [ {		chave : 'appId',		valor : 'atc-conta',		idx : 1	}, {		chave : 'versao-gcs',		valor : '3.9.11',		idx : 2	} ]};var _paq_pars_default = {
	siteId : "48",
	urlPiwik : 'piwik.labbs.com.br',
	customVars : [ {
		chave : "dominio",
		valor : location.host,
		idx : 1
	} ]
}
var _paq_pars = _paq_pars || _paq_pars_default;

try {

	// script padrao inicial do piwik
	var _paq = _paq || [];
	for ( var c in _paq_pars.customVars) {
		_paq.push([ 'setCustomVariable', _paq_pars.customVars[c].idx,
				_paq_pars.customVars[c].chave, _paq_pars.customVars[c].valor,
				'page' ]);
	}
	_paq.push([ 'trackPageView' ]);
	_paq.push([ 'enableLinkTracking' ]);
	(function() {
		var u = "//" + _paq_pars.urlPiwik + "/";
		_paq.push([ 'setTrackerUrl', u + 'piwik.php' ]);
		_paq.push([ 'setSiteId', _paq_pars.siteId ]);
		var d = document, g = d.createElement('script'), s = d
				.getElementsByTagName('script')[0];
		g.type = 'text/javascript';
		g.async = true;
		g.defer = true;
		g.src = u + 'piwik.js';
		s.parentNode.insertBefore(g, s);
	})();

	window.addEventListener('hashchange', function() {
		_paq.push([ 'setCustomUrl', location.href ]);
		_paq.push([ 'deleteCustomVariables', 'page' ]);
		for ( var c in _paq_pars.customVars) {
			_paq.push([ 'setCustomVariable', _paq_pars.customVars[c].idx,
					_paq_pars.customVars[c].chave,
					_paq_pars.customVars[c].valor, 'page' ]);
		}
		_paq.push([ 'setGenerationTimeMs', 0 ]);
		_paq.push([ 'trackPageView' ]);
	});

} catch (e) {
	console.log(e);
}