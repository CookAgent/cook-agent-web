Instal·lació de Google Tag Manager

Copieu el codi de sota i enganxeu-lo en totes les pàgines del vostre lloc web.

1. Enganxeu aquest codi tan amunt de l'etiqueta `<head>` de la pàgina com sigui possible:

```html
<!-- Google Tag Manager -->
<script>
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-NR6H4JTQ");
</script>
<!-- End Google Tag Manager -->
```

2. Enganxeu aquest codi just després de l'etiqueta d'obertura `<body>`:

```html
<!-- Google Tag Manager (noscript) -->
<noscript
  ><iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-NR6H4JTQ"
    height="0"
    width="0"
    style="display:none;visibility:hidden"
  ></iframe
></noscript>
<!-- End Google Tag Manager (noscript) -->
```

3. Proveu el vostre lloc web (opcional):

p. ex.: https://example.com

Per obtenir més informació sobre com podeu instal·lar el fragment de Google Tag Manager, visiteu la nostra guia d'inici ràpid.
