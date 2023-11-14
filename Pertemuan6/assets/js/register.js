document.addEventListener("DOMContentLoaded", init, false);
async function init() {
  if ("serviceWorker" in navigator && navigator.onLine) {
    await navigator.serviceWorker.register("./service-worker.js").then(
      async (reg) => {
        console.log("Registrasi service worker Berhasil", reg);
      },
      (err) => {
        console.error("Registrasi service worker Gagal", err);
      }
    );
  }
}
