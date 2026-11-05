// =====================================================================
//  LISTA DE ARTÍCULOS — este es el único archivo que hay que editar.
//
//  Para marcar algo vendido:  estado: 'disponible'  →  estado: 'vendido'
//  Para cambiar un precio:    precio: 250000  (número, sin puntos ni $)
//  Para agregar un artículo:  copiá un bloque { ... }, cambiá los datos
//                             y poné sus fotos en fotos/<carpeta>/1.jpg, 2.jpg...
//
//  Después: git add . && git commit -m "..." && git push
// =====================================================================

const ACTUALIZADO = '2026-11-05';

const ITEMS = [
  {
    nombre: 'iPhone 12 mini – Verde',
    precio: 250000,
    estado: 'vendido',
    fotos: ['iphone-12-mini/1.jpg', 'iphone-12-mini/2.jpg'],
    detalle: ['128 GB, liberado.', 'Batería al 85% de capacidad máxima.', 'Todas las piezas originales, sin reparaciones.'],
    specs: ['Pantalla OLED Super Retina XDR 5,4", chip A14 Bionic, 5G, Face ID.', 'Cámara dual 12 MP (gran angular + ultra gran angular), frontal 12 MP.', 'Dorso en buen estado (marcas mínimas).', 'Incluye cable de carga no original.']
  },
  {
    nombre: 'Notebook Dell Latitude 5400 (14")',
    precio: 420000,
    estado: 'disponible',
    fotos: ['dell-latitude-5400/1.jpg', 'dell-latitude-5400/2.jpg'],
    detalle: ['Intel Core i5-8365U, 16 GB RAM, SSD NVMe 256 GB.', 'Buen estado general, tapa con marcas leves de uso.', 'Batería al 61% (41,6 de 68 Wh). Incluye cargador original.'],
    specs: ['Línea corporativa Latitude, 14".', 'Teclado en español con ñ, lector de huellas, webcam con tapa de privacidad, trackpoint.', 'Windows 10 (licencia OEM).', 'Tiene etiqueta de inventario "LT-08" (se puede retirar).']
  },
  {
    nombre: 'Auriculares Sony WH-1000XM4',
    precio: 330000,
    estado: 'disponible',
    fotos: ['sony-wh-1000xm4/1.jpg', 'sony-wh-1000xm4/2.jpg'],
    detalle: ['Excelente estado, almohadillas sanas.', 'Incluye estuche rígido original, cable de audio 3,5 mm, cable USB-C y adaptador de avión.'],
    specs: ['Over-ear inalámbricos, Bluetooth, cancelación de ruido activa.', 'Hasta ~30 h de batería con ANC, carga USB-C.', 'Sensor de uso (pausa al sacártelos). Plegables, color negro.']
  },
  {
    nombre: 'Calculadora gráfica HP Prime',
    precio: 250000,
    estado: 'disponible',
    fotos: ['hp-prime/1.jpg', 'hp-prime/2.jpg'],
    detalle: ['Funciona perfecto: teclas, pantalla táctil y batería OK.', 'Serigrafía de algunas teclas gastada por el uso (estético).', 'Incluye tapa protectora deslizable y cable micro-USB.'],
    specs: ['Pantalla color táctil 3,5", CAS (cálculo simbólico), batería recargable.', 'Versión G1 (hardware rev. C). Software 2.1.14730 (2023), la última versión.']
  },
  {
    nombre: 'Cámara instantánea Fujifilm Instax Mini 12 – Mint Green',
    precio: 140000,
    estado: 'vendido',
    fotos: ['instax-mini-12/1.jpg'],
    detalle: ['Sin uso. Incluye correa original.'],
    specs: ['Usa rollos Instax Mini. Funciona con 2 pilas AA.', 'Exposición automática, modo close-up (selfie) girando el lente, espejo para selfies.']
  },
  {
    nombre: 'Auriculares Skullcandy Indy Evo',
    precio: 45000,
    estado: 'vendido',
    fotos: ['skullcandy-indy-evo/1.jpg', 'skullcandy-indy-evo/2.jpg'],
    detalle: ['Buen estado. Estuche con marcas de uso.', 'No incluye cable de carga.'],
    specs: ['True wireless con estuche de carga, Bluetooth.', 'Resistentes a agua y sudor, micrófono para llamadas. Color negro.']
  },
  {
    nombre: 'Raqueta de tenis Babolat Pure Aero Rafa',
    precio: 60000,
    estado: 'disponible',
    fotos: ['raqueta-babolat/1.jpg', 'raqueta-babolat/2.jpg'],
    detalle: ['Muy usada. El marco estuvo partido y fue reparado (se ve en el cuello).', 'Ideal para principiante o juego recreativo.'],
    specs: ['Edición Rafa (naranja, amarillo y violeta).', 'Patrón de encordado 16x19. Encordada, con overgrip Wilson Pro.']
  },
  {
    nombre: 'Sillas plegables Avant KMT Gran (x2)',
    precio: 20000,
    precioNota: 'c/u',
    estado: 'vendido',
    fotos: ['sillas-avant/1.jpg'],
    detalle: ['Hay dos. Muy buen estado, tela limpia y sin roturas.'],
    specs: ['Silla/reposera plegable tipo "Kermit".', 'Estructura metálica color madera, apoyabrazos de madera.', 'Asiento y respaldo de tela oxford beige, removibles.', '62 x 55 x 80 cm (largo x ancho x alto). Peso: 3,4 kg.']
  },
  {
    nombre: 'Florero de cerámica "burbujas" – rosa nude',
    precio: 10000,
    estado: 'disponible',
    fotos: ['florero/1.jpg'],
    detalle: ['Muy buen estado.'],
    specs: ['Forma de discos apilados, terminación mate texturada.', 'Altura: 20 cm.']
  },
  {
    nombre: 'Panera de seagrass y algodón',
    precio: 7000,
    estado: 'vendido',
    fotos: ['panera/1.jpg'],
    detalle: ['Buen estado, algunos hilos sueltos en el algodón.'],
    specs: ['Redonda: base de seagrass y borde de cuerda de algodón blanca.', 'Diámetro: 25 cm.']
  },
  {
    nombre: 'Mochila Primicia Fly 32 L – Negra',
    precio: 70000,
    estado: 'vendido',
    fotos: ['mochila-primicia/1.jpg', 'mochila-primicia/2.jpg'],
    fotoNota: 'Fotos de catálogo.',
    detalle: ['Excelente estado.'],
    specs: ['Capacidad 32 L. 47 cm de alto x 30 cm de ancho.', 'Impermeable, compartimento acolchado para notebook.', 'Apertura tipo valija, bolsillos laterales y correas de compresión.']
  }
];
