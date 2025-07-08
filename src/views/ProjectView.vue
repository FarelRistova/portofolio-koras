<template>
  <section class="project-section" id="project">
    <div class="section-title">
      <h1>My Projects</h1>
      <p>Beberapa proyek yang telah saya kerjakan</p>
    </div>

    <div class="projects">
      <div
        class="project-card"
        v-for="(project, index) in projects"
        :key="project.title"
        :class="{ reverse: index % 2 !== 0 }"
        @click="openModal(project)"
      >
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
        <img :src="selectedProject.image" class="modal-image" />
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
      projects: [
        {
          title: 'Website Perpustakaan',
          shortDesc: 'Website untuk manajemen peminjaman buku di sekolah.',
          fullDesc:
            'Aplikasi ini membantu siswa meminjam dan mengembalikan buku dengan mudah. Fitur lengkap seperti riwayat, pencarian, dan dashboard admin. By Vue.js',
          image: '/assets/perpus1.png'
        },
        {
          title: 'Kasir Toko',
          shortDesc: 'Aplikasi kasir berbasis Flutter untuk toko kecil.',
          fullDesc:
            'Mencatat transaksi, menghitung kembalian, menampilkan struk dan manajemen produk. Cocok untuk UMKM.',
          image: '/assets/kasir1.png'
        },
        {
          title: 'Aplikasi Pengaduan',
          shortDesc: 'Aplikasi web untuk menerima dan menanggapi pengaduan masyarakat.',
          fullDesc:
            'Dilengkapi dengan fitur CRUD laporan, status laporan, dan panel admin untuk tindak lanjut aduan. By Laravel',
          image: '/assets/pengaduan1.png'
        },
        {
          title: 'Aplikasi Todo List',
          shortDesc: 'Aplikasi web untuk mengelola daftar tugas harian atau pun rencana jangka panjang.',
          fullDesc:
            'Dilengkapi dengan fitur penambahan, pengeditan, dan penghapusan tugas, serta penandaan tugas sebagai selesai. By Flutter',
          image: '/assets/todo1.png'
        },
        {
          title: 'Plants App',
          shortDesc: 'Aplikasi web untuk mengelola tanaman dan pertumbuhannya.',
          fullDesc:
            'Dilengkapi dengan fitur penambahan, pengeditan, dan penghapusan, serta penjelasan setiap pertumbuhan. By Laravel',
          image: '/assets/plants1.png'
        },
        {
          title: 'Apotek App',
          shortDesc: 'Aplikasi web untuk manajemen pelayanan apotek.',
          fullDesc:
            'Aplikasi ini memungkinkan pengguna untuk mengelola stok obat, transaksi penjualan, dan laporan penjualan, serta fitur pencarian obat. Dan juga dilengkapi dengan fitur autentikasi untuk admin dan kasir. By Laravel',
          image: '/assets/apotek1.png'
        },
        {
          title: 'Peminjaman Laptop',
          shortDesc: 'Aplikasi web untuk manajemen peminjaman laptop dengan efisien.',
          fullDesc:
            'Aplikasi ini memudahkan untuk mengelola peminjaman laptop dengan cepat dan mudah. Dilengkapi dengan fitur autentikasi untuk admin dan pengguna. By Laravel',
          image: '/assets/peminjamanlaptop1.png'
        }
      ]
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
    },
    closeModal() {
      this.selectedProject = null;
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

.projects {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}

.project-card {
  display: flex;
  align-items: center;
  gap: 3rem;
  background: #ffffff;
  padding: 2rem 2.5rem;
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  text-align: left;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.1);
}

.project-card.reverse {
  flex-direction: row-reverse;
}

.project-image {
  width: 280px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

.project-info {
  flex: 1;
}

.project-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
  color: #1f2937;
}

.project-info p {
  font-size: 1.05rem;
  color: #4b5563;
  margin: 0;
  line-height: 1.6;
}

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
  max-width: 600px;
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
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
}

.modal-content button {
  margin-top: 1rem;
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.modal-content button:hover {
  background-color: #4338ca;
}

@media (max-width: 768px) {
  .project-card {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .project-card.reverse {
    flex-direction: column;
  }

  .project-image {
    width: 100%;
    max-height: 200px;
  }

  .project-info h3 {
    font-size: 1.3rem;
  }

  .project-info p {
    font-size: 1rem;
  }

  .modal-content {
    padding: 1.8rem;
  }
}
</style>
