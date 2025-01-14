  const boxes = document.querySelectorAll('.box');
  const showOrdersButton = document.getElementById('show-orders');
  let longPressTimer; // Timer for the long press
  let isLongPress = false; // Flag to track if a long press occurred

  boxes.forEach((box) => {
    const quantitySpan = box.querySelector('.quantity');
    let quantity = 0;

    // Handle single click to increment quantity
    box.addEventListener('click', () => {
      if (!isLongPress) { // Only increment if it wasn't a long press
        if (quantity < 10) {
          quantity++;
          quantitySpan.textContent = quantity;
          box.classList.add('active');
        }
      }
      // Reset the long press flag after handling the click
      isLongPress = false;
    });

    // Handle long press to reset quantity to 0
    box.addEventListener('mousedown', () => {
      isLongPress = false; // Reset the long press flag
      longPressTimer = setTimeout(() => {
        quantity = 0;
        quantitySpan.textContent = quantity;
        box.classList.remove('active');
        isLongPress = true; // Mark as long press
      }, 500); // Long press duration (500ms)
    });

    // Cancel the long-press action if the mouse is released early
    box.addEventListener('mouseup', () => {
      clearTimeout(longPressTimer);
    });

    // Cancel the long-press action if the mouse leaves the box early
    box.addEventListener('mouseleave', () => {
      clearTimeout(longPressTimer);
    });
  });

  // Handle Show Orders button
  showOrdersButton.addEventListener('click', () => {
    const orders = [];
    boxes.forEach((box) => {
      const quantity = parseInt(box.querySelector('.quantity').textContent, 10);
      if (quantity > 0) {
        orders.push({
          name: box.getAttribute('data-name'),
          quantity: quantity,
        });
      }
      // Reset the quantities
      box.querySelector('.quantity').textContent = 0;
      box.classList.remove('active');
    });
    console.log('Orders:', orders);
  });
	
	
	if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log('Service Worker registered successfully.');
  });
}
