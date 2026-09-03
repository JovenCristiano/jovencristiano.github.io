# KEYWORD_RESEARCH — procedimiento

Cómo se rellena `SEO_MASTER_MAP.md` con datos reales. Herramientas: **Google Keyword Planner**
(volumen y competencia) y **Google Search Console** (rendimiento real, a partir del segundo mes).

Regla del proyecto (§10 del MASTER_PLAN): **no se escribe contenido contra una keyword sin datos.**

---

## 1. Preparar Keyword Planner (una sola vez)

1. Entra en https://ads.google.com con la cuenta de Google del proyecto.
2. Al crear la cuenta, elige **«Cambiar al modo experto»** (abajo del formulario). Si no lo haces,
   te obliga a crear una campaña.
3. Elige **«Crear una cuenta sin campaña»**. No hace falta tarjeta ni gastar dinero.
4. Menú **Herramientas → Planificación → Planificador de palabras clave**.
5. Configura **País: Colombia, México, España, Argentina, Perú** (o el conjunto hispanohablante) e
   **Idioma: español**. Anota qué configuración usaste: los números no son comparables entre sí si
   cambias el país a mitad del trabajo.

> **Limitación conocida:** sin campaña activa, Keyword Planner muestra rangos («100–1 K») en vez de
> cifras exactas. Es suficiente para priorizar. No hace falta pagar por precisión que no vamos a
> usar.

---

## 2. Extraer datos

1. **«Descubre nuevas palabras clave»** → pega el bloque de semillas de la sección 4, en tandas de
   10 términos.
2. Descarga los resultados en CSV (botón de descarga arriba a la derecha).
3. Repite con **«Obtén métricas y previsiones»** pegando la lista completa, para tener el volumen
   de cada término exacto.
4. Guarda los CSV en `docs/data/` (no se publican en la web, solo viven en el repositorio).

---

## 3. Criterios de selección

Para cada keyword anota en la tabla maestra:

| Columna | Cómo se decide |
|---|---|
| **volumen** | Media mensual de búsquedas que da Keyword Planner (el rango vale) |
| **dificultad** | Columna «Competencia» de Planner (baja/media/alta). Es competencia de *pago*, no de SEO: úsala como indicio, no como verdad |
| **intención** | Informacional / navegacional / transaccional. Casi todo aquí será informacional |
| **oportunidad** | Alta si: volumen ≥ 100, competencia baja/media y en los resultados de Google **no** dominan sitios enormes |
| **prioridad** | P0 = pilar del cluster · P1 = long tail con volumen · P2 = complementario |

**Comprobación manual obligatoria** para toda keyword P0: búscala en Google en incógnito y mira
los 10 primeros resultados.

- ¿Son blogs pequeños o foros? → **oportunidad real**
- ¿Son sitios grandes con la ficha práctica bien hecha? → busca un ángulo más concreto
- ¿Los resultados no responden a la intención (frases sueltas, contenido pobre)? → **entra ahí**

Anota en la columna «oportunidad» qué viste. Un número sin contexto no sirve para decidir.

---

## 4. Lista semilla

Pégala en Keyword Planner en tandas de 10. Está agrupada por cluster, tal como quedará la web.

### Dinámicas
```text
dinamicas para jovenes cristianos
dinamicas de integracion para jovenes
dinamicas rompehielo para jovenes cristianos
dinamicas sin materiales para jovenes
dinamicas para grupos grandes jovenes
dinamicas de confianza para jovenes
dinamicas biblicas para adolescentes
dinamicas sobre la identidad para jovenes cristianos
dinamicas sobre el proposito de vida
dinamicas para celulas juveniles
dinamicas de reflexion para jovenes
dinamicas divertidas para jovenes cristianos
```

### Juegos bíblicos
```text
juegos biblicos para jovenes
juegos biblicos para adolescentes
juegos biblicos sin materiales
juegos de preguntas biblicas
rompehielos para grupos juveniles
juegos para reuniones de jovenes cristianos
juegos biblicos al aire libre
competencias biblicas para jovenes
juegos para memorizar versiculos
juegos biblicos por equipos
```

### Temas y estudios
```text
temas para jovenes cristianos
temas biblicos para jovenes
predicas para jovenes cristianos
estudios biblicos para jovenes
temas para reuniones de jovenes
temas sobre la identidad en cristo
temas sobre noviazgo cristiano
estudio biblico sobre el proposito
temas cortos para jovenes cristianos
```

### Recursos para líderes
```text
como preparar una reunion juvenil
como dirigir un grupo de jovenes
ideas para reuniones de jovenes cristianos
actividades para retiro juvenil
programa para campamento juvenil cristiano
como ser un buen lider juvenil
discipulado para jovenes
planificacion de reuniones juveniles
```

### Padres y adolescentes
```text
como hablar con un adolescente cristiano
consejos para padres de adolescentes cristianos
como criar hijos adolescentes en la fe
limites para adolescentes cristianos
```

### Preguntas
```text
preguntas biblicas para jovenes
preguntas biblicas faciles con respuestas
preguntas para reflexionar jovenes cristianos
preguntas para conocer a un grupo juvenil
```

---

## 5. Search Console (a partir del segundo mes)

Cuando haya datos reales:

1. **Rendimiento → Consultas.** Ordena por impresiones.
2. Busca consultas con **muchas impresiones y pocos clics**: son páginas que aparecen pero no
   convencen. Suele arreglarse mejorando el `title` y la `description`, no reescribiendo el texto.
3. Busca consultas en **posición 8–20**: están a un empujón de la primera página. Mejorar un
   artículo existente rinde más que escribir uno nuevo.
4. Toda consulta real que no tenga página propia y se repita → candidata a recurso nuevo.

Search Console manda sobre Keyword Planner: son búsquedas que ya te están encontrando.

---

## 6. Cadencia

| Cuándo | Qué |
|---|---|
| Ahora | Rellenar la tabla maestra con Keyword Planner |
| Cada semana | Escribir contra las keywords P0 pendientes |
| Cada mes | Revisar Search Console y reordenar prioridades |
| Cada trimestre | Revisar qué se posicionó y qué no, y por qué |
