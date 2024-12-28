let totalWaste = 0;  // Toplam atık miktarı
let totalCredit = 0; // Kazanılan toplam kredi

function showContent(page) {
    let content = document.getElementById("content");
    content.innerHTML = ""; // İçeriği sıfırla

    switch (page) {
        case 'ekolojik_kredi_nedir':
            content.innerHTML = `
                <h2>Ekolojik Kredi Nedir?</h2>
                <p>Ekolojik kredi, çevre dostu uygulamaları teşvik etmek amacıyla oluşturulmuş bir sistemdir. Öğrenciler ve okullar, geri dönüşüm, enerji tasarrufu, su kullanımı gibi çevresel faaliyetlerde bulunarak kredi kazanırlar. Bu krediler, çeşitli ödüllerle takas edilebilir.</p>
            `;
            break;
        case 'hazirlayanlar':
            content.innerHTML = `
                <h2>Hazırlayanlar</h2>
                <p><strong>Danışman Öğretmen:</strong> Osman Onuk</p>
                <p><strong>Öğrenciler:</strong> Muhammedcan Arslanparçası, Bilal Yiğit Tezcan, Yağız Efe Yılmaz</p>
            `;
            break;
        case 'geri_donusum_nedir':
            content.innerHTML = `
                <h2>Geri Dönüşüm Nedir?</h2>
                <p>Geri dönüşüm, atıkların tekrar işlenerek yeni ürünlere dönüştürülmesi sürecidir. Bu, çevreye zarar vermeyen, doğal kaynakların korunmasına yardımcı olan bir uygulamadır. Geri dönüşüm ile daha az enerji harcanır ve doğa daha az kirlenir.</p>
            `;
            break;
        case 'bize_ulasin':
            content.innerHTML = `
                <h2>Bize Ulaşın</h2>
                <p>Email: <a href="mailto:ekolojikkreditubitak@gmail.com">ekolojikkreditubitak@gmail.com</a></p>
            `;
            break;
        case 'kayit_ol':
            content.innerHTML = `
                <h2>Kayıt Ol</h2>
                <p>Öğrenci kaydı veya okul kaydı yapmak için aşağıdaki seçeneklerden birini seçin.</p>
                <button onclick="showSubPage('ogrenci_kaydi')">Öğrenci Kaydı</button>
                <button onclick="showSubPage('okul_kaydi')">Okul Kaydı</button>
            `;
            break;
        case 'veri_girisi':
            content.innerHTML = `
                <h2>Veri Girişi</h2>
                <p>Atık türünü seçin ve miktarı girin:</p>
                <form id="wasteForm">
                    <label for="wasteType">Atık Türü:</label>
                    <select id="wasteType" required>
                        <option value="plastik">Plastik</option>
                        <option value="cam">Cam</option>
                        <option value="metal">Metal</option>
                        <option value="elektronik">Elektronik Atık</option>
                        <option value="pil">Pil</option>
                        <option value="kagit">Kağıt</option>
                    </select><br>

                    <label for="wasteWeight">Atık Ağırlığı (kg):</label>
                    <input type="number" id="wasteWeight" required><br>

                    <button type="submit">Veri Gönder</button>
                </form>
                <p><strong>Toplam Atık Miktarı:</strong> ${totalWaste} kg</p>
                <p><strong>Toplam Kredi:</strong> ${totalCredit} Kredi</p>
            `;
            document.getElementById("wasteForm").addEventListener("submit", submitWasteData);
            break;
        case 'veri_goruntule':
            content.innerHTML = `
                <h2>Veri Görüntüle</h2>
                <p>Öğrencinin mail ve okul numarasını girin:</p>
                <input type="email" id="studentEmail" placeholder="Öğrenci E-posta">
                <input type="text" id="studentId" placeholder="Öğrenci Numarası">
                <button onclick="viewData()">Verileri Göster</button>
            `;
            break;
        default:
            content.innerHTML = "<p>Geçersiz Sayfa Seçildi.</p>";
    }
}

function submitWasteData(event) {
    event.preventDefault();

    let wasteType = document.getElementById("wasteType").value;
    let wasteWeight = parseFloat(document.getElementById("wasteWeight").value);

    const wastePoints = {
        plastik: 10,
        cam: 5,
        metal: 8,
        elektronik: 20,
        pil: 50,
        kagit: 2
    };

    if (!wasteWeight || wasteWeight <= 0) {
        alert("Geçerli bir atık ağırlığı giriniz!");
        return;
    }

    // Kredi hesaplama: Puan * kg
    let credit = wastePoints[wasteType] * wasteWeight;

    totalWaste += wasteWeight;  // Toplam atık miktarını artır
    totalCredit += credit; // Toplam krediyi artır

    alert(`Atık Türü: ${wasteType}\nAğırlık: ${wasteWeight} kg\nKazandığınız Kredi: ${credit} Kredi`);

    // Kredi sayacını güncelle
    let content = document.getElementById("content");
    content.innerHTML = `
        <h2>Veri Girişi Tamamlandı</h2>
        <p>Toplam Atık: ${totalWaste} kg</p>
        <p>Kazandığınız Kredi: ${credit}</p>
        <p><strong>Genel Toplam Atık Miktarı:</strong> ${totalWaste} kg</p>
        <p><strong>Genel Toplam Kredi:</strong> ${totalCredit} Kredi</p>
        <button onclick="showContent('veri_girisi')">Tekrar Veri Girişi Yap</button>
    `;
}

function viewData() {
    let email = document.getElementById("studentEmail").value;
    let studentId = document.getElementById("studentId").value;

    if (email === "" || studentId === "") {
        alert("Lütfen e-posta ve öğrenci numarasını giriniz.");
        return;
    }

    // Öğrenci verilerini burada gösterebilirsiniz (örnek veriler)
    let content = document.getElementById("content");
    content.innerHTML = `
        <h2>Öğrenci Verileri</h2>
        <p><strong>Öğrenci E-posta:</strong> ${email}</p>
        <p><strong>Öğrenci Numarası:</strong> ${studentId}</p>
        <p><strong>Toplam Atık Miktarı:</strong> ${totalWaste} kg</p>
        <p><strong>Toplam Kredi:</strong> ${totalCredit} Kredi</p>
    `;
}
