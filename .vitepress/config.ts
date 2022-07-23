import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'

const nav = [
  {
    text: 'Dokümanlar',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: 'Kılavuz', link: '/guide/introduction' },
      { text: 'Öğretici', link: '/tutorial/' },
      { text: 'Örnekler', link: '/examples/' },
      { text: 'Hızlı Başlangıç', link: '/guide/quick-start' },
      // { text: 'Style Guide', link: '/style-guide/' },
      {
        text: 'Vue 2 Dokümanları',
        link: 'https://v2.vuejs.org'
      },
      {
        text: "Vue 2'den Göç",
        link: 'https://v3-migration.vuejs.org/'
      }
    ]
  },
  {
    text: 'API',
    activeMatch: `^/api/`,
    link: '/api/'
  },
  {
    text: 'Oyun Alanı',
    link: 'https://sfc.vuejs.org'
  },
  {
    text: 'Ekosistem',
    activeMatch: `^/ecosystem/`,
    items: [
      {
        text: 'Kaynaklar',
        items: [
          { text: 'Ortaklar', link: '/partners/' },
          { text: 'Temalar', link: '/ecosystem/themes' },
          { text: 'İşler', link: 'https://vuejobs.com/?ref=vuejs' },
          { text: 'Tişört Mağazası', link: 'https://vue.threadless.com/' }
        ]
      },
      {
        text: 'Çekirdek Kitaplıklar',
        items: [
          { text: 'Vue Router', link: 'https://router.vuejs.org/' },
          { text: 'Pinia', link: 'https://pinia.vuejs.org/' }
        ]
      },
      {
        text: 'Video Kurslar',
        items: [
          {
            text: 'Vue Mastery',
            link: 'https://www.vuemastery.com/courses/'
          },
          {
            text: 'Vue School',
            link: 'https://vueschool.io/?friend=vuejs&utm_source=Vuejs.org&utm_medium=Link&utm_content=Navbar%20Dropdown'
          }
        ]
      },
      {
        text: 'Yardım',
        items: [
          {
            text: 'Discord',
            link: 'https://discord.com/invite/HBherRA'
          },
          {
            text: 'GitHub Discussions',
            link: 'https://github.com/vuejs/core/discussions'
          },
          { text: 'DEV Community', link: 'https://dev.to/t/vue' }
        ]
      },
      {
        text: 'Haberler',
        items: [
          { text: 'Blog', link: 'https://blog.vuejs.org/' },
          { text: 'Twitter', link: 'https://twitter.com/vuejs' },
          { text: 'Bülten', link: 'https://news.vuejs.org/' },
          { text: 'Etkinlikler', link: 'https://events.vuejs.org/' }
        ]
      }
    ]
  },
  {
    text: 'Hakkında',
    activeMatch: `^/about/`,
    items: [
      { text: 'SSS', link: '/about/faq' },
      { text: 'Ekip', link: '/about/team' },
      { text: 'Yayınlar', link: '/about/releases' },
      {
        text: 'Topluluk Kılavuzu',
        link: '/about/community-guide'
      },
      { text: 'Davranış Kodu', link: '/about/coc' },
      {
        text: 'Belgesel',
        link: 'https://www.youtube.com/watch?v=OrxmtDw4pVI'
      }
    ]
  },
  {
    text: 'Sponsor',
    link: '/sponsor/'
  },
  {
    text: 'Ortaklar',
    link: '/partners/',
    activeMatch: `^/partners/`
  }
]

export const sidebar = {
  '/guide/': [
    {
      text: 'Başlarken',
      items: [
        { text: 'Giriş', link: '/guide/introduction' },
        {
          text: 'Hızlı Başlangıç',
          link: '/guide/quick-start'
        }
      ]
    },
    {
      text: 'Temeller',
      items: [
        {
          text: 'Bir Uygulama Oluşturun',
          link: '/guide/essentials/application'
        },
        {
          text: 'Template Sözdizimi',
          link: '/guide/essentials/template-syntax'
        },
        {
          text: 'Reaktivite Temelleri',
          link: '/guide/essentials/reactivity-fundamentals'
        },
        {
          text: 'Computed Özellikleri',
          link: '/guide/essentials/computed'
        },
        {
          text: 'Class ve Style Bağlamaları',
          link: '/guide/essentials/class-and-style'
        },
        {
          text: 'Koşullu Yazdırma',
          link: '/guide/essentials/conditional'
        },
        { text: 'Liste Yazdırma', link: '/guide/essentials/list' },
        {
          text: 'Olay İşleme',
          link: '/guide/essentials/event-handling'
        },
        {
          text: 'Form Giriş Bağlantıları',
          link: '/guide/essentials/forms'
        },
        {
          text: 'Yaşam Döngüsü Kancaları',
          link: '/guide/essentials/lifecycle'
        },
        { text: 'Gözlemciler', link: '/guide/essentials/watchers' },
        {
          text: 'Template Referansları',
          link: '/guide/essentials/template-refs'
        },
        {
          text: 'Bileşen Temelleri',
          link: '/guide/essentials/component-basics'
        }
      ]
    },
    {
      text: 'Derinlemesine Bileşenler',
      items: [
        {
          text: 'Kayıt',
          link: '/guide/components/registration'
        },
        { text: "Prop'lar", link: '/guide/components/props' },
        { text: 'Olaylar', link: '/guide/components/events' },
        {
          text: 'Sıfat Geçişi',
          link: '/guide/components/attrs'
        },
        { text: "Slot'lar", link: '/guide/components/slots' },
        {
          text: 'Provide / inject',
          link: '/guide/components/provide-inject'
        },
        {
          text: "Asenkron Component'ler",
          link: '/guide/components/async'
        }
      ]
    },
    {
      text: 'Tekrar Kullanılabilirlik',
      items: [
        {
          text: 'Birleştirilebilirler',
          link: '/guide/reusability/composables'
        },
        {
          text: 'Özel Direktifler',
          link: '/guide/reusability/custom-directives'
        },
        { text: 'Eklentiler', link: '/guide/reusability/plugins' }
      ]
    },
    {
      text: 'Dahili Bileşenler',
      items: [
        { text: 'Transition', link: '/guide/built-ins/transition' },
        {
          text: 'TransitionGroup',
          link: '/guide/built-ins/transition-group'
        },
        { text: 'KeepAlive', link: '/guide/built-ins/keep-alive' },
        { text: 'Teleport', link: '/guide/built-ins/teleport' },
        { text: 'Suspense', link: '/guide/built-ins/suspense' }
      ]
    },
    {
      text: 'Ölçeklendirme',
      items: [
        { text: 'Tek-Dosya Bileşenleri', link: '/guide/scaling-up/sfc' },
        { text: 'Alet Takımı', link: '/guide/scaling-up/tooling' },
        { text: 'Yönlendirme', link: '/guide/scaling-up/routing' },
        {
          text: 'Durum Yönetimi',
          link: '/guide/scaling-up/state-management'
        },
        { text: 'Test', link: '/guide/scaling-up/testing' },
        {
          text: 'Sunucu-Tarafı Oluşturma (SSR)',
          link: '/guide/scaling-up/ssr'
        }
      ]
    },
    {
      text: 'En İyi Uygulamalar',
      items: [
        {
          text: 'Üretim Dağıtımı',
          link: '/guide/best-practices/production-deployment'
        },
        {
          text: 'Performans',
          link: '/guide/best-practices/performance'
        },
        {
          text: 'Ulaşılabilirlik',
          link: '/guide/best-practices/accessibility'
        },
        {
          text: 'Güvenlik',
          link: '/guide/best-practices/security'
        }
      ]
    },
    {
      text: 'TypeScript',
      items: [
        { text: 'Genel Bakış', link: '/guide/typescript/overview' },
        {
          text: 'Composition API ile TS',
          link: '/guide/typescript/composition-api'
        },
        {
          text: 'Options API ile TS',
          link: '/guide/typescript/options-api'
        }
      ]
    },
    {
      text: 'Diğer Konular',
      items: [
        {
          text: "Vue'yu Kullanma Yolları",
          link: '/guide/extras/ways-of-using-vue'
        },
        {
          text: 'Composition API SSS',
          link: '/guide/extras/composition-api-faq'
        },
        {
          text: 'Derinlikteki Reaktivite',
          link: '/guide/extras/reactivity-in-depth'
        },
        {
          text: 'Oluşturma Mekanizması',
          link: '/guide/extras/rendering-mechanism'
        },
        {
          text: 'Oluşturma Fonksiyonları & JSX',
          link: '/guide/extras/render-function'
        },
        {
          text: 'Vue ve Web Bileşenleri',
          link: '/guide/extras/web-components'
        },
        {
          text: 'Animasyonlar Teknikleri',
          link: '/guide/extras/animation'
        },
        {
          text: 'Reaktivite Dönüşümü',
          link: '/guide/extras/reactivity-transform'
        }
        // {
        //   text: 'Building a Library for Vue',
        //   link: '/guide/extras/building-a-library'
        // },
        // { text: 'Custom Renderers', link: '/guide/extras/custom-renderer' },
        // {
        //   text: 'Vue for React Devs',
        //   link: '/guide/extras/vue-for-react-devs'
        // }
      ]
    }
  ],
  '/api/': [
    {
      text: 'Genel API',
      items: [
        { text: 'Uygulama', link: '/api/application' },
        {
          text: 'Genel',
          link: '/api/general'
        }
      ]
    },
    {
      text: 'Composition API',
      items: [
        { text: 'setup()', link: '/api/composition-api-setup' },
        {
          text: 'Reaktivite: Öz',
          link: '/api/reactivity-core'
        },
        {
          text: 'Reaktivite: Araçlar',
          link: '/api/reactivity-utilities'
        },
        {
          text: 'Reaktivite: Gelişmiş',
          link: '/api/reactivity-advanced'
        },
        {
          text: 'Yaşam Döngüsü Kancaları',
          link: '/api/composition-api-lifecycle'
        },
        {
          text: 'Bağımlılık Enjeksiyonu',
          link: '/api/composition-api-dependency-injection'
        }
      ]
    },
    {
      text: 'Options API',
      items: [
        { text: 'Options: Durum', link: '/api/options-state' },
        { text: 'Options: Yazdırma', link: '/api/options-rendering' },
        {
          text: 'Options: Yaşam Döngüsü',
          link: '/api/options-lifecycle'
        },
        {
          text: 'Options: Composition',
          link: '/api/options-composition'
        },
        { text: 'Options: Çeşitli', link: '/api/options-misc' },
        {
          text: 'Bileşen Örneği',
          link: '/api/component-instance'
        }
      ]
    },
    {
      text: 'Yerleşikler',
      items: [
        { text: 'Direktifler', link: '/api/built-in-directives' },
        { text: 'Bileşenler', link: '/api/built-in-components' },
        {
          text: 'Özel Elemanlar',
          link: '/api/built-in-special-elements'
        },
        {
          text: 'Özel Sıfatlar',
          link: '/api/built-in-special-attributes'
        }
      ]
    },
    {
      text: 'Tek-Dosya Bileşenleri',
      items: [
        { text: 'Sözdizimi Belirtimi', link: '/api/sfc-spec' },
        { text: '<script setup>', link: '/api/sfc-script-setup' },
        { text: 'CSS Özellikleri', link: '/api/sfc-css-features' }
      ]
    },
    {
      text: "Gelişmiş API'ler",
      items: [
        { text: 'Render Fonksiyonu', link: '/api/render-function' },
        { text: 'Suncu-Tarafı Oluşturma', link: '/api/ssr' },
        {
          text: 'TypeScript Yardımcı Türleri',
          link: '/api/utility-types'
        },
        { text: 'Özel Oluşturucu', link: '/api/custom-renderer' }
      ]
    }
  ],
  '/examples/': [
    {
      text: 'Temel',
      items: [
        {
          text: 'Merhaba Dünya',
          link: '/examples/#hello-world'
        },
        {
          text: 'Kullanıcı Girişini İşleme',
          link: '/examples/#handling-input'
        },
        {
          text: 'Sıfat Bağlamaları',
          link: '/examples/#attribute-bindings'
        },
        {
          text: 'Koşullar ve Döngüler',
          link: '/examples/#conditionals-and-loops'
        },
        {
          text: 'Form Bağlamaları',
          link: '/examples/#form-bindings'
        },
        {
          text: 'Örnek Bileşen',
          link: '/examples/#simple-component'
        }
      ]
    },
    {
      text: 'Pratik',
      items: [
        {
          text: 'Markdown Editörü',
          link: '/examples/#markdown'
        },
        {
          text: 'Veri İşleme',
          link: '/examples/#fetching-data'
        },
        {
          text: 'Sıralamalı ve Filtreli Grid',
          link: '/examples/#grid'
        },
        {
          text: 'Ağaç Görünümü',
          link: '/examples/#tree'
        },
        {
          text: 'SVG Grafiği',
          link: '/examples/#svg'
        },
        {
          text: 'Geçişli Modal',
          link: '/examples/#modal'
        },
        {
          text: 'Geçişli Liste',
          link: '/examples/#list-transition'
        },
        {
          text: 'TodoMVC',
          link: '/examples/#todomvc'
        }
      ]
    },
    {
      // https://eugenkiss.github.io/7guis/
      text: "7 GUI'ler",
      items: [
        {
          text: 'Sayaç',
          link: '/examples/#counter'
        },
        {
          text: 'Sıcaklık Dönüştürücü',
          link: '/examples/#temperature-converter'
        },
        {
          text: 'Uçuş Rezervasyonu',
          link: '/examples/#flight-booker'
        },
        {
          text: 'Zamanlayıcı',
          link: '/examples/#timer'
        },
        {
          text: 'CRUD',
          link: '/examples/#crud'
        },
        {
          text: 'Daire Çizici',
          link: '/examples/#circle-drawer'
        },
        {
          text: 'Hücreler',
          link: '/examples/#cells'
        }
      ]
    }
  ],
  '/style-guide/': [
    {
      text: 'Stil Rehberi',
      items: [
        {
          text: 'Genel Bakış',
          link: '/style-guide/'
        },
        {
          text: 'A - Temel',
          link: '/style-guide/rules-essential'
        },
        {
          text: 'B - Kesinlikle Önerilen',
          link: '/style-guide/rules-strongly-recommended'
        },
        {
          text: 'C - Önerilen',
          link: '/style-guide/rules-recommended'
        },
        {
          text: 'D - Dikkate Kullanın',
          link: '/style-guide/rules-use-with-caution'
        }
      ]
    }
  ]
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'tr-TR',
  title: 'Vue.js',
  description: 'Vue.js - İlerici JavaScript Çerçevesi',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',

  head: [
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://vuejs.org/images/logo.png'
      }
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://sponsors.vuejs.org'
      }
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ]
  ],

  themeConfig: {
    nav,
    sidebar,

    algolia: {
      indexName: 'vuejs',
      appId: 'ML0LEBN7FQ',
      apiKey: 'f49cbd92a74532cc55cfbffa5e5a7d01',
      placeholder: 'Ara',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    },

    socialLinks: [
      { icon: 'languages', link: '/translations/' },
      { icon: 'github', link: 'https://github.com/vuejs/' },
      { icon: 'twitter', link: 'https://twitter.com/vuejs' },
      { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
    ],

    editLink: {
      repo: 'vuejs/docs',
      text: "Bu sayfayı GitHub'da düzenle"
    },

    footer: {
      license: {
        text: 'MIT Lisansı',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Tüm Hakları Saklıdır © 2014-${new Date().getFullYear()} Evan You`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
})
