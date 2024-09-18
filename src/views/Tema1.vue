<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sociedad de la información

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 En la actualidad, las organizaciones buscan mejorar la comunicación organizacional mediante el uso de nuevas tecnologías. Esto les permite acercarse a sus clientes internos, comunicarse con sus empleados, mejorar la gestión de la información y el conocimiento, motivar, retener y culturizar a su personal, e incluso lograr una reducción de costos.

        .tarjeta.bgP10.p-4
          .row.justify-content-center.align-items-center
            .col-md-auto
              img(src='@/assets/curso/tema1/img1.svg', style="max-width: 94px", alt='').mx-auto.mb-4.mb-md-0
            .col-md
              p.mb-0 Los procesos de comunicación establecen las relaciones entre los miembros de una organización; en estos procesos de intercambio se asignan y delegan funciones y compromisos. Las comunicaciones internas promueven la participación, la integración y la convivencia dentro del marco de la cultura organizacional, donde adquieren sentido el ejercicio de funciones y el reconocimiento de las capacidades individuales y grupales.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/img2.png', style="max-width: 100%", alt='').m-auto
      
    p.mb-5 En el inicio del siglo XXI, la sociedad ha entrado en una nueva etapa como consecuencia del desarrollo industrial del siglo pasado. Este nuevo orden mundial, donde el conocimiento y la información son motores de avances científicos y tecnológicos, exige una base sólida para su adopción global. La tecnología del futuro se presenta como una herramienta clave para mejorar la vida de las personas en múltiples aspectos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tarjeta.bgT.p-4
          .row.justify-content-center.align-items-center
            .col-md-auto
              img(src='@/assets/curso/tema1/img3.svg', style="max-width:132px" alt='').mx-auto.mb-4.mb-md-0
            .col-md
              p #[strong Tecnología y uso del tiempo]
              p.mb-0 La tecnología permitirá a las personas hacer un mejor uso de su tiempo, centrar su atención y fortalecer relaciones en el trabajo, en el hogar y en su vida diaria.



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Sin embargo, la globalización y la tecnología también han acelerado el ritmo de cambio en la sociedad.

        h5 Cambio vertiginoso

        p El ritmo de innovación es tan rápido que lo nuevo se convierte en obsoleto en cuestión de minutos. Hemos entrado en una era donde lo nuevo es lo único que importa y lo viejo se descarta rápidamente.

        p Además, estas nuevas tecnologías no solo potencian, sino que también mediatizan las actividades humanas, influenciando tanto de manera objetiva como subjetiva.

      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/img4.png', style="max-width: 100%", alt='').m-auto


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tarjeta.bgA10.p-4
          .row.justify-content-center.align-items-center
            .col-md-auto
              img(src='@/assets/curso/tema1/img5.svg', style="max-width:132px" alt='').mx-auto.mb-4.mb-md-0
            .col-md
              p #[strong Impacto en el sistema económico e ideológico]
              p.mb-0 Las tecnologías han contribuido significativamente a la formación de un sistema económico e ideológico desigual, que marca la realidad en la que vivimos hoy.

    .row.justify-content-center.align-items-center.mb-5
      .col-md  
        p Este fenómeno subraya las complejidades y desafíos que la era tecnológica presenta, al tiempo que destaca su omnipresencia en todos los aspectos de la vida.

        p La sociedad de la información ha transformado los modos de vida, el trabajo, y las actividades de diversión y esparcimiento, aunque no sin ciertos riesgos o peligros inminentes. A pesar de estos desafíos, la Sociedad de la Información representa un avance positivo para el desarrollo económico, social y humano.

      .col-md-auto.d-none.d-md-block 
        img(src='@/assets/curso/tema1/img6.svg', style="max-width: 100%", alt='').m-auto

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3
        .tarjeta--boton.bgP10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/img7.svg', style="max-width: 82px", alt='').m-auto
          h5.text-center Objetivo principal
          p.text-small.text-center  Establecer las bases para crear una Sociedad de la Información inclusiva, donde todos puedan participar.
      .col-lg-4.mb-3
        .tarjeta--boton.bgP10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/img8.svg', style="max-width: 82px", alt='').m-auto
          h5.text-center Promoción y masificación
          p.text-small.text-center Promover la masificación de la tecnología en las zonas más desfavorecidas.

      .col-lg-4.mb-3
        .tarjeta--boton.bgP10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/img9.svg', style="max-width: 82px", alt='').m-auto
          h5.text-center Potenciación como herramienta
          p.text-small.text-center  Posicionar la Sociedad de la Información como una herramienta clave para el desarrollo económico y social.

    p Este enfoque busca asegurar que los beneficios de la sociedad de la información sean accesibles para todos, especialmente en áreas que históricamente han quedado rezagadas.

    p Se presentan como nuevas funciones: 

    .tarjeta.bgSlyder.py-5.px-4
      SlyderA(tipo='b').mt-4
        .row.justify-content-center
          .col-lg-6
            h5.mb-4 Interactuar
            p Se refiere a la interacción con el otro, reconociéndolo y dándole participación a través de acciones inclusivas para fortalecer las habilidades sociales y mejorar la convivencia laboral, familiar y comunitaria.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img10.png', alt='').mx-auto

        .row.justify-content-center
          .col-lg-6
            h5.mb-4 Innovación
            p Más allá de la creación o mejora de productos, la "innovación social" según Michael D. Mumford, implica generar e implementar nuevas ideas sobre cómo organizar actividades e interacciones sociales para alcanzar objetivos comunes, como crear nuevas instituciones sociales, ideas de gobierno o movimientos sociales.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img11.png', alt='').mx-auto

        .row.justify-content-center
          .col-lg-6
            h5.mb-4 Generación de valor agregado
            p Propone soluciones a problemas sociales que no han sido resueltos por modelos tradicionales, a través de la innovación social, que busca satisfacer necesidades sociales mediante actividades y servicios desarrollados principalmente por organizaciones con un propósito social, en relación con la responsabilidad social.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img12.png', alt='').mx-auto

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
