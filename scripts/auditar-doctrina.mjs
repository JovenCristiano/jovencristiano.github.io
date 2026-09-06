/**
 * Marca términos que exigen revisión de neutralidad doctrinal (§5 bis de CONTENT_PLAN.md).
 *
 * No decide nada: señala dónde mirar. Muchas apariciones serán legítimas —«sábado» como día de la
 * semana dentro del horario de un retiro, por ejemplo—, así que el criterio lo pone una persona.
 *
 * Uso:  npm run audit:doctrina
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// Los patrones llevan límite de palabra a propósito: sin él, «NVI» coincide dentro de
// «coNVIerte» e «iNVIta», y el informe se llena de falsos positivos inservibles.
const TERMINOS = [
  [/\b(sumergir|inmersión|aspersión|bautizar)\b/i, 'forma del bautismo'],
  [/\b(sacerdote|párroco|obispo|feligrés)\b/i, 'cargo propio de una tradición'],
  [/\b(Reina-Valera|NVI|Nueva Versión Internacional|Biblia de Jerusalén)\b/i, 'versión concreta'],
  [/\b(diezmo|diezmos|primicias)\b/i, 'práctica económica discutida'],
  [/\b(hablar en lenguas|don de lenguas|predestinación|purgatorio|santoral)\b/i, 'doctrina divisiva'],
  [/\b(guardar el sábado|día de reposo|guardar el domingo|sabbat)\b/i, 'día de culto'],
  [/\b(creación literal|seis días literales|creacionismo)\b/i, 'origen del mundo'],
  [/\b(se salva|no se salva|va al infierno|está condenado)\b/i, 'juicio sobre personas concretas'],
];

const RAIZ = 'src/content';
let avisos = 0;

for (const cluster of readdirSync(RAIZ)) {
  const dir = join(RAIZ, cluster);
  if (!statSync(dir).isDirectory()) continue;

  for (const archivo of readdirSync(dir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))) {
    const ruta = join(dir, archivo);
    const lineas = readFileSync(ruta, 'utf8').split('\n');

    lineas.forEach((linea, i) => {
      for (const [patron, motivo] of TERMINOS) {
        if (patron.test(linea)) {
          console.log(`${ruta}:${i + 1}  [${motivo}]`);
          console.log(`   ${linea.trim().slice(0, 100)}`);
          avisos++;
        }
      }
    });
  }
}

console.log(
  avisos === 0
    ? '\nSin términos que revisar.\n'
    : `\n${avisos} apariciones que revisar a mano. Ver §5 bis de docs/CONTENT_PLAN.md\n`,
);
