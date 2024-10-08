// math.js

// Fungsi Tambah
export function tambah(a, b) {
    // Cek apakah input bukan angka
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN; // Kembalikan NaN jika input tidak valid
    }
    return a + b;
}

// Fungsi Kali
export function kali(a, b) {
    // Cek apakah input bukan angka
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN; // Kembalikan NaN jika input tidak valid
    }
    return a * b;
}

// Fungsi Kurang
export function kurang(a, b) {
    return a - b;
}

// Fungsi Bagi
export function bagi(a, b) {
    if (b === 0) {
        throw new Error('Tidak bisa membagi dengan nol');
    }
    return a / b;
}
