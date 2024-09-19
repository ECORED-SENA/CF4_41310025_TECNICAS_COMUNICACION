<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tecnologías de la Información y la Comunicación (TIC)

    .row.justify-content-center.align-items-center.mb-5
      .col-md.order-1.order-md-0
        p.mb-0 Las tecnologías de la información y la comunicación (TIC) están diseñadas con el propósito de mejorar la vida de todos los habitantes del planeta. Estas tecnologías no solo comprenden herramientas e instrumentos que promueven la causa de la libertad y la democracia, sino que también proporcionan los medios necesarios para propagar el conocimiento y facilitar la comprensión entre los seres humanos.
      .col-md-auto.order-0.order-md-1
        img(src='@/assets/curso/tema2/img1.svg', style="max-width: 132px", alt='').mx-auto.mb-4.mb-md-0


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema2/img2.png', style="max-width: 100%", alt='').m-auto

      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bgP")
          div(titulo="Conjunto de recursos y técnicas")
            p Las TIC incluyen una amplia gama de recursos, procedimientos y técnicas empleados en el procesamiento, almacenamiento y transmisión de información.
          div(titulo="Más allá de la computadora")
            p No se trata solo de una computadora, sino que Internet juega un papel integral en el procesamiento de la información, tanto de manera presencial como a distancia. Ejemplos incluyen el uso de teléfonos móviles o computadoras portátiles con capacidad de operar en red a través de una conexión inalámbrica, ofreciendo cada vez más prestaciones, facilidades y rendimiento.
          div(titulo="Manipulación de la información")
            p Las TIC constituyen el conjunto de recursos necesarios para manipular la información, como ordenadores, programas informáticos y redes, que permiten convertir, almacenar, administrar, transmitir y encontrar la información de manera eficiente.


    p.mb-5 Este enfoque subraya cómo las TIC han ampliado significativamente las capacidades humanas para interactuar con la información, facilitando el acceso al conocimiento y potenciando la comunicación a escala global. Estas herramientas incluyen redes que conectan a personas y organizaciones en todo el mundo, permitiendo la creación de comunidades virtuales y el intercambio de información: 


    .bgCarrusel.mb-5
      .p-md-4.py-3.py-md-4
        .row.justify-content-center.align-items-center.my-md-5.my-3
          .col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/tema2/img3.png', style="max-width: 100%", alt='').m-auto
          .col-lg-8
            SlyderF(columnas="col-lg-6 col-xxl-4")
              .tarjeta.bgWhite.p-4.shadow-soft
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img4.svg', style="max-width: 82px", alt='').m-auto
                h5.text-center Las redes
                p.text-center Conjunto de equipos interconectados que comparten recursos utilizando dispositivos que permiten el envío y recepción de datos. Facilitan la compartición de recursos y reducción de costos en una red informática.

              .tarjeta.bgWhite.p-4.shadow-soft
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img5.svg', style="max-width: 82px", alt='').m-auto
                h5.text-center Los servicios
                p.text-center Las TIC han transformado el acceso a contenidos, servicios y aplicaciones. Servicios como comercio electrónico, banca en línea, y acceso a la administración pública han surgido como nuevos canales de difusión de productos y servicios.

              .tarjeta.bgWhite.p-4.shadow-soft
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img6.svg', style="max-width: 82px", alt='').m-auto
                h5.text-center Los terminales
                p.text-center Actúan como puntos de acceso a la sociedad de la información, evolucionando constantemente para aprovechar la digitalización y la disponibilidad de infraestructuras para el intercambio de información digital.


              .tarjeta.bgWhite.p-4.shadow-soft
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img7.svg', style="max-width: 82px", alt='').m-auto
                h5.text-center Correo electrónico
                p.text-center Actividad común que ha transformado las formas de interacción, permitiendo la comunicación instantánea entre usuarios a través de internet.

              .tarjeta.bgWhite.p-4.shadow-soft
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img8.svg', style="max-width: 82px", alt='').m-auto
                h5.text-center Motores de búsqueda
                p.text-center Herramientas clave en la sociedad de la información, como Google o Yahoo, que permiten encontrar y extraer información relevante de la web.

              .tarjeta.bgWhite.p-4.shadow-soft
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img9.svg', style="max-width: 82px", alt='').m-auto
                h5.text-center Banca en línea
                p.text-center Ha experimentado un crecimiento significativo debido a las TIC, ofreciendo comodidad y facilidad en la gestión de productos bancarios.

              .tarjeta.bgWhite.p-4.shadow-soft
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img10.svg', style="max-width: 82px", alt='').m-auto
                h5.text-center Comercio electrónico
                p.text-center Transacciones virtuales realizadas a través de internet, representando una nueva forma de comercio global.

              .tarjeta.bgWhite.p-4.shadow-soft
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img11.svg', style="max-width: 82px", alt='').m-auto
                h5.text-center Audio y música
                p.text-center Uso de reproductores de audio portátiles como parte de la evolución de los terminales para el consumo de contenido digital.

              .tarjeta.bgWhite.p-4.shadow-soft
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img12.svg', style="max-width: 82px", alt='').m-auto
                h5.text-center TV y cine
                p.text-center Evolución hacia la alta definición y servicios como video bajo demanda, donde el usuario controla el contenido de manera interactiva.

    .title-container.mb-5
      h3.title-container__text Acceso y uso de los medios tecnológicos

    p.mb-5 El papel de las TIC en las organizaciones empresariales es de gran relevancia, ya que el acceso y uso de los recursos tecnológicos aportan beneficios como:

    .row.justify-content-center.mb-5
      .col-lg-6
        .bgP10.px-3.py-2.mb-2.br-8
          .row.justify-content-center.align-items-center
            .col-auto
              img(src='@/assets/curso/tema2/img14.svg', style="max-width: 39px", alt='').m-auto
            .col
              p.mb-0 Modernización de la gestión de la información y la comunicación organizacional.

        .bgP10.px-3.py-2.mb-2.br-8
          .row.justify-content-center.align-items-center
            .col-auto
              img(src='@/assets/curso/tema2/img15.svg', style="max-width: 39px", alt='').m-auto
            .col
              p.mb-0 Ubicación de centros de atención al cliente.

        .bgP10.px-3.py-2.mb-2.br-8
          .row.justify-content-center.align-items-center
            .col-auto
              img(src='@/assets/curso/tema2/img16.svg', style="max-width: 39px", alt='').m-auto
            .col
              p.mb-0 Expansión del mercado potencial (comercio electrónico).


        .bgP10.px-3.py-2.mb-2.br-8
          .row.justify-content-center.align-items-center
            .col-auto
              img(src='@/assets/curso/tema2/img17.svg', style="max-width: 39px", alt='').m-auto
            .col
              p.mb-0 Reducción de costos en procesos logísticos.


        .bgP10.px-3.py-2.mb-2.br-8
          .row.justify-content-center.align-items-center
            .col-auto
              img(src='@/assets/curso/tema2/img18.svg', style="max-width: 39px", alt='').m-auto
            .col
              p.mb-0 Investigación y desarrollo.

        .bgP10.px-3.py-2.mb-2.br-8
          .row.justify-content-center.align-items-center
            .col-auto
              img(src='@/assets/curso/tema2/img19.svg', style="max-width: 39px", alt='').m-auto
            .col
              p.mb-0 Formación del personal.

        .bgP10.px-3.py-2.mb-2.br-8
          .row.justify-content-center.align-items-center
            .col-auto
              img(src='@/assets/curso/tema2/img20.svg', style="max-width: 39px", alt='').m-auto
            .col
              p.mb-0 Innovaciones comerciales, organizativas y logísticas.

        .bgP10.px-3.py-2.mb-2.br-8
          .row.justify-content-center.align-items-center
            .col-auto
              img(src='@/assets/curso/tema2/img21.svg', style="max-width: 39px", alt='').m-auto
            .col
              p.mb-0 Desarrollo de innovaciones en servicios y respuestas a las necesidades de los consumidores.

        .bgP10.px-3.py-2.mb-2.br-8
          .row.justify-content-center.align-items-center
            .col-auto
              img(src='@/assets/curso/tema2/img22.svg', style="max-width: 39px", alt='').m-auto
            .col
              p.mb-0 Organización menos jerarquizada, con una distribución sistemática y práctica de la información.

      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/tema2/img13.png', style="max-width: 100%", alt='').m-auto


    .title-container.mb-5
      h3.title-container__text Medios tecnológicos a emplear

    p.mb-5 Las TIC están enfocadas principalmente en el almacenamiento, recuperación, procesamiento y comunicación de la información, considerando dos aspectos:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bgA10.p-5.mb-3
        .row.justify-content-center.align-items-center.mb-4
          .col-auto
            img(src='@/assets/curso/tema2/img23.svg', style="max-width: 82px", alt='').m-auto
          .col
            h4.mb-0 Aplicaciones informáticas
          
        p Programas para controlar virus, comprimir archivos, procesadores de texto, hojas de cálculo, gestores de bases de datos, y la funcionalidad de la multimedia, que permite el acceso y uso de presentaciones, audios, imágenes, videos y todo tipo de aplicaciones multimedia.

      .col-md.tarjeta.bgP10.p-5.mb-3
        .row.justify-content-center.align-items-center.mb-4
          .col-auto
            img(src='@/assets/curso/tema2/img24.svg', style="max-width: 82px", alt='').m-auto
          .col
            h4.mb-0 Internet

        p Considerada la red de redes, es un sistema universal de comunicaciones que ofrece múltiples servicios para la movilización y comunicación de la información, recursos como Telnet y WWW, que tienen un gran impacto social.

    p.mb-5 Internet posibilita dos tipos de comunicación:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3
        .tarjeta.bgA10.p-4
          .row.justify-content-center.align-items-center
            .col-md-auto
              img(src='@/assets/curso/tema2/img25.svg', style="max-width: 132px", alt='').mx-auto.mb-4.mb-md-0
            .col-md
              h5.mb-2 Sincrónica
              p.mb-0 En tiempo real, como chat, mensajes, audio y videoconferencia.

      .col-lg-5.mb-3
        .tarjeta.bgT.p-4
          .row.justify-content-center.align-items-center
            .col-md-auto
              img(src='@/assets/curso/tema2/img26.svg', style="max-width: 132px", alt='').mx-auto.mb-4.mb-md-0
            .col-md
              h5.mb-2 Asincrónica
              p.mb-0 En tiempos diferentes, como noticias grupales, listas de distribución y correo electrónico.
</template>

<script>
export default {
  name: 'Tema2',
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
