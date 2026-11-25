# CSS Modern Lab: Media Pembelajaran Interaktif CSS Dasar, Flexbox, Grid, & Media Query

Media pembelajaran interaktif berbasis **React** yang dirancang untuk mempelajari konsep tata letak dan styling modern CSS secara visual, intuitif, dan eksperimental (Light Mode Edition).

---

## 🌟 Modul & Fitur Pembelajaran

1. **Bab 1: CSS Dasar (Fundamentals & Box Model)**
   - **Anatomi Sintaks & Selektor**: Tag, Class (`.`), ID (`#`), dan pseudo-class (`:hover`).
   - **Visualizer Interaktif CSS Box Model**: Slider langsung untuk mengeksplorasi lapisan *Margin*, *Border*, *Padding*, dan *Content*.
   - **Display Property Klasik**: Perbedaan mendasar `block`, `inline`, dan `inline-block`.
   - **CSS Positioning**: Praktik penggunaan `relative`, `absolute`, `fixed`, dan `sticky`.
   - **Tipografi & Shadow Modern**: Mengatur `line-height`, `letter-spacing`, dan `box-shadow` berlapis.

2. **Bab 2: CSS Flexbox (1-Dimensi)**
   - Konsep Sumbu Utama (*Main Axis*) dan Sumbu Silang (*Cross Axis*) dengan visualizer arah interaktif (`row` vs `column`).
   - Properti Kontainer: `display: flex`, `flex-direction`, `justify-content`, `align-items`, `flex-wrap`, `gap`.
   - Properti Item: `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`.

3. **Bab 3: CSS Grid (2-Dimensi)**
   - Anatomi Grid: *Tracks* (Baris & Kolom), *Grid Cells*, *Grid Lines*.
   - Unit fleksibel `fr` (*fraction*), fungsi `repeat()`, dan pengaturan `gap`.
   - Perentangan item dengan `grid-column: span` dan `grid-row: span`.
   - Grid otomatis responsif tanpa media query: `repeat(auto-fit, minmax(180px, 1fr))`.
   - Tata letak area bernama dengan `grid-template-areas`.

4. **Bab 4: Media Queries & Desain Web Responsif (RWD)**
   - Konsep *Breakpoints* (Mobile < 640px, Tablet 768px, Desktop 1024px).
   - Pendekatan *Mobile-First* (`min-width`) vs *Desktop-First* (`max-width`).
   - Flexbox responsif: mengubah arah dari horizontal (`row`) ke vertikal (`column`) pada layar HP.
   - Grid multi-kolom responsif: 1 kolom di HP &rarr; 2 kolom di tablet &rarr; 3 kolom di desktop.
   - **Viewport Simulator**: Tombol instan Mobile (375px), Tablet (768px), Desktop (1024px), Penuh (100%), dan slider tarik dinamis.

5. **Bab 5: Misi Tantangan & Kuis Interaktif**
   - Misi 1: Memusatkan kartu ke tengah layar (*Centering with Flexbox*).
   - Misi 2: Kartu unggulan melintasi 2 kolom (*Grid span*).
   - Misi 3: Mengubah layout kolom menjadi bertumpuk dengan breakpoint Media Query.
   - Dilengkapi *Live Solution Validator* (Cek Jawaban Saya), petunjuk (*hints*), dan kunci jawaban.

6. **Snippet Code Reaktif & Live Preview Sandbox**
   - Setiap sub-bab memiliki editor kode (CSS dan HTML) yang dapat diubah langsung.
   - Setiap ketikan seketika memperbarui live preview sandbox secara *real-time*.
   - Fitur tombol *Salin CSS*, *Reset Kode*, dan *Tombol Ubah Cepat (Quick Controls)*.

7. **Contekan Cepat (Cheatsheet Modal)**
   - Tabel komparasi lengkap: Kapan menggunakan Flexbox vs CSS Grid.
   - Tabel ringkasan properti favorit dan fungsinya.

---

## 🚀 Cara Menjalankan Proyek

```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Teknologi yang Digunakan
- **React 19**
- **Vite 6**
- **Tailwind CSS**
- **Lucide React**
