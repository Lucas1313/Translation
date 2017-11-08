
var copydir = require('copy-dir');

	// //NOT AVAILABLE YET
	try { copydir.sync('./Target-Czech (Czech-Republic)/en-us', './i18n/cs-cz/');} catch(err){ copydir.sync('./i18n/en-us', './i18n/cs-cz/'); };
	try { copydir.sync('./Target-Danish (Denmark)/en-us', './i18n/da-dk/');} catch(err){ copydir.sync('./i18n/en-us', './i18n/da-dk/'); };

	// from GERMAN language to other
	copydir.sync('./Target-German (Germany)/en-us', './i18n/de-de/');
	copydir.sync('./i18n/de-de', './i18n/de_at/');
	copydir.sync('./i18n/de-de', './i18n/de-ch/');
	copydir.sync('./i18n/de-de', './i18n/de-lu/');

	// from BRITISH ENGLISH language to other
	copydir.sync('./Target-English (United Kingdom)/en-us', './i18n/en-gb/');
	copydir.sync('./i18n/en-gb', './i18n/en-au/');
	copydir.sync('./i18n/en-gb', './i18n/en-ca/');
	copydir.sync('./i18n/en-gb', './i18n/en-hk/');
	copydir.sync('./i18n/en-gb', './i18n/en-ie/');
	copydir.sync('./i18n/en-gb', './i18n/en-il/');
	copydir.sync('./i18n/en-gb', './i18n/en-in/');
	copydir.sync('./i18n/en-gb', './i18n/en-my/');
	copydir.sync('./i18n/en-gb', './i18n/en-nz/');
	copydir.sync('./i18n/en-gb', './i18n/en-ph/');
	copydir.sync('./i18n/en-gb', './i18n/en-sg/');
	copydir.sync('./i18n/en-gb', './i18n/en-th/');
	copydir.sync('./i18n/en-gb', './i18n/en-za/');
	copydir.sync('./i18n/en-gb', './i18n/en-zw/');

	// NOT AVAILABLE YET Spanish argentina
	try { copydir.sync('./Target-Spanish (Argentina)/en-us', './i18n/es-ar/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/es-ar/'); };
	copydir.sync('./i18n/es-ar', './i18n/es-uy/');

	try { copydir.sync('./Target-Spanish (Colombia)/en-us', './i18n/es-co/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/es-co/'); };


	// from MEXICAN language to other
	copydir.sync('./Target-Spanish (Mexico)/en-us', './i18n/es-mx/');
	copydir.sync('./i18n/es-mx', './i18n/es-us/');

	// NOT AVAILABLE SPANISH DEFAULTING TO MEXICAN
	try { copydir.sync('./Target-Spanish (Spain)/en-us', './i18n/ca-es/');} catch(err){ copydir.sync('./i18n/es-mx/', './i18n/ca-es/'); };
	copydir.sync('./i18n/ca-es', './i18n/es-cl/');
	copydir.sync('./i18n/ca-es', './i18n/es-ec/');
	copydir.sync('./i18n/ca-es', './i18n/es-pe/');
	copydir.sync('./i18n/ca-es', './i18n/es-sv/');
	copydir.sync('./i18n/ca-es', './i18n/es-ve/');



	// NOT AVAILABLE YET
	try { copydir.sync('./Target-Finnish (Finland)/en-us', './i18n/fi-fi/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/fi-fi/'); };

	// from FRENCH language to other
	copydir.sync('./Target-French (France)/en-us', './i18n/fr-fr/');
	copydir.sync('./i18n/fr-fr', './i18n/fr_lu/');
	copydir.sync('./i18n/fr-fr', './i18n/fr-be/');

	copydir.sync('./Target-French (Canada)/en-us', './i18n/fr-ca/');

	// NOT AVAILABLE YET
	try { copydir.sync('./Target-Behasa (Indonesia)/en-us', './i18n/id-id/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/id-id/'); };
	try { copydir.sync('./Target-Japanese (Japan)/en-us', './i18n/ja-jp/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/ja-jp/'); };
	try { copydir.sync('./Target-Korean (Korea)/en-us', './i18n/ko-kr/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/ko-kr/'); };
	try { copydir.sync('./Target-Dutch (Belgium)/en-us', './i18n/nl-be/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/nl-be/'); };
	try { copydir.sync('./Target-Dutch (Netherlands)/en-us', './i18n/nl-nl/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/nl-nl/'); };
	try { copydir.sync('./Target-Norwegian (Norway)/en-us', './i18n/no-no/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/no-no/'); };
	try { copydir.sync('./Target-Polish (Poland)/en-us', './i18n/pl-pl/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/pl-pl/'); };

	copydir.sync('./Target-Portuguese (Portugal)/en-us', './i18n/pt-pt/');

	//NOT AVAILABLE DEFAULTING TO PORTUGESE PORTUGAL
	try { copydir.sync('./Target-Portugese (Brazil)/en-us', './i18n/pt-br/'); } catch(err){ copydir.sync('./i18n/pt-pt/', './i18n/pt-br/'); };

	// NOT AVAILABLE RUSSIAN
	try { copydir.sync('./Target-Russian (Russia)/en-us', './i18n/ru-ru/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/ru-ru/'); };
	copydir.sync('./i18n/ru-ru', './i18n/ru-ua/');

	try { copydir.sync('./Target-Swedish (Sweden)/en-us', './i18n/sv-se/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/sv-se/'); };
	try { copydir.sync('./Target-Thai (Thailand)/en-us', './i18n/th-th/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/th-th/'); };
	try { copydir.sync('./Target-Turkey (Turkish)/en-us', './i18n/tr-tr/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/tr-tr/'); };
	try { copydir.sync('./Target-Chinese (China)/en-us', './i18n/zh-cn/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/zh-cn/'); };

	//NOT AVAILABLE CHINESE (TRADITIONAL)
	try { copydir.sync('./Target-Chinese (Traditional) (Hong Kong)/en-us', './i18n/zh-hk/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/zh-hk/'); };
	try { copydir.sync('./i18n/zh-hk', './i18n/zh-tw/'); } catch(err){ copydir.sync('./i18n/en-us', './i18n/zh-tw/'); };

