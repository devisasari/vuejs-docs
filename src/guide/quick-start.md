---
footer: false
---

# Hızlı Başlangıç

Kullanım durumunuza ve tercihinize bağlı olarak, Vue'yu bir derleme _`build`_ adımıyla veya derleme adımı olmadan kullanabilirsiniz.

## Derleme Araçlarıyla

Bir yapı kurulumu, Vue [Tek Dosya Bileşenleri](/guide/scaling-up/sfc) (SFC'ler) kullanmamıza izin verir. Resmi Vue derleme kurulumu, modern, hafif ve son derece hızlı bir ön uç oluşturma aracı olan [Vite](https://vitejs.dev) temel alınarak oluşturulmuştur.

### Çevrimiçi

Vue'yu SFC'lerle çevrimiçi olarak [StackBlitz](https://vite.new/vue) üzerinden deneyebilirsiniz. StackBlitz, Vite tabanlı yapı kurulumunu doğrudan tarayıcıda çalıştırır, bu nedenle yerel kurulumla neredeyse aynıdır ancak makinenize herhangi bir şey yüklemenizi gerektirmez.

### Yerel

:::tip Ön Koşullar

- Komut satırı ile aşinalık
- [Node.js](https://nodejs.org/) 15.0 veya daha yüksek bir sürümünü yükleyin
  :::

Makinenizde bir derleme aracı dahil Vue projesi oluşturmak için komut satırınızda aşağıdaki komutu çalıştırın (`>` işareti olmadan):

<div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">&gt;</span> <span style="color:#A6ACCD;">npm init vue@latest</span></span></code></pre></div>

Bu komut, resmi Vue proje iskele aracı olan [create-vue](https://github.com/vuejs/create-vue) yükleyecek ve çalıştıracaktır. TypeScript ve test desteği gibi bir dizi isteğe bağlı özellik için istemlerle karşılaşacaksınız:

<div class="language-sh"><pre><code><span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Project name: <span style="color:#888;">… <span style="color:#89DDFF;">&lt;</span><span style="color:#888;">your-project-name</span><span style="color:#89DDFF;">&gt;</span></span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add TypeScript? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add JSX Support? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add Vue Router for Single Page Application development? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add Pinia for state management? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add Vitest for Unit testing? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add Cypress for both Unit and End-to-End testing? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add ESLint for code quality? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Add Prettier for code formatting? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span></span>
<span style="color:#A6ACCD;">Scaffolding project in ./<span style="color:#89DDFF;">&lt;</span><span style="color:#888;">your-project-name</span><span style="color:#89DDFF;">&gt;</span>...</span>
<span style="color:#A6ACCD;">Done.</span></code></pre></div>

Bir seçenekten emin değilseniz, şimdilik enter'a basarak `Hayır`'ı seçmeniz yeterlidir. Proje oluşturulduktan sonra, bağımlılıkları kurmak ve geliştirme sunucusunu başlatmak için talimatları izleyin:

<div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">&gt; </span><span style="color:#A6ACCD;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#888;">your-project-name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:var(--vt-c-green);">&gt; </span><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"><span style="color:var(--vt-c-green);">&gt; </span><span style="color:#A6ACCD;">npm run dev</span></span>
<span class="line"></span></code></pre></div>

Şimdi ilk Vue projenizi çalıştırmalısınız! Oluşturulan projedeki örnek bileşenlerin, [Options API](/guide/introduction.html#options-api) yerine [Composition API](/guide/introduction.html#composition-api) ve `<script setup>` kullanılarak yazıldığını unutmayın. İşte bazı ek ipuçları:

- Önerilen IDE kurulumu, [Visual Studio Code](https://code.visualstudio.com/) + [Volar eklentisi](https://marketplace.visualstudio.com/items?itemName=Vue.volar) şeklindedir. Başka düzenleyiciler kullanıyorsanız [IDE destek bölümüne](/guide/scaling-up/tooling.html#ide-support) bakın.
- Arka uç çerçeveleriyle entegrasyon da dahil olmak üzere daha fazla araç ayrıntısı [Alet Takımı Kılavuzunda](/guide/scaling-up/tooling.html) tartışılmaktadır.
- Temel oluşturma aracı Vite hakkında daha fazla bilgi edinmek için [Vite belgelerine](https://vitejs.dev) göz atın.
- TypeScript kullanmayı seçtiyseniz, [TypeScript Kullanım Kılavuzuna](typescript/overview.html) bakın.

Uygulamanızı üretime göndermeye hazır olduğunuzda aşağıdakileri çalıştırın:

<div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">&gt; </span><span style="color:#A6ACCD;">npm run build</span></span>
<span class="line"></span></code></pre></div>

Bu, projenin `./dist` dizininde uygulamanızın üretime hazır bir yapısını oluşturacaktır. Uygulamanızı üretime gönderme hakkında daha fazla bilgi edinmek için [Üretim Dağıtım Kılavuzuna](/guide/best-practices/production-deployment.html) göz atın.

[Sonraki Adımlar >](#next-steps)

## Derleme Araçları Olmadan

Vue'yu bir derleme adımı olmadan kullanmaya başlamak için aşağıdaki kodu bir HTML dosyasına kopyalayın ve tarayıcınızda açın:

```html
<script src="https://unpkg.com/vue@3"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Merhaba Vue!'
      }
    }
  }).mount('#app')
</script>
```

Yukarıdaki örnek, tüm API'lerin global `Vue` değişkeni altında gösterildiği global Vue yapısını kullanır. Örneğin, `ref` API'sini de kullanmak için şunları yapabilirsiniz:

```js
const { createApp, ref } = Vue
```

Genel yapı çalışırken, tutarlılık için belgelerin geri kalanında öncelikle [ES modülleri](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) sözdizimini kullanacağız. Vue'yu yerel ES modülleri üzerinden kullanmak için bunun yerine aşağıdaki HTML'yi kullanın:

```html
<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
</script>

<div id="app">{{ message }}</div>

<script type="module">
  import { createApp } from 'vue'

  createApp({
    data() {
      return {
        message: 'Merhaba Vue!'
      }
    }
  }).mount('#app')
</script>
```

Kodumuzda doğrudan `'vue'`dan nasıl içe aktarabileceğimize dikkat edin - bu, [Import Maps](https://caniuse.com/import-maps) adlı yerel bir tarayıcı özelliğinden yararlanan `<script type="importmap">` bloğuyla mümkün olur.

`import maps`'e diğer bağımlılıklar için girişler ekleyebilirsiniz - bunların kullanmayı düşündüğünüz kitaplığın ES modülleri sürümünü işaret ettiğinden emin olun.

:::tip Import Maps Tarayıcı Desteği
Import maps, Chromium tabanlı tarayıcılarda varsayılan olarak desteklenir, bu nedenle öğrenme sürecinde Chrome veya Edge kullanmanızı öneririz.

Firefox kullanılıyorsa, yalnızca 102+ sürümünde desteklenir ve şu anda `about:config` içindeki `dom.importMaps.enabled` seçeneği aracılığıyla etkinleştirilmesi gerekir.

Tercih ettiğiniz tarayıcı henüz içe aktarma haritalarını desteklemiyorsa, [es-module-shims](https://github.com/guybedford/es-module-shims) ile çoklu doldurabilirsiniz.
:::

:::warning Üretim İçin Değil
Impost Maps'e dayalı kurulum yalnızca öğrenme amaçlıdır - Vue'yu üretimde oluşturma araçları olmadan kullanmayı düşünüyorsanız, [Üretim Dağıtım Kılavuzu](/guide/best-practices/production-deployment.html#without-build-tools)'nu kontrol ettiğinizden emin olun.
:::

### HTTP Üzerinden Sunma

Kılavuzun derinliklerine indikçe, daha kolay yönetilebilmesi için kodumuzu ayrı JavaScript dosyalarına bölmemiz gerekebilir. Örneğin:

```html
<!-- index.html -->
<script type="module">
  import { createApp } from 'vue'
  import MyComponent from './my-component.js'

  createApp(MyComponent).mount('#app')
</script>
```

```js
// my-component.js
export default {
  data() {
    return { count: 0 }
  },
  template: `<div>sayı: {{ count }}</div>`
}
```

Bunun çalışması için HTML'nizi `file://` protokolü yerine `http://` protokolü üzerinden sunmanız gerekir. Yerel bir HTTP sunucusu başlatmak için önce [Node.js](https://nodejs.org/en/) yükleyin ve ardından HTML dosyanızın bulunduğu dizindeki komut satırından `npx serve` komutunu çalıştırın. Doğru MIME türleriyle statik dosyalar sunabilen başka herhangi bir HTTP sunucusunu da kullanabilirsiniz.

İçe aktarılan bileşenin şablonunun bir JavaScript dizesi olarak satır içi olduğunu fark etmiş olabilirsiniz. VSCode kullanıyorsanız, [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) uzantısını yükleyebilir ve dizelere `/* ile önek koyabilirsiniz. html*/` onlar için sözdizimi vurgulaması almak için yorum yapın.

## Sonraki Adımlar

[Giriş](/guide/introduction) bölümünü atladıysanız, belgelerin geri kalanına geçmeden önce onu okumanızı şiddetle tavsiye ederiz.

<div class="vt-box-container next-steps">
  <a class="vt-box" href="/guide/essentials/application.html">
    <p class="next-steps-link">Kılavuza Devam Et</p>
    <p class="next-steps-caption">Kılavuz, çerçevenin her yönü boyunca tam ayrıntılı olarak size yol gösterir.</p>
  </a>
  <a class="vt-box" href="/tutorial/">
    <p class="next-steps-link">Eğitimleri Deneyin</p>
    <p class="next-steps-caption">Bir şeyleri uygulamalı öğrenmeyi tercih edenler için.</p>
  </a>
  <a class="vt-box" href="/examples/">
    <p class="next-steps-link">Örneklere göz atın</p>
    <p class="next-steps-caption">Temel özelliklerin ve ortak kullanıcı arabirimi görevlerinin örneklerini keşfedin.</p>
  </a>
</div>
