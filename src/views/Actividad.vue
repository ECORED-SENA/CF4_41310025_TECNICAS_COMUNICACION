<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Importancia de las TIC en la comunicación organizacional.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea la pregunta de cada ítem y seleccione la respuesta correcta.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una de las principales ventajas del uso de TIC en la comunicación organizacional?',
          imagen: require('@/assets/curso/preguntas/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Optimización de la gestión de la información.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incremento de la carga de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción del contacto interpersonal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mayor complejidad en las tareas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué término describe la adopción de nuevas tecnologías en la sociedad de la información?',
          imagen: require('@/assets/curso/preguntas/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Globalización tecnológica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Rechazo tecnológico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desconexión digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fragmentación informativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes es una aplicación común de las TIC en las organizaciones?',
          imagen: require('@/assets/curso/preguntas/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Correo electrónico.', esCorrecta: true },
            { id: 'b', texto: 'Gestión de residuos.', esCorrecta: false },
            { id: 'c', texto: 'Producción en masa.', esCorrecta: false },
            { id: 'd', texto: 'Transporte de mercancías.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué impacto tienen las TIC en la competitividad empresarial?',
          imagen: require('@/assets/curso/preguntas/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora en la competitividad y productividad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducción de costos laborales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumento de los tiempos de espera.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Desorganización interna.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué herramienta de TIC es esencial para la interacción social dentro de una organización?',
          imagen: require('@/assets/curso/preguntas/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Redes sociales internas.', esCorrecta: true },
            { id: 'b', texto: 'Máquinas expendedoras.', esCorrecta: false },
            { id: 'c', texto: 'Planificación financiera.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Equipos de protección personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es un ejemplo de innovación social facilitada por las TIC?',
          imagen: require('@/assets/curso/preguntas/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Creación de valor agregado.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Reducción de costos operativos.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Aumento de la burocracia.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Despersonalización de servicios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué aspecto no se relaciona con la funcionalidad de las TIC en la organización?',
          imagen: require('@/assets/curso/preguntas/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumento del espacio físico necesario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Acceso eficiente a recursos tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejora en la gestión de la información.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Innovación social.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes es una ventaja de la inclusión y participación activa a través de las TIC?',
          imagen: require('@/assets/curso/preguntas/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora de la cultura organizacional.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducción de la diversidad.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Aumento de la burocracia.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Disminución de la productividad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué sector ha sido transformado significativamente por las aplicaciones de las TIC?',
          imagen: require('@/assets/curso/preguntas/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Comercio electrónico.', esCorrecta: true },
            { id: 'b', texto: 'Agricultura.', esCorrecta: false },
            { id: 'c', texto: 'Minería.', esCorrecta: false },
            { id: 'd', texto: 'Transporte público.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué función cumplen los motores de búsqueda en la comunicación organizacional?',
          imagen: require('@/assets/curso/preguntas/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilitar el acceso a información relevante.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar el aislamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desmotivar la interacción social.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Complejizar la toma de decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
