const listOfCities = [
'Abanillas',
'Abaño',
'Abiada',
'Abionzo',
'Acereda',
'Adal',
'Adino',
'Aes',
'Aguera',
'Aguero',
'Ahedo',
'Aja',
'Ajanedo',
'Ajo',
'Alar',
'Alceda',
'Aldano',
'Aldea de ebro',
'Aldueso',
'Aliezo',
'Alisas (Ampuero)',
'Alisas (Arredondo)',
'Allen del Hoyo',
'Allendelagua',
'Aloños',
'Ambrosero',
'Ampuero',
'Anaz',
'Ancillo',
'Anero',
'Angostina',
'Angustina',
'Aniezo',
'Aradillos',
'Arantiones',
'Arce',
'Arcera',
'Arenal',
'Arenas',
'Arenas de Iguña',
'Arenillas de Ebro',
'Areños',
'Argomilla',
'Argoños',
'Arguebanes',
'Argueso',
'Armaño',
'Arnuero',
'Arredondo',
'Arroyal',
'Arroyo (Las Rozas de Valdearroyo)',
'Arroyo (Santillana del Mar)',
'Arroyuelos',
'Ason (Arredondo)',
'Ason (Soba)',
'Astrana',
'Avellanedo',
'Azoños',
'Badames',
'Balbacienta',
'Baltezana',
'Barago',
'Baranda',
'Barcena (Camaleño)',
'Barcena (Santiurde de Toranzo)',
'Barcena de carriedo',
'Barcena de cicero',
'Barcena de cudon',
'Barcena de ebro',
'Barcena de Pie de Concha',
'Barcena Mayor',
'Barcenaciones',
'Barcenilla',
'Barcenillas',
'Bareyo',
'Baro',
'Barreda (Pesaguero)',
'Barreda (Torrelavega)',
'Barrio (Hermandad de Campoo de Suso)',
'Barrio (Vega de Liebana)',
'Barrio de Arriba',
'Barrio obrero',
'Barriopalacio (Anievas)',
'Barriopalacio (Valdeolea)',
'Barros',
'Barruelo',
'Beares',
'Bedico',
'Bejes',
'Belmonte',
'Beranga',
'Bercedo',
'Bernales',
'Besoy',
'Bielva',
'Bimon',
'Bodia',
'Bollacin',
'Bolmir',
'Boo (El Astillero)',
'Boo (Pielagos)',
'Bores',
'Borleña',
'Bostronizo',
'Brez',
'Bueras',
'Bulco',
'Bustablado',
'Bustaleguin',
'Bustamante',
'Bustancilles',
'Bustantegua',
'Bustasur (Luena)',
'Bustasur (Las Rozas de Valdearroyo)',
'Bustidoño',
'Bustillo del Monte',
'Bustiyerro',
'Bustriguado',
'Buyezo',
'Cabanzon',
'Cabaña la sierra',
'Cabañes',
'Cabarceno',
'Cabezon de la Sal',
'Cabezon de Liebana',
'Cabrojo (Cabezon de la Sal)',
'Cabrojo (Rionansa)',
'Cacicedo',
'Cadalso',
'Cades',
'Cahecho',
'Caldas',
'Calga',
'Callecedo',
'Caloca',
'Calseca',
'Camaleño',
'Camargo',
'Cambarco',
'Camesa',
'Camijanes',
'Camino',
'Campillo',
'Camplengo',
'Campo de Ebro',
'Campollo',
'Campuzano',
'Canales',
'Candenosa',
'Candolias',
'Cañeda',
'Cañedo',
'Caranceja',
'Carandia',
'Carasa',
'Carazon',
'Carmona',
'Carrascal de Cocejon',
'Carrascal de San Miguel',
'Carrejo',
'Carriazo',
'Cartes',
'Casamaria',
'Casar',
'Casares',
'Casasola',
'Casavieja',
'Castanedo',
'Castillo',
'Castillo Pedroso',
'Castrillo de Valdelomar',
'Castrillo del Haya',
'Castro',
'Castro Urdiales',
'Caviedes',
'Cazpurrion',
'CeceÑas',
'Cejancas',
'Celada de Los Calderones',
'Celada Marlantes',
'Celis',
'Celucos',
'Cerbiago',
'Cerdigo',
'Cereceda',
'Cerecedas',
'Cerrazo',
'Cervatos',
'Cicera',
'Cicero',
'Ciguenza',
'Cires',
'Cobejo',
'Cobeña',
'Cobijon',
'Cobreces',
'Cohiño',
'Colindres',
'Colio',
'Collado',
'Comillas',
'Concha',
'Congarna',
'Coo',
'Corconte',
'Cornocio',
'Coroneles',
'Corral',
'Correpoco',
'Cortiguera',
'Corvera',
'Cos',
'Cosgaya',
'Cosio',
'Coterillo',
'Cotillo',
'Cotillos',
'Cubas',
'Cubillo de Ebro',
'Cucayo',
'Cuchia',
'Cudon',
'Cuena',
'Cueto',
'Cueva',
'Dobarganes',
'Dobres',
'Dualez',
'Dueso',
'DuÑa',
'El Alvareo',
'El Astillero',
'El Avellanal',
'El Barcenal',
'El Bosque',
'El Callejo',
'El Camino',
'El Campo',
'El Cerro',
'El Cocejon',
'El Haya',
'El Llano (guriezo)',
'El Llano (udías)',
'El Perujo',
'El Prado',
'El Puente',
'El Tejo',
'El Tojo',
'Elechas',
'Enterria',
'Enterrias',
'Entrambasaguas (Entrambasaguas)',
'Entrambasaguas (Hermandad de Campoo de Suso)',
'Entrambasmestas',
'Esanos',
'Escalante',
'Escobedo (Camargo)',
'Escobedo (Villafufre)',
'Esles',
'Espinama',
'Espinilla',
'Espinosa de Bricia',
'Esponzues',
'Estrada',
'Fombellida',
'Fontecha',
'Fontibre',
'Frama',
'Francos',
'Fresneda',
'Fresnedo (Soba)',
'Fresnedo (Solorzano)',
'Fresno',
'Fresno del Rio',
'Fuente de',
'Gajano',
'Galizano',
'Gama',
'Gandarilla',
'Ganzo',
'Garzon',
'Gibaja (La Quintana)',
'Golbardo',
'Gornazo',
'Guarnizo',
'Guemes',
'Guzparras',
'Hazas (Liendo)',
'Hazas (Soba)',
'Hazas de Cesto',
'Helguera (Molledo)',
'Helguera (Rasines)',
'Helguera (Reocin)',
'Helgueras',
'Herada',
'Heras',
'Hermosa',
'Herran',
'Herrera',
'Herrera de Ibio',
'Hijas',
'Hinojedo',
'Hormiguera',
'Horna de Ebro',
'Hornedillo',
'Hornedo',
'Hortigal',
'Hoyos',
'Hoz de Abiada',
'Hoz de Anero',
'Hoz de Marron',
'Hoznayo',
'Ibio',
'Igollo',
'Incedo',
'Irias',
'Iruz',
'Iseca Nueva',
'Iseca Vieja',
'Isequilla',
'Isla',
'Isla Playa',
'Islares',
'Izara',
'Jain',
'La Abadilla',
'La Acebosa',
'La Aguilera',
'La Altura',
'La Aparecida',
'La Arenosa',
'La Barcena (ampuero)',
'La Barcena (san felices de buelna)',
'La Barquera',
'La Busta',
'La Cantolla',
'La Capitana',
'La Carcoba',
'La Cavada',
'La Cocina',
'La Collada',
'La Concha (valdáliga)',
'La Concha (san roque de riomiera)',
'La Concha (villaescusa)',
'La Corra',
'La Costana',
'La Cotera',
'La Cueva',
'La Edilla',
'La Encina',
'La Frecha',
'La Garma',
'La Gurueba',
'La Hayuela',
'La Hermida',
'La Herreria',
'La Iglesia (Arredondo)',
'La Iglesia (Ruiloba)',
'La Iglesia (Valle de Villaverde)',
'La Laguna',
'La Lastra',
'La Loma',
'La Lomba',
'La Magdalena',
'La Matanza',
'La MiÑa',
'La Molina',
'La MontaÑa',
'La Parada',
'La Pedrosa',
'La Penilla',
'La Peñia',
'La Peredilla',
'La Pesquera',
'La Poblacion',
'La Portilla',
'La Puente',
'La Puente del Valle',
'La Quintana',
'La Rabia',
'La Revilla (San vicente de la Barquera)',
'La Revilla (Soba)',
'La Riva',
'La Roza',
'La Serna (Arenas de Iguña)',
'La Serna (Hermandad de Campoo de Suso)',
'La Serna (Valderredible)',
'La Sota',
'La Toba',
'La Vega (Miera)',
'La Vega (Rasines)',
'La Vega (Vega de Liebana)',
'La Veguilla',
'La Venta',
'La Ventona',
'La Virgen',
'Labarces',
'Lafuente',
'Laguillos',
'Laiseca',
'Lamadrid',
'Lamedo',
'Lamiña',
'Lanchares',
'Landeral',
'Langre',
'Lantueno',
'Laredo',
'Las Barcenas',
'Las Caldas de Besaya',
'Las Carcobas',
'Las Casillas',
'Las Entradas',
'Las Fraguas',
'Las Garmillas',
'Las Henestrosas de las Quintanillas',
'Las Ilces',
'Las Pilas',
'Las Presillas',
'Las Quintanillas',
'Las Rozas',
'Lavin',
'Lebeña',
'Ledantes',
'Lendagua',
'Lerones',
'Liandres',
'Liaño',
'Liencres',
'Lierganes',
'Liermo',
'Limpias',
'Linares',
'Linto',
'Llaguno',
'Llanez',
'Llano (Luena)',
'Llano (Las Rozas de Valdearroyo)',
'Llano (San Felices de Buelna)',
'Llanos',
'Llatazos',
'Llaves',
'Llayo',
'Llerana',
'Lloreda',
'Loma Somera',
'Lombera',
'Lombraña',
'Lomeña',
'Lon',
'Loredo',
'Los Corrales de Buelna',
'Los Hoyos',
'Los Llanos',
'Los Llaos',
'Los Llares',
'Los Pandos',
'Los Picayos',
'Los Pumares',
'Los Tojos',
'Luey',
'Lugarejos',
'Luriezo',
'Lusa',
'Luzmela-Mazcuerras',
'Malataja',
'Maliaño',
'MaoÑo',
'Mar',
'Marron',
'Mata',
'Mata de Hoz',
'Matamorosa',
'Mataporquera',
'Matarrepudio',
'Matienzo',
'Mazandrero',
'Mediadoro',
'Mendina',
'Mentera Barruelo',
'Mercadal',
'Merilla',
'Miengo',
'Mieses',
'Mijares',
'Mijarojos',
'Mioño',
'Mirones',
'Mogro',
'Mogrovejo',
'Mollaneda',
'Molleda',
'Molledo',
'Mollinedo',
'Mompia',
'Moncalian',
'Monegro',
'Montabliz',
'Monte (Riotuerto)',
'Monte (Santander)',
'Montecillo',
'Montehano',
'Montes claros',
'Morancas',
'Mortera',
'Mortesante',
'Movellan',
'Muñorrodero',
'Muriedas',
'Nates',
'Navajeda',
'Navamuel',
'Naveda',
'Navedo',
'Nestares',
'Nocina',
'Noja',
'Noval (Escalante)',
'Noval (Liendo)',
'Novales',
'Obargo',
'Obeso',
'Obregon',
'Ocejo',
'Ogarrio',
'Ojebar',
'Ojedo',
'Olea',
'Omoño',
'Ongayo',
'Ontaneda',
'Onton',
'Ontoria',
'Orejo',
'OreÑa (Viallan)',
'Oriñon',
'Ormas',
'Oruña',
'Orzales',
'Otañes',
'Otero',
'Padierniga',
'Palacio (Arenas de Iguña)',
'Palacio (Valle de Villaverde)',
'Pamanes',
'Pandillo',
'Pando (Ruiloba)',
'Pando (Santiurde de Toranzo)',
'Pandoto',
'Paracuelles',
'Parbayon',
'Pechon',
'Pedredo',
'Pedreña',
'Pedreo',
'Pedroso',
'Pejanda',
'Pembes',
'Penagos',
'Pendes',
'Penilla (Luena)',
'Penilla (Santiurde de Toranzo)',
'Penilla (Villafufre)',
'Peñacastillo',
'Perelada',
'Periedo',
'Perrozo',
'Pesaguero',
'Pesquera',
'Pesues',
'Piasca',
'Pido',
'Pie de concha',
'Piedrahita',
'Pielagos',
'Pieragullano',
'Pilas',
'Piñeres',
'PisueÑa',
'Poblacion de Abajo',
'Poblacion de Arriba',
'Poblacion de Suso',
'Polanco',
'Polientes',
'Pollayo',
'Pomaluengo',
'Pomar',
'Pondra',
'Pontejos',
'Pontones',
'Portillo',
'Posadillo',
'Posajo penias',
'Potes',
'Prases',
'Praves',
'Prellezo',
'Prezanes',
'Prio',
'Proaño',
'Puente Aguero',
'Puente Avios',
'Puente del Arrudo',
'Puente pumar',
'Puente San Miguel',
'Puente Viesgo',
'Puentenansa',
'Pujayo',
'Pumalverde',
'Pumareña',
'Queveda',
'Quevedo',
'Quijano',
'Quijas',
'Quintana (Camaleño)',
'Quintana (Campoo de yuso)',
'Quintana (Soba)',
'Quintana de Toranzo',
'Quintanamanil',
'Quintanasolmo',
'Quintanilla',
'Quintanilla de An',
'Quintanilla de Rucandio',
'Rabago',
'Rada',
'Ramales de la victoria',
'Ranero',
'Rascon',
'Rases',
'Rasgada',
'Rasillo',
'Rasines',
'Rebollar de ebro',
'Rebolledo',
'Redo',
'Regada',
'Regolfo',
'Regules',
'Rehoyos',
'Reinosa',
'Reinosilla',
'Renedo (Cabuerniga)',
'Renedo (Pielagos)',
'Renedo (Las Rozas de Valdearroyo)',
'Renedo de bricia',
'Reocin',
'Reocin de los Molinos',
'Repudio',
'Requejada',
'Requejo',
'Resconorio',
'Retortillo',
'Retuerta',
'Revelillas',
'Revilla (camargo)',
'Revilla (guriezo)',
'Riaño',
'Riaño de Ibio',
'Riclones',
'Rinconeda',
'Rio',
'Riocorvo',
'Riolastras',
'Rionegro',
'Riopanero',
'Rioseco (Guriezo)',
'Rioseco (Rionansa)',
'Rioseco (Santiurde de Reinosa)',
'Rioturbio',
'Riva',
'Rivero',
'Rocamundo',
'Rocias',
'Rocillo (Ampuero)',
'Rocillo (Liendo)',
'Rocillo (Rasines)',
'Rodezas',
'Roiz (Las Cuevas)',
'Roza',
'Rozadio',
'Rozas',
'Ruanales',
'Rubalcaba',
'Rubarcena',
'Rubayo',
'Rucandio (Riotuerto)',
'Rucandio (Valderredible)',
'Rudaguera',
'Ruente',
'Ruerrero',
'Ruijas',
'Ruilobuca',
'Ruiseñada',
'Rumoroso',
'Saja',
'Salarzon',
'Salceda',
'Salcedo',
'Salces',
'Samano',
'San Andres (Cabezon de Liebana)',
'San Andres (Luena)',
'San Andres (Valdeprado del Rio)',
'San Andres de Valdelomar',
'San Bartolome de los Montes',
'San bartolome de Meruelo',
'San Cristobal',
'San Cristobal del Monte',
'San Esteban',
'San Juan',
'San Juan de raicedo',
'San Mames',
'San Mames de Aras',
'San Mames de Meruelo',
'San Martin (Santiurde de Toranzo)',
'San Martin (Soba)',
'San Martin de Elines',
'San Martin de Hoyos',
'San Martin de Quevedo',
'San Martin de Valdelomar',
'San Mateo',
'San Miguel',
'San Miguel de Aguayo',
'San Miguel de Aras',
'San Miguel de Luena',
'San Miguel de Meruelo',
'San pantaleon de Aras',
'San Pedro (Cillorigo de Liebana)',
'San Pedro (Soba)',
'San Pedro de las Baheras',
'San Pedro del Romeral',
'San Pelayo',
'San Roman (Santa Maria de Cayon)',
'San Roman (Santander)',
'San Salvador',
'San Sebastian de Garabandal',
'San Vicente de la Barquera',
'San Vicente de Leon',
'San Vicente de Toranzo',
'San Vicente del Monte',
'San Vitores (Medio Cudeyo)',
'San Vitores (Valdeprado del Rio)',
'Sancibrian',
'Sangas',
'Santa Agueda',
'Santa Cruz (Guriezo)',
'Santa Cruz (Molledo)',
'Santa Cruz (Rasines)',
'Santa Cruz de Bezana',
'Santa Eulalia',
'Santa Maria de Aguayo',
'Santa Maria de Cayon',
'Santa Maria de Hito',
'Santa Maria de Valverde',
'Santa Marina',
'Santa Olalla (Molledo)',
'Santa Olalla (Valdeolea)',
'Santa Olalla de Aguayo',
'Santander',
'Santayana',
'Santiago (Cartes)',
'Santiago (Medio Cudeyo)',
'Santibañez (Cabezon de la Sal)',
'Santibañez (Villacarriedo)',
'Santillan',
'Santillana del Mar',
'Santisteban',
'Santiurde de Reinosa',
'Santiurde de Toranzo',
'Santiuste',
'Santo Toribio',
'Santoña',
'Santotis',
'Santullan',
'Sarceda',
'Saro',
'Saron',
'Sebrango',
'Secadura',
'Sel de la Carrera',
'Sel de la peña',
'Sel del hoyo',
'Sel del manzano',
'Sel del Tojo',
'Selaya',
'Selores',
'Selviejo',
'Seña',
'Señas',
'Serdio',
'Servillas',
'Servillejas',
'Setien',
'Sierra',
'Sierra Alcomba',
'Sierra de Ibio',
'Sierra Elsa',
'Sierrapando',
'Silio',
'Soano',
'Sobarzo',
'Soberado',
'Sobrelapeña',
'Sobremazas',
'Sobrepenilla',
'Sobrepeña',
'Socobio',
'Socueva',
'Solamaza',
'Solana',
'Solares',
'Solorzano',
'Somahoz',
'Somballe',
'Somo',
'Sonabia',
'Soña',
'Sopenilla',
'Sopeña (Cabuerniga)',
'Sopeña (Liendo)',
'Sotillo',
'Soto (Hermandad de Campoo de Suso)',
'Soto (Villacarriedo)',
'Soto de la Marina',
'Soto Rucandio',
'Sovilla',
'Suances',
'Suano',
'Suesa',
'Susilla',
'Tabernilla',
'Tabladillo',
'Tablado',
'Tagle',
'Talledo',
'Tama',
'Tanarrio',
'Tanos',
'Tarriba',
'Tarrueza',
'Teran',
'Tezanos',
'Tollo',
'Toñanes',
'Toporias',
'Toranzo',
'Torcollano',
'Torices',
'Torquiendo',
'Torrelavega',
'Torres',
'Torriente',
'Totero',
'Trasierra',
'Trasvia',
'Trebuesto',
'Treceño',
'Tresabuela',
'Tresagua',
'Tresviso',
'Treto',
'Treviño',
'Trillayo',
'Tudanca',
'Tudes',
'Turieno',
'Ubiarco',
'Ucieda',
'Udalla',
'Unquera',
'Urdiales',
'Uznayo',
'Vada',
'Val de Ason',
'Valcaba',
'Valdecilla',
'Valdeprado',
'Valdeprado del Rio',
'Valdicio',
'Valle (Cabuerniga)',
'Valle (Ruesga)',
'Vallejo',
'Valles',
'Vallines',
'Valmeo',
'Valoria',
'Vargas',
'Vear de udalla',
'Vega',
'Vega de Pas',
'Vega Escobosa',
'Vegaloscorrales',
'Vegalosvados',
'Veguilla',
'Vejo',
'Vejoris',
'Vendejo',
'Ventorrillo',
'Vernejo',
'Viaña (Cabuerniga)',
'Viaña (Vega de pas)',
'Vidular',
'Viernoles',
'Villabañez',
'Villacantid',
'Villacarriedo',
'Villaescusa',
'Villaescusa de ebro',
'Villafufre',
'Villamoñico',
'Villante',
'Villanueva (Liendo)',
'Villanueva (Las Rozas de Valdearroyo)',
'Villanueva (Villaescusa)',
'Villanueva (Valle de Villaverde)',
'Villanueva de la Nia',
'Villanueva de la Peña',
'Villapaderne',
'Villaparte',
'Villapresente',
'Villar (Hermandad de Campoo de Suso)',
'Villar (Soba)',
'Villasevil',
'Villasuso (Anievas)',
'Villasuso (Campoo de Yuso)',
'Villasuso (Cieza)',
'Villaverde (Soba)',
'Villaverde (Vega de Liebana)',
'Villaverde de Hito',
'Villaverde de Pontones',
'Villaviad',
'Villayuso',
'Villegar',
'Villota de Elines',
'Viñon',
'Vioño',
'Virgen de la Peña',
'Vispieres',
'Viveda',
'Vozpornoche',
'Yera',
'Yermo',
'Yuso',
'Zurita',
'Camaleño',
];