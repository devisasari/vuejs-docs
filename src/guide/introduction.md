---
footer: false
---

# Giriş

:::info Vue 3 için belgeleri okuyorsunuz!

- Vue 2 belgeleri şuraya taşındı: [v2.vuejs.org](https://v2.vuejs.org/).
- Vue 2'den yükseltme mi yapıyorsunuz? Kontrol et [Migration Guide](https://v3-migration.vuejs.org/).
  :::

<style src="/@theme/styles/vue-mastery.css"></style>
<div class="vue-mastery-link">
  <a href="https://www.vuemastery.com/courses-path/beginner" target="_blank">
    <div class="banner-wrapper">
      <img class="banner" alt="Vue Mastery banner" width="96px" height="56px" src="https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/vuemastery-graphical-link-96x56.png" />
    </div>
    <p class="description"><span>VueMastery.com</span>'da video eğitimleriyle Vue öğrenin</p>
    <div class="logo-wrapper">
        <img alt="Vue Mastery Logo" width="25px" src="https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/vue-mastery-logo.png" />
    </div>
  </a>
</div>

## Vue Nedir?

Vue (/vjuː/ olarak telaffuz edilir, **view** gibi) kullanıcı arayüzleri oluşturmak için JavaScript çerçevesidir. Standart HTML, CSS ve JavaScript'in üzerine kuruludur ve ister basit ister karmaşık olsun, kullanıcı arayüzlerini verimli bir şekilde geliştirmenize yardımcı olan bildirime dayalı ve bileşen tabanlı bir programlama modeli sağlar.

İşte minimal bir örnek:

```js
import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')
```

```vue-html
<div id="app">
  <button @click="count++">
    Sayı: {{ count }}
  </button>
</div>
```

**Sonuç**

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<div class="demo">
  <button @click="count++">
    Sayı: {{ count }}
  </button>
</div>

Yukarıdaki örnek, Vue'nun iki temel özelliğini göstermektedir:

- **Bildirime Dayalı İşleme**: Vue, standart HTML'yi, JavaScript durumuna dayalı olarak HTML çıktısını bildirimsel olarak tanımlamamıza izin veren bi şablon `template` sözdizimi ile genişleştir.

- **Reaktivite**: Vue, JavaScript durum değişikliklerini otamatik olarak izler ve değişiklikler olduğunda DOM'u verimli bir şekilde günceller.

Zaten sorularınız olabilir - endişelenmeyin. Belgelerin geri kalanında her küçük ayrıntıyı ele alacağız. Şimdilik, lütfen okumaya devam edin, böylece Vue'nun neler sunduğuna dair üst düzey bir anlayışa sahip olabilirsiniz.

:::tip Ön Koşullar
Belgelerin geri kalanı HTML, CSS ve JavaScript' temel olarak aşina olduğunuzu varsayar. Ön uç geliştirme konusunda tamamen yeniyseniz, ilk adımınız olarak doğrudan bir çerçeveye atlamak en iyi fikir olmayabilir. - temel bilgileri kavrayın ve sonra geri dönün! [Bu JavaScript'e Genel Bakış](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) ile bilgi düzeyinizi kontrol edebilirsiniz. Diğer çerçeveler ile önceden deneyim yardımcı olur, ancak gerekli değildir.
:::

## Aşamalı Çerçeve

Vue, ön uç geliştirmede ihtiyaç duyulan ortak özelliklerin çoğunu kapsayan bir çerçeve ve ekosistemdir. Ancak web son derece çeşitlidir - web üzerinde oluşturduğumuz şeyler biçim ve ölçek olarak büyük ölçüde değişebilir. Bunu akılda tutarak, Vue esnek ve aşamalı olarak benimsenebilir olacak şekilde tasarlanmıştır. Kullanım durumunuza bağlı olarak Vue farklı şekillerde kullanılabilir:

- Bir yapı -`build`- adımı olmadan statik HTML'yi geliştirme
- Herhangi bir sayfaya Web Bileşenleri olarak gömme
- Tek Sayfa Uygulaması (SPA)
- Fullstack / Sunucu Tarafı Oluşturma (SSR)
- Jamstack / Statik Site Oluşturma (SSG)
- Masaüstü, mobil, WebGL ve hatta terminali hedefleme

Bu kavramaları korkutucu buluyorsanız endişelenmeyin! Öğretici ve kılavuz yalnızca temel HTML ve JavaScript bilgisi gerektirir ve bunlardan herhangi birinde uzman olmadan takip edebilmeniz gerekir.

Vue'yu yığınınıza en iyi şekilde nasıl entegre edebileceğinizle ilgilenen deneyimli bir geliştiriciyseniz veya bu terimlerin ne anlama geldiğini merak ediyorsanız, bunları [Vue Kullanma Yolları](/guide/extras/ways-of-using-vue) bölümünde daha ayrıntılı olarak tartışıyoruz.

Esnekliğe rağmen, Vue'nun nasıl çalıştığına dair temel bilgiler tüm bu kullanım durumlarında paylaşılır. Şu anda yeni başlamış olsanız bile, bu yolda kazanılan bilgiler, gelecekte daha iddialı hedeflere ulaşmak için büyüdükçe faydalı olmaya devam edecektir. Deneyimli biriyseniz, aynı üretkenliği korurken çözmeye çalıştığınız sorunlara dayalı olarak Vue'dan yararlanmanın en uygun yolunu seçebilirsiniz. Bu nedenle Vue'ya "Aşamalı Çerçeve" diyoruz: sizinle birlikte büyüyebilen ve ihtiyaçlarınıza uyum sağlayabilen bir çerçevedir.

## Tek Dosya Bileşenleri

Çoğu yapı aracı -`build-tool`- özellikli Vue projesinde, Vue bileşenlerini **Tek Dosya Bileşeni** ('*.vue' dosyaları olarak da bilinir, **SFC** olarak kısaltılır) adı verilen HTML benzeri bir dosya formatı kullanarak yazarız. Bir Vue SFC, adından da anlaşılacağı gibi, bileşenin mantığını (JavaScript), şablonu (HTML) ve stilleri (CSS) tek bir dosyada saklar. İşte SFC formatında yazılmış önceki örnek:

```vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Sayı: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

SFC, Vue'nin tanımlayıcı bir özelliğidir ve **eğer** kullanım durumunuz bir yapı kurulumunu garanti ediyorsa, Vue bileşenlerini yazmanın önerilen yoludur. [Nasıl ve neden SFC?](/guide/scaling-up/sfc) sorusu hakkında daha fazla bilgiyi kendi özel bölümünde bulabilirsiniz - ancak şimdilik, Vue'nun sizin için tüm oluşturma araçları kurulumunu halledeceğini bilin.

## API Stilleri

Vue bileşenleri iki farklı API stilinde yazılabilir: **Options API** ve **Composition API**.

### Options API

Options API'si ile bir bileşenin mantığını "data", "methods" ve "mounted" gibi seçeneklerden oluşan bir nesne kullanarak tanımlarız. Seçenekler tarafından tanımlanan özellikler, bileşen örneğine işaret eden "this" iç işlevlerde gösterilir:

```vue
<script>
export default {
  // data() işlevinde döndürülen özellikler reaktif duruma gelir
  // ve `this` üzerinde açığa çıkar.
  data() {
    return {
      count: 0
    }
  },

  // Methodlar, durumu -state- değiştiren ve güncellemeleri tetikleyen fonksiyonlardır.
  // Template'lerde olay dinleyici -event listener- olarak bağlanabilirler.
  methods: {
    increment() {
      this.count++
    }
  },

  // Yaşam döngüsü kancaları,
  // bir bileşenin yaşam döngüsünün farklı aşamalarında çağrılır.
  // Bu fonksiyon, bileşen monte edildiğinde - DOM'a yerleştiğinde - çağrılır.
  mounted() {
    console.log(`Başlangıç sayısı: ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Sayı: {{ count }}</button>
</template>
```

[Oyun Alanında Deneyin](https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gcmVhY3RpdmUgc3RhdGVcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY291bnQ6IDBcbiAgICB9XG4gIH0sXG5cbiAgLy8gZnVuY3Rpb25zIHRoYXQgbXV0YXRlIHN0YXRlIGFuZCB0cmlnZ2VyIHVwZGF0ZXNcbiAgbWV0aG9kczoge1xuICAgIGluY3JlbWVudCgpIHtcbiAgICAgIHRoaXMuY291bnQrK1xuICAgIH1cbiAgfSxcblxuICAvLyBsaWZlY3ljbGUgaG9va3NcbiAgbW91bnRlZCgpIHtcbiAgICBjb25zb2xlLmxvZyhgVGhlIGluaXRpYWwgY291bnQgaXMgJHt0aGlzLmNvdW50fS5gKVxuICB9XG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8YnV0dG9uIEBjbGljaz1cImluY3JlbWVudFwiPkNvdW50IGlzOiB7eyBjb3VudCB9fTwvYnV0dG9uPlxuPC90ZW1wbGF0ZT4ifQ==)

### Composition API

Composition API ile, içe aktarılan API işlevlerini kullanarak bir bileşenin mantığını tanımlarız. SFC'lerde, Composition API'si genellikle [`<script setup>`](/api/sfc-script-setup) ile birlikte kullanılır. 'setup' özelliği, Vue'nun Composition API'yi daha az standart ile kullanmamıza izin veren derleme zamanı dönüşümleri gerçekleştirmesini sağlayan bir ipucudur. Örneğin, `<script setup>` içinde bildirilen içe aktarmalar ve üst düzey değişkenler/fonksiyonlar doğrudan template'de kullanılabilir.

Tam olarak aynı şablona sahip, ancak bunun yerine Composition API ve `<script setup>` kullanan aynı bileşen:

```vue
<script setup>
import { ref, onMounted } from 'vue'

// reaktif durum - state -
const count = ref(0)

// durumu değiştiren ve güncellemeleri tetikleyen fonksiyonlar
function increment() {
  count.value++
}

// yaşam döngüsü kancaları
onMounted(() => {
  console.log(`Başlangıç sayısı: ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Sayı: {{ count }}</button>
</template>
```

[Oyun Alanında Deneyin](https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiwgb25Nb3VudGVkIH0gZnJvbSAndnVlJ1xuXG4vLyByZWFjdGl2ZSBzdGF0ZVxuY29uc3QgY291bnQgPSByZWYoMClcblxuLy8gZnVuY3Rpb25zIHRoYXQgbXV0YXRlIHN0YXRlIGFuZCB0cmlnZ2VyIHVwZGF0ZXNcbmZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbiAgY291bnQudmFsdWUrK1xufVxuXG4vLyBsaWZlY3ljbGUgaG9va3Ncbm9uTW91bnRlZCgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBUaGUgaW5pdGlhbCBjb3VudCBpcyAke2NvdW50LnZhbHVlfS5gKVxufSlcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxidXR0b24gQGNsaWNrPVwiaW5jcmVtZW50XCI+Q291bnQgaXM6IHt7IGNvdW50IH19PC9idXR0b24+XG48L3RlbXBsYXRlPiJ9)

### Hangisini Seçmeli?

Her iki API stili de genel kullanım durumlarını tam olarak karşılayabilir. Bunlar, tamamen aynı temel sistem tarafından desteklenen farklı arayüzlerdir. Aslında, Options API'si, Composition API'sinin üstüne uygulanır! Vue ile ilgili temel kavramlar ve bilgiler iki stil arasında paylaşılır.

Options API'si, OOP dil geçmişlerinden gelen kullanıcılar için sınıf tabanlı bir zihinsel modelle tipik olarak daha iyi uyum sağlayan bir `bileşen örneği` (örnekte görüldüğü gibi `this`) kavramı etrafında toplanmıştır. Ayrıca, reaktivite ayrıntılarını soyutlayarak ve seçenek grupları aracılığıyla kod organizasyonunu zorunlu kılarak daha yeni başlayanlar için uygundur.

Composition API, reaktif durum değişkenlerini doğrudan bir işlev kapsamında bildirme ve karmaşıklığı ele almak için birden çok işlevden birlikte durum oluşturma etrafında toplanmıştır. Daha serbest biçimlidir ve etkin bir şekilde kullanılması için Vue'da reaktivitenin nasıl çalıştığının anlaşılmasını gerektirir. Buna karşılık esnekliği, mantığı düzenlemek ve yeniden kullanmak için daha güçlü kalıplar sağlar.

İki stil arasındaki karşılaştırma ve Composition API'nin potansiyel faydaları hakkında [Composition API SSS](/guide/extras/composition-api-faq) bölümünde daha fazla bilgi edinebilirsiniz.

Vue'da yeniyseniz, genel tavsiyemiz şudur:

- Öğrenme amacıyla, size daha kolay anlaşılan bir tarz seçin. Yine, temel kavramların çoğu iki stil arasında paylaşılır. Diğer stili daha sonra her zaman seçebilirsiniz.

- Üretim kullanımı için:

   - Derleme araçları kullanmıyorsanız veya Vue'yu öncelikle düşük karmaşıklık senaryolarında kullanmayı planlıyorsanız, Options API'sini kullanın, örn. aşamalı geliştirme.

   - Vue ile tam uygulamalar oluşturmayı planlıyorsanız, Composition API + Tel Sayfa Bileşenleri ile gidin.

Öğrenme aşamasında yalnızca bir stile bağlı kalmak zorunda değilsiniz. Belgelerin geri kalanı, uygun olduğunda her iki stilde de kod örnekleri sağlayacaktır ve sol kenar çubuğunun üst kısmındaki **API Tercihi anahtarlarını** kullanarak istediğiniz zaman bunlar arasında geçiş yapabilirsiniz.

## Hala Sorularınız mı Var?

[SSS](/about/faq)'ımıza göz atın.

## Öğrenme Yolunuzu Seçin

Farklı geliştiricilerin farklı öğrenme stilleri vardır. Tercihinize uygun bir öğrenme yolu seçmekten çekinmeyin - mümkünse tüm içeriğin üzerinden geçmenizi tavsiye etmemize rağmen!

<div class="vt-box-container next-steps">
  <a class="vt-box" href="/tutorial/">
    <p class="next-steps-link">Eğitimleri Deneyin</p>
    <p class="next-steps-caption">Bir şeyleri uygulamalı öğrenmeyi tercih edenler için.</p>
  </a>
  <a class="vt-box" href="/guide/quick-start.html">
    <p class="next-steps-link">Kılavuzu okuyun</p>
    <p class="next-steps-caption">Kılavuz, çerçevenin her yönü boyunca tam ayrıntılı olarak size yol gösterir.</p>
  </a>
  <a class="vt-box" href="/examples/">
    <p class="next-steps-link">Örneklere göz atın</p>
    <p class="next-steps-caption">Temel özelliklerin ve ortak kullanıcı arabirimi görevlerinin örneklerini keşfedin.</p>
  </a>
</div>
