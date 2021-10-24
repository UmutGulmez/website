---
title: Nginx ile Express.js web uygulamanızı dünyaya açın ve Cloudflare SSL ile koruyun!
description: Bu yazıda express.js ile yapılmış web uygulamasını sanal sunucu üzerinde reverse proxy ile dünyaya açacak ve alan adımız üzerine kurulumlarını yapacağız.
tags:
  - nginx
  - reverse proxy
  - express
  - Umut.py
  - umutpy
  - cloudflare
  - nginx reverse proxy
createdAt: 2021-10-24T20:13:18+00:00
readingTime: 10 dakika
pinned: true
bannerImage: https://cdn-images-1.medium.com/max/800/0*bpg59iYcwnPnY1PV
---

Merhaba, bir zaman önce **Node.js(Express.js)** ile geliştirdiğim bir web uygulamasını deploy etmek istemiştim, bu süreçte yaşadığım deneyimleri bir blog yazısında konu almayı düşündüm.

Bu yazıda express.js ile yapılmış web uygulamasını sanal sunucu üzerinde [reverse proxy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling#reverse_proxies) ile dünyaya açacak ve alan adımız üzerine kurulumlarını yapacağız. Ardından Cloudflare SSL ile koruyacağız.

#### **Bu yazıda anlatılacak teknolojileri kullanmak için bir kaç şeye ihtiyacımız olacak. Bunlar:**

- Nameserver ayarları yapılmış ve başarıyla Cloudflare içerisinde kaydedilmiş bir domain. (bunun hakkında da bir yazı yazacağım)
- İçerisinde Node.js yüklenmiş Linux/Windows bir sanal sunucu.
- Bir kaç satırlık express.js kodu. (Aşağıda örnek belirttim.)

---

### Kısaca belirtmek gerekirse kullanacağımız yapı şu şekilde olacaktır:

Bir kullanıcı alan adımıza girdiğinde cloudflare korumasıyla sanal sunucumuza bir istekte bulunacak. Bizim sanal sunucumuz ise localhost:3000 içerisinde çalışan bir uygulamayı nginx ile geri döndürecek. Cloudfare SSL ile elde ettiğimiz SSL sertifikasını ve sertifika anahtarını nginx’e belirterek internet sitemizi koruyacağız.

![](https://cdn-images-1.medium.com/max/800/1*d7ez1Ykcqgy_ev6OsH9bXQ.png)

<p class="image-alt">Örnek şema (Kendi tasarımım) </p>

---

### Makinemize nginx yükleyelim

Eğer makineniz windows makine ise “[https://nginx.org/en/download.html](https://nginx.org/en/download.html)” bu sayfadan windows sürümünü indirebilirsiniz.

    $ [sudo] apt-get update
    $ [sudo] apt-get install nginx

Nginx’i çalıştırıyoruz.

    $ [sudo] nginx

Yukardaki işlemleri gerçekleştirdikten sonra herhangi bir tarayıcıya sunucunun ip adresini yazarak (örn. [http://142.250.184.142](http://142.250.184.142) vb.) nginx’in çalıştığını görebilirsiniz.

![](https://cdn-images-1.medium.com/max/800/1*xwXOfloqwSZAGbwudOi5Hg.png)

---

### Makinemize PM2 yükleyelim

Bazı işletim sistemlerinde makinemize SSH yolu ile bağlandığımız için terminalden node uygulamasını çalıştıramayız. Eğer çalıştırırsak, terminali kapattığımızda uygulama da kapancaktır. Bu yüzden bizim arkada uygulamayı açık tutacak bir teknolojiye ihtiyacımız var. **Bu da pm2**! pm2'yi şu şekilde yükleyelim:

    $ [sudo] npm i -g pm2
    // ya da
    $ [sudo] yarn global add pm2

Daha fazla bilgi için pm2 dökümantasyonu → “[https://pm2.keymetrics.io/docs/usage/quick-start](https://pm2.keymetrics.io/docs/usage/quick-start/)”

---

### Küçük bir Node uygulaması oluşturacağız

    const express = require(‘express’)
    const app = express()
    const port = 3000

    app.get(‘/’, (req, res) => {
        res.send(‘Hello World!’)
    })

    app.listen(port, () => {
        console.log(\`Example app listening at http://localhost:${port}\`)
    })

**Not:** Bu kodda gözüktüğü üzere uygulama localhost:3000 üzerinde çalışıyor. Bu yüzden bizim de nginx içerisine reverse_proxy yapacağımız portun localhost:3000 olduğunu belirtmemiz gerekiyor. Bunu birazdan yapcağız.

    $ [sudo] pm2 start index.js // Uygulamayı pm2 ile çalıştırıyoruz.

Yukardaki işlemleri gerçekleştirdikten sonra herhangi bir tarayıcıya sunucunun ip adresine “:3000” ekleyip yazarak (örn [http://142.250.184.142:3000](http://142.250.184.142) vb.) Node uygulamamızın çalıştığını görebilirsiniz.

---

### Nginx ayarlarını yaparak port olmadan node uygulamasını herkese sunalım

`/usr/local/etc/nginx/nginx.conf` lokasyonunda nginx ayarlarının bulunduğu dosyayı düzenleyelim.

    server {
        listen 5000;
        server_name localhost;
        location / {
            proxy_pass http://localhost:3000;
        }
    }

kodunu nginx konfigrasyon dosyasındaki server kısmına yapıştıralım. Belirtilen işlemi yaptıktan sonra yeni konfigrasyonların geçerli olması için nginx’e config dosyamızı tekrardan okuması gerektiğini söylemeliyiz.

    $ [sudo] nginx reload

komutunu terminalde kullandığımızda nginx config dosyasını tekrardan okuyacak. Bu işlem ile Nginx, “welcome page” yerine bizim node ile çalıştırdığımız uygulamamızı gösterecek.

Yukardaki işlemleri gerçekleştirdikten sonra herhangi bir tarayıcıya sunucunun ip adresini yazarak (örn [http://142.250.184.142](http://142.250.184.142) vb.) Node uygulamamızın nginx ile çalıştığını görebilirsiniz.

---

### Cloudflare DNS ayarlarını yaparak uygulamamızı bir alan adına bağlayalım

**Not:** Makalenin başında belirtildiği gibi, Nameserver ayarlarının Cloudflare içerisine kaydedilmiş bir alan adına ihtiyacımız olacak.

Alan adımız için Cloudflare kontrol panelindeki DNS ayarları sayfasına giriyoruz.

![](https://cdn-images-1.medium.com/max/800/1*phlnRG0PiyL0GUo6JV3Hfw.png)

<p class="image-alt">umutdev.xyz alan adının A kaydı.</p>

Tipi “ A ” olan bir DNS kaydı oluşturup, isim kısmına alan adımızı (örnekdomain.com), içerik kısmına da reverse_proxy yaptığımız web sunucumuzun ip adresini giriyoruz. Eğer Cloudflare SSL kullanmak istiyorsak Proxy status kısmını “ Proxied “ olarak ayarlamalıyız.

**Not:** DNS ayarlarının güncellenmesi maksimum 1 gün sürebilir. (genelde sürmüyor)

DNS sunucuları güncellendikten sonra, alan adımıza herhangi bir tarayıcı üzerinden girip, çalışan node uygulamızı görebiliyor olmalıyız. (http)

---

### Cloudflare SSL ile sertifika anahtarlarını alıp, Nginx içerisinde tanımlayalım

Kuracağımız SSL türü Full-SSL olacak. Yani hem kullanıcı ile Cloudflare, hem de Cloudflare ile web sunucumuzun arası şifrelenmiş olacak.

![](https://cdn-images-1.medium.com/max/800/0*DMY0lBwVEJ-ojzlV.png)

<p class="image-alt">Örnek şema</p>

Kurmak için Cloudflare kontrol panelindeki SSL/TLS kısmından Origin Server’a geliyoruz. Origin Server kısmından, hem alan adımız hem de bütün alt alan adlarımız için RSA (2048) tipinde bir SSL sertifikası oluşturuyoruz. Oluşturduktan sonra Cloudflare bize “ Origin Certificate “ yani PEM, “ Private Key “ yani KEY anahtarlarını verecek. **Bu anahtarları bir yere not almanız gerekmekte.**

![](https://cdn-images-1.medium.com/max/800/0*orlWeedgbo9YylME)

Elimizde SSL sertifikasının anahtarları var, şu an yapmamız gereken nginx’e bunu tanımlamak.

**Bunu şu adımlar ile yapacağız:**

- ssl.pem isimli bir dosya oluşturup bunun içerisinde bizim PEM anahtarımızı yapıştırmamız gerekiyor.
- ssl.key isimli bir dosya oluşturup bunun içerisinde bizim KEY anahtarımızı yapıştırmamız gerekiyor.
- Bu iki dosyayı nginx’in bulunduğu klasör dizinine koymalıyız. (_/etc/nginx/_)
- Nginx’in konfigrasyon dosyasına SSL anahtarlarımzın lokasyonunu tanımlamalıyız.
- Son olarak, Nginx’i reload etmeliyiz.

> Bunun hakkında Cloudflare’in yazdığı bir döküman bulunmakta: [https://developers.cloudflare.com/ssl/origin-configuration/origin-ca](https://developers.cloudflare.com/ssl/origin-configuration/origin-ca)

Oluşturduğumuz SSL anahtarlarını nginx.conf dosyasına şu şekilde tanımlamalıyız.

    # HTTP
    server {
      listen 80;
      listen [::]:80 default_server ipv6only=on;
      return 301 https://$host$request_uri;
    }

    # HTTPS
    server {
      listen 443;
      server_name örnekdomain.com;

      ssl on;
      ssl_certificate       /dosya/lokasyonu/ssl.pem;
      ssl_certificate_key   /dosya/lokasyonu/ssl.key;

      location / {
        proxy_pass http://localhost:3000;
      }
    }

Belirtilen işlemi yaptıktan sonra yeni nginx ayarlarının geçerli olması için nginx’e config dosyamızı tekrardan okuması gerektiğini söylemeliyiz.

    $ [sudo] nginx reload

komutunu terminalde kullandığımızda nginx config dosyasını tekrardan okuyacak. Bu işlem ile Nginx, artık kullanıcılara SSL sertifikamız ile sayfayı sunacak.

---

### Bütün bu işlemlerden sonra, herhangi bir tarayıcı ile alan adımıza (https://örnekdomain.com) girip internet sitemizi canlı bir şekilde görebiliriz.

---

### Sıkça Sorulan Sorular:

<br/>

**\>> Nginx’in terminal komutları neler? (nasıl kapatcağım, nasıl yeniden başlatacağım vb.)**

**C:** _Komutlar şu şekilde,_

- `nginx stop` —  hızlı kapatma
- `nginx quit` —  insancıl (:D) kapatma
- `nginx reload` —  ayarlar dosyasını tekrardan okuma
- `nginx reopen` —  kayıt dosyalarını yeniden açma

<br/><br/>

**\>> Proxy ile Reverse Proxy arasındaki farklar nedir?**

**C:** Bunun hakkında yönlendirebileceğim temiz bir kaynak: [Proxy vs Reverse Proxy Server Explained](https://www.youtube.com/watch?v=SqqrOspasag)

<br/><br/>

**\>> Nginx konfigrasyon dosyasının syntaxını nasıl kontrol ederim?**

**C:** Terminal içerisinde `[sudo] nginx -t`komutunu kullanarak kontrol edebiliriz.

<br/><br/>

**\>> Nginx’in çalışır olup olmadığını nasıl kontrol ederim?**

**C:** Terminal içerisinde `[sudo] service nginx status` komutunu kullanarak Nginx durumunu kontrol edebilirsiniz.

---

### Ek:

—  Nginx başlangıç dömümantasyonu: [https://nginx.org/en/docs/beginners_guide.html](https://nginx.org/en/docs/beginners_guide.html)

—  100 Saniyede Nginx: [https://youtu.be/JKxlsvZXG7c](https://youtu.be/JKxlsvZXG7c)

— Nginx konfügrasyon dosyasına başlangıç: [https://youtu.be/NEf3CFjN0Dg](https://youtu.be/NEf3CFjN0Dg)

— Nginx #1 | Ana Konseptler (NetGuru): [https://www.netguru.com/blog/nginx-tutorial-basics-concepts](https://www.netguru.com/blog/nginx-tutorial-performance)

— Nginx #2 | Performans (NetGuru): [https://www.netguru.com/blog/nginx-tutorial-performance](https://www.netguru.com/blog/nginx-tutorial-performance)

— Nginx #3 | SSL Kurulum (NetGuru): [https://www.netguru.com/blog/nginx-tutorial-ssl-setup](https://www.netguru.com/blog/nginx-tutorial-ssl-setup)

### Şimdilik bu kadar…

Daha fazla bilgi için [internet sitem](https://umutdev.xyz)deki sosyal medya hesaplarımdan bana ulaşabilirsiniz.

- **İnternet Sitem:** [https://umutdev.xyz](https://umutdev.xyz)
- **Discord:** [https://discord.com/users/274615370214670336](https://discord.com/users/274615370214670336)
- **Twitter:** [https://twitter.com/umutpy](https://twitter.com/umutpy)
- **Github:** [https://github.com/UmutGulmez](https://github.com/UmutGulmez)
