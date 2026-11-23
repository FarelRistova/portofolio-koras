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
        <div v-if="selectedProject.images" class="modal-slider">
          <button type="button" class="slider-button slider-button-prev" aria-label="Gambar sebelumnya"
            @click="previousImage">
            &#8249;
          </button>

          <img :src="selectedProject.images[selectedImageIndex]"
            :alt="`${selectedProject.title} - gambar ${selectedImageIndex + 1}`" class="modal-image" />

          <button type="button" class="slider-button slider-button-next" aria-label="Gambar berikutnya"
            @click="nextImage">
            &#8250;
          </button>

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
      this.selectedProject = project;
      this.selectedImageIndex = 0;
    },
    closeModal() {
      this.selectedProject = null;
      this.selectedImageIndex = 0;
    },
    previousImage() {
      const total = this.selectedProject.images.length;
      this.selectedImageIndex = (this.selectedImageIndex - 1 + total) % total;
    },
    nextImage() {
      const total = this.selectedProject.images.length;
      this.selectedImageIndex = (this.selectedImageIndex + 1) % total;
    }
  }
};
</script>

<style scoped>
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
  background: #f8fafc;
  transition: transform .35s ease;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 41, 59, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 1rem;
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

.modal-image {
  width: 100%;
  border-radius: 12px;
  margin: 1rem 0 1.5rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.modal-slider {
  position: relative;
  margin: 1rem 0 1.5rem;
}

.modal-slider .modal-image {
  display: block;
  height: 430px;
  object-fit: contain;
  background: #f8fafc;
  margin: 0;
}

.slider-button {
  position: absolute;
  top: 50%;
  z-index: 2;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  background: rgba(17, 24, 39, 0.78);
  color: #fff;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  transform: translateY(-50%);
  transition: background 0.2s ease;
}

.slider-button:hover {
  background: #4f46e5;
}

.slider-button-prev {
  left: 12px;
}

.slider-button-next {
  right: 12px;
}

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}

.slider-dot {
  width: 10px;
  height: 10px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #cbd5e1;
  cursor: pointer;
  transition: all 0.2s ease;
}

.slider-dot.active {
  width: 24px;
  border-radius: 999px;
  background: #4f46e5;
}

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
    padding: 1.8rem;
  }

  .modal-slider .modal-image {
    height: 280px;
  }

  .slider-button {
    width: 36px;
    height: 36px;
  }
}
</style>
