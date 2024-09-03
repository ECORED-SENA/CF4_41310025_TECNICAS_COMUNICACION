<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.justify-content-center.align-items-center.mb-5
      .col-auto
        img(src='@/assets/curso/intro/img1.svg', style="max-width: 146px", alt='').m-auto
      .col
        p.mb-0 La tecnología de la información y la comunicación (TIC) ha revolucionado la manera en que las organizaciones gestionan la información y se comunican. Su accesibilidad y usabilidad desempeñan un papel crucial en la interacción social dentro de las empresas, permitiendo compartir recursos y servicios de manera eficiente. Esto no solo favorece una mayor competitividad, sino que también impulsa la productividad, generando un valor agregado significativo.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tarjeta.bgP5.p-4.mb-4
          p En el contexto actual, las TIC se han convertido en herramientas esenciales para fomentar la inclusión y la participación activa en las organizaciones. Al facilitar la comunicación y el acceso a la información, estas tecnologías contribuyen a la creación de una cultura organizacional más colaborativa y efectiva. Esto es especialmente importante en un mundo globalizado, donde la rapidez y precisión en el manejo de la información son fundamentales para el éxito empresarial.

        .tarjeta.bgP60.p-4.mb-4
          p El uso adecuado de las TIC requiere una implementación cuidadosa de su funcionalidad, adaptada a las necesidades específicas de cada organización. Esto incluye no solo el manejo de datos e información, sino también la incorporación de innovaciones tecnológicas que potencien las capacidades organizativas. De esta manera, las empresas pueden mantenerse competitivas y responder eficazmente a los desafíos del entorno moderno.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/intro/img2.svg', style="max-width: 100%", alt='').m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
