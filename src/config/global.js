export default {
  global: {
    componenteFormativo: 'La información y recolección de datos',
    descripcionCurso:
      'El componente formativo aborda la importancia de las TIC en la comunicación organizacional, destacando cómo mejoran la gestión de la información, fomentan la innovación social y generan valor agregado. Además, describe la funcionalidad de las TIC, su impacto en la sociedad de la información, y la relevancia del acceso y uso de recursos tecnológicos para la productividad empresarial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sociedad de la información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tecnologías de la Información y la Comunicación (TIC)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Sociedad de la información',
      referencia:
        'TeoCom (2022). Características de la SOCIEDAD de la INFORMACIÓN. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eXxRK0-r6Fk',
    },
    {
      tema: 'Sociedad de la información',
      referencia:
        'Udearroba (2022). Sociedad de la Información. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rrUbuq0HLK8',
    },
    {
      tema: 'Sociedad de la información',
      referencia:
        'Moretti, M., & Aguirre, A. (2020). <i>Sociedad de la información y transformación digital: Informe de Cátedra Libre Teletrabajo y Sociedad</i>. Universidad Nacional de La Plata.',
      tipo: 'Documento',
      link:
        'http://sedici.unlp.edu.ar/bitstream/handle/10915/108656/Documento_completo.pdf-PDFA.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Tecnologías de la Información y la Comunicación (TIC)',
      referencia:
        'Lifeder Educación (2022).¿Qué son las TIC y para qué sirven? Tipos y ejemplos (Tecnologías de la Información y Comunicación). [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=q8MeNBwRtPU',
    },
    {
      tema: 'Tecnologías de la Información y la Comunicación (TIC)',
      referencia:
        'Peñafiel-Loor, J., Pibaque-Pionce, M., y Alvarez-Indacochea, A. (2022). <i>Las tecnologías de la información y comunicación y su incidencia en la gestión empresarial</i>. Dom. Cien., 8(1), 1186-1200.',
      tipo: 'Documento ',
      link:
        'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://dialnet.unirioja.es/descarga/articulo/8383455.pdf&ved=2ahUKEwj6oq6-zfWHAxVaSjABHTm7ERsQFnoECBgQAQ&usg=AOvVaw3EJ6N3fIfi4fD_oKDKghw9',
    },
  ],
  glosario: [
    {
      termino: 'Acceso a las TIC',
      significado:
        'condiciones y medios que permiten a los grupos de interés acercarse y utilizar las TIC, incluyendo infraestructura, servicios, aplicaciones, políticas, y programas.',
    },
    {
      termino: 'Brecha digital',
      significado:
        'diferencia socioeconómica entre comunidades con acceso a las TIC y aquellas que no, incluyendo diferencias en la capacidad para usar TIC debido a niveles de alfabetización y competencia tecnológica.',
    },
    {
      termino: 'Ciudadano digital',
      significado:
        'persona con habilidades y competencias para el manejo y aprovechamiento de las TIC, aplicando estas competencias en su vida diaria y potencialmente certificada por el programa de Ciudadanía Digital del MINTIC.',
    },
    {
      termino: 'Competencias',
      significado:
        'habilidades o destrezas adquiridas para el uso y apropiación de las TIC, a través de formación o capacitación.',
    },
    {
      termino: 'Nodo',
      significado:
        'elemento de red que permite recibir y re enrutar comunicaciones, ya sea de acceso o conmutación.',
    },
    {
      termino: 'Ofimática',
      significado:
        'herramientas de oficina utilizadas en entidades, como hojas de cálculo y procesadores de texto.',
    },
    {
      termino: 'Tecnologías de la Información (TI)',
      significado:
        'aplicaciones, información e infraestructura que una entidad requiere para apoyar sus procesos y estrategias de negocio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bayer, C. (2014). Comunicación eficaz una competencia para lograr el éxito organizacional.',
      link:
        'https://intellectum.unisabana.edu.co/bitstream/handle/10818/4624/130814.pdf',
    },
    {
      referencia:
        'Becarria, P. y Rey, P. E. (1990). La inserción de la Informática en la Educación y sus efectos en la reconversión laboral. Instituto de Formación Docente -SEPA-. Buenos Aires.',
    },
    {
      referencia:
        'Belloch, C. (2012). Las Tecnologías de la Información y Comunicación en el aprendizaje. Material docente [on-line]. Departamento de Métodos de Investigación y Diagnóstico en Educación. Universidad de Valencia. ',
      link: 'http://www.uv.es/bellochc/pedagogia/EVA1.pdf',
    },
    {
      referencia:
        'Caber, J. y Otros. (1999). Tecnología Educativa. Editorial Síntesis. Madrid.',
      link:
        'https://www.researchgate.net/publication/232242508_Tecnologia_Educativa ',
    },
    {
      referencia:
        'Chauvin, S. (s.f.). La Comunicación Como Base del Trabajo en Equipo. ',
    },
    {
      referencia:
        "D'Adamo, J. (2007). Medios de Comunicación y Opinión Pública. McGraw-Hill Interamericana. p. 206. ISBN ",
    },
    {
      referencia:
        'Macau, R. (2004). “TIC: ¿para qué? (Funciones de las tecnologías de la información y la comunicación en las organizaciones)” [artículo en línea]. Revista de Universidad y Sociedad del Conocimiento (RUSC). Vol. 1, nº 1.',
      link:
        'https://www.bconocimientoamedirh.com.mx/insumos/item/tic-para-que-funciones-de-las-tecnologias-de-la-informacion-y-la-comunicacion-en-las-organizaciones',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'José Herney Sánchez Pizarro',
          cargo: 'Experto temático',
          centro:
            'Regional Boyacá - Centro de Desarrollo Agropecuario y Agroindustrial CEDEAGRO',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andres Felipe Herrera',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
