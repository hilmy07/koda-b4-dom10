// Ambil data dari localStorage (dalam bentuk array)
const dataArray = JSON.parse(localStorage.getItem("dataSurveiPerokok")) || [];
const tbody = document.querySelector("#dataTable tbody");

if (dataArray.length > 0) {
  dataArray.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.nama}</td>
      <td>${data.umur}</td>
      <td>${data.jenisKelamin}</td>
      <td>${data.perokok}</td>
      <td>${
        data.rokokDicoba.length > 0 ? data.rokokDicoba.join(", ") : "-"
      }</td>
    `;
    tbody.appendChild(row);
  });
} else {
  const row = document.createElement("tr");
  row.innerHTML = `<td colspan="5" class="no-data">Tidak ada data disimpan</td>`;
  tbody.appendChild(row);
}

function goHome() {
  location.replace("index.html");
}
