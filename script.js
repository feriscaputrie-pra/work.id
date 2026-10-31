/* work.id — Lowongan Kerja Pacitan & Sekitarnya (data contoh/fiktif) */
const CATS = [
  {id:"wisata",  e:"wisata", n:"Wisata & Hotel",   c:"var(--sky)",   d:"var(--sky-d)"},
  {id:"tani",    e:"tani", n:"Nelayan & Tani", c:"var(--mint)",  d:"var(--mint-d)"},
  {id:"kuliner", e:"kuliner", n:"Kuliner",          c:"var(--peach)", d:"var(--peach-d)"},
  {id:"dagang",  e:"dagang", n:"Toko & UMKM",      c:"var(--pink)",  d:"var(--pink-d)"},
  {id:"it",      e:"it", n:"IT & Sistem Info", c:"var(--lav)",   d:"var(--lav-d)"},
  {id:"didik",   e:"didik", n:"Pendidikan",       c:"var(--lemon)", d:"var(--lemon-d)"},
  {id:"sehat",   e:"sehat", n:"Kesehatan",        c:"var(--mint)",  d:"var(--mint-d)"},
  {id:"admin",   e:"admin", n:"Administrasi",     c:"var(--sky)",   d:"var(--sky-d)"},
  {id:"bangun",  e:"bangun", n:"Konstruksi",       c:"var(--peach)", d:"var(--peach-d)"},
  {id:"angkut",  e:"angkut", n:"Transportasi",     c:"var(--lav)",   d:"var(--lav-d)"},
  {id:"kreatif", e:"kreatif", n:"Desain & Kreatif", c:"var(--pink)",  d:"var(--pink-d)"},
  {id:"jasa",    e:"jasa", n:"Jasa & Teknisi",   c:"var(--lemon)", d:"var(--lemon-d)"},
];
const LOCS = ["Pacitan","Ponorogo","Trenggalek","Wonogiri"];
const KEC = ["Pacitan","Arjosari","Bandar","Donorojo","Kebonagung","Ngadirojo","Nawangan","Pringkuku","Punung","Sudimoro","Tegalombo","Tulakan"];
const LOC_NOTE = {Ponorogo:"Jawa Timur", Trenggalek:"Jawa Timur", Wonogiri:"Jawa Tengah", Pacitan:"Jawa Timur"};

const day = n => new Date(Date.now()-n*864e5).toISOString();
const J = (id,title,company,cat,loc,area,type,salary,d,contact,desc)=>({id,title,company,cat,loc,area,type,salary,date:day(d),contact,desc});
const SEED = [
  // Wisata & Hotel
  J(1,"Resepsionis Hotel","Hotel Teleng Asri","wisata","Pacitan","Pacitan","Full-time",2600000,1,"081200000001","Melayani tamu check-in/out dan reservasi di kawasan Pantai Teleng Ria.\nSyarat: SMA/SMK/D3, ramah, dasar Bahasa Inggris."),
  J(2,"Pemandu Wisata Goa","Pokdarwis Goa Gong (contoh)","wisata","Pacitan","Punung","Part-time",1800000,2,"081200000002","Memandu wisatawan di goa kawasan Punung (Goa Gong, Goa Tabuhan).\nSyarat: warga sekitar, komunikatif, sehat fisik."),
  J(3,"Petugas Loket & Parkir Pantai","Pengelola Wisata Klayar (contoh)","wisata","Pacitan","Pringkuku","Part-time",1500000,3,"081200000003","Melayani tiket dan parkir wisatawan, ramai saat akhir pekan dan libur.\nSyarat: jujur, siap shift."),
  J(4,"Staf Homestay Pantai Watu Karung","Homestay Karang Indah (contoh)","wisata","Pacitan","Pringkuku","Full-time",2100000,4,"081200000004","Kebersihan kamar, sarapan, dan pelayanan tamu selancar/wisatawan."),
  J(5,"Instruktur Selancar Pemula","Watu Karung Surf School (contoh)","wisata","Pacitan","Pringkuku","Freelance",2500000,6,"081200000005","Mengajar surfing dasar untuk wisatawan.\nSyarat: bisa berenang, pengalaman berselancar, sabar."),
  J(6,"Pemandu Susur Goa & Pantai","Banyu Tibo Adventure (contoh)","wisata","Pacitan","Donorojo","Freelance",1900000,5,"081200000006","Memandu paket wisata alam di Donorojo."),
  // Nelayan & pertanian
  J(7,"Staf Pengolahan Ikan & Tuna","UD Tamperan Samudra (contoh)","tani","Pacitan","Pacitan","Full-time",2400000,2,"081200000007","Sortir, penimbangan, dan pengemasan hasil tangkapan di sekitar Pelabuhan Perikanan Tamperan.\nSyarat: teliti, siap shift pagi."),
  J(8,"Pengolah Gula Kelapa / Gula Semut","KUB Gula Semut Tulakan (contoh)","tani","Pacitan","Tulakan","Full-time",2000000,3,"081200000008","Produksi dan pengemasan gula kelapa/gula semut untuk dijual online dan oleh-oleh."),
  J(9,"Petugas Panen & Sortir Cengkeh","Koperasi Tani Nawangan (contoh)","tani","Pacitan","Nawangan","Part-time",1700000,7,"081200000009","Pemetikan, pengeringan, dan sortir cengkeh musim panen."),
  J(10,"Penyuluh Tani Lapangan","Gapoktan Tegalombo (contoh)","tani","Pacitan","Tegalombo","Full-time",3000000,5,"081200000010","Mendampingi kelompok tani dan mencatat hasil panen.\nSyarat: D3/S1 Pertanian."),
  J(11,"Anak Buah Kapal (ABK)","CV Bahari Pacitan (contoh)","tani","Pacitan","Pacitan","Full-time",2800000,4,"081200000011","Melaut bersama kapal penangkap ikan.\nSyarat: sehat, tidak mudah mabuk laut."),
  // Kuliner
  J(12,"Barista & Kasir","Kopi Senja Pacitan (contoh)","kuliner","Pacitan","Pacitan","Part-time",1700000,1,"081200000012","Menyiapkan minuman dan melayani pembayaran. Training disediakan."),
  J(13,"Koki Seafood","RM Bahari Rasa (contoh)","kuliner","Pacitan","Arjosari","Full-time",2800000,4,"081200000013","Mengolah menu seafood, menjaga kebersihan dapur.\nSyarat: pengalaman min. 1 tahun."),
  J(14,"Produksi Sale Pisang & Oleh-oleh","Sale Pisang Mbak Sri (contoh)","kuliner","Pacitan","Kebonagung","Full-time",1900000,2,"081200000014","Mengiris, menggoreng, mengemas sale pisang dan camilan khas Pacitan."),
  // Toko & UMKM
  J(15,"Admin Toko Batik Online","Batik Pacitan Ayu (contoh)","dagang","Pacitan","Pacitan","Full-time",2300000,2,"081200000015","Mengelola pesanan marketplace, stok, dan chat pelanggan.\nSyarat: Excel dasar, aktif media sosial."),
  J(16,"Pengrajin Batik Tulis","Sanggar Batik Pacitan (contoh)","dagang","Pacitan","Ngadirojo","Full-time",2000000,5,"081200000016","Membatik motif khas Pacitan. Pelatihan diberikan untuk pemula."),
  J(17,"Sales Counter Elektronik","Sinar Elektronik Pacitan (contoh)","dagang","Pacitan","Pacitan","Full-time",2500000,6,"081200000017","Melayani penjualan, demo produk, dan target bulanan."),
  J(18,"Pengrajin Onyx & Marmer","Galeri Onyx Pacitan (contoh)","dagang","Pacitan","Pringkuku","Full-time",2300000,8,"081200000018","Mengolah batu onyx/marmer menjadi suvenir dan perabot."),
  // IT & Sistem Informasi
  J(19,"Staf Sistem Informasi Desa","Pemerintah Desa (contoh)","it","Pacitan","Tulakan","Part-time",2000000,1,"081200000019","Mengelola data kependudukan dan website desa.\nSyarat: mahasiswa/lulusan Sistem Informasi/TI, paham database dasar."),
  J(20,"Web Developer Junior","Pacitan Digital Studio (contoh)","it","Pacitan","Pacitan","Full-time",3500000,3,"081200000020","Membangun website UMKM dan wisata lokal.\nSyarat: HTML, CSS, JavaScript, PHP/MySQL (nilai tambah)."),
  J(21,"Magang IT Support","CV Mitra Jaringan Pacitan (contoh)","it","Pacitan","Pacitan","Magang",1000000,2,"081200000021","Membantu instalasi jaringan, perawatan komputer, dan helpdesk.\nCocok untuk mahasiswa semester akhir."),
  J(22,"Admin Digitalisasi UMKM & Wisata","Dinas/Komunitas Digital (contoh)","it","Pacitan","Kebonagung","Part-time",1800000,4,"081200000022","Membantu pelaku UMKM dan wisata membuat katalog digital dan Google Maps bisnis."),
  J(23,"Teknisi Jaringan WiFi RT/RW Net","Pacitan Net (contoh)","it","Pacitan","Ngadirojo","Full-time",2700000,6,"081200000023","Pasang dan perawatan jaringan WiFi pelanggan."),
  // Pendidikan
  J(24,"Guru Les Matematika","Bimbel Cendekia Pacitan (contoh)","didik","Pacitan","Pacitan","Part-time",1500000,5,"081200000024","Mengajar SMP/SMA sore hari.\nSyarat: mahasiswa/sarjana, sabar dan komunikatif."),
  J(25,"Guru Pendamping PAUD","PAUD Ceria Donorojo (contoh)","didik","Pacitan","Donorojo","Full-time",1900000,7,"081200000025","Mendampingi kegiatan belajar anak usia dini."),
  // Kesehatan
  J(26,"Perawat Klinik","Klinik Sehat Pacitan (contoh)","sehat","Pacitan","Pacitan","Full-time",3200000,2,"081200000026","Pelayanan pasien rawat jalan.\nSyarat: D3 Keperawatan, STR aktif."),
  J(27,"Asisten Apoteker","Apotek Husada Arjosari (contoh)","sehat","Pacitan","Arjosari","Full-time",2500000,5,"081200000027","Pelayanan resep dan pengelolaan stok obat."),
  // Administrasi
  J(28,"Staf Administrasi Umum","CV Karya Mandiri (contoh)","admin","Pacitan","Pacitan","Full-time",2400000,3,"081200000028","Surat-menyurat, arsip, dan rekap laporan.\nSyarat: mahir Word & Excel."),
  J(29,"Operator Input Data Koperasi","Koperasi Warga Bandar (contoh)","admin","Pacitan","Bandar","Part-time",1600000,4,"081200000029","Input transaksi anggota ke sistem."),
  // Konstruksi
  J(30,"Tukang Bangunan","CV Bangun Jaya Tulakan (contoh)","bangun","Pacitan","Tulakan","Freelance",2700000,6,"081200000030","Pekerjaan pasangan bata dan finishing rumah."),
  J(31,"Pengawas Lapangan Proyek Jalan","CV Karya Bumi (contoh)","bangun","Pacitan","Sudimoro","Full-time",3600000,9,"081200000031","Mengawasi progres proyek jalur pesisir dan laporan harian."),
  // Transportasi
  J(32,"Driver Pengiriman Paket","Ekspedisi Pesisir Selatan (contoh)","angkut","Pacitan","Pacitan","Full-time",2500000,2,"081200000032","Antar paket area Pacitan.\nSyarat: SIM A/C aktif, hafal rute."),
  J(33,"Sopir Travel Pacitan–Surabaya","Travel Pacitan Jaya (contoh)","angkut","Pacitan","Pacitan","Full-time",3000000,5,"081200000033","Mengantar penumpang rute Pacitan–Ponorogo–Surabaya.\nSyarat: SIM A, berpengalaman."),
  // Kreatif
  J(34,"Desainer Grafis & Konten","Warung Kreatif Pacitan (contoh)","kreatif","Pacitan","Pacitan","Freelance",2200000,1,"081200000034","Membuat poster, feed Instagram, dan video pendek untuk UMKM.\nSyarat: Canva/Photoshop, portofolio."),
  J(35,"Fotografer & Videografer Wisata","Pacitan Moment (contoh)","kreatif","Pacitan","Punung","Freelance",2000000,6,"081200000035","Dokumentasi wisatawan dan konten promosi pantai & goa."),
  // Jasa
  J(36,"Teknisi AC & Elektronik","Dingin Service Pacitan (contoh)","jasa","Pacitan","Ngadirojo","Full-time",2800000,3,"081200000036","Instalasi dan servis AC rumah tangga."),
  J(37,"Teknisi Motor","Bengkel Maju Motor Sudimoro (contoh)","jasa","Pacitan","Sudimoro","Full-time",2300000,7,"081200000037","Servis motor harian. Pemula boleh, ada pelatihan."),
  // Sekitar: Ponorogo, Trenggalek, Wonogiri
  J(38,"Admin Gudang","UD Tani Sejahtera (contoh)","angkut","Ponorogo","Ponorogo","Full-time",2600000,5,"081200000038","Pencatatan barang masuk-keluar gudang."),
  J(39,"Magang Web Developer","Software House Ponorogo (contoh)","it","Ponorogo","Ponorogo","Magang",1200000,3,"081200000039","Magang pengembangan web untuk mahasiswa SI/TI."),
  J(40,"Sales Marketing","Toko Furnitur Trenggalek (contoh)","dagang","Trenggalek","Trenggalek","Full-time",2500000,6,"081200000040","Menawarkan produk ke pelanggan dan mitra."),
  J(41,"Staf Pengemasan Makanan Ringan","UKM Camilan Wonogiri (contoh)","kuliner","Wonogiri","Wonogiri","Full-time",2200000,4,"081200000041","Produksi dan pengemasan camilan, dekat perbatasan Pacitan."),
];

/* ---------- storage (simulasi database) ---------- */
const store = {
  get(k,d){ try{ return JSON.parse(localStorage.getItem(k)) ?? d }catch{ return d } },
  set(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)) }catch{} }
};
let userJobs = store.get("workid_jobs", []);
let saved = new Set(store.get("workid_saved", []));
const allJobs = () => [...userJobs, ...SEED];
const cat = id => CATS.find(c=>c.id===id) || CATS[0];

const $ = s => document.querySelector(s);
const state = {cat:"", q:"", loc:"", area:"", type:"", sort:"new"};
const place = j => j.loc==="Pacitan" ? `Kec. ${esc(j.area)}, Kab. Pacitan` : `${esc(j.area||j.loc)}, ${esc(j.loc)}`;
const rp = n => n ? "Rp " + n.toLocaleString("id-ID") : "Dinegosiasi";
const esc = s => String(s).replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
function ago(iso){
  const d = Math.floor((Date.now()-new Date(iso))/864e5);
  return d<=0 ? "Hari ini" : d===1 ? "Kemarin" : d+" hari lalu";
}
function toast(msg){
  const t=$("#toast"); t.textContent=msg; t.hidden=false;
  clearTimeout(toast.t); toast.t=setTimeout(()=>t.hidden=true,2000);
}

/* kecamatan hanya relevan untuk Kab. Pacitan */
function syncArea(){
  const pac = !$("#loc").value || $("#loc").value==="Pacitan";
  $("#area").hidden = !pac; if(!pac){ state.area=""; $("#area").value=""; }
}
function syncPostArea(){ const p=$("#postLoc").value==="Pacitan"; $("#postArea").closest("label").style.display = p?"":"none"; }

/* ---------- render ---------- */
function fillSelects(){
  $("#loc").innerHTML = `<option value="">Semua lokasi</option>` + LOCS.map(l=>`<option>${l}</option>`).join("");
  $("#postLoc").innerHTML = LOCS.map(l=>`<option>${l}</option>`).join("");
  $("#area").innerHTML = `<option value="">Semua kecamatan</option>` + KEC.map(k=>`<option>${k}</option>`).join("");
  $("#postArea").innerHTML = KEC.map(k=>`<option>${k}</option>`).join("");
  syncArea();
  $("#postCat").innerHTML = CATS.map(c=>`<option value="${c.id}">${c.n}</option>`).join("");
}
function renderStats(){
  const jobs = allJobs();
  const firms = new Set(jobs.map(j=>j.company)).size;
  const pac = jobs.filter(j=>j.loc==="Pacitan").length;
  const items = [
    ["list", jobs.length, "Lowongan aktif", "var(--pink)"],
    ["building", firms, "Perusahaan", "var(--sky)"],
    ["pin", pac, "Di Pacitan", "var(--mint)"],
    ["bookmark", saved.size, "Tersimpan", "var(--lemon)"],
  ];
  $("#stats").innerHTML = items.map(([e,n,l,c])=>`<div class="stat"><i style="background:${c}">${I(e,22)}</i><div><b>${n}</b><small>${l}</small></div></div>`).join("");
}
function renderCats(){
  const jobs = allJobs();
  $("#cats").innerHTML = CATS.map(c=>{
    const n = jobs.filter(j=>j.cat===c.id).length;
    return `<button class="cat ${state.cat===c.id?"on":""}" data-id="${c.id}" style="--c:${c.c};--d:${c.d}" aria-pressed="${state.cat===c.id}">
      <span class="e">${I(c.e,34)}</span><b>${c.n}</b><small>${n} lowongan</small></button>`;
  }).join("");
}
function filtered(){
  const q = state.q.trim().toLowerCase();
  let r = allJobs().filter(j =>
    (!state.cat || j.cat===state.cat) &&
    (!state.loc || j.loc===state.loc) &&
    (!state.area || j.area===state.area) &&
    (!state.type || j.type===state.type) &&
    (!q || [j.title,j.company,j.desc,cat(j.cat).n,j.area,j.loc].join(" ").toLowerCase().includes(q))
  );
  if(state.sort==="salary") r.sort((a,b)=>(b.salary||0)-(a.salary||0));
  else if(state.sort==="az") r.sort((a,b)=>a.title.localeCompare(b.title));
  else r.sort((a,b)=>new Date(b.date)-new Date(a.date));
  return r;
}
function renderJobs(){
  const r = filtered();
  const c = state.cat ? ` · ${cat(state.cat).n}` : "";
  $("#resultInfo").textContent = `${r.length} lowongan ditemukan${c}`;
  $("#empty").hidden = r.length>0;
  $("#jobs").innerHTML = r.map(j=>{
    const c = cat(j.cat);
    return `<article class="job">
      <div class="job-top"><div class="badge" style="--c:${c.c};--d:${c.d}">${I(c.e,26)}</div>
        <div><h3>${esc(j.title)}</h3><div class="co">${esc(j.company)}</div></div></div>
      <div class="tags"><span class="tag loc">${I("pin",11)} ${place(j)}</span><span class="tag">${esc(j.type)}</span><span class="tag sal">${rp(j.salary)}</span></div>
      <p>${esc(j.desc)}</p>
      <div class="job-foot"><small>${ago(j.date)}</small>
        <div class="act">
          <button class="btn-star ${saved.has(j.id)?"on":""}" data-save="${j.id}" aria-label="Simpan">${I(saved.has(j.id)?"bookmark":"bookmark-o",15)}</button>
          <button class="btn-sm" data-open="${j.id}">Lihat detail</button>
        </div></div></article>`;
  }).join("");
}
function renderAll(){ renderStats(); renderCats(); renderJobs(); $("#savedCount").textContent = saved.size; }

/* ---------- aksi ---------- */
function toggleSave(id){
  saved.has(id) ? saved.delete(id) : saved.add(id);
  store.set("workid_saved",[...saved]);
  toast(saved.has(id) ? "Lowongan disimpan" : "Dihapus dari tersimpan");
  renderAll(); if(!$("#drawer").hidden) renderSaved();
}
function openJob(id){
  const j = allJobs().find(x=>x.id===id); if(!j) return;
  const c = cat(j.cat);
  const wa = /^\d{8,}$/.test(j.contact.replace(/\D/g,"")) && !j.contact.includes("@")
    ? "https://wa.me/62" + j.contact.replace(/\D/g,"").replace(/^0/,"") + "?text=" + encodeURIComponent(`Halo, saya tertarik dengan lowongan ${j.title} di ${j.company} (via work.id).`)
    : (j.contact.includes("@") ? "mailto:"+j.contact : "");
  $("#modalBody").innerHTML = `
    <div class="badge" style="--c:${c.c};--d:${c.d}">${I(c.e,26)}</div>
    <h2>${esc(j.title)}</h2><div class="co">${esc(j.company)}</div>
    <div class="tags" style="margin-top:10px"><span class="tag loc">${I("pin",11)} ${place(j)}</span><span class="tag">${esc(j.type)}</span><span class="tag sal">${rp(j.salary)}</span><span class="tag">${c.n}</span></div>
    <p class="desc">${esc(j.desc)}</p>
    <small>Kontak: ${esc(j.contact)} · Diposting ${ago(j.date).toLowerCase()}</small>
    <div class="btns">
      ${wa?`<a class="btn-primary" style="text-decoration:none" href="${wa}" target="_blank" rel="noopener">Lamar sekarang</a>`:""}
      <button class="btn-ghost" data-save="${j.id}">${saved.has(j.id)?I("bookmark",13)+" Tersimpan":I("bookmark-o",13)+" Simpan"}</button>
    </div>`;
  $("#modal").hidden = false;
}
function renderSaved(){
  const list = allJobs().filter(j=>saved.has(j.id));
  $("#savedList").innerHTML = list.length ? list.map(j=>`
    <div class="mini"><div><b>${esc(j.title)}</b><small>${esc(j.company)} · ${esc(j.loc)}</small></div>
    <div class="act"><button class="btn-sm" data-open="${j.id}">Buka</button><button class="btn-star on" data-save="${j.id}">${I("x",12)}</button></div></div>`).join("")
    : `<p style="color:var(--muted)">Belum ada lowongan tersimpan. Klik ikon penanda pada kartu lowongan.</p>`;
}

/* ---------- event ---------- */
document.addEventListener("click", e=>{
  const t = e.target.closest("button,a"); if(!t) return;
  if(t.dataset.save){ toggleSave(+t.dataset.save); if(!$("#modal").hidden) openJob(+t.dataset.save); }
  else if(t.dataset.open){ $("#drawer").hidden=true; openJob(+t.dataset.open); }
  else if(t.classList.contains("cat")){
    state.cat = state.cat===t.dataset.id ? "" : t.dataset.id;
    renderCats(); renderJobs();
    $("#lowongan").scrollIntoView({behavior:"smooth"});
  }
});
$("#closeModal").onclick = ()=> $("#modal").hidden = true;
$("#modal").addEventListener("click", e=>{ if(e.target.id==="modal") e.target.hidden = true; });
$("#openSaved").onclick = ()=>{ renderSaved(); $("#drawer").hidden=false; };
$("#closeDrawer").onclick = ()=> $("#drawer").hidden = true;
$("#drawer").addEventListener("click", e=>{ if(e.target.id==="drawer") e.target.hidden = true; });
document.addEventListener("keydown", e=>{ if(e.key==="Escape"){ $("#modal").hidden=true; $("#drawer").hidden=true; } });
$("#burger").onclick = ()=> $("#menu").classList.toggle("open");
$("#menu").addEventListener("click", ()=> $("#menu").classList.remove("open"));

$("#searchForm").addEventListener("submit", e=>{
  e.preventDefault(); state.q=$("#q").value; state.loc=$("#loc").value; syncArea(); renderJobs();
  $("#lowongan").scrollIntoView({behavior:"smooth"});
});
$("#q").addEventListener("input", e=>{ state.q=e.target.value; renderJobs(); });
$("#loc").addEventListener("change", e=>{ state.loc=e.target.value; syncArea(); renderJobs(); });
$("#area").addEventListener("change", e=>{ state.area=e.target.value; renderJobs(); });
$("#postLoc").addEventListener("change", syncPostArea);
$("#type").addEventListener("change", e=>{ state.type=e.target.value; renderJobs(); });
$("#sort").addEventListener("change", e=>{ state.sort=e.target.value; renderJobs(); });
$("#reset").onclick = ()=>{
  Object.assign(state,{cat:"",q:"",loc:"",area:"",type:"",sort:"new"});
  $("#q").value=""; $("#loc").value=""; $("#area").value=""; $("#type").value=""; $("#sort").value="new"; syncArea(); renderAll();
};

$("#postForm").addEventListener("submit", e=>{
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target));
  const job = {
    id: Date.now(), title:f.title.trim(), company:f.company.trim(), cat:f.cat, loc:f.loc,
    area:f.loc==="Pacitan"?(f.area||"Pacitan"):f.loc, type:f.type, salary:+f.salary||0, date:new Date().toISOString(),
    contact:f.contact.trim(), desc:f.desc.trim()
  };
  if(!job.title || !job.company || !job.desc || !job.contact){ toast("Lengkapi semua kolom wajib"); return; }
  userJobs.unshift(job); store.set("workid_jobs", userJobs);
  e.target.reset(); toast("Lowongan berhasil diterbitkan"); renderAll();
  $("#lowongan").scrollIntoView({behavior:"smooth"});
});

fillSelects(); syncPostArea(); renderAll();
