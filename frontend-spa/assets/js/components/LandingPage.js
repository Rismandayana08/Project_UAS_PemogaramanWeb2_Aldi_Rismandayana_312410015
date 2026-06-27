const LandingPage = {
    template: `
    <div class="min-h-screen bg-transparent flex flex-col items-center py-10 px-4 space-y-8">
        <div class="w-full max-w-6xl bg-white p-4 md:p-8 rounded-xl shadow-sm text-center relative">
            <button @click="showLoginModal = true" class="absolute top-4 right-4 md:top-8 md:right-8 text-xs md:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md px-4 py-2 md:px-6 md:py-2.5 rounded-lg transition-all duration-200">
                Login Admin &rarr;
            </button>
            <img src="assets/img/logo.jpg" alt="E-Inventory Logo" class="mx-auto h-32 w-auto mb-2 object-contain">
    
        </div>

        <div class="w-full max-w-6xl bg-white rounded-xl shadow-md p-6">
            <div class="flex items-center gap-3 mb-4">
                <div class="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                </div>
                <h2 class="text-2xl font-bold text-gray-800">Katalog Data Barang</h2>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-blue-50 border-b-2 border-blue-100">
                        <tr>
                            <th class="p-4 font-bold text-black">Nama Barang</th>
                            <th class="p-4 font-bold text-black">Kategori</th>
                            <th class="p-4 font-bold text-black">Supplier</th>
                            <th class="p-4 font-bold text-black">Stok Tersedia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="barang.length === 0">
                            <td colspan="4" class="p-4 text-center text-gray-400 font-medium">Memuat data atau data kosong...</td>
                        </tr>
                        <tr v-for="item in barang" :key="item.id" class="border-b hover:bg-gray-50 transition">
                            <td class="p-4 font-bold text-gray-800">{{ item.nama_barang }}</td>
                            <td class="p-4 text-gray-600">{{ item.nama_kategori || '-' }}</td>
                            <td class="p-4 text-gray-600">{{ item.supplier || '-' }}</td>
                            <td class="p-4">
                                <span class="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">
                                    {{ item.stok }} Unit
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="w-full max-w-6xl bg-white rounded-xl shadow-md p-6">
            <div class="flex items-center gap-3 mb-4">
                <div class="p-2 bg-slate-100 rounded-lg text-slate-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h2 class="text-2xl font-bold text-gray-800">Histori Keluar / Masuk Barang</h2>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th class="p-4 font-bold text-black">ID Barang</th>
                            <th class="p-4 font-bold text-black">Jenis Transaksi</th>
                            <th class="p-4 font-bold text-black">Jumlah</th>
                            <th class="p-4 font-bold text-black">Tanggal & Waktu</th>
                            <th class="p-4 font-bold text-black">Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="histori.length === 0">
                            <td colspan="5" class="p-4 text-center text-gray-400 font-medium">Memuat histori transaksi...</td>
                        </tr>
                        <tr v-for="h in histori" :key="h.id" class="border-b hover:bg-gray-50 transition">
                            <td class="p-4 text-gray-800 font-medium">#{{ h.id_barang }}</td>
                            <td class="p-4">
                                <span :class="h.jenis_transaksi === 'masuk' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'" class="px-3 py-1 rounded-full text-sm font-bold capitalize">
                                    {{ h.jenis_transaksi }}
                                </span>
                            </td>
                            <td class="p-4 font-bold">{{ h.jumlah }}</td>
                            <td class="p-4 text-gray-600 text-sm">{{ h.tanggal || '-' }}</td>
                            <td class="p-4 text-gray-600 text-sm">{{ h.keterangan || '-' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Pop-up Login Modal -->
        <teleport to="body">
            <div v-if="showLoginModal" @click.self="showLoginModal = false" class="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
                <div class="bg-white p-6 md:p-8 rounded-xl shadow-2xl border border-blue-100 w-full max-w-md relative animate-fade-in-up">
                    <button @click="showLoginModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-extrabold text-blue-900">Login Admin</h2>
                    </div>
                    <form @submit.prevent="prosesLogin">
                        <div class="mb-5 text-left">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                            <input v-model="username" type="text" class="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition" required>
                        </div>
                        <div class="mb-6 text-left">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input v-model="password" type="password" class="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition" required>
                        </div>
                        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition duration-200">
                            Masuk
                        </button>
                    </form>
                </div>
            </div>
        </teleport>

    </div>
    `,
    data() {
        return {
            barang: [],
            histori: [],
            showLoginModal: false,
            username: '',
            password: ''
        };
    },
    methods: {
        prosesLogin() {
            // Kita pakai baseURL default axios yang disetel di app.js untuk endpoint /login
            axios.post('/login', {
                username: this.username,
                password: this.password
            })
            .then(res => {
                localStorage.setItem('token', res.data.data.token);
                localStorage.setItem('isLoggedIn', 'true');
                this.$root.isLoggedIn = true; 
                this.showLoginModal = false;
                this.$router.push('/dashboard');
            })
            .catch(err => {
                alert("Login Gagal! Pastikan username dan password benar.");
            });
        }
    },
    mounted() {
        // Menggunakan URL lengkap (http://localhost:8080) agar tidak ditimpa oleh default /api
        const baseURL = 'http://localhost:8080';

        // Mengambil Data Barang
        axios.get(baseURL + '/public/barang')
            .then(res => this.barang = res.data)
            .catch(err => console.error("Gagal load barang:", err));

        // Mengambil Data Histori
        axios.get(baseURL + '/public/histori')
            .then(res => this.histori = res.data)
            .catch(err => console.error("Gagal load histori:", err));
    }
};