# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: HTML/CSS/JS estático vanilla sin build (recomendación aceptada para GitHub Pages — carga instantánea, sin backend, deploy directo desde `main`). Sin framework SPA. Si escala a componentes, migrar a Astro con output estático, pero v1 es vanilla.

## Users

Desarrolladores, estudiantes y makers que trabajan con codificaciones, protocolos y depuración de bajo nivel. Situación: necesitan mirar un código ASCII, símbolo o valor bin/hex/oct y copiarlo rápido mientras programan. Job: buscar → previsualizar detalle → copiar/convertir sin fricción.

## Product Purpose

Tabla ASCII completa e interactiva con buscadores por letra, símbolo, categoría y código, más preview detallado del seleccionado. Existe para hacer la referencia ASCII usable a velocidad de herramienta, no como documento estático. Éxito = encontrar cualquier carácter en <3s y copiar su representación correcta.

## Positioning

Lo que un vecino no puede copiar tal cual: tabla + buscador facetado + preview vivo + gestores de binario, hexadecimal y octal integrados en la misma superficie de trabajo (no tres conversores sueltos).

## Operating Context

Uso en navegador desktop-first, teclado + ratón. Deploy estático en GitHub Pages (`ElDiablo45/RadixRef`). Sin backend, sin cuentas. Flujos: explorar tabla 0-127 V1, filtrar/buscar, seleccionar para ver dec/hex/oct/bin/HTML/entidad/descripción, copiar al portapapeles, convertir valores entre bases.

## Capabilities and Constraints

Confirmado:
- Tabla ASCII interactiva completa, con filtros por letras, símbolos, control, dígitos.
- Búsqueda texto + por código numérico.
- Preview del seleccionado con todas sus representaciones y copy buttons.
- Conversores binario / hexadecimal / octal / decimal integrados.
- 100% estático, funciona en GitHub Pages, sin build obligatorio.

Sin decidir (abierto, no inventar):
- Extendido 128-255 / UTF-8 extra: pospuesto post-V1.
- i18n: ¿solo ES o ES/EN?
- Persistencia local (favoritos / historial) — propuesto, no confirmado.
- Nombre final: repo sugiere `RadixRef`, pendiente confirmación.

## Brand Commitments

Nombre de trabajo: `RadixRef` (del repo). Sin logo ni voz cerrada.
Dirección visual vinculante del usuario: tonos azules (sustituye acento lima/verde de las refs). HUD oscuro técnico se mantiene, material de acento se traduce a azul.
Referencias visuales aportadas (4 imágenes, sin expandir a tokens aquí — eso va en new-work/DESIGN.md):
1. Panel técnico oscuro estilo HUD con borde fino, marcador `+`, etiqueta `HOW DOES IT WORK?`, acento lima.
2. Bloques stats oscuros con números display gigantes 315K/330K/130K/65.
3. Tooling dev oscuro con grid de fondo y paneles de código.
4. Estilo terminal `officialskills.sh` con scanlines y mono verde/blanco.

## Evidence on Hand

- 4 imágenes de referencia aportadas en chat (estilo medio oscuro técnico/HUD por definir en DESIGN.md).
- Sin contenido real, testimonios, datos o assets. No fabricar caracteres, descripciones o benchmarks.
- Repo vacío `https://github.com/ElDiablo45/RadixRef.git`, rama `main` sin commits.

## Product Principles

1. Velocidad de herramienta: buscar y copiar en dos gestos, teclado primero.
2. Precisión de dato: cada representación debe ser exacta y verificable, cero decoración que confunda.
3. Todo en una superficie: referencia + búsqueda + conversión sin cambiar de página.
4. Estático y fiable: funciona offline-cacheable y en Pages sin JS pesado.

## Accessibility & Inclusion

Requisito producto: tabla navegable por teclado, foco visible, contraste AA en mono pequeño y respeto a `prefers-reduced-motion`. Sin estándar formal adicional confirmado.
