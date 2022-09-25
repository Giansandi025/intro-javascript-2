//Filter 

/*
filter() merupakan method array di JavaScript yang berfungsi untuk mencari semua elemen di dalam array yang sesuai dengan kriteria tertentu.

Method ini mengembalikan array baru yang berisi elemen yang sesuai dengan kriteria yang dicari atau lulus pengujian fungsi callback.

Mirip seperti find(), alih-alih mengembalikan satu elemen, filter() mengembalikan semua elemen.

Method ini mengembalikan array baru, tidak mengubah array asli atau sumber.

Mari kita pelajari lebih lanjut method array filter() mulai dari sintaks dan contoh penggunaannya.
*/

//contoh
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const value = values.filter((elemen) => elemen % 2 === 0);

console.log(value); // [ 2, 4, 6, 8 


//push

/*
Saat mengelola data array terkadang kita perlu menambahkan elemen baru, salah satu cara yang bisa kita gunakan adalah menggunakan method push().

Method array push() berfungsi untuk menambahkan satu atau lebih elemen ke akhir array termasuk array multidimensi, method ini mengembalikan panjang array baru.
*/

//contoh

const mahasiswa1 = ['budi', 'bayu'];
const panjang = mahasiswa1.push('yaya', 'bambang');

console.log(mahasiswa1); // [ 'budi', 'bayu', 'yaya', 'bambang' ]
console.log(panjang); // 4


//pop

/*
 pop() merupakan method array di JavaScript yang berfungsi untuk menghapus elemen terakhir dari array.

Method ini mengubah panjang array dan mengembalikan elemen yang dihapus.

Jika kita menghapus elemen array menggunakan kata kunci delete, elemen tersebut memang dihapus, tapi tidak benar-benar dihapus, panjang array tidak berubah.

Dengan menggunakan pop() elemen array benar-benar dihapus sehingga panjangnya pun berubah, berbeda dengan delete.
 */

//contoh

const mahasiswa2 = ['Gian', 'andre', 'doni'];

const mahasiswaDihapus = mahasiswa2.pop();

console.log(mahasiswa2); // [ 'gian', 'andre' ]
console.log(mahasiswaDihapus); // doni


//Reduce

/*
reduce() merupakan method array di JavaScript yang mengeksekusi fungsi callback pada setiap elemen array, nilai hasil kalkulasi pada elemen sebelumnya digunakan untuk melakukan kalkulasi pada elemen berikutnya.

Setelah menjalankan fungsi callback untuk semua elemen array, method ini menghasilkan nilai tunggal.

Kasus yang paling mudah dipahami adalah ketika kita ingin menjumlahkan semua elemen array angka.
*/

//contoh

const mahasiswa3 = [
    { nama: 'gian', nilai: 80 },
    { nama: 'andre', nilai: 90 },
    { nama: 'bambang', nilai: 75 },
  ];
  
  const totalNilai = mahasiswa3.reduce((nilaiSebelumnya, nilaiSaatIni) => {
    return nilaiSebelumnya + nilaiSaatIni.nilai;
  }, 0);
  
  console.log(totalNilai);
