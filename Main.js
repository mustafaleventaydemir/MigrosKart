let mesaj =
    `
Migrosa Hoşgeldiniz.
Money Kartınız Var mı?
1-Evet
2-Hayır
`;

const urunler = [
    {
        urunIsmi: "Süt",
        fiyat: 15
    },
    {
        urunIsmi: "Bebek Bezi",
        fiyat: 100
    },
    {
        urunIsmi: "Kırmızı Et",
        fiyat: 200
    }
]



let sonuc = confirm(mesaj); //true & false
let odenecekTutar;
if (sonuc) {
    //money kart var
    let isim = prompt("Adınızı Giriniz : ");
    let soyisim = prompt("Soyisminizi Giriniz : ");
    const musteri = new Musteri(isim, soyisim, sonuc, urunler);
    odenecekTutar = musteri.hesapla();

    alert(`Müşteri Bilgileri: ${isim} ${soyisim}
        Ödenecek Tutar: ${odenecekTutar}
    `);
} else {
    //money kart yok
    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar: ${odenecekTutar}`);
}