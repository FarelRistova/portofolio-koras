<template>
  <section class="project-section" id="project">
    <div class="section-title">
      <h1>Projects</h1>
      <p>Beberapa proyek yang telah saya kerjakan</p>
    </div>

    <div class="projects">
      <div class="project-card" v-for="project in projects" :key="project.title" @click="openModal(project)">
        <img :src="project.image" :alt="project.title" class="project-image" />

        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.shortDesc }}</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="selectedProject" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h2>{{ selectedProject.title }}</h2>

        <!-- Slider tanpa tombol navigasi -->
        <div v-if="selectedProject.images" class="modal-slider">
          <img :src="selectedProject.images[selectedImageIndex]"
            :alt="`${selectedProject.title} - gambar ${selectedImageIndex + 1}`" class="modal-image" />

          <div class="image-counter">
            {{ selectedImageIndex + 1 }} /
            {{ selectedProject.images.length }}
          </div>
        </div>

        <img v-else :src="selectedProject.image" :alt="selectedProject.title" class="modal-image" />

        <p>{{ selectedProject.fullDesc }}</p>

        <button @click="closeModal">Tutup</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectView',

  data() {
    return {
      selectedProject: null,
      selectedImageIndex: 0,
      sliderInterval: null,

      projects: [
        {
          title: 'Nigma Administrasi',
          shortDesc: 'Sistem administrasi web untuk efisiensi operasional internal perusahaan.',
          fullDesc:
            'Mengembangkan sistem administrasi berbasis web untuk efisiensi operasional internal perusahaan. Membangun modul manajemen data master (klien, perusahaan mitra, karyawan, dan pengeluaran), sistem Role & Access Control, serta fitur otomatisasi pembuatan hingga pencetakan dokumen bisnis seperti Quotation, Tanda Terima, dan Job Order menggunakan Laravel, Vue.js, Inertia.js, dan MySQL.',
          image: new URL('../assets/images/nigma-administrasi/1.png', import.meta.url).href,
          images: [
            new URL('../assets/images/nigma-administrasi/1.png', import.meta.url).href,
            new URL('../assets/images/nigma-administrasi/2.png', import.meta.url).href,
            new URL('../assets/images/nigma-administrasi/3.png', import.meta.url).href,
            new URL('../assets/images/nigma-administrasi/4.png', import.meta.url).href,
            new URL('../assets/images/nigma-administrasi/5.png', import.meta.url).href,
            new URL('../assets/images/nigma-administrasi/6.png', import.meta.url).href,
            new URL('../assets/images/nigma-administrasi/7.png', import.meta.url).href,
            new URL('../assets/images/nigma-administrasi/8.png', import.meta.url).href
          ]
        },
        {
          title: 'Inventory Management System',
          shortDesc: 'Sistem manajemen inventaris berbasis web untuk sekolah.',
          fullDesc:
            'Aplikasi inventaris berbasis web yang dibangun dengan Laravel ini mempermudah pengelolaan, pencatatan, dan pemantauan aset secara terpusat dan real-time. Dilengkapi fitur peminjaman barang serta pembagian hak akses (role access) untuk Admin dan Staff, sistem ini menggantikan proses manual menjadi lebih efisien, terstruktur, dan transparan.',
          image: new URL('../assets/images/inventaris/1.png', import.meta.url).href,
          images: [
            new URL('../assets/images/inventaris/1.png', import.meta.url).href,
            new URL('../assets/images/inventaris/2.png', import.meta.url).href,
            new URL('../assets/images/inventaris/3.png', import.meta.url).href,
            new URL('../assets/images/inventaris/4.png', import.meta.url).href,
            new URL('../assets/images/inventaris/5.png', import.meta.url).href,
            new URL('../assets/images/inventaris/6.png', import.meta.url).href,
            new URL('../assets/images/inventaris/7.png', import.meta.url).href,
            new URL('../assets/images/inventaris/8.png', import.meta.url).href,
            new URL('../assets/images/inventaris/9.png', import.meta.url).href,
            new URL('../assets/images/inventaris/10.png', import.meta.url).href,
          ]
        },
        {
          title: 'MyBook',
          shortDesc: 'Aplikasi untuk menyimpan dan mengelola koleksi buku pribadi.',
          fullDesc:
            'Aplikasi ini memungkinkan pengguna untuk menyimpan, mengelola, dan melacak koleksi buku pribadi mereka. Dilengkapi dengan fitur pencarian, kategori, dan penandaan status baca. By Vue.js',
          image: new URL('../assets/images/book-app/1.png', import.meta.url).href,
          images: [
            new URL('../assets/images/book-app/1.png', import.meta.url).href,
            new URL('../assets/images/book-app/2.png', import.meta.url).href,
            new URL('../assets/images/book-app/3.png', import.meta.url).href,
            new URL('../assets/images/book-app/4.png', import.meta.url).href,
            new URL('../assets/images/book-app/5.png', import.meta.url).href,
            new URL('../assets/images/book-app/6.png', import.meta.url).href,
          ]
        },
        {
          title: 'Website Perpustakaan',
          shortDesc: 'Website untuk manajemen peminjaman buku di sekolah.',
          fullDesc:
            'Aplikasi ini membantu siswa meminjam dan mengembalikan buku dengan mudah. Fitur lengkap seperti riwayat, pencarian, dan dashboard admin. By Vue.js',
          image: new URL('../assets/images/perpus1.png', import.meta.url).href
        },
        {
          title: 'Kasir Toko',
          shortDesc: 'Aplikasi kasir berbasis Flutter untuk toko kecil.',
          fullDesc:
            'Mencatat transaksi, menghitung kembalian, menampilkan struk dan manajemen produk. Cocok untuk UMKM.',
          image: new URL('../assets/images/kasir1.png', import.meta.url).href
        },
        {
          title: 'Aplikasi Pengaduan',
          shortDesc: 'Aplikasi web untuk menerima dan menanggapi pengaduan masyarakat.',
          fullDesc:
            'Dilengkapi dengan fitur CRUD laporan, status laporan, dan panel admin untuk tindak lanjut aduan. By Laravel',
          image: new URL('../assets/images/pengaduan1.png', import.meta.url).href
        },
        {
          title: 'Aplikasi Todo List',
          shortDesc: 'Aplikasi web untuk mengelola daftar tugas harian atau pun rencana jangka panjang.',
          fullDesc:
            'Dilengkapi dengan fitur penambahan, pengeditan, dan penghapusan tugas, serta penandaan tugas sebagai selesai. By Flutter',
          image: new URL('../assets/images/todo1.png', import.meta.url).href
        },
        {
          title: 'Plants App',
          shortDesc: 'Aplikasi web untuk mengelola tanaman dan pertumbuhannya.',
          fullDesc:
            'Dilengkapi dengan fitur penambahan, pengeditan, dan penghapusan, serta penjelasan setiap pertumbuhan. By Laravel',
          image: new URL('../assets/images/plants1.png', import.meta.url).href
        },
        {
          title: 'Apotek App',
          shortDesc: 'Aplikasi web untuk manajemen pelayanan apotek.',
          fullDesc:
            'Aplikasi ini memungkinkan pengguna untuk mengelola stok obat, transaksi penjualan, dan laporan penjualan, serta fitur pencarian obat. Dan juga dilengkapi dengan fitur autentikasi untuk admin dan kasir. By Laravel',
          image: new URL('../assets/images/apotek1.png', import.meta.url).href
        },
        {
          title: 'Peminjaman Laptop',
          shortDesc: 'Aplikasi web untuk manajemen peminjaman laptop dengan efisien.',
          fullDesc:
            'Aplikasi ini memudahkan untuk mengelola peminjaman laptop dengan cepat dan mudah. Dilengkapi dengan fitur autentikasi untuk admin dan pengguna. By Laravel',
          image: new URL('../assets/images/peminjamanlaptop1.png', import.meta.url).href
        }
      ]
    };
  },

  methods: {
    openModal(project) {
      this.stopSlider();

      this.selectedProject = project;
      this.selectedImageIndex = 0;

      // Slider otomatis setiap 3 detik
      if (project.images && project.images.length > 1) {
        this.sliderInterval = setInterval(() => {
          this.selectedImageIndex =
            (this.selectedImageIndex + 1) % project.images.length;
        }, 3000);
      }
    },

    closeModal() {
      this.stopSlider();

      this.selectedProject = null;
      this.selectedImageIndex = 0;
    },

    stopSlider() {
      if (this.sliderInterval) {
        clearInterval(this.sliderInterval);
        this.sliderInterval = null;
      }
    }
  },

  beforeUnmount() {
    this.stopSlider();
  }
};
</script>

<style scoped>
/* ===== PROJECT SECTION ===== */

.project-section {
  background: linear-gradient(to bottom, #f8fafc, #eef2f7);
  padding: 6rem 2rem;
  text-align: center;
}

.section-title h1 {
  font-size: 2.7rem;
  font-weight: 700;
  color: #2d2d2d;
  margin-bottom: 0.5rem;
}

.section-title p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
}

/* ===== PROJECT GRID ===== */

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto;
}

.project-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
}

.project-image {
  width: 100%;
  height: 220px;
  object-fit: contain;
  background: #e5e7eb;
  transition: transform 0.35s ease;
}

.project-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-info h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #1f2937;
}

.project-info p {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.7;
}

/* ===== MODAL ===== */

.modal-overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 41, 59, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 1rem;
  overflow-y: auto;
}

.modal-content {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  max-width: 650px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.3s ease-in-out;
}

.modal-content h2 {
  color: #1f2937;
  margin-bottom: 1rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ===== MODAL IMAGE ===== */

.modal-image {
  width: 100%;
  border-radius: 12px;
  margin: 1rem 0 1.5rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

/* ===== IMAGE SLIDER ===== */

.modal-slider {
  position: relative;
  margin: 1rem 0 1.5rem;
  background: #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
}

.modal-slider .modal-image {
  display: block;
  width: 100%;
  height: 430px;
  object-fit: contain;
  background: #e5e7eb;
  margin: 0;
  border-radius: 12px;
  box-shadow: none;
}

/* Image counter */

.image-counter {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(31, 41, 55, 0.75);
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
}

/* ===== MODAL DESCRIPTION ===== */

.modal-content p {
  color: #6b7280;
  line-height: 1.7;
  text-align: left;
}

/* ===== CLOSE BUTTON ===== */

.modal-content button {
  margin-top: 1rem;
  background: #4f46e5;
  color: #fff;
  border: none;
  padding: 0.85rem 1.7rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.modal-content button:hover {
  background: #4338ca;
}

/* ===== RESPONSIVE ===== */

@media (max-width: 992px) {
  .projects {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .project-section {
    padding: 5rem 1.5rem;
  }

  .section-title h1 {
    font-size: 2.2rem;
  }

  .section-title p {
    font-size: 1rem;
  }

  .projects {
    grid-template-columns: 1fr;
  }

  .project-image {
    height: 200px;
  }

  .project-info {
    text-align: center;
  }

  .project-info h3 {
    font-size: 1.3rem;
  }

  .project-info p {
    font-size: 0.95rem;
  }

  .modal-content {
    padding: 1.5rem;
  }

  .modal-slider .modal-image {
    height: 280px;
  }
}

@media (max-width: 480px) {
  .modal-content {
    padding: 1rem;
  }

  .modal-slider .modal-image {
    height: 230px;
  }
}
</style>
