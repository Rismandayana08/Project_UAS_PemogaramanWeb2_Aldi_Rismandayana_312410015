const Kategori = {
    template: `
        <div class="p-6 bg-white rounded-xl shadow-md">
            <h2 class="text-2xl font-bold mb-6">Data Kategori</h2>
            <table class="w-full text-left border-collapse">
                <thead class="bg-gray-100">
                    <tr><th class="p-3">ID</th><th class="p-3">Nama Kategori</th></tr>
                </thead>
                <tbody>
                    <tr v-for="item in kategori" :key="item.id" class="border-b">
                        <td class="p-3">{{ item.id }}</td>
                        <td class="p-3">{{ item.nama_kategori }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    data() {
        return { kategori: [] } // Array ini harus diisi data dari API
    },
    mounted() {
        // Ini kuncinya! Memanggil API
        axios.get('/kategori') 
            .then(res => {
                this.kategori = res.data; // Mengisi data ke array
            })
            .catch(err => {
                console.error("Gagal mengambil data:", err);
            });
    }
};