const products = [
  {
    brand: 'Evolvetogether',
    name: 'Monaco Restorative',
    image: 'https://evolvetogether.com/cdn/shop/files/pdp-hand-wash-monaco.jpg?v=1757007135&width=1600',
    type: 'monocromo',
    typeLabel: 'Monocromo',
    note: 'Vidrio ahumado y un marcaje diminuto de coordenadas sobre un frontal casi vacío.',
    source: 'https://evolvetogether.com/products/monaco-restorative-hand-wash'
  },
  {
    brand: 'Perfumer H',
    name: 'Rain Wood Hand Wash',
    image: 'https://gardenheir.com/cdn/shop/files/RainWood-HandWash-1.jpg?v=1761336241&width=1946',
    type: 'monocromo',
    typeLabel: 'Monocromo',
    note: 'Vidrio gris pesado y una etiqueta blanca mínima, centrada y muy silenciosa.',
    source: 'https://gardenheir.com/products/perfumer-h-rain-wood-hand-wash'
  },
  {
    brand: 'Byredo',
    name: 'Suede Hand Wash',
    image: 'https://img.bstn.com/eyJidWNrZXQiOiJic3RuLWltYWdlLXNlcnZlciIsImtleSI6ImNhdGFsb2cvcHJvZHVjdC8yMDAwMDA0My8yMDAwMDA0My0wMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY29udGFpbiIsIndpZHRoIjoxNjAwLCJoZWlnaHQiOjIwMDAsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
    type: 'monocromo',
    typeLabel: 'Monocromo',
    note: 'Vidrio esmerilado y logotipo centrado: identidad sin ornamento.',
    source: 'https://www.byredo.com/eu_en/c/body-care/categories-hand-and-body-care/categories-hand-care-products'
  },
  {
    brand: 'Diptyque',
    name: 'Softening Hand Wash',
    image: 'https://freshbeautyco.com.au/cdn/shop/products/26489718803-2_1400x.jpg?v=1628620679',
    type: 'clasico',
    typeLabel: 'Clásico',
    note: 'El medallón oval funciona como una firma ilustrada de pequeño formato.',
    source: 'https://www.diptyqueparis.com/en_us/p/softening-hand-wash-glass-1.html'
  },
  {
    brand: 'Frama',
    name: 'Apothecary Hand Wash',
    image: 'https://media.fds.fi/product_image/2000/302Frama_AK.jpg',
    type: 'botica',
    typeLabel: 'Botica',
    note: 'Etiqueta blanca esencial sobre vidrio italiano y líquido cálido.',
    source: 'https://www.finnishdesignshop.com/en-jp/product/apothecary-hand-wash-375-ml'
  },
  {
    brand: 'Grown Alchemist',
    name: 'Cedarwood Atlas',
    image: 'https://goodhoodstore.com/cdn/shop/files/GROWN-ALCHEMIST-HAND-WASH-CEDARWOOD-ATLAS_-YLANG-YLANG_-TANGERINE---500ML_SS23_GOODHOOD.jpg?v=1689851574',
    type: 'botica',
    typeLabel: 'Botica',
    note: 'Tipografía farmacéutica aplicada directamente sobre un cuerpo ámbar.',
    source: 'https://goodhoodstore.com/products/grown-alchemist-hand-wash-cedarwood-atlas-ylang-ylang-tangerine-500ml'
  },
  {
    brand: 'Maison Louis Marie',
    name: 'No.04 Bois de Balincourt',
    image: 'https://maisonlouismarie.com/cdn/shop/files/MLM_BodyHandWash_No04_Bois_de_Balincourt_R2_Realigned_337abd48-cc36-4e77-852b-0fa887e7a63e.jpg?format=pjpg&v=1774583631&width=2000',
    type: 'monocromo',
    typeLabel: 'Monocromo',
    note: 'Cuerpo marfil, tipografía fina y apenas unas líneas de información frontal.',
    source: 'https://maisonlouismarie.com/products/body-and-hand-wash-no-04-bois-de-balincourt'
  },
  {
    brand: 'Corpus',
    name: 'Amalgam 5',
    image: 'https://corpusnaturals.com/cdn/shop/files/Corpus_PDP_HandWash_A5_1x1_0d579058-556c-4ffe-9c91-cdb4c9dda21e.jpg?v=1762461952&width=2000',
    type: 'monocromo',
    typeLabel: 'Monocromo',
    note: 'Botella verde casi negra y lettering blanco de peso muy ligero.',
    source: 'https://corpusnaturals.com/'
  },
  {
    brand: 'Tangent GC',
    name: 'TGC102 Yuzu',
    image: 'https://barenordicbeauty.com/cdn/shop/files/TGC102_yuzu_soap_cutout.jpg?crop=center&height=3859&v=1725470241&width=2969',
    type: 'botica',
    typeLabel: 'Botica',
    note: 'Código de producto grande, resto de información reducido al mínimo.',
    source: 'https://www.idealo.co.uk/compare/204565803/tangent-gc-yuzu-soap-350ml.html'
  },
  {
    brand: 'Susanne Kaufmann',
    name: 'Hand Soap',
    image: 'https://cdn.shopify.com/s/files/1/0476/8438/6977/products/hand-soap.jpg?v=1651756816',
    type: 'monocromo',
    typeLabel: 'Monocromo',
    note: 'Botella transparente y una microetiqueta que reduce el mensaje a marca y función.',
    source: 'https://www.susannekaufmann.com/products/hand-soap'
  },
  {
    brand: 'D.S. & Durga',
    name: 'Big Sur After Rain',
    image: 'https://zgoperfumery.com/cdn/shop/files/BIGSURAFTERRAINHANDSOAP_Packshot_BottleFront_Rectilinearcopy.jpg?v=1750623298&width=3000',
    type: 'monocromo',
    typeLabel: 'Monocromo',
    note: 'Negro total con etiqueta blanca compacta y narrativa olfativa en el nombre.',
    source: 'https://zgoperfumery.com/products/d-s-durga-big-sur-after-rain-hand-soap'
  },
  {
    brand: 'Tom Ford',
    name: 'Oud Wood Hand & Body Wash',
    image: 'https://sdcdn.io/tf/tf_sku_T1Q301_3000x3000_0.png',
    type: 'monocromo',
    typeLabel: 'Monocromo',
    note: 'Arquitectura negra rotunda con una pequeña placa metálica como única información.',
    source: 'https://www.tomfordbeauty.com.au/product/oud-wood-hand-and-body-wash'
  },
  {
    brand: 'Loewe',
    name: 'Oregano Liquid Soap',
    image: 'https://www.loewe.com/dw/image/v2/BBPC_PRD/on/demandware.static/-/Sites-Loewe_master/default/dw7552e082/images_rd/V000M51X04/V000M51X04-2100/V000M51X04_2100_1F.jpg?q=100&sw=1500',
    type: 'clasico',
    typeLabel: 'Clásico',
    note: 'Marca protagonista, descriptor mínimo y textura acanalada en el vidrio.',
    source: 'https://www.loewe.com/usa/en/women/home/soaps/oregano-liquid-soap/V000M51X04-2100.html'
  },
  {
    brand: "L'Objet",
    name: 'Rose Noire',
    image: 'https://www.l-objet.com/cdn/shop/files/rose-noire-hand-body-soap-l-objet-1.jpg?v=1752762507',
    type: 'monocromo',
    typeLabel: 'Monocromo',
    note: 'Volumen negro brillante y una única medalla circular como foco.',
    source: 'https://www.l-objet.com/products/apothecary-hand-body-soap-rose-noire'
  },
  {
    brand: 'Maison Francis Kurkdjian',
    name: 'Aqua Universalis',
    image: 'https://www.agoratopia.com/api/files/AQUA_UNIVERSALIS_GEL_350ML-1.png',
    type: 'clasico',
    typeLabel: 'Clásico',
    note: 'Frasco esmerilado, bomba dorada y una etiqueta enmarcada de formato muy reducido.',
    source: 'https://www.franciskurkdjian.com/us-en/bath-body/hand-body-cleansing-gel/'
  },
  {
    brand: 'Nécessaire',
    name: 'The Hand Wash Santal',
    image: 'https://necessaire.com/cdn/shop/files/02_THEHANDWASH_SA.jpg?v=1777070947',
    type: 'monocromo',
    typeLabel: 'Monocromo',
    note: 'Negro absoluto, serif editorial y una composición de etiqueta invisible.',
    source: 'https://necessaire.com/products/the-hand-wash-santal'
  },
  {
    brand: 'Bamford',
    name: 'Geranium Hand + Body Wash',
    image: 'https://images.ctfassets.net/0rez8ufag55b/1C7M80XL6Hv2SI9NLhrfcw/a6a0727de608f33f8f2cc13dd71e1c02/Bamford_Geranium_Hand_Body_Wash-250ml-WEB-ONLY.jpg',
    type: 'monocromo',
    typeLabel: 'Monocromo',
    note: 'Verde oliva mate con marca y descriptor reducidos a dos líneas.',
    source: 'https://www.bamford.com/body-care/scent/geranium.html'
  },
  {
    brand: 'Miller Harris',
    name: 'Tea Tonique',
    image: 'https://www.millerharris.com/cdn/shop/products/4396-MILLER_HARRIS-HAND_WASH-TEA_TONIQUE-1080-RGB.png?v=1665821382',
    type: 'clasico',
    typeLabel: 'Clásico',
    note: 'Etiqueta crema pequeña, botella facetada y un detalle botánico sutil.',
    source: 'https://www.millerharris.com/collections/bath-body-tea-tonique'
  },
  {
    brand: 'Nonfiction',
    name: 'Santal Cream Hand Wash',
    image: 'https://www.incu.com/cdn/shop/files/product-incu-079_2f68763b-a291-4970-9b3f-cbae6ebce561_993x.jpg?v=1713312649',
    type: 'monocromo',
    typeLabel: 'Monocromo',
    note: 'Verde mate y una etiqueta arqueada pequeña, limpia y de lectura inmediata.',
    source: 'https://jp.nonfiction.com/collections/santal_cream'
  },
  {
    brand: 'Trudon',
    name: 'Médie Liquid Soap',
    image: 'https://shoprescuespa.com/cdn/shop/files/savon_boite_medie_3c0692ad-f7c0-4ddf-9e5c-b59c5cd3b57e.jpg?v=1779985712&width=1500',
    type: 'clasico',
    typeLabel: 'Clásico',
    note: 'Escudo diminuto, vidrio acanalado y metal dorado con lenguaje histórico.',
    source: 'https://shoprescuespa.com/products/liquid-soap-medie'
  },
  {
    brand: 'Jo Malone London',
    name: 'Lime Basil & Mandarin',
    image: 'https://hrd-live.cdn.scayle.cloud/images/ab3a57daa4f7e9c150dd6daad1b8320a.jpg?bg=ffffff&brightness=1&height=1600&quality=90&width=1200',
    type: 'clasico',
    typeLabel: 'Clásico',
    note: 'Etiqueta marfil, filete negro y proporciones de perfumería tradicional.',
    source: 'https://www.johnlewis.com/jo-malone-london-lime-basil-mandarin-body-hand-wash/p4083347?size=500ml'
  },
  {
    brand: 'Molton Brown',
    name: 'Orange & Bergamot',
    image: 'https://www.moltonbrown.it/cdn/shop/files/NHH009CR3_uk_Orange-Bergamot-Hand-Wash-300ml_image_01_1d568aec-b943-44ee-9c57-cb0ac7c0ecfe.jpg?v=1754645184',
    type: 'clasico',
    typeLabel: 'Clásico',
    note: 'Marcaje directo casi invisible y un collar metálico como único lujo explícito.',
    source: 'https://www.moltonbrown.it/products/orange-bergamot-sapone-liquido'
  },
  {
    brand: 'Haeckels',
    name: 'Bladderwrack + Fennel',
    image: 'https://www.no3lenham.co.uk/cdn/shop/files/image_c0208385-b7e3-4b71-b4a7-c5c49424c416.jpg?v=1706973585',
    type: 'grafico',
    typeLabel: 'Gráfico',
    note: 'Botella translúcida y una única línea vertical impresa directamente sobre el envase.',
    source: 'https://www.no3lenham.co.uk/products/haeckels-bladderwrack-fennel-hand-wash'
  },
  {
    brand: 'Homecourt',
    name: 'Cece Hand Wash',
    image: 'https://cdn.shopify.com/s/files/1/0884/6816/0824/files/HOMECOURT_HAND_WASH_CECE_FRONT_1.jpg?v=1747240482',
    type: 'monocromo',
    typeLabel: 'Monocromo',
    note: 'Verde profundo, información mínima y espaciado generoso.',
    source: 'https://bluemercury.com/products/homecourt-cece-hand-wash-1'
  }
];

const grid = document.getElementById('product-grid');
const filters = [...document.querySelectorAll('.filter')];
const viewer = document.getElementById('viewer');
const viewerImage = document.getElementById('viewer-image');
const viewerIndex = document.getElementById('viewer-index');
const viewerBrand = document.getElementById('viewer-brand');
const viewerTitle = document.getElementById('viewer-title');
const viewerNote = document.getElementById('viewer-note');
const viewerSource = document.getElementById('viewer-source');
const closeButton = document.getElementById('viewer-close');
let visibleProducts = [...products];
let activeIndex = 0;

function productCard(product, index) {
  const number = String(index + 1).padStart(2, '0');
  return `
    <article class="product-card" data-type="${product.type}">
      <button class="product-visual" type="button" data-product-index="${index}" aria-label="Ampliar ${product.brand}, ${product.name}">
        <img src="${product.image}" alt="${product.brand} ${product.name}" loading="eager" decoding="async">
      </button>
      <div class="product-info">
        <div class="product-topline"><span>${number}</span><span>${product.typeLabel}</span></div>
        <p class="product-brand">${product.brand}</p>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-note">${product.note}</p>
      </div>
    </article>`;
}

function render(filter = 'all') {
  visibleProducts = products.filter(product => filter === 'all' || product.type === filter);
  grid.innerHTML = visibleProducts.map(product => productCard(product, products.indexOf(product))).join('');
  document.getElementById('empty-state').hidden = visibleProducts.length > 0;
  grid.querySelectorAll('.product-visual').forEach(button => {
    button.addEventListener('click', () => {
      const productIndex = Number(button.dataset.productIndex);
      activeIndex = visibleProducts.indexOf(products[productIndex]);
      openViewer();
    });
  });
}

function updateViewer() {
  const product = visibleProducts[activeIndex];
  const absoluteIndex = products.indexOf(product) + 1;
  viewerImage.src = product.image;
  viewerImage.alt = `${product.brand} ${product.name}`;
  viewerIndex.textContent = `${String(absoluteIndex).padStart(2, '0')} / ${String(products.length).padStart(2, '0')}`;
  viewerBrand.textContent = product.brand;
  viewerTitle.textContent = product.name;
  viewerNote.textContent = product.note;
  viewerSource.href = product.source;
}

function openViewer() {
  updateViewer();
  viewer.showModal();
  document.body.style.overflow = 'hidden';
}

function closeViewer() {
  viewer.close();
  document.body.style.overflow = '';
}

function moveViewer(direction) {
  activeIndex = (activeIndex + direction + visibleProducts.length) % visibleProducts.length;
  updateViewer();
}

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    render(button.dataset.filter);
  });
});

closeButton.addEventListener('click', closeViewer);
document.getElementById('viewer-prev').addEventListener('click', () => moveViewer(-1));
document.getElementById('viewer-next').addEventListener('click', () => moveViewer(1));

viewer.addEventListener('click', event => {
  if (event.target === viewer) closeViewer();
});

viewer.addEventListener('close', () => {
  document.body.style.overflow = '';
});

document.addEventListener('keydown', event => {
  if (!viewer.open) return;
  if (event.key === 'ArrowLeft') moveViewer(-1);
  if (event.key === 'ArrowRight') moveViewer(1);
});

render();
