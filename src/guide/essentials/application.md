# Bir Vue uygulaması oluşturma

## Uygulama başlangıcı

Bir Vue uygulaması oluşturabilmek için gereken ilk adım, [`createApp`](/api/application#createapp) fonksiyonunu kullanarak bir uygulama nesnesi oluşturmaktır.

```js
import { createApp } from 'vue'

const app = createApp({
  /* Kök bileşen ayarları */
})
```

## Ana bileşen

Temelde, [`createApp`](/api/application#createapp) fonksiyonuna verilen obje bir "ana bileşen"dir. Her bir Vue uygulaması, mutlaka diğer bileşenleri sarmalayacak bir "ana bileşen"e ihtiyaç duyar. 

Eğer Tek-Sayfa Bileşenleri kullanıyorsanız, ana bileşeni çoğu zaman şu şekilde çağırırsınız: 
```js
import { createApp } from 'vue'
// Ana bileşen olan App bileşenini, yazıldığı dosyadan çağırın.
import App from './App.vue'

const app = createApp(App)
```

Her ne kadar bu rehberdeki birçok örnek tek bir bileşen kullansa da, çoğu Vue uygulaması kendi içinde tekrar tekrar kullanılabilecek birçok bileşeni içeren bir bileşen yapısı içerir. Örneğin, bir yapılacaklar listesi uygulaması yapmak isteseydik, bileşenlerimiz şu şekilde olabilirdi: 

```
App (root component)
├─ TodoList
│  └─ TodoItem
│     ├─ TodoDeleteButton
│     └─ TodoEditButton
└─ TodoFooter
   ├─ TodoClearButton
   └─ TodoStatistics
```

Birden fazla bileşeni bir arada nasıl tanımlayıp kullanacağınızı sonraki bölümlerde göreceğiz. Bundan önce, şimdilik bir bileşenin içinde neler oluyor ona odaklanalım.

## Uygulamayı elemana bağlamak
Bir Vue uygulaması, herhangi bir DOM elamanına bağlanmadan (`.mount()` edilmeden önce) herhangi bir şey render etmez. Dolayısıyla uygulamamızı çalışır hale getirebilmek için gereken son adım, oluşturduğumuz uygulamayı bir DOM elemanına bağlamaktır. `mount` fonksiyonuna parametre olarak ister bir DOM elemanı, istersek de bir seçici verebiliriz.

```html
<div id="app"></div>
```

```js
app.mount('#app')
```

Oluşturduğumuz uygulamanın içeriği, verilen elamanın içerisine `render` olacaktır. Burada verdiğimiz elamanın kendisi, uygulamanın bir parçası olarak kabul edilmez.

`.mount()` fonksiyonu, mutlaka tüm uygulama ayarlamaları ve assetler kaydolduktan sonra çağırılmalıdır. Ayrıca, diğer methodlardan farklı olarak; `mount` fonksiyonu uygulama nesnesi yerine ana bileşeni döndürür.

### DOM içi ana bileşen yapısı

Herhangi bir dönüştürücü adımı kullanmadan Vue'yü kullanırken, ana bileşeni doğrudan `mount` sarmalayıcısı içerisine koyabiliriz.
```html
<div id="app">
  <button @click="count++">{{ count }}</button>
</div>
```

```js
import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')
```

Eğer ana bileşen kendi `template` ayarlasına sahip değilse; Vue otomatik olarak, sarmalayıcının `innerHTML` değerini, ana bileşen olarak algılar.

## Uygulama ayarları

Uygulama ayarları, uygulama nesnesinin içerisinden ulaşılabilecek `.config` objesinden yapılabilir. Örnek olarak uygulama seviyesinde tüm hataları yakalayabilecek bir hata işleyicisi verilebilir:

```js
app.config.errorHandler = (err) => {
  /* hatayı işleyin */
}
```

The application instance also provides a few methods for registering app-scoped assets. For example, registering a component:

Uygulama nesnesi ayrıca birkaç app'e özgü asset kayıt fonksiyonu da sağlar. Örneğin, bir bileşen şöyle kayıt edilebilir:

```js
app.component('TodoDeleteButton', TodoDeleteButton)
```

Bu şekilde `TodoDeleteButton` bileşenini, uygulamamızın herhangi bir bölümünden erişilebilir hale getirebiliriz. Bileşen ve diğer asset tiplerinin kayıtlarını, rehberin ilerleyen bölümlerinde göreceğiz. Diğer tüm uygulama nesnesi API'larına [API reference](/api/application)
This makes the `TodoDeleteButton` available for use anywhere in our app. We will discuss registration for components and other types of assets in later sections of the guide. You can also browse the full list of application instance APIs in its [API referansı](/api/application)'ndan ulaşabilirsiniz..

Tüm ayarlamaları, uygulamayı `mount` etmeden önce yapmayı unutmayın!

## Birden fazla uygulama oluşturmak
Bir sayfa üzerinde yalnızca bir uygulama ile sınırlanmış değilsiniz. `createApp` API'yı, birden fazla uygulamanın tek bir sayfa üzerinde birbirinden tamamen bağımsız çalışmasını sağlayabilir. 

```js
const app1 = createApp({
  /* ... */
})
app1.mount('#container-1')

const app2 = createApp({
  /* ... */
})
app2.mount('#container-2')
```

Eğer Vue'yu sunucu tarafından render edilmiş bir HTML'i iyileştirmek ve büyük bir sayfanın sadece belirli parçalarını kontrol etmek istiyorsanız, tüm sayfa için bir Vue uygulaması oluşturmaktan kaçınmalısınız. Bunun yerine, birden fazla küçük uygulama oluşturup ihtiyaç duyulan kısımlara `mount` edebilirsiniz.