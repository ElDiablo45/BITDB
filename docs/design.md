# design.md — RadixRef V1

> Archivo de trabajo: colores, estilo visual, tipografías y layout.
> El canónico para la skill impeccable es `../DESIGN.md` (mismo sistema, formato spec).
> Si cambias algo aquí, réplicalo en `../DESIGN.md`.
> Nota Windows: `DESIGN.md` y `design.md` colisionan en la raíz (mismo archivo
> insensible a mayúsculas), por eso este vive en `docs/`.

## Estrella norte

**The Blue Register Bench** — banco de laboratorio azul para bytes. HUD oscuro, denso pero ordenado, un solo azul que siempre significa "vivo".

## Colores

| Rol | Nombre | Hex | Uso |
|---|---|---|---|
| Acento | Signal Blue | `#4D8DFF` | Selección, bit encendido, foco, filtro activo (≤10% pantalla) |
| Acción | Action Navy | `#2456D6` (borde `#6EA1FF`) | Único fondo con texto blanco (botón primario) |
| Fondo | Diazo Ground | `#060B16` | Página + retícula de puntos (nunca negro puro) |
| Panel | Panel Night | `#0A1222` | Paneles, inputs, celdas |
| Elevado | Raised Bench | `#0E1830` | Hover, toast |
| Bit off | Bit-Off Steel | `#1A2742` | Pozos de bit apagados |
| Texto | Paper Ink | `#E8EEF9` | Texto principal |
| Texto 2 | Muted Steel | `#93A1C0` | Secundario, valores |
| Etiqueta | Dim Engraving | `#8B9BC4` | Micro-etiquetas (12px, pasa AA) |
| OK | Sky Confirm | `#7DD3FC` | Confirmaciones |
| Error | Fault Red | `#F87171` | Entrada inválida en conversores |
| Línea | Hairline | `rgba(148,184,255,.16)` | Bordes, separadores, rejilla |

Reglas: **One Accent** (el azul solo marca selección/estado) · **Tinted Black** (nada de `#000` ni grises neutros).

## Tipografías

- **Display / readout:** `Chakra Petch` 700 — título (clamp 34–58px) y glifo gigante del preview (88px).
- **Dato / cuerpo / etiquetas:** `JetBrains Mono` 400/500/700 — cuerpo 14px/1.55, etiquetas 12px uppercase + tracking 0.14em.
- Prohibidas: Inter, Space Mono, IBM Plex, serif display. Solo 2 familias.

## Layout

```
+----------------------------------------------------------+
| TITLE BLOCK   RADIXREF·0-255          [RANGO][MODO][DEPLOY]|
+----------------------------------------------------------+
| BUSCAR [....................]  [Todos][Control][0-9][A-Z] |
|                              [a-z][Símbolos]  128/128    |
+-------------------------------+------------------------+
| TABLA (scroll 560px)          | PREVIEW (sticky)       |
| [00 NUL][01 SOH][02 STX]...   |   GIGANTE "A"          |
| ...256 celdas, caret bloque   |   DEC/HEX/OCT/BIN/     |
|                               |   CHAR/HTML + copiar   |
|                               |   BITS 7-0 [0][1]...   |
+-------------------------------+------------------------+
| CONVERSORES BIN/OCT/DEC/HEX (sincronizados en vivo)      |
+----------------------------------------------------------+
```

Responsive: ≤960px preview debajo de tabla, conversores 2 col · ≤560px conversores 1 col.

## Estilo visual

- Fondo punteado sutil (radial 22px), marco fijo con `+` en esquinas, hairlines 1px.
- Todo cuadrado (radio 0), plano, sin sombras ni cards anidadas ni glows.
- Movimiento solo de estado (hover/foco/cambio de dígito); `prefers-reduced-motion` lo apaga.
- Accesibilidad: teclado completo (flechas + Enter copia), foco visible 2px azul, AA, `aria-selected`, `role=listbox`, toast `aria-live`, error `role=alert`.

## Principios

1. Velocidad de herramienta: buscar → seleccionar → copiar en dos gestos.
2. Precisión: campo y diagrama de bits siempre coinciden; copiar usa el texto visible exacto.
3. Todo en una superficie: referencia + búsqueda + conversión sin salir.
4. Estático y fiable: vanilla sin build, GitHub Pages directo.

## Estado detector (2026-09-23)

`impeccable detect`: 0 errores. Avisos restantes asumidos: tracking 0.14em solo en etiquetas cortas uppercase (uso permitido por la propia regla), kicker informativo con rango/versión (no decorativo), readout gigante evaluado como texto grande (pasa 3:1).
