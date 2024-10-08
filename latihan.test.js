import { expect } from 'chai';
import { tambah, kali } from './math.js'; // Pastikan path ini sesuai dengan file math.js Anda

describe('Pengujian Fungsi Tambah dan Kali untuk Kasus Negatif', function() {
    // Pengujian untuk fungsi tambah
    describe('Fungsi Tambah', function() {
        it('seharusnya mengembalikan NaN saat menambahkan string', function() {
            expect(tambah("2", "3")).to.be.NaN; // Menambahkan string seharusnya mengembalikan NaN
        });

        it('seharusnya mengembalikan NaN saat menambahkan null', function() {
            expect(tambah(null, 5)).to.be.NaN; // Menambahkan null seharusnya mengembalikan NaN
        });

        it('seharusnya mengembalikan NaN saat menambahkan undefined', function() {
            expect(tambah(undefined, 5)).to.be.NaN; // Menambahkan undefined seharusnya mengembalikan NaN
        });
    });

    // Pengujian untuk fungsi kali
    describe('Fungsi Kali', function() {
        it('seharusnya mengembalikan NaN saat mengalikan string', function() {
            expect(kali("2", "3")).to.be.NaN; // Mengalikan string seharusnya mengembalikan NaN
        });

        it('seharusnya mengembalikan NaN saat mengalikan null', function() {
            expect(kali(null, 5)).to.be.NaN; // Mengalikan null seharusnya mengembalikan NaN
        });

        it('seharusnya mengembalikan NaN saat mengalikan undefined', function() {
            expect(kali(undefined, 5)).to.be.NaN; // Mengalikan undefined seharusnya mengembalikan NaN
        });
    });
});
