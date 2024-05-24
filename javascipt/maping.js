const makanan = {
    siang: ['Nasi Goreng', 'Soto Ayam'],
    malam: ['Martabak', 'Sate Ayam']
};

const pelanggan1 = {
    'pelanggan1': { siang: ['Nasi Goreng', 'Soto Ayam', 'Nasi Goreng'], malam: ['Martabak', 'Martabak', 'Sate Ayam'] },
    'pelanggan2': { siang: ['Babat Gongso', 'Mi Pangsit', 'Babat Gongso'] }
};

const pelanggan2 ={

}


function tentukanWaktu() {
    const sekarang = new Date();
    const jam = sekarang.getHours();

    if (jam >= 18 || jam < 6) {
        return 'malam';
    } else {
        return 'siang';
    }
}

function hitungPesananTerbanyak(pesanan) {
    const hitungan = {};
    pesanan.forEach(item => {
        if (hitungan[item]) {
            hitungan[item]++;
        } else {
            hitungan[item] = 1;
        }
    });

    const pesananTerbanyak = Object.keys(hitungan).sort((a, b) => hitungan[b] - hitungan[a]);
    return pesananTerbanyak;
}
function rekomendasiMakanan(pelanggan) {
    const waktu = tentukanWaktu();
    const menuWaktuIni = makanan[waktu];
    const pesananPelanggan = pelanggan1[pelanggan] ? pelanggan1[pelanggan][waktu] : [];
    if (pesananPelanggan.length === 0) {
        return menuWaktuIni;
    }
    const pesananTerbanyak = hitungPesananTerbanyak(pesananPelanggan);
    const menuTerurut = [...pesananTerbanyak, ...menuWaktuIni.filter(item => !pesananTerbanyak.includes(item))];
    return menuTerurut;
}

const pelanggan = 'pelanggan2'; // Ganti dengan nama pelanggan yang diinginkan
const rekomendasi = rekomendasiMakanan(pelanggan);
console.log('Makanan yang direkomendasikan:', rekomendasi);
