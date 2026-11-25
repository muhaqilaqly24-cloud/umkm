 AOS.init({
      duration: 800,
      once: true
    });

    // Script JS Filter Produk
    document.querySelectorAll('.btn-filter').forEach(button => {
      button.addEventListener('click', function() {
        document.querySelectorAll('.btn-filter').forEach(btn => {
          btn.classList.remove('active', 'btn-gold');
          btn.classList.add('btn-outline-secondary', 'text-light');
        });
        this.classList.add('active', 'btn-gold');
        this.classList.remove('btn-outline-secondary', 'text-light');

        const filterValue = this.getAttribute('data-filter');
        const products = document.querySelectorAll('.product-item');

        products.forEach(product => {
          if (filterValue === 'all' || product.getAttribute('data-category') === filterValue) {
            product.classList.remove('hide');
          } else {
            product.classList.add('hide');
          }
        });
      });
    });