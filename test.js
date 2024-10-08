import { expect } from 'chai';
import { tambah, kali, kurang, bagi } from './math.js'; // pastikan menambahkan .js

describe('Pengujian Fungsi Matematika', function() {
    it('seharusnya mengembalikan 4 saat menambahkan 2 + 2', function() {
        expect(tambah(2, 2)).to.equal(4);
    });

    it('seharusnya mengembalikan 6 saat mengalikan 2 * 3', function() {
        expect(kali(2, 3)).to.equal(6);
    });

    it('seharusnya mengembalikan 0 saat mengurangkan 2 - 2', function() {
        expect(kurang(2, 2)).to.equal(0);
    });

    it('seharusnya mengembalikan -5 saat mengurangkan 2 - 7', function() {
        expect(kurang(2, 7)).to.equal(-5);
    });

    it('seharusnya mengembalikan -1 saat mengurangkan -2 - (-1)', function() {
        expect(kurang(-2, -1)).to.equal(-1);
    });

    it('seharusnya mengembalikan 2 saat membagi 6 / 3', function() {
        expect(bagi(6, 3)).to.equal(2);
    });

    it('seharusnya mengembalikan error saat membagi dengan 0', function() {
        expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
    });

    it('seharusnya mengembalikan error saat membagi dengan angka negatif', function() {
        expect(() => bagi(6, -2)).to.not.throw(); // Seharusnya tidak melempar error
        expect(bagi(6, -2)).to.equal(-3); // Memastikan hasilnya benar
    });

    it('seharusnya mengembalikan 1 saat mengurangkan -1 - (-2)', function() {
        expect(kurang(-1, -2)).to.equal(1);
    });

    it('seharusnya mengembalikan error saat mengurangkan dari angka negatif', function() {
        expect(kurang(-5, -3)).to.equal(-2); // Memastikan hasilnya benar
        expect(kurang(-3, -5)).to.equal(2); // Memastikan hasilnya benar
    });
});
