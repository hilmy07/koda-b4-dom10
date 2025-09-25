document.getElementById("survei-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil data dari form
  const nama = document.getElementById("nama").value;
  const umur = document.getElementById("umur").value;
  const jenisKelamin =
    document.querySelector('input[name="jenisKelamin"]:checked')?.value || "";
  const perokok =
    document.querySelector('input[name="perokok"]:checked')?.value || "";

  // Ambil semua checkbox yang dicentang
  const rokokDicoba = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((cb) => cb.value);

  // Buat objek data
  const dataSurvei = {
    nama,
    umur,
    jenisKelamin,
    perokok,
    rokokDicoba,
  };

  const existing = JSON.parse(localStorage.getItem("dataSurveiPerokok")) || [];

  existing.push(dataSurvei);

  localStorage.setItem("dataSurveiPerokok", JSON.stringify(existing));

  // Optional: alert atau redirect
  Swal.fire({
    title: "Data berhasil di simpan!",
    icon: "success",
    draggable: true,
  });
});
