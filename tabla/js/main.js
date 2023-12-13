// Datos de ejemplo para llenar la tabla
const countriesData = [
    { name: 'Argelia', flag: 'img/argelia.png', federation: 'Federación Argelina de Fútbol', foundation: '1962', income: '1964' },
    { name: 'Egipto', flag: 'img/egipto.png', federation: 'Federación Egipcia de Fútbol', foundation: '1921', income: '1957' },
    { name: 'Libia', flag: 'img/libia.png', federation: 'Federación Libia de Fútbol', foundation: '1962', income: '1965' },
    { name: 'Marruecos', flag: 'img/marruecos.png', federation: 'Real Federación de Fútbol de Marruecos', foundation: '1955', income: '1960' },
    { name: 'Túnez', flag: 'img/tunez.png', federation: 'Federación Tunecina de Fútbol', foundation: '1956', income: '1960' },
    { name: 'Cabo Verde', flag: 'img/CaboVerde.png', federation: 'Federación Caboverdiana de Fútbol', foundation: '1982', income: '2000' },
    { name: 'Gambia', flag: 'img/gambia.png', federation: 'Asociación de Fútbol de Gambia', foundation: '1952', income: '1966' },
    { name: 'Guinea', flag: 'img/guinea.png', federation: 'Federación Guineana de Fútbol', foundation: '1960', income: '1962' },
    { name: 'Guinea-Bisáu', flag: 'img/bisau.png', federation: 'Federación de Fútbol de Guinea-Bisáu', foundation: '1974', income: '1986' },
    { name: 'Liberia', flag: 'img/liberia.png', federation: 'Asociación de Fútbol de Liberia', foundation: '1936', income: '1962' },
    { name: 'Malí', flag: 'img/mali.png', federation: 'Federación Maliense de Fútbol', foundation: '1960', income: '1963' },
    { name: 'Mauritania', flag: 'img/mauritania.png', federation: 'Federación de Fútbol de la República Islámica de Mauritania', foundation: '1961', income: '1964' },
    { name: 'Senegal', flag: 'img/senegal.png', federation: 'Federación Senegalesa de Fútbol', foundation: '1960', income: '1963' },
    { name: 'Sierra Leona', flag: 'img/sierraleona.png', federation: 'Asociación de Fútbol de Sierra Leona', foundation: '1967', income: '1967' },
    { name: 'Benín', flag: 'img/benin.png', federation: 'Federación Beninesa de Fútbol', foundation: '1962', income: '1969' },
    { name: 'Burkina Faso', flag: 'img/burkinafaso.png', federation: 'Federación Burkinesa de Fútbol', foundation: '1960', income: '1964' },
    { name: 'Costa de Marfil', flag: 'img/costamarfil.png', federation: 'Federación Mmarfileña de Fútbol', foundation: '1960', income: '1961' },
    { name: 'Ghana', flag: 'img/ghana.png', federation: 'Asociación de Fútbol de Ghana', foundation: '1957', income: '1658' },
    { name: 'Níger', flag: 'img/niger.png', federation: 'Federación Nigerina de Fútbol', foundation: '1967', income: '1967' },
    { name: 'Nigeria', flag: 'img/nigeria.png', federation: 'Federación Nigeriana de Fútbol', foundation: '1945', income: '1949' },
    { name: 'Togo', flag: 'img/Togo.png', federation: 'Federación Togolesa de Fútbol', foundation: '1960', income: '1964' },
    { name: 'Camerún', flag: 'img/camerun.png', federation: 'Federación Camerunesa de Fútbol', foundation: '1959', income: '1963' },
    { name: 'Chad', flag: 'img/chad.png', federation: 'Federación Chadeana de Fútbol', foundation: '1962', income: '1964' },
    { name: 'Congo', flag: 'img/congo.png', federation: 'Federación Congoleña de Fútbol', foundation: '1962', income: '1966' },
    { name: 'Gabón', flag: 'img/gabon.png', federation: 'Federación Gabonesa de Fútbol', foundation: '1962', income: '1967' },
    { name: 'Guinea Ecuatorial', flag: 'img/guineaecuatorial.png', federation: 'Federación Ecuatoguineana de Fútbol', foundation: '1957', income: '1986' },
    { name: 'República Centroafricana', flag: 'img/republicacentro.png', federation: 'Federación Centroafricana de Fútbol', foundation: '1961', income: '1968' },
    { name: 'República Democrática del Congo', flag: 'img/republicacongo.png', federation: 'Federación de Fútbol de la República Democrática del Congo', foundation: '1919', income: '1964' },
    { name: 'Santo Tomé y Príncipe', flag: 'img/santotome.png', federation: 'Federación Santotomense de Fútbol', foundation: '1975', income: '1976' },
    { name: 'Burundi', flag: 'img/burundi.png', federation: 'Federación de Fútbol de Burundi', foundation: '1948', income: '1972' },
    { name: 'Eritrea', flag: 'img/eritrea.png', federation: 'Federación Eritrea de Fútbol', foundation: '1996', income: '1998' },
    { name: 'Etiopía', flag: 'img/etiopia.png', federation: 'Federación Etíope de Fútbol', foundation: '1943', income: '1957' },
    { name: 'Kenia', flag: 'img/kenia.png', federation: 'Federación de Fútbol de Kenia', foundation: '1960', income: '1960' },
    { name: 'Ruanda', flag: 'img/ruanda.png', federation: 'Federación Ruandesa de Fútbol', foundation: '1972', income: '1976' },
    { name: 'Somalia', flag: 'img/somalia.png', federation: 'Federación Somalí de Fútbol', foundation: '1950', income: '1968' }, 
    { name: 'Sudán', flag: 'img/sudan.png', federation: 'Asociación de Fútbol de Sudán', foundation: '1936', income: '1957' }, 
    { name: 'Sudán del Sur', flag: 'img/sudansur.png', federation: 'Asociación de Fútbol de Sudán del Sur', foundation: '1936', income: '2012' }, 
    { name: 'Tanzania', flag: 'img/tanzania.png', federation: 'Asociación de Fútbol de Tanzania', foundation: '1930', income: '1964' }, 
    { name: 'Uganda', flag: 'img/uganda.png', federation: 'Federación de Fútbol de Uganda', foundation: '1924', income: '1959' }, 
    { name: 'Yibuti', flag: 'img/yibuti.png', federation: 'Federación Yibutiana de Fútbol', foundation: '1979', income: '1994' }, 
    { name: 'Angola', flag: 'img/angola.png', federation: 'Federación Angoleña de Fútbol', foundation: '1979', income: '1980' }, 
    { name: 'Comoras', flag: 'img/comoras.png', federation: 'Federación Conmorense de Fútbol', foundation: '1979', income: '2003' },
    { name: 'Esuatini', flag: 'img/esuatini.png', federation: 'Asociación Nacional de Fútbol de Esuatini', foundation: '1968', income: '1976' },
    { name: 'Lesoto', flag: 'img/lesoto.png', federation: 'Asociación de Fútbol de Lesoto', foundation: '1932', income: '1964' },
    { name: 'Madagascar', flag: 'img/madagascar.png', federation: 'Federación Malgache de Fútbol', foundation: '1961', income: '1963' },
    { name: 'Malaui', flag: 'img/malaui.png', federation: 'Asociación de Fútbol de Malaui', foundation: '1966', income: '1968' },
    { name: 'Mauricio', flag: 'img/mauricio.png', federation: 'Asociación de Fútbol de Mauricio', foundation: '1952', income: '1963' },
    { name: 'Mozambique', flag: 'img/moza.png', federation: 'Federación Mozambiqueña de Fútbol', foundation: '1976', income: '1978' },
    { name: 'Namibia', flag: 'img/namibia.png', federation: 'Asociación de Fútbol de Namibia', foundation: '1990', income: '1992' },
    { name: 'Reunión', flag: 'img/reunion.png', federation: 'Liga Reunionesa de Fútbol', foundation: '1956', income: '1992' },
    { name: 'Seychelles', flag: 'img/seychelles.png', federation: 'Federación de Fútbol de Seychelles', foundation: '1972', income: '1986' },
    { name: 'Sudáfrica', flag: 'img/sudafrica.png', federation: 'Asociación de Fútbol de Sudáfrica', foundation: '1932', income: '1992' },
    { name: 'Zambia', flag: 'img/zambia.png', federation: 'Asociación de Fútbol de Zambia', foundation: '1929', income: '1964' },
    { name: 'Zimbabue', flag: 'img/zimbabue.png', federation: 'Asociación de Fútbol de Zimbabue', foundation: '1965', income: '1980' },

  ];
  
  // Obtener el cuerpo de la tabla
  const tableBody = document.getElementById('table-body');
  
  // Llenar la tabla con los datos
  countriesData.forEach(country => {
    const row = document.createElement('tr');
  
    const selectionCell = document.createElement('td');
    const flagImg = document.createElement('img');
    flagImg.src = country.flag;
    flagImg.className = 'flag';
    selectionCell.appendChild(flagImg);
    selectionCell.appendChild(document.createTextNode(country.name));
    row.appendChild(selectionCell);
    
    const federationCell = document.createElement('td');
    federationCell.textContent = country.federation;
    row.appendChild(federationCell);
  
    const foundationCell = document.createElement('td');
    foundationCell.textContent = country.foundation;
    row.appendChild(foundationCell);
  
    const incomeCell = document.createElement('td');
    incomeCell.textContent = country.income;
    row.appendChild(incomeCell);
  
    tableBody.appendChild(row);
  });
