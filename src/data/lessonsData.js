export const LESSONS_DATA = {
  basic: {
    id: 'basic',
    title: 'CSS Dasar (Fundamentals)',
    subtitle: 'Sintaks, Selektor, Box Model, dan Positioning',
    badge: 'Core CSS Foundation',
    description: 'CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mendesain dan mengatur tampilan halaman web. Memahami konsep dasar seperti Box Model, Selektor, dan Display adalah fondasi wajib sebelum melangkah ke Flexbox dan Grid.',
    keyConcepts: [
      {
        title: 'Anatomi Rule CSS',
        desc: 'Terdiri dari Selector (elemen sasaran), Property (karakteristik yang diubah), dan Value (nilai yang diberikan).'
      },
      {
        title: 'CSS Box Model',
        desc: 'Setiap elemen HTML dianggap sebagai kotak 4 lapis: Content (isi), Padding (ruang dalam), Border (tepi), dan Margin (ruang luar).'
      },
      {
        title: 'Display & Positioning',
        desc: 'Menentukan bagaimana elemen berinteraksi dengan aliran dokumen normal (block vs inline) dan cara menempatkannya (relative, absolute, fixed, sticky).'
      },
      {
        title: 'Image & Form Styling',
        desc: 'Mengatur gambar responsif (object-fit, aspect-ratio) dan formulir modern (padding, focus-ring, button hover).'
      }
    ],
    topics: [
      {
        id: 'basic-syntax-selectors',
        title: '1. Anatomi Sintaks & Selektor CSS',
        summary: 'Menarget elemen dengan selektor tag, class (.), ID (#), dan pseudo-class :hover.',
        explanation: 'Aturan CSS ditulis dengan format: `selector { property: value; }`. Selektor class dimulai dengan tanda titik (`.promo-card`), ID dimulai dengan pagar (`#header`), dan pseudo-class seperti `:hover` aktif saat kursor diarahkan ke elemen.',
        defaultCss: `/* Selektor Class: Menarget elemen dengan class="promo-card" */
.promo-card {
  background-color: #ffffff;
  border-width: 2px;
  border-style: solid;
  border-color: #6366f1;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.15);
  transition: all 0.25s ease;
}

/* Pseudo-class :hover aktif saat kursor diarahkan */
.promo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.25);
  border-color: #4f46e5;
}

.promo-title {
  color: #1e1b4b;
  font-size: 20px;
  margin-bottom: 8px;
}

.promo-badge {
  display: inline-block;
  background-color: #e0e7ff;
  color: #4338ca;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 9999px;
}`,
        defaultHtml: `<div class="promo-card">
  <span class="promo-badge">HOT DEAL ⭐</span>
  <h3 class="promo-title">Belajar Web Modern</h3>
  <p style="color: #64748b; font-size: 14px; margin: 12px 0;">
    Arahkan kursor Anda ke kartu ini untuk melihat efek interaktif <strong>:hover</strong>!
  </p>
  <button style="background: #4f46e5; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer;">
    Mulai Sekarang
  </button>
</div>`,
        quickControls: [
          {
            prop: 'border-radius',
            target: 'promo-card',
            options: ['4px', '12px', '24px', '0px']
          },
          {
            prop: 'text-align',
            target: 'promo-card',
            options: ['center', 'left', 'right']
          }
        ],
        tips: 'Gunakan class (`.nama-class`) untuk elemen yang bisa dipakai berulang kali, dan hindari ID (`#id`) untuk styling karena spesifisitasnya terlalu tinggi.'
      },
      {
        id: 'basic-box-model',
        title: '2. CSS Box Model (Margin, Border, Padding, Content)',
        summary: 'Memahami 4 lapisan pembentuk setiap elemen HTML dan fungsi box-sizing: border-box.',
        explanation: 'Setiap elemen HTML di halaman web dibungkus oleh Box Model. Dari luar ke dalam: MARGIN (jarak ke elemen luar), BORDER (garis pembatas), PADDING (jarak antara border dan isi teks/konten), dan CONTENT (area tempat teks atau gambar berada). Sangat penting menambahkan `box-sizing: border-box` agar padding tidak menambah lebar fisik elemen.',
        defaultCss: `* {
  box-sizing: border-box; /* Kunci perhitungan ukuran yang konsisten */
}

.box-demo {
  /* 1. Content */
  width: 100%;
  background-color: #f0fdf4;
  color: #166534;
  font-weight: 600;
  text-align: center;
  
  /* 2. Padding (Ruang Dalam) */
  padding: 24px;
  
  /* 3. Border (Garis Tepi) */
  border-width: 4px;
  border-style: solid;
  border-color: #22c55e;
  border-radius: 12px;
  
  /* 4. Margin (Ruang Luar) */
  margin: 16px 0;
  
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08);
}

.layer-info {
  background: white;
  border-width: 1px;
  border-style: dashed;
  border-color: #16a34a;
  padding: 12px;
  border-radius: 6px;
  font-size: 13px;
}`,
        defaultHtml: `<div style="background: #f8fafc; padding: 12px; border: 1px solid #e2e8f0; border-radius: 10px;">
  <span style="font-size: 12px; color: #64748b; font-weight: bold;">Elemen Induk Luar</span>
  
  <div class="box-demo">
    <div class="layer-info">
      📦 Ini adalah CONTENT (Isi)
      <div style="font-size: 11px; color: #4b5563; margin-top: 4px; font-weight: normal;">
        Dikelilingi oleh Padding hijau muda, Border hijau tegas, dan Margin luar.
      </div>
    </div>
  </div>

  <span style="font-size: 12px; color: #64748b; font-weight: bold;">Elemen Bawah (Dipisahkan Margin)</span>
</div>`,
        quickControls: [
          {
            prop: 'padding',
            target: 'box-demo',
            options: ['12px', '24px', '40px', '8px']
          },
          {
            prop: 'border-width',
            target: 'box-demo',
            options: ['0px', '2px', '4px', '8px', '14px']
          },
          {
            prop: 'margin',
            target: 'box-demo',
            options: ['0px', '8px 0', '16px 0', '32px 0']
          }
        ],
        tips: 'Klik tombol `border-width` di atas untuk melihat perubahan ketebalan border secara langsung pada elemen .box-demo!'
      },
      {
        id: 'basic-display',
        title: '3. Display: Block, Inline, dan Inline-Block',
        summary: 'Menentukan perilaku default elemen terhadap baris dan dimensinya.',
        explanation: 'Elemen `block` (seperti <div>, <p>) selalu memulai baris baru dan memakan lebar 100%. Elemen `inline` (seperti <span>, <a>) mengalir di dalam teks dan tidak bisa diberi width/height. Elemen `inline-block` menggabungkan keduanya: bisa berdampingan dalam satu baris TAPI tetap bisa diatur lebar dan tingginya.',
        defaultCss: `.block-element {
  display: block; /* Selalu memakan 1 baris penuh */
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #f87171;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  font-weight: 600;
}

.inline-element {
  display: inline; /* Mengalir di dalam teks, lebar selebar kontennya */
  background-color: #fef3c7;
  color: #92400e;
  border: 1px solid #f59e0b;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
}

.inline-block-element {
  display: inline-block; /* Berjejer menyamping, TAPI bisa diatur lebar & padding */
  width: 130px;
  background-color: #e0e7ff;
  color: #3730a3;
  border: 1px solid #818cf8;
  padding: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}`,
        defaultHtml: `<div>
  <div class="block-element">🧱 Elemen Block 1 (Memakan 100% lebar)</div>
  <div class="block-element">🧱 Elemen Block 2</div>

  <p style="margin: 16px 0; color: #475569; font-size: 13px;">
    Ini paragraf teks biasa dengan <span class="inline-element">inline badge 1</span> dan 
    <span class="inline-element">inline badge 2</span> di tengah-tengah kalimat.
  </p>

  <div style="margin-top: 14px;">
    <div class="inline-block-element">Badge 1</div>
    <div class="inline-block-element">Badge 2</div>
    <div class="inline-block-element">Badge 3</div>
  </div>
</div>`,
        quickControls: [
          {
            prop: 'display',
            target: 'inline-block-element',
            options: ['inline-block', 'block', 'inline']
          }
        ],
        tips: 'Tombol navigasi dan lencana status (*badges*) paling tepat menggunakan `display: inline-block` jika tidak menggunakan Flexbox.'
      },
      {
        id: 'basic-position',
        title: '4. CSS Positioning (Relative, Absolute, Fixed, Sticky)',
        summary: 'Mengontrol koordinat posisi elemen di luar aliran dokumen normal.',
        explanation: '`static` adalah posisi default. `relative` mengizinkan pergeseran posisi dengan `top`, `left`, dll., dan sering menjadi jangkar induk (anchor). `absolute` menempatkan elemen relatif terhadap induk ber-posisi terdekat. `sticky` menempel di layar saat di-scroll.',
        defaultCss: `.parent-card {
  position: relative; /* Menjadi jangkar acuan untuk anak absolute! */
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.floating-badge {
  position: absolute; /* Melayang bebas mengacu ke .parent-card */
  top: -12px;
  right: 16px;
  background: linear-gradient(135deg, #f43f5e, #e11d48);
  color: white;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(225, 29, 72, 0.3);
}

.content-box {
  color: #334155;
  font-size: 14px;
  line-height: 1.6;
}`,
        defaultHtml: `<div style="padding-top: 16px;">
  <div class="parent-card">
    <div class="floating-badge">DISCOUNT 50% 🔥</div>
    <h3 style="margin: 0 0 8px 0; color: #0f172a;">Sepatu Olahraga Running</h3>
    <p class="content-box">
      Perhatikan bagaimana badge merah di pojok kanan atas melayang persis di tepi kartu karena menggunakan 
      <code>position: absolute; top: -12px; right: 16px;</code> di dalam container <code>position: relative;</code>.
    </p>
  </div>
</div>`,
        quickControls: [
          {
            prop: 'top',
            target: 'floating-badge',
            options: ['-12px', '12px', 'auto']
          },
          {
            prop: 'right',
            target: 'floating-badge',
            options: ['16px', 'auto']
          }
        ],
        tips: 'Rumus emas CSS absolute: Selalu berikan `position: relative` pada elemen induk agar elemen anak tidak melayang keluar ke seluruh jendela browser!'
      },
      {
        id: 'basic-colors-typography',
        title: '5. Tipografi, Warna, dan Shadow Modern',
        summary: 'Mengatur hierarki teks, palet warna, dan efek bayangan berlapis yang estetik.',
        explanation: 'Tipografi yang baik menentukan keterbacaan (*readability*). Properti penting meliputi `font-size`, `font-weight`, `line-height` (jarak antar baris), `letter-spacing`, dan `box-shadow` untuk memberikan kedalaman visual 3D.',
        defaultCss: `.article-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04);
}

.category {
  color: #0284c7;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}

.headline {
  color: #0f172a;
  font-size: 22px;
  font-weight: 800;
  line-height: 1.3;
  margin: 0 0 12px 0;
}

.body-text {
  color: #475569;
  font-size: 14px;
  line-height: 1.6; /* Kunci kenyamanan membaca teks panjang */
  margin: 0;
}`,
        defaultHtml: `<div class="article-card">
  <div class="category">Frontend Engineering</div>
  <h2 class="headline">Menguasai Desain Antarmuka dengan CSS Modern</h2>
  <p class="body-text">
    Kombinasi ukuran font yang proporsional, line-height yang lapang, dan bayangan lembut membuat antarmuka terasa profesional, bersih, dan memanjakan mata pembaca.
  </p>
</div>`,
        quickControls: [
          {
            prop: 'line-height',
            target: 'body-text',
            options: ['1.6', '1.2', '1.8', '2.0']
          },
          {
            prop: 'font-size',
            target: 'headline',
            options: ['22px', '26px', '18px', '30px']
          }
        ],
        tips: 'Gunakan `line-height: 1.5` hingga `1.7` untuk teks paragraf agar mata pengguna tidak mudah lelah saat membaca artikel panjang.'
      },
      {
        id: 'basic-image-styling',
        title: '6. Tata Gaya Gambar (Image Styling Responsif & Modern)',
        summary: 'Mengatur gambar responsif, object-fit (crop/scale), aspect-ratio, border-radius, dan efek visual.',
        explanation: 'Secara default elemen <img> memiliki ukuran intrinsik tetap yang bisa meluber jika dibuka di layar kecil. Dengan properti `max-width: 100%` dan `height: auto`, gambar menjadi responsif mengikuti wadah. Gunakan `object-fit: cover` agar gambar mengisi wadah secara proporsional seperti thumbnail tanpa distorsi, dan `border-radius: 50%` untuk foto profil avatar.',
        defaultCss: `/* Kontainer pembungkus gambar */
.image-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 16px;
  max-width: 480px;
  margin: 0 auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.responsive-img {
  /* Kunci gambar responsif: */
  max-width: 100%;
  width: 100%;
  height: 220px;
  
  /* object-fit: mengontrol bagaimana gambar mengisi kotak */
  object-fit: cover;
  
  /* Bentuk sudut gambar */
  border-radius: 12px;
  
  /* Efek visual filter & transisi halus */
  filter: none;
  transition: transform 0.3s ease, filter 0.3s ease;
  display: block;
}

.responsive-img:hover {
  transform: scale(1.02);
}

.caption {
  margin-top: 12px;
  font-size: 13px;
  color: #64748b;
  text-align: center;
}`,
        defaultHtml: `<div class="image-card">
  <img 
    class="responsive-img" 
    src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'><defs><linearGradient id='sky' x1='0' y1='0' x2='0' y2='1'><stop offset='0%25' stop-color='%2338bdf8'/><stop offset='60%25' stop-color='%23bae6fd'/><stop offset='100%25' stop-color='%23fef08a'/></linearGradient><linearGradient id='m1' x1='0' y1='0' x2='0' y2='1'><stop offset='0%25' stop-color='%234338ca'/><stop offset='100%25' stop-color='%23312e81'/></linearGradient><linearGradient id='m2' x1='0' y1='0' x2='0' y2='1'><stop offset='0%25' stop-color='%23059669'/><stop offset='100%25' stop-color='%23064e3b'/></linearGradient></defs><rect width='600' height='400' fill='url(%23sky)'/><circle cx='460' cy='120' r='45' fill='%23fbbf24'/><polygon points='60,400 240,180 380,400' fill='url(%23m1)'/><polygon points='220,400 400,140 560,400' fill='url(%23m1)' opacity='0.9'/><polygon points='-20,400 160,260 320,400' fill='url(%23m2)'/><polygon points='300,400 450,230 620,400' fill='url(%23m2)'/><rect y='360' width='600' height='40' fill='%2315803d'/></svg>"
    alt="Ilustrasi Lanskap Digital" 
  />
  <div class="caption">
    📸 <strong>Gambar Vektor Lanskap</strong> — Uji properti <code>object-fit</code>, <code>border-radius</code>, atau <code>filter</code> di kontrol Ubah Cepat!
  </div>
</div>`,
        quickControls: [
          {
            prop: 'object-fit',
            target: 'responsive-img',
            options: ['cover', 'contain', 'fill', 'none']
          },
          {
            prop: 'border-radius',
            target: 'responsive-img',
            options: ['12px', '50%', '24px', '0px']
          },
          {
            prop: 'filter',
            target: 'responsive-img',
            options: ['none', 'grayscale(100%)', 'sepia(80%)', 'contrast(130%)']
          },
          {
            prop: 'height',
            target: 'responsive-img',
            options: ['220px', '150px', '300px']
          }
        ],
        tips: 'Selalu berikan `max-width: 100%; height: auto;` sebagai aturan dasar gambar agar tidak pernah meluber melebihi lebar layar smartphone pengguna.'
      },
      {
        id: 'basic-form-styling',
        title: '7. Tata Gaya Formulir & Input Modern (Form Styling)',
        summary: 'Mendesain formulir bersih: input field, label, focus-ring, dan tombol submit yang interaktif.',
        explanation: 'Elemen formulir default browser sering tampak kaku dan tidak konsisten antar sistem operasi. Dengan CSS, kita dapat mempercantiknya: atur padding yang lapang, berikan `outline: none`, tambahkan bayangan cincin `box-shadow` saat elemen difokuskan (`:focus`), serta lengkapi tombol submit dengan status interaktif `:hover` dan `:active`.',
        defaultCss: `/* Kontainer Formulir */
.form-card {
  max-width: 440px;
  margin: 0 auto;
  background: #ffffff;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #334155;
  margin-bottom: 6px;
}

/* Input Field Modern */
.form-input {
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  color: #1e293b;
  background-color: #f8fafc;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

/* Efek Focus Ring saat pengguna mengetik */
.form-input:focus {
  background-color: #ffffff;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}

/* Tombol Kirim / Submit */
.btn-submit {
  width: 100%;
  padding: 12px;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.25);
}

.btn-submit:hover {
  background-color: #4338ca;
  transform: translateY(-1px);
  box-shadow: 0 6px 10px -1px rgba(79, 70, 229, 0.35);
}

.btn-submit:active {
  transform: translateY(0);
}`,
        defaultHtml: `<form class="form-card" onsubmit="event.preventDefault(); alert('Formulir berhasil dikirim!');">
  <h3 style="margin: 0 0 16px 0; font-size: 18px; color: #0f172a;">Daftar Akun Baru</h3>

  <div class="form-group">
    <label class="form-label" for="nama">Nama Lengkap</label>
    <input class="form-input" id="nama" type="text" placeholder="Contoh: Budi Santoso" value="Budi Santoso" />
  </div>

  <div class="form-group">
    <label class="form-label" for="email">Alamat Email</label>
    <input class="form-input" id="email" type="email" placeholder="nama@email.com" value="budi@example.com" />
  </div>

  <button class="btn-submit" type="submit">
    Daftar Sekarang ✨
  </button>
  
  <p style="margin: 12px 0 0 0; font-size: 11px; text-align: center; color: #94a3b8;">
    Klik input field di atas untuk melihat efek <strong>:focus ring</strong> yang interaktif!
  </p>
</form>`,
        quickControls: [
          {
            prop: 'border-radius',
            target: 'form-input',
            options: ['8px', '4px', '24px', '0px']
          },
          {
            prop: 'border-color',
            target: 'form-input',
            options: ['#cbd5e1', '#6366f1', '#10b981', '#f43f5e']
          },
          {
            prop: 'background-color',
            target: 'btn-submit',
            options: ['#4f46e5', '#059669', '#0284c7', '#db2777']
          },
          {
            prop: 'border-radius',
            target: 'btn-submit',
            options: ['8px', '9999px', '4px', '0px']
          }
        ],
        tips: 'Jangan hilangkan `outline` tanpa memberikan pengganti visual status `:focus` (seperti perubahan border atau box-shadow cincin), agar pengguna yang mengoperasikan form dengan keyboard (tombol Tab) tetap dapat melihat posisi kursor.'
      }
    ]
  },
  flex: {
    id: 'flex',
    title: 'CSS Flexbox',
    subtitle: 'Tata Letak 1-Dimensi (Baris atau Kolom)',
    badge: '1D Layout System',
    description: 'Flexbox (Flexible Box) dirancang untuk menyusun, meratakan, dan mendistribusikan ruang antar elemen di dalam kontainer, baik secara horizontal (baris) maupun vertikal (kolom), bahkan ketika ukurannya tidak diketahui atau dinamis.',
    keyConcepts: [
      {
        title: 'Main Axis (Sumbu Utama)',
        desc: 'Sumbu default yang ditentukan oleh flex-direction (secara default horizontal kiri ke kanan).'
      },
      {
        title: 'Cross Axis (Sumbu Silang)',
        desc: 'Sumbu yang tegak lurus dengan Main Axis (secara default vertikal atas ke bawah).'
      },
      {
        title: 'Flex Container & Items',
        desc: 'Elemen induk ber-properti display: flex menjadi Container, anak langsungnya otomatis menjadi Flex Items.'
      }
    ],
    topics: [
      {
        id: 'flex-basics',
        title: '1. Pengenalan display: flex & gap',
        summary: 'Mengubah elemen induk menjadi flex container dan mengatur jarak antar item.',
        explanation: 'Secara default, elemen blok seperti <div> bertumpuk ke bawah. Ketika Anda memberikan display: flex pada container, anak-anaknya langsung berjejer menyamping (horizontal) dan hanya memakan ruang sesuai kontennya. Properti gap memberi jarak bersih tanpa perlu margin.',
        defaultCss: `/* Ubah kode di bawah ini untuk melihat efeknya langsung! */
.container {
  display: flex;
  gap: 16px;
  background-color: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  border: 2px dashed #0284c7;
}

.item {
  background: linear-gradient(135deg, #0284c7, #0369a1);
  color: white;
  padding: 20px;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}`,
        defaultHtml: `<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>`,
        quickControls: [
          {
            prop: 'display',
            target: 'container',
            options: ['flex', 'inline-flex', 'block']
          },
          {
            prop: 'gap',
            target: 'container',
            options: ['8px', '16px', '24px', '36px', '0px']
          }
        ],
        tips: 'Gunakan `gap` daripada `margin` pada item individual untuk menghindari jarak berlebih di sisi terluar.'
      },
      {
        id: 'flex-direction',
        title: '2. Arah Susunan (flex-direction)',
        summary: 'Menentukan apakah item berjejer horizontal atau vertikal.',
        explanation: 'flex-direction menentukan arah sumbu utama (Main Axis). Nilai defaultnya adalah `row` (kiri ke kanan). Anda dapat mengubahnya ke `column` (atas ke bawah), atau membalik urutannya dengan `row-reverse` atau `column-reverse`.',
        defaultCss: `.container {
  display: flex;
  flex-direction: row; /* Coba ganti: column, row-reverse, column-reverse */
  gap: 12px;
  background-color: #f1f5f9;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
  min-height: 220px;
}

.item {
  background: linear-gradient(135deg, #059669, #047857);
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);
}`,
        defaultHtml: `<div class="container">
  <div class="item">1 🚀 Home</div>
  <div class="item">2 📚 Materi</div>
  <div class="item">3 💡 Tips</div>
  <div class="item">4 📞 Kontak</div>
</div>`,
        quickControls: [
          {
            prop: 'flex-direction',
            target: 'container',
            options: ['row', 'column', 'row-reverse', 'column-reverse']
          }
        ],
        tips: 'Saat berganti ke `column`, sumbu utama menjadi vertikal! Maka `justify-content` akan mengatur posisi atas-bawah.'
      },
      {
        id: 'justify-content',
        title: '3. Perataan Sumbu Utama (justify-content)',
        summary: 'Mengatur distribusi item sepanjang Main Axis.',
        explanation: 'justify-content mendistribusikan ruang kosong di antara item sepanjang sumbu utama. Sangat sering digunakan untuk navbar, tombol di sisi kanan, atau menengahkan elemen.',
        defaultCss: `.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Coba: center, flex-end, space-around, space-evenly */
  gap: 12px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
  box-shadow: 0 2px 5px rgba(0,0,0,0.04);
}

.item {
  background: linear-gradient(135deg, #7c3aed, #6d28d9);
  color: white;
  padding: 18px 22px;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}`,
        defaultHtml: `<div class="container">
  <div class="item">Logo 🎨</div>
  <div class="item">Navigasi 🧭</div>
  <div class="item">Login 🔐</div>
</div>`,
        quickControls: [
          {
            prop: 'justify-content',
            target: 'container',
            options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']
          }
        ],
        tips: 'Ingin membuat elemen di tengah sempurna? Kombinasikan `justify-content: center` dan `align-items: center`!'
      },
      {
        id: 'align-items',
        title: '4. Perataan Sumbu Silang (align-items)',
        summary: 'Mengatur posisi item sepanjang Cross Axis (tegak lurus sumbu utama).',
        explanation: 'align-items mengatur bagaimana item diposisikan di sumbu silang. Nilai default adalah `stretch` (membuat item meregang memenuhi tinggi container). Nilai lainnya mencakup `center`, `flex-start`, `flex-end`, dan `baseline`.',
        defaultCss: `.container {
  display: flex;
  align-items: center; /* Coba: stretch, flex-start, flex-end, baseline */
  justify-content: center;
  gap: 16px;
  height: 220px;
  background-color: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  border: 2px dashed #a855f7;
}

.item {
  background: linear-gradient(135deg, #db2777, #be185d);
  color: white;
  padding: 16px 20px;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}

.item-short { padding: 10px 16px; font-size: 14px; }
.item-tall { padding: 32px 20px; font-size: 18px; }`,
        defaultHtml: `<div class="container">
  <div class="item item-short">Pendek</div>
  <div class="item">Normal</div>
  <div class="item item-tall">Tinggi</div>
</div>`,
        quickControls: [
          {
            prop: 'align-items',
            target: 'container',
            options: ['center', 'flex-start', 'flex-end', 'stretch', 'baseline']
          }
        ],
        tips: 'Jika item memiliki tinggi tetap (height: ...px), `align-items: stretch` tidak akan memanjangkannya.'
      },
      {
        id: 'flex-wrap',
        title: '5. Pembungkusan Baris (flex-wrap)',
        summary: 'Membiarkan item berpindah ke baris baru ketika ruang habis.',
        explanation: 'Secara default, flex items memaksakan diri dalam 1 baris (`nowrap`) dan bisa menyusut atau keluar layar. Dengan `flex-wrap: wrap`, item yang tidak muat akan pindah dengan rapi ke baris berikutnya.',
        defaultCss: `.container {
  display: flex;
  flex-wrap: wrap; /* Coba: nowrap, wrap-reverse */
  gap: 14px;
  background-color: #f1f5f9;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
}

.item {
  background: linear-gradient(135deg, #d97706, #b45309);
  color: white;
  padding: 20px;
  border-radius: 8px;
  font-weight: 600;
  width: 140px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
}`,
        defaultHtml: `<div class="container">
  <div class="item">Kartu 1</div>
  <div class="item">Kartu 2</div>
  <div class="item">Kartu 3</div>
  <div class="item">Kartu 4</div>
  <div class="item">Kartu 5</div>
  <div class="item">Kartu 6</div>
</div>`,
        quickControls: [
          {
            prop: 'flex-wrap',
            target: 'container',
            options: ['wrap', 'nowrap', 'wrap-reverse']
          }
        ],
        tips: 'Gunakan `flex-wrap: wrap` bersama dengan lebar fleksibel untuk tata letak galeri kartu sederhana yang responsif!'
      },
      {
        id: 'flex-grow-shrink',
        title: '6. Fleksibilitas Item (flex-grow, shrink & basis)',
        summary: 'Mengatur proporsi pembesaran dan penyusutan tiap item secara individual.',
        explanation: '`flex-grow` menentukan seberapa banyak item akan tumbuh mengambil sisa ruang kosong. Item dengan `flex-grow: 2` akan mengambil ruang dua kali lipat dibanding `flex-grow: 1`. Sedangkan `align-self` menimpa align-items hanya untuk item tersebut.',
        defaultCss: `.container {
  display: flex;
  gap: 12px;
  background-color: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
  height: 200px;
}

.item-1 {
  background: #2563eb;
  flex-grow: 1; /* Tumbuh 1 bagian */
  padding: 16px;
  border-radius: 8px;
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
}

.item-2 {
  background: #059669;
  flex-grow: 2; /* Tumbuh 2x lipat lebih besar! */
  padding: 16px;
  border-radius: 8px;
  color: white;
  align-self: flex-end; /* Perataan sendiri khusus item ini */
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
}

.item-3 {
  background: #e11d48;
  flex-grow: 1;
  padding: 16px;
  border-radius: 8px;
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
}`,
        defaultHtml: `<div class="container">
  <div class="item-1">flex-grow: 1 (Sidebar)</div>
  <div class="item-2">flex-grow: 2 (Konten Utama) + align-self: flex-end</div>
  <div class="item-3">flex-grow: 1 (Panel Tambahan)</div>
</div>`,
        quickControls: [
          {
            prop: 'gap',
            target: 'container',
            options: ['8px', '16px', '24px', '32px']
          }
        ],
        tips: 'Shorthand populer adalah `flex: 1` yang artinya `flex-grow: 1; flex-shrink: 1; flex-basis: 0%`.'
      }
    ]
  },
  grid: {
    id: 'grid',
    title: 'CSS Grid',
    subtitle: 'Tata Letak 2-Dimensi (Baris & Kolom Sekaligus)',
    badge: '2D Layout System',
    description: 'CSS Grid adalah sistem tata letak 2 dimensi pertama yang native di CSS. Berbeda dengan Flexbox yang fokus pada 1 arah (baris ATAU kolom), Grid memungkinkan Anda mengontrol baris dan kolom secara bersamaan dengan presisi tinggi.',
    keyConcepts: [
      {
        title: 'Grid Tracks & Cells',
        desc: 'Ruang antara dua garis grid horizontal membentuk Baris (Row Track), dan vertikal membentuk Kolom (Column Track). Perpotongannya disebut Grid Cell.'
      },
      {
        title: 'Unit Pecahan (fr)',
        desc: 'Satuan `fr` (fraction) mewakili porsi dari sisa ruang kosong kontainer, sangat fleksibel dibanding persentase.'
      },
      {
        title: 'Grid Lines',
        desc: 'Garis pembagi nomor bernomor mulai dari 1 di sisi terluar kiri/atas hingga n+1 di sisi kanan/bawah.'
      }
    ],
    topics: [
      {
        id: 'grid-basics',
        title: '1. Pengenalan display: grid & Kolom',
        summary: 'Mendefinisikan kolom dengan grid-template-columns dan satuan fr.',
        explanation: 'Aktifkan dengan `display: grid`, lalu tentukan jumlah dan lebar kolom dengan `grid-template-columns`. Nilai `1fr 1fr 1fr` berarti membuat 3 kolom yang masing-masing membagi rata ruang kontainer.',
        defaultCss: `.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 kolom sama lebar */
  gap: 16px;
  background-color: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
}

.item {
  background: linear-gradient(135deg, #0284c7, #0ea5e9);
  color: white;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);
}`,
        defaultHtml: `<div class="container">
  <div class="item">Kolom 1</div>
  <div class="item">Kolom 2</div>
  <div class="item">Kolom 3</div>
  <div class="item">Kolom 4</div>
  <div class="item">Kolom 5</div>
  <div class="item">Kolom 6</div>
</div>`,
        quickControls: [
          {
            prop: 'grid-template-columns',
            target: 'container',
            options: ['1fr 1fr 1fr', '1fr 2fr 1fr', '200px 1fr', 'repeat(4, 1fr)']
          },
          {
            prop: 'gap',
            target: 'container',
            options: ['8px', '16px', '24px', '32px']
          }
        ],
        tips: 'Anda dapat menyingkat `1fr 1fr 1fr` menggunakan fungsi `repeat(3, 1fr)`.'
      },
      {
        id: 'grid-span',
        title: '2. Membentangkan Item (grid-column & span)',
        summary: 'Mengatur agar satu item memakan beberapa kolom atau baris.',
        explanation: 'Item tidak harus selalu menempati 1 kotak saja! Dengan `grid-column: span 2` atau `grid-column: 1 / 3`, item tersebut akan melebar melintasi dua kolom. Sangat ideal untuk Hero section atau kartu fitur unggulan (Featured Card).',
        defaultCss: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  background-color: #f1f5f9;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
}

.item {
  background: #ffffff;
  color: #1e293b;
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

/* Item fitur membentang 2 kolom! */
.featured {
  background: linear-gradient(135deg, #7c3aed, #db2777);
  color: white;
  grid-column: span 2; 
  font-weight: bold;
}

.tall {
  background: linear-gradient(135deg, #059669, #0d9488);
  color: white;
  grid-row: span 2; /* Membentang 2 baris ke bawah */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}`,
        defaultHtml: `<div class="container">
  <div class="item featured">⭐ Kartu Unggulan (span 2 kolom)</div>
  <div class="item tall">📱 Sidebar Banner (span 2 baris)</div>
  <div class="item">Normal A</div>
  <div class="item">Normal B</div>
  <div class="item">Normal C</div>
</div>`,
        quickControls: [
          {
            prop: 'gap',
            target: 'container',
            options: ['10px', '16px', '24px']
          }
        ],
        tips: 'Garis grid dihitung dari 1. Jadi `grid-column: 1 / -1` akan membentang dari garis paling kiri sampai garis paling kanan.'
      },
      {
        id: 'grid-auto-fit-minmax',
        title: '3. Responsive Grid Tanpa Media Query (auto-fit & minmax)',
        summary: 'Grid pintar yang otomatis menyesuaikan jumlah kolom dengan ukuran layar.',
        explanation: 'Ini adalah salah satu teknik paling sakti di CSS modern! `repeat(auto-fit, minmax(200px, 1fr))` berarti: "Buat kolom sebanyak mungkin yang muat di layar, dengan syarat minimal lebar tiap kolom 200px dan jika ada sisa ruang, bagi rata (1fr)".',
        defaultCss: `.container {
  display: grid;
  /* Kunci responsif ajaib: */
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  background-color: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
}

.card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  color: #1e293b;
  padding: 24px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.card h3 {
  margin: 0 0 8px 0;
  color: #2563eb;
}`,
        defaultHtml: `<div class="container">
  <div class="card"><h3>Paket Starter</h3><p style="color:#64748b;font-size:13px;">Cocok untuk belajar dasar</p></div>
  <div class="card"><h3>Paket Pro</h3><p style="color:#64748b;font-size:13px;">Fitur lengkap tanpa batas</p></div>
  <div class="card"><h3>Paket Tim</h3><p style="color:#64748b;font-size:13px;">Kolaborasi bersama rekan</p></div>
  <div class="card"><h3>Enterprise</h3><p style="color:#64748b;font-size:13px;">Dukungan prioritas 24/7</p></div>
</div>`,
        quickControls: [
          {
            prop: 'grid-template-columns',
            target: 'container',
            options: [
              'repeat(auto-fit, minmax(180px, 1fr))',
              'repeat(auto-fit, minmax(120px, 1fr))',
              'repeat(auto-fit, minmax(240px, 1fr))',
              'repeat(auto-fill, minmax(150px, 1fr))'
            ]
          }
        ],
        tips: 'Gunakan slider ukuran viewport di atas preview untuk melihat kartu otomatis melipat ke bawah saat layar menyempit!'
      },
      {
        id: 'grid-template-areas',
        title: '4. Tata Letak Bernama (grid-template-areas)',
        summary: 'Menyusun layout visual halaman web seperti menggambar denah.',
        explanation: 'Dengan `grid-template-areas`, Anda menamai area di CSS, lalu tiap elemen anak cukup memberi properti `grid-area: header`, `grid-area: sidebar`, dll. Sangat mudah dibaca dan dimengerti.',
        defaultCss: `.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 1fr 50px;
  grid-template-areas:
    "header  header"
    "sidebar content"
    "footer  footer";
  gap: 12px;
  min-height: 280px;
  background-color: #f1f5f9;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
}

.header  { grid-area: header; background: #2563eb; color: white; display: flex; align-items: center; padding: 0 16px; border-radius: 8px; font-weight: bold; }
.sidebar { grid-area: sidebar; background: #64748b; color: white; padding: 16px; border-radius: 8px; }
.content { grid-area: content; background: #ffffff; color: #1e293b; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; }
.footer  { grid-area: footer; background: #0284c7; color: white; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-size: 14px; }`,
        defaultHtml: `<div class="layout">
  <header class="header">🏢 Header Navigasi</header>
  <aside class="sidebar">📌 Sidebar Menu</aside>
  <main class="content">📄 Konten Utama Halaman</main>
  <footer class="footer">© 2026 Media Pembelajaran CSS</footer>
</div>`,
        quickControls: [
          {
            prop: 'grid-template-columns',
            target: 'layout',
            options: ['200px 1fr', '150px 1fr', '1fr 2fr']
          }
        ],
        tips: 'Untuk mengosongkan suatu cell pada grid-template-areas, gunakan titik (.) misalnya `"header ."`.'
      }
    ]
  },
  mediaquery: {
    id: 'mediaquery',
    title: 'Media Query & Responsif',
    subtitle: 'Menyesuaikan Tampilan Berdasarkan Karakteristik Layar',
    badge: 'Responsive Web Design',
    description: 'Media Query adalah fondasi dari Desain Web Responsif (RWD). Dengan aturan `@media`, Anda dapat menerapkan style CSS tertentu hanya ketika ukuran layar atau kondisi perangkat memenuhi kriteria tertentu (seperti lebar layar HP, tablet, atau desktop).',
    keyConcepts: [
      {
        title: 'Breakpoints (Titik Henti)',
        desc: 'Ukuran lebar layar acuan pergantian tata letak, misal Mobile (< 640px), Tablet (768px), Desktop (> 1024px).'
      },
      {
        title: 'Mobile-First vs Desktop-First',
        desc: 'Mobile-First menulis CSS default untuk layar kecil lalu memperluas dengan `@media (min-width: ...)`. Desktop-First sebaliknya memakai `(max-width: ...)`.'
      },
      {
        title: 'Sinergi dengan Flex & Grid',
        desc: 'Media Query mengubah properti Flexbox (misal row ke column) dan Grid (misal 3 kolom ke 1 kolom) saat layar mengecil.'
      }
    ],
    topics: [
      {
        id: 'mediaquery-basics',
        title: '1. Sintaks Dasar Media Query (@media)',
        summary: 'Menerapkan gaya CSS khusus saat lebar layar berada di bawah atau di atas batas tertentu.',
        explanation: 'Aturan `@media (max-width: 550px)` akan aktif HANYA ketika lebar layar 550px atau lebih kecil. Ini sangat berguna untuk mengecilkan font, mengubah padding, atau mengganti warna background untuk mode mobile.',
        defaultCss: `/* Style dasar untuk Desktop */
.card-box {
  background-color: #ffffff;
  border: 2px solid #0284c7;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}

.badge {
  display: inline-block;
  background-color: #0284c7;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: bold;
}

/* Terapkan ketika layar di bawah 550px (Mobile) */
@media (max-width: 550px) {
  .card-box {
    background-color: #fdf2f8; /* Berubah pink lembut di mobile */
    border-color: #db2777;
    padding: 16px;
  }
  
  .badge {
    background-color: #db2777;
    content: "Layar Mobile Aktif!";
  }
}`,
        defaultHtml: `<div class="card-box">
  <span class="badge">Desktop View</span>
  <h2 style="margin: 12px 0; color: #1e293b;">Ubah Lebar Viewport!</h2>
  <p style="color: #64748b; font-size: 14px;">
    Gunakan slider atau tombol Mobile (375px) di atas untuk melihat warna kotak berubah otomatis!
  </p>
</div>`,
        quickControls: [
          {
            prop: 'breakpoint',
            target: 'custom',
            options: ['max-width: 550px', 'max-width: 700px', 'min-width: 600px']
          }
        ],
        tips: 'Cobalah klik tombol "Mobile (375px)" di atas preview untuk menguji media query langsung tanpa mengecilkan jendela browser utama!'
      },
      {
        id: 'mediaquery-flex',
        title: '2. Flexbox Responsif (Row ke Column di Mobile)',
        summary: 'Mengubah arah flex-direction dari horizontal menjadi vertikal pada layar sempit.',
        explanation: 'Salah satu pola paling umum di dunia web: Di layar desktop, elemen-elemen seperti navbar atau 3 kolom berjejer menyamping (`row`). Namun di HP, agar tidak terhimpit, kita ubah menjadi tumpukan ke bawah (`column`).',
        defaultCss: `.nav-container {
  display: flex;
  flex-direction: row; /* Default: Berjejer menyamping di desktop */
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 16px 20px;
  border-radius: 10px;
  gap: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.brand {
  font-weight: bold;
  color: #0284c7;
  font-size: 18px;
}

.menu {
  display: flex;
  gap: 12px;
}

.menu-item {
  color: #475569;
  text-decoration: none;
  font-size: 14px;
}

/* Ketika di layar HP (lebar <= 520px): */
@media (max-width: 520px) {
  .nav-container {
    flex-direction: column; /* Ubah ke susunan vertikal */
    align-items: stretch;
    text-align: center;
  }
  
  .menu {
    flex-direction: column;
    width: 100%;
  }

  .menu-item {
    background: #f1f5f9;
    padding: 8px;
    border-radius: 6px;
    color: #0f172a;
    font-weight: 500;
  }
}`,
        defaultHtml: `<nav class="nav-container">
  <div class="brand">⚡ ModernDev</div>
  <div class="menu">
    <a href="#" class="menu-item">Dashboard</a>
    <a href="#" class="menu-item">Modul</a>
    <a href="#" class="menu-item">Proyek</a>
    <a href="#" class="menu-item">Profil</a>
  </div>
</nav>`,
        quickControls: [],
        tips: 'Di mobile, item navigasi vertikal jauh lebih mudah ditekan menggunakan jempol.'
      },
      {
        id: 'mediaquery-grid',
        title: '3. CSS Grid Multi-Kolom Responsif',
        summary: 'Mengatur jumlah kolom grid yang berbeda di Mobile, Tablet, dan Desktop.',
        explanation: 'Dengan pendekatan Mobile-First: kita atur default 1 kolom untuk mobile, lalu pada layar tablet (min-width: 500px) menjadi 2 kolom, dan di desktop (min-width: 720px) menjadi 3 kolom.',
        defaultCss: `.product-grid {
  display: grid;
  /* Default Mobile-First: 1 Kolom */
  grid-template-columns: 1fr;
  gap: 16px;
  background: #f8fafc;
  padding: 18px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
}

/* Tablet (>= 500px): Jadi 2 Kolom */
@media (min-width: 500px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop (>= 720px): Jadi 3 Kolom */
@media (min-width: 720px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.product-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  color: #1e293b;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.product-card .price {
  color: #059669;
  font-weight: bold;
  font-size: 18px;
  margin-top: 8px;
}`,
        defaultHtml: `<div class="product-grid">
  <div class="product-card">
    <h4>Laptop Pro</h4>
    <p style="font-size:12px; color:#64748b;">Ringan & bertenaga</p>
    <div class="price">Rp 15.000.000</div>
  </div>
  <div class="product-card">
    <h4>Mechanical Keyboard</h4>
    <p style="font-size:12px; color:#64748b;">Switch tactile lembut</p>
    <div class="price">Rp 1.200.000</div>
  </div>
  <div class="product-card">
    <h4>Ultra-wide Monitor</h4>
    <p style="font-size:12px; color:#64748b;">Refresh rate 144Hz</p>
    <div class="price">Rp 4.500.000</div>
  </div>
</div>`,
        quickControls: [],
        tips: 'Pendekatan Mobile-First (`min-width`) adalah standar industri modern karena meminimalkan CSS yang perlu di-render pertama kali oleh smartphone.'
      }
    ]
  }
};

export const COMPARISON_DATA = {
  title: 'Kapan Menggunakan Flexbox vs CSS Grid?',
  description: 'Kedua sistem tata letak ini bukan saingan, melainkan saling melengkapi satu sama lain.',
  columns: [
    {
      type: 'Flexbox (1-Dimensi)',
      color: 'sky',
      icon: 'Columns3',
      points: [
        'Tata letak satu arah: baris ATAU kolom.',
        'Sangat cocok untuk komponen UI kecil seperti navbar, pagination, form inline, atau deretan tombol.',
        'Penataan berbasis konten: item menentukan sendiri ukurannya lalu flexbox mengaturnya.',
        'Sangat mudah untuk menengahkan item vertikal & horizontal (`center`).'
      ],
      idealFor: 'Navbar, grup tombol, perataan vertikal/horizontal, badge tag.'
    },
    {
      type: 'CSS Grid (2-Dimensi)',
      color: 'emerald',
      icon: 'LayoutGrid',
      points: [
        'Tata letak dua arah: baris DAN kolom secara serentak.',
        'Sangat cocok untuk tata letak halaman makro (keseluruhan layout) seperti dashboard atau denah situs.',
        'Penataan berbasis grid layout: container menentukan petak-petak dulu, baru item diletakkan ke dalam petak.',
        'Mendukung overlapping item dan grid-template-areas yang intuitif.'
      ],
      idealFor: 'Dashboard bento-box, galeri foto terstruktur, layout halaman utuh, katalog produk.'
    }
  ]
};

export const CHALLENGES_DATA = [
  {
    id: 'c1',
    title: 'Tantangan 1: Pusatkan Elemen di Tengah Sempurna (Flexbox)',
    goal: 'Gunakan Flexbox untuk memosisikan kartu tepat di tengah wadah baik secara horizontal maupun vertikal.',
    hint: 'Gunakan `justify-content: center` dan `align-items: center` pada container.',
    initialCss: `.container {
  display: flex;
  /* Tambahkan kode Anda di sini: */
  
  height: 240px;
  background-color: #f8fafc;
  border-radius: 12px;
  border: 2px dashed #94a3b8;
}

.card {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  padding: 24px 32px;
  border-radius: 12px;
  font-weight: bold;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}`,
    initialHtml: `<div class="container">
  <div class="card">🎯 Saya Ingin di Tengah!</div>
</div>`,
    solutionCheck: (css) => {
      const clean = css.replace(/\s+/g, ' ').toLowerCase();
      const hasJustify = clean.includes('justify-content: center') || clean.includes('justify-content:center');
      const hasAlign = clean.includes('align-items: center') || clean.includes('align-items:center');
      return hasJustify && hasAlign;
    },
    solutionCss: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
  background-color: #f8fafc;
  border-radius: 12px;
  border: 2px dashed #4f46e5;
}

.card {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  padding: 24px 32px;
  border-radius: 12px;
  font-weight: bold;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}`
  },
  {
    id: 'c2',
    title: 'Tantangan 2: Kartu Unggulan Melintasi 2 Kolom (CSS Grid)',
    goal: 'Buat item pertama (kelas `.featured`) membentang selebar 2 kolom pada grid 3-kolom.',
    hint: 'Beri properti `grid-column: span 2;` pada selector `.featured`.',
    initialCss: `.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  background-color: #f1f5f9;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
}

.item {
  background: #ffffff;
  color: #1e293b;
  border: 1px solid #e2e8f0;
  padding: 18px;
  border-radius: 8px;
  text-align: center;
}

.featured {
  background: linear-gradient(135deg, #db2777, #e11d48);
  color: white;
  /* Tambahkan aturan span di sini: */
  
  font-weight: bold;
}`,
    initialHtml: `<div class="grid-wrapper">
  <div class="item featured">🌟 Kartu Utama (Rentang 2 Kolom)</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>`,
    solutionCheck: (css) => {
      const clean = css.replace(/\s+/g, ' ').toLowerCase();
      return clean.includes('grid-column: span 2') || clean.includes('grid-column:span 2') || clean.includes('grid-column: 1 / 3');
    },
    solutionCss: `.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  background-color: #f1f5f9;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
}

.item {
  background: #ffffff;
  color: #1e293b;
  border: 1px solid #e2e8f0;
  padding: 18px;
  border-radius: 8px;
  text-align: center;
}

.featured {
  background: linear-gradient(135deg, #db2777, #e11d48);
  color: white;
  grid-column: span 2;
  font-weight: bold;
}`
  },
  {
    id: 'c3',
    title: 'Tantangan 3: Bikin Responsive Breakpoint dengan Media Query',
    goal: 'Tulis media query `@media (max-width: 500px)` agar `.container` berganti menjadi `flex-direction: column` saat layar sempit.',
    hint: 'Gunakan `@media (max-width: 500px) { .container { flex-direction: column; } }`.',
    initialCss: `.container {
  display: flex;
  flex-direction: row;
  gap: 12px;
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
}

.box {
  flex: 1;
  background: #0284c7;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
}

/* Tulis aturan @media di bawah ini: */
`,
    initialHtml: `<div class="container">
  <div class="box">Langkah 1</div>
  <div class="box">Langkah 2</div>
  <div class="box">Langkah 3</div>
</div>`,
    solutionCheck: (css) => {
      const clean = css.replace(/\s+/g, ' ').toLowerCase();
      return clean.includes('@media') && clean.includes('500px') && clean.includes('flex-direction: column');
    },
    solutionCss: `.container {
  display: flex;
  flex-direction: row;
  gap: 12px;
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
}

.box {
  flex: 1;
  background: #0284c7;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
}

@media (max-width: 500px) {
  .container {
    flex-direction: column;
  }
}`
  }
];
