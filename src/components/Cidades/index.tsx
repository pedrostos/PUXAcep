interface ObjetoCidade {
    nome: string;
    valor: string
}

const cidadesAC: Array<ObjetoCidade> = [
    { nome: 'Rio Branco', valor: 'Rio%20Branco' },
    { nome: 'Cruzeiro do Sul', valor: 'Cruzeiro%20do%20Sul' },
    { nome: 'Sena Madureira', valor: 'Sena%20Madureira' },
    { nome: 'Tarauacá', valor: 'Tarauacá' },
    { nome: 'Feijó', valor: 'Feijó' },
    { nome: 'Plácido de Castro', valor: 'Plácido%20de%20Castro' },
    { nome: 'Xapuri', valor: 'Xapuri' },
    { nome: 'Brasiléia', valor: 'Brasiléia' },
    { nome: 'Marechal Thaumaturgo', valor: 'Marechal%20Thaumaturgo' },
    { nome: 'Porto Walter', valor: 'Porto%20Walter' }
];

const cidadesAL: Array<ObjetoCidade> = [
    { nome: 'Maceió', valor: 'Maceió' },
    { nome: 'Arapiraca', valor: 'Arapiraca' },
    { nome: 'Rio Largo', valor: 'Rio%20Largo' },
    { nome: 'Palmeira dos Índios', valor: 'Palmeira%20dos%20Índios' },
    { nome: 'Uniã​o dos Palmares', valor: 'Uniã​o%20dos%20Palmares' },
    { nome: 'São Miguel dos Campos', valor: 'São%20Miguel%20dos%20Campos' },
    { nome: 'Penedo', valor: 'Penedo' },
    { nome: 'Coruripe', valor: 'Coruripe' },
    { nome: 'Campo Alegre', valor: 'Campo%20Alegre' },
    { nome: 'Delmiro Gouveia', valor: 'Delmiro%20Gouveia' }
];

const cidadesAP: Array<ObjetoCidade> = [
    { nome: 'Macapá', valor: 'Macapá' },
    { nome: 'Santana', valor: 'Santana' },
    { nome: 'Laranjal do Jari', valor: 'Laranjal%20do%20Jari' },
    { nome: 'Oiapoque', valor: 'Oiapoque' },
    { nome: 'Porto Grande', valor: 'Porto%20Grande' },
    { nome: 'Mazagão', valor: 'Mazagão' },
    { nome: 'Tartarugalzinho', valor: 'Tartarugalzinho' },
    { nome: 'Pedra Branca do Amapari', valor: 'Pedra%20Branca%20do%20Amapari' },
    { nome: 'Amapá', valor: 'Amapá' },
    { nome: 'Calçoene', valor: 'Calçoene' }
];

const cidadesAM: Array<ObjetoCidade> = [
    { nome: 'Manaus', valor: 'Manaus' },
    { nome: 'Parintins', valor: 'Parintins' },
    { nome: 'Itacoatiara', valor: 'Itacoatiara' },
    { nome: 'Manacapuru', valor: 'Manacapuru' },
    { nome: 'Coari', valor: 'Coari' },
    { nome: 'Tefé', valor: 'Tefé' },
    { nome: 'Tabatinga', valor: 'Tabatinga' },
    { nome: 'São Gabriel da Cachoeira', valor: 'São%20Gabriel%20da%20Cachoeira' },
    { nome: 'Humaitá', valor: 'Humaitá' },
    { nome: 'Iranduba', valor: 'Iranduba' }
];

const cidadesBA: Array<ObjetoCidade> = [
    { nome: 'Salvador', valor: 'Salvador' },
    { nome: 'Feira de Santana', valor: 'Feira%20de%20Santana' },
    { nome: 'Vitória da Conquista', valor: 'Vitória%20da%20Conquista' },
    { nome: 'Camaçari', valor: 'Camaçari' },
    { nome: 'Itabuna', valor: 'Itabuna' },
    { nome: 'Juazeiro', valor: 'Juazeiro' },
    { nome: 'Lauro de Freitas', valor: 'Lauro%20de%20Freitas' },
    { nome: 'Ilhéus', valor: 'Ilhéus' },
    { nome: 'Jequié', valor: 'Jequié' },
    { nome: 'Teixeira de Freitas', valor: 'Teixeira%20de%20Freitas' }
];

const cidadesCE: Array<ObjetoCidade> = [
    { nome: 'Fortaleza', valor: 'Fortaleza' },
    { nome: 'Caucaia', valor: 'Caucaia' },
    { nome: 'Juazeiro do Norte', valor: 'Juazeiro%20do%20Norte' },
    { nome: 'Maracanaú', valor: 'Maracanaú' },
    { nome: 'Sobral', valor: 'Sobral' },
    { nome: 'Crato', valor: 'Crato' },
    { nome: 'Itapipoca', valor: 'Itapipoca' },
    { nome: 'Maranguape', valor: 'Maranguape' },
    { nome: 'Iguatu', valor: 'Iguatu' },
    { nome: 'Quixadá', valor: 'Quixadá' }
];

const cidadesDF: Array<ObjetoCidade> = [
    { nome: 'Brasília', valor: 'Brasília' },
    { nome: 'Taguatinga', valor: 'Taguatinga' },
    { nome: 'Ceilândia', valor: 'Ceilândia' },
    { nome: 'Samambaia', valor: 'Samambaia' },
    { nome: 'Planaltina', valor: 'Planaltina' },
    { nome: 'Sobradinho', valor: 'Sobradinho' },
    { nome: 'Gama', valor: 'Gama' },
    { nome: 'Recanto das Emas', valor: 'Recanto%20das%20Emas' },
    { nome: 'Santa Maria', valor: 'Santa%20Maria' },
    { nome: 'Riacho Fundo', valor: 'Riacho%20Fundo' }
];

const cidadesES: Array<ObjetoCidade> = [
    { nome: 'Vitória', valor: 'Vitória' },
    { nome: 'Vila Velha', valor: 'Vila%20Velha' },
    { nome: 'Serra', valor: 'Serra' },
    { nome: 'Cariacica', valor: 'Cariacica' },
    { nome: 'Linhares', valor: 'Linhares' },
    { nome: 'São Mateus', valor: 'São%20Mateus' },
    { nome: 'Colatina', valor: 'Colatina' },
    { nome: 'Guarapari', valor: 'Guarapari' },
    { nome: 'Aracruz', valor: 'Aracruz' },
    { nome: 'Nova Venécia', valor: 'Nova%20Venécia' }
];

const cidadesGO: Array<ObjetoCidade> = [
    { nome: 'Goiânia', valor: 'Goiânia' },
    { nome: 'Aparecida de Goiânia', valor: 'Aparecida%20de%20Goiânia' },
    { nome: 'Anápolis', valor: 'Anápolis' },
    { nome: 'Rio Verde', valor: 'Rio%20Verde' },
    { nome: 'Luziânia', valor: 'Luziânia' },
    { nome: 'Águas Lindas de Goiás', valor: 'Águas%20Lindas%20de%20Goiás' },
    { nome: 'Valparaíso de Goiás', valor: 'Valparaíso%20de%20Goiás' },
    { nome: 'Trindade', valor: 'Trindade' },
    { nome: 'Formosa', valor: 'Formosa' },
    { nome: 'Novo Gama', valor: 'Novo%20Gama' }
];

const cidadesMA: Array<ObjetoCidade> = [
    { nome: 'São Luís', valor: 'São%20Luís' },
    { nome: 'Imperatriz', valor: 'Imperatriz' },
    { nome: 'Timon', valor: 'Timon' },
    { nome: 'Caxias', valor: 'Caxias' },
    { nome: 'Codó', valor: 'Codó' },
    { nome: 'Bacabal', valor: 'Bacabal' },
    { nome: 'Santa Inês', valor: 'Santa%20Inês' },
    { nome: 'Pinheiro', valor: 'Pinheiro' },
    { nome: 'Balsas', valor: 'Balsas' },
    { nome: 'Barra do Corda', valor: 'Barra%20do%20Corda' }
];

const cidadesMT: Array<ObjetoCidade> = [
    { nome: 'Cuiabá', valor: 'Cuiabá' },
    { nome: 'Várzea Grande', valor: 'Várzea%20Grande' },
    { nome: 'Rondonópolis', valor: 'Rondonópolis' },
    { nome: 'Sinop', valor: 'Sinop' },
    { nome: 'Tangará da Serra', valor: 'Tangará%20da%20Serra' },
    { nome: 'Cáceres', valor: 'Cáceres' },
    { nome: 'Sorriso', valor: 'Sorriso' },
    { nome: 'Lucas do Rio Verde', valor: 'Lucas%20do%20Rio%20Verde' },
    { nome: 'Primavera do Leste', valor: 'Primavera%20do%20Leste' },
    { nome: 'Barra do Garças', valor: 'Barra%20do%20Garças' }
];

const cidadesMS: Array<ObjetoCidade> = [
    { nome: 'Campo Grande', valor: 'Campo%20Grande' },
    { nome: 'Dourados', valor: 'Dourados' },
    { nome: 'Três Lagoas', valor: 'Três%20Lagoas' },
    { nome: 'Corumbá', valor: 'Corumbá' },
    { nome: 'Ponta Porã', valor: 'Ponta%20Porã' },
    { nome: 'Naviraí', valor: 'Naviraí' },
    { nome: 'Aquidauana', valor: 'Aquidauana' },
    { nome: 'Nova Andradina', valor: 'Nova%20Andradina' },
    { nome: 'Paranaíba', valor: 'Paranaíba' },
    { nome: 'Amambai', valor: 'Amambai' }
];

const cidadesMG: Array<ObjetoCidade> = [
    { nome: 'Belo Horizonte', valor: 'Belo%20Horizonte' },
    { nome: 'Uberlândia', valor: 'Uberlândia' },
    { nome: 'Contagem', valor: 'Contagem' },
    { nome: 'Juiz de Fora', valor: 'Juiz%20de%20Fora' },
    { nome: 'Betim', valor: 'Betim' },
    { nome: 'Montes Claros', valor: 'Montes%20Claros' },
    { nome: 'Ribeirão das Neves', valor: 'Ribeirão%20das%20Neves' },
    { nome: 'Uberaba', valor: 'Uberaba' },
    { nome: 'Governador Valadares', valor: 'Governador%20Valadares' },
    { nome: 'Ipatinga', valor: 'Ipatinga' }
];

const cidadesPA: Array<ObjetoCidade> = [
    { nome: 'Belém', valor: 'Belém' },
    { nome: 'Ananindeua', valor: 'Ananindeua' },
    { nome: 'Santarém', valor: 'Santarém' },
    { nome: 'Marabá', valor: 'Marabá' },
    { nome: 'Parauapebas', valor: 'Parauapebas' },
    { nome: 'Castanhal', valor: 'Castanhal' },
    { nome: 'Abaetetuba', valor: 'Abaetetuba' },
    { nome: 'Bragança', valor: 'Bragança' },
    { nome: 'Altamira', valor: 'Altamira' },
    { nome: 'Cametá', valor: 'Cametá' }
];

const cidadesPB: Array<ObjetoCidade> = [
    { nome: 'João Pessoa', valor: 'João%20Pessoa' },
    { nome: 'Campina Grande', valor: 'Campina%20Grande' },
    { nome: 'Santa Rita', valor: 'Santa%20Rita' },
    { nome: 'Patos', valor: 'Patos' },
    { nome: 'Bayeux', valor: 'Bayeux' },
    { nome: 'Cabedelo', valor: 'Cabedelo' },
    { nome: 'Sousa', valor: 'Sousa' },
    { nome: 'Guarabira', valor: 'Guarabira' },
    { nome: 'Cajazeiras', valor: 'Cajazeiras' },
    { nome: 'Mamanguape', valor: 'Mamanguape' }
];

const cidadesPR: Array<ObjetoCidade> = [
    { nome: 'Curitiba', valor: 'Curitiba' },
    { nome: 'Londrina', valor: 'Londrina' },
    { nome: 'Maringá', valor: 'Maringá' },
    { nome: 'Ponta Grossa', valor: 'Ponta%20Grossa' },
    { nome: 'Cascavel', valor: 'Cascavel' },
    { nome: 'São José dos Pinhais', valor: 'São%20José%20dos%20Pinhais' },
    { nome: 'Foz do Iguaçu', valor: 'Foz%20do%20Iguaçu' },
    { nome: 'Colombo', valor: 'Colombo' },
    { nome: 'Guarapuava', valor: 'Guarapuava' },
    { nome: 'Paranaguá', valor: 'Paranaguá' }
];

const cidadesPE: Array<ObjetoCidade> = [
    { nome: 'Recife', valor: 'Recife' },
    { nome: 'Jaboatão dos Guararapes', valor: 'Jaboatão%20dos%20Guararapes' },
    { nome: 'Olinda', valor: 'Olinda' },
    { nome: 'Caruaru', valor: 'Caruaru' },
    { nome: 'Petrolina', valor: 'Petrolina' },
    { nome: 'Paulista', valor: 'Paulista' },
    { nome: 'Cabo de Santo Agostinho', valor: 'Cabo%20de%20Santo%20Agostinho' },
    { nome: 'Garanhuns', valor: 'Garanhuns' },
    { nome: 'Vitória de Santo Antão', valor: 'Vitória%20de%20Santo%20Antão' },
    { nome: 'Ipojuca', valor: 'Ipojuca' }
];

const cidadesPI: Array<ObjetoCidade> = [
    { nome: 'Teresina', valor: 'Teresina' },
    { nome: 'Parnaíba', valor: 'Parnaíba' },
    { nome: 'Picos', valor: 'Picos' },
    { nome: 'Piripiri', valor: 'Piripiri' },
    { nome: 'Campo Maior', valor: 'Campo%20Maior' },
    { nome: 'Floriano', valor: 'Floriano' },
    { nome: 'Barras', valor: 'Barras' },
    { nome: 'Altos', valor: 'Altos' },
    { nome: 'José de Freitas', valor: 'José%20de%20Freitas' },
    { nome: 'Pedro II', valor: 'Pedro%20II' }
];

const cidadesRJ: Array<ObjetoCidade> = [
    { nome: 'Rio de Janeiro', valor: 'Rio%20de%20Janeiro' },
    { nome: 'São Gonçalo', valor: 'São%20Gonçalo' },
    { nome: 'Duque de Caxias', valor: 'Duque%20de%20Caxias' },
    { nome: 'Nova Iguaçu', valor: 'Nova%20Iguaçu' },
    { nome: 'Niterói', valor: 'Niterói' },
    { nome: 'Belford Roxo', valor: 'Belford%20Roxo' },
    { nome: 'Campos dos Goytacazes', valor: 'Campos%20dos%20Goytacazes' },
    { nome: 'São João de Meriti', valor: 'São%20João%20de%20Meriti' },
    { nome: 'Petrópolis', valor: 'Petrópolis' },
    { nome: 'Volta Redonda', valor: 'Volta%20Redonda' }
];

const cidadesRN: Array<ObjetoCidade> = [
    { nome: 'Natal', valor: 'Natal' },
    { nome: 'Mossoró', valor: 'Mossoró' },
    { nome: 'Parnamirim', valor: 'Parnamirim' },
    { nome: 'São Gonçalo do Amarante', valor: 'São%20Gonçalo%20do%20Amarante' },
    { nome: 'Macaíba', valor: 'Macaíba' },
    { nome: 'Caicó', valor: 'Caicó' },
    { nome: 'Ceará-Mirim', valor: 'Ceará-Mirim' },
    { nome: 'Assu', valor: 'Assu' },
    { nome: 'Currais Novos', valor: 'Currais%20Novos' },
    { nome: 'Santa Cruz', valor: 'Santa%20Cruz' }
];

const cidadesRS: Array<ObjetoCidade> = [
    { nome: 'Porto Alegre', valor: 'Porto%20Alegre' },
    { nome: 'Caxias do Sul', valor: 'Caxias%20do%20Sul' },
    { nome: 'Pelotas', valor: 'Pelotas' },
    { nome: 'Canoas', valor: 'Canoas' },
    { nome: 'Santa Maria', valor: 'Santa%20Maria' },
    { nome: 'Gravataí', valor: 'Gravataí' },
    { nome: 'Viamão', valor: 'Viamão' },
    { nome: 'Novo Hamburgo', valor: 'Novo%20Hamburgo' },
    { nome: 'São Leopoldo', valor: 'São%20Leopoldo' },
    { nome: 'Rio Grande', valor: 'Rio%20Grande' }
];

const cidadesRO: Array<ObjetoCidade> = [
    { nome: 'Porto Velho', valor: 'Porto%20Velho' },
    { nome: 'Ji-Paraná', valor: 'Ji-Paraná' },
    { nome: 'Ariquemes', valor: 'Ariquemes' },
    { nome: 'Vilhena', valor: 'Vilhena' },
    { nome: 'Cacoal', valor: 'Cacoal' },
    { nome: 'Guajará-Mirim', valor: 'Guajará-Mirim' },
    { nome: 'Rolim de Moura', valor: 'Rolim%20de%20Moura' },
    { nome: 'Jaru', valor: 'Jaru' },
    { nome: 'Ouro Preto do Oeste', valor: 'Ouro%20Preto%20do%20Oeste' },
    { nome: 'Pimenta Bueno', valor: 'Pimenta%20Bueno' }
];

const cidadesRR: Array<ObjetoCidade> = [
    { nome: 'Boa Vista', valor: 'Boa%20Vista' },
    { nome: 'Rorainópolis', valor: 'Rorainópolis' },
    { nome: 'Caracaraí', valor: 'Caracaraí' },
    { nome: 'São Luiz', valor: 'São%20Luiz' },
    { nome: 'Pacaraima', valor: 'Pacaraima' },
    { nome: 'Alto Alegre', valor: 'Alto%20Alegre' },
    { nome: 'Mucajaí', valor: 'Mucajaí' },
    { nome: 'Bonfim', valor: 'Bonfim' },
    { nome: 'Cantá', valor: 'Cantá' },
    { nome: 'Iracema', valor: 'Iracema' }
];

const cidadesSC: Array<ObjetoCidade> = [
    { nome: 'Florianópolis', valor: 'Florianópolis' },
    { nome: 'Joinville', valor: 'Joinville' },
    { nome: 'Blumenau', valor: 'Blumenau' },
    { nome: 'São José', valor: 'São%20José' },
    { nome: 'Criciúma', valor: 'Criciúma' },
    { nome: 'Chapecó', valor: 'Chapecó' },
    { nome: 'Itajaí', valor: 'Itajaí' },
    { nome: 'Palhoça', valor: 'Palhoça' },
    { nome: 'Jaraguá do Sul', valor: 'Jaraguá%20do%20Sul' },
    { nome: 'Lages', valor: 'Lages' }
];

const cidadesSP: Array<ObjetoCidade> = [
    { nome: "São Paulo", valor: "São%20Paulo" },
    { nome: "Guarulhos", valor: "Guarulhos" },
    { nome: "Campinas", valor: "Campinas" },
    { nome: "São Bernardo do Campo", valor: "São%20Bernardo%20do%20Campo" },
    { nome: "Santo André", valor: "Santo%20André" },
    { nome: "Osasco", valor: "Osasco" },
    { nome: "São José dos Campos", valor: "São%20José%20dos%20Campos" },
    { nome: "Mauá", valor: "Mauá" },
    { nome: "Diadema", valor: "Diadema" },
    { nome: "Carapicuíba", valor: "Carapicuíba" }
];

const cidadesSE: Array<ObjetoCidade> = [
    { nome: 'Aracaju', valor: 'Aracaju' },
    { nome: 'Nossa Senhora do Socorro', valor: 'Nossa%20Senhora%20do%20Socorro' },
    { nome: 'Lagarto', valor: 'Lagarto' },
    { nome: 'Itabaiana', valor: 'Itabaiana' },
    { nome: 'Estância', valor: 'Estância' },
    { nome: 'São Cristóvão', valor: 'São%20Cristóvão' },
    { nome: 'Capela', valor: 'Capela' },
    { nome: 'Propriá', valor: 'Propriá' },
    { nome: 'Nossa Senhora da Glória', valor: 'Nossa%20Senhora%20da%20Glória' },
    { nome: 'Tobias Barreto', valor: 'Tobias%20Barreto' }
];

const cidadesTO: Array<ObjetoCidade> = [
    { nome: 'Palmas', valor: 'Palmas' },
    { nome: 'Araguaína', valor: 'Araguaína' },
    { nome: 'Gurupi', valor: 'Gurupi' },
    { nome: 'Porto Nacional', valor: 'Porto%20Nacional' },
    { nome: 'Paraíso do Tocantins', valor: 'Paraíso%20do%20Tocantins' },
    { nome: 'Colinas do Tocantins', valor: 'Colinas%20do%20Tocantins' },
    { nome: 'Guaraí', valor: 'Guaraí' },
    { nome: 'Tocantinópolis', valor: 'Tocantinópolis' },
    { nome: 'Miracema do Tocantins', valor: 'Miracema%20do%20Tocantins' },
    { nome: 'Formoso do Araguaia', valor: 'Formoso%20do%20Araguaia' }
];

const cidadesPorUf: any = {
    AC: cidadesAC,
    AL: cidadesAL,
    AP: cidadesAP,
    AM: cidadesAM,
    BA: cidadesBA,
    CE: cidadesCE,
    DF: cidadesDF,
    ES: cidadesES,
    GO: cidadesGO,
    MA: cidadesMA,
    MT: cidadesMT,
    MS: cidadesMS,
    MG: cidadesMG,
    PA: cidadesPA,
    PB: cidadesPB,
    PR: cidadesPR,
    PE: cidadesPE,
    PI: cidadesPI,
    RJ: cidadesRJ,
    RN: cidadesRN,
    RS: cidadesRS,
    RO: cidadesRO,
    RR: cidadesRR,
    SC: cidadesSC,
    SP: cidadesSP,
    SE: cidadesSE,
    TO: cidadesTO,
};

export default cidadesPorUf;