  // Mengecek apakah script dengan src="script.js" ada di halaman
  window.onload = function() {
    var scriptTag = document.querySelector('script[src="script.js"]');
    
    if (!scriptTag) {
      // Jika tidak ada, arahkan ke halaman error
      window.location.href = 'error.html';
    }
  };


  function handleScriptError(event) {
    // Tindakan jika script gagal dimuat
    alert('Terjadi kesalahan dalam memuat script eksternal.');

    // Menampilkan rincian error (untuk debugging)
    console.error('Error memuat script:', event.target.src);

    // Arahkan ke halaman error
    window.location.href = 'error.html';
  }