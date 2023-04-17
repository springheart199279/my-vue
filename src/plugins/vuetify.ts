import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import { createVuetify} from 'vuetify' 
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#41b883',
          background: '#35495e',
          error: '#d63031',
          info: '#0984e3',
          secondary: '#fdcb6e',
          success: '#00cec9',
          surface: '#000',
          warning: '#2d3436',
        },
        dark: true,
        variables: {},
      },
    },
  },
})
