const APP_DATA = {
  products: [
    {
      id: '1',
      name: 'Cold Whisk Matcha',
      category: 'Thức Uống',
      categoryId: 1,
      price: 68000,
      stock: 50,
      image: 'images/coldwhisk_c07d8c0d5a0c4392923e5db8a44582cc_7e203217fd1c4b8faf9ef7d411a3326f_large.png',
      rating: '4.8',
      ratingCount: 42,
      description: 'Cold Whisk Matcha mát lạnh, đậm vị tự nhiên.'
    },
    {
      id: '2',
      name: 'Fog Matcha Latte',
      category: 'Thức Uống',
      categoryId: 1,
      price: 69000,
      stock: 60,
      image: 'images/fog_matcha_latte_e41446a847f841919badc807f4c4106b_83ed764223514a9e8c570db5abf31ed8_master.png',
      rating: '4.9',
      ratingCount: 31,
      description: 'Matcha Latte thơm mịn, béo nhẹ, pha với sữa tươi.'
    },
    {
      id: '3',
      name: 'Matcha Latte',
      category: 'Thức Uống',
      categoryId: 1,
      price: 67000,
      stock: 70,
      image: 'images/matchalatte_bba4231b93f84cc9870c1daf2e1a31e1_88d589c399074f139dc9c72fbcce6273_master.png',
      rating: '4.7',
      ratingCount: 28,
      description: 'Matcha Latte ấm áp, thơm mịn, nhẹ nhàng.'
    },
    {
      id: '4',
      name: 'Power Matcha',
      category: 'Thức Uống',
      categoryId: 1,
      price: 65000,
      stock: 70,
      image: 'images/power_c44d8587ff1146498e833c7617879496_c3c1873de49d4503b0c53805f963e19e_master.png',
      rating: '4.8',
      ratingCount: 36,
      description: 'Power Matcha đầy năng lượng, vị đậm và sảng khoái.'
    },
    {
      id: '5',
      name: 'Salted Cream Matcha',
      category: 'Thức Uống',
      categoryId: 1,
      price: 68000,
      stock: 70,
      image: 'images/salted_4d6bc144258e4890885c142898e0736c_e0ee4f72eca14c6093b3ed7b341348b0_master.png',
      rating: '4.6',
      ratingCount: 26,
      description: 'Matcha pha cùng kem muối đặc biệt, béo ngậy và thanh mát.'
    },
    {
      id: '6',
      name: 'Bánh Bông Lan Kem Tươi',
      category: 'Bánh Ngọt',
      categoryId: 3,
      price: 55000,
      stock: 50,
      image: 'images/Banh-bong-lan-kem-tuoi-1024x640.png',
      rating: '4.9',
      ratingCount: 0,
      description: 'Bánh bông lan mềm mịn, kết hợp kem tươi thơm ngon.'
    },
    {
      id: '7',
      name: 'Bánh Mousse Matcha',
      category: 'Bánh Ngọt',
      categoryId: 3,
      price: 55000,
      stock: 50,
      image: 'images/Banh-Mousse-1024x640.png',
      rating: '4.8',
      ratingCount: 21,
      description: 'Bánh mousse matcha mềm mượt, vị thanh dịu, sang trọng.'
    },
    {
      id: '8',
      name: 'Tàu Hủ Matcha',
      category: 'Tráng Miệng',
      categoryId: 2,
      price: 55000,
      stock: 80,
      image: 'images/tau_hu_073456509c324de881c8c7b7dc1756c4_9cc23f46054241ecb3a6ed6aa7a27729_master.png',
      rating: '4.7',
      ratingCount: 0,
      description: 'Tàu hủ matcha mềm mại, vị ngọt nhẹ kết hợp hương trà xanh.'
    },
    {
      id: '9',
      name: 'Sữa Chua Matcha',
      category: 'Tráng Miệng',
      categoryId: 2,
      price: 40000,
      stock: 60,
      image: 'images/1_panna-5804.jpg',
      rating: '4.8',
      ratingCount: 12,
      description: 'Sữa chua matcha chua ngọt cân bằng, mát lạnh.'
    },
    {
      id: '10',
      name: 'Tiramisu Matcha',
      category: 'Bánh Ngọt',
      categoryId: 3,
      price: 55000,
      stock: 40,
      image: 'images/1_maxresdefault.jpg',
      rating: '4.9',
      ratingCount: 0,
      description: 'Tiramisu matcha béo ngậy, thơm ngon, sang trọng.'
    },
    {
      id: '11',
      name: 'Cheesecake Matcha',
      category: 'Tráng Miệng',
      categoryId: 2,
      price: 55000,
      stock: 35,
      image: 'images/img_62a061385f69e.png',
      rating: '4.9',
      ratingCount: 0,
      description: 'Cheesecake béo ngậy với lớp matcha tươi mát.'
    },
    {
      id: '12',
      name: 'Kem Matcha Tươi',
      category: 'Tráng Miệng',
      categoryId: 2,
      price: 45000,
      stock: 70,
      image: 'images/9bd170dd844e17ab4804e1bdabe4c5a4-1200x675.jpg',
      rating: '4.8',
      ratingCount: 18,
      description: 'Kem matcha tươi mát, vị thanh dịu cho ngày nắng.'
    },
    {
      id: '13',
      name: 'Oatmilk Matcha Latte',
      category: 'Thức Uống',
      categoryId: 1,
      price: 69000,
      stock: 55,
      image: 'images/9635f78d3364c38b8d197cdcb030fa7_large_6efe7ceb8f6744d49a9aa73e5e56f2b9_936d8af7df91447d961af7186ea3f424_master.jpg',
      rating: '4.7',
      ratingCount: 0,
      description: 'Oatmilk Matcha Latte thơm béo, sữa hạt mịn màng.'
    }
  ]
};

const USER_DATA = [
  {
    id: '1',
    email: 'admin@phela.vn',
    password: 'admin123',
    name: 'Quản trị viên',
    role: 'admin'
  },
  {
    id: '2',
    email: 'user@phela.vn',
    password: 'user123',
    name: 'Khách hàng',
    role: 'user'
  }
];

const API_BASE_URL = 'http://127.0.0.1:5000';

const STORAGE_KEYS = {
  cart: 'fujiCart',
  orders: 'fujiOrders',
  currentUser: 'fujiCurrentUser',
  users: 'fujiUsers',
  localProducts: 'fujiLocalProducts'
};

const getSavedUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.users) || '[]');
  } catch (error) {
    return [];
  }
};

const saveUsers = (users) => {
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
};

const getSavedProducts = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.localProducts) || 'null');
  } catch (error) {
    return null;
  }
};

const saveLocalProducts = (products) => {
  localStorage.setItem(STORAGE_KEYS.localProducts, JSON.stringify(products));
};

const formatCurrency = (value) => {
  return value.toLocaleString('vi-VN') + ' đ';
};

const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.currentUser) || 'null');
  } catch (error) {
    return null;
  }
};

const setCurrentUser = (user) => {
  localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(user));
};

const clearCurrentUser = () => {
  localStorage.removeItem(STORAGE_KEYS.currentUser);
};

const loadUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) throw new Error('API unavailable');
    const apiUsers = await response.json();
    return [...apiUsers, ...getSavedUsers()];
  } catch (error) {
    return [...USER_DATA, ...getSavedUsers()];
  }
};

const loadOrders = async (user = null) => {
  const localOrders = getOrders();
  try {
    const response = await fetch(`${API_BASE_URL}/orders`);
    if (!response.ok) throw new Error('API unavailable');
    const apiOrders = await response.json();
    const combinedOrders = [...apiOrders, ...localOrders];
    const dedupedOrders = Object.values(
      combinedOrders.reduce((acc, order) => {
        const key = order.id || order.orderDate || JSON.stringify(order);
        acc[key] = order;
        return acc;
      }, {})
    );

    if (user && user.role === 'user') {
      return dedupedOrders.filter((order) => String(order.userId) === String(user.id));
    }
    return dedupedOrders;
  } catch (error) {
    if (user && user.role === 'user') {
      return localOrders.filter((order) => String(order.userId) === String(user.id));
    }
    return localOrders;
  }
};

const createOrder = async (order) => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    // ignore and fallback to local storage
  }

  const savedOrders = getOrders();
  const fallbackOrder = {
    ...order,
    id: order.id || `order_${Date.now()}`,
    status: order.status || 'Đang xử lý'
  };
  saveOrders([...savedOrders, fallbackOrder]);
  return fallbackOrder;
};

const updateOrderStatus = async (orderId, status) => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    // fallback to local storage if API unavailable
  }

  const localOrders = getOrders();
  const nextOrders = localOrders.map((order) =>
    String(order.id) === String(orderId) ? { ...order, status } : order
  );
  const updatedOrder = nextOrders.find((order) => String(order.id) === String(orderId));
  if (updatedOrder) {
    saveOrders(nextOrders);
    return updatedOrder;
  }
  return null;
};

// Product Management Functions
const loadProducts = async () => {
  const savedProducts = getSavedProducts();
  
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) throw new Error('API unavailable');
    const apiProducts = await response.json();
    
    if (savedProducts && savedProducts.length) {
      const savedIds = new Set(savedProducts.map(p => String(p.id)));
      const merged = [...savedProducts];
      apiProducts.forEach(ap => {
        if (!savedIds.has(String(ap.id))) {
          merged.push(ap);
        }
      });
      return merged;
    }
    return apiProducts;
  } catch (error) {
    console.error('Error loading products:', error);
    return savedProducts || APP_DATA.products;
  }
};

const getCategoryName = (categoryId) => {
  const categoryMap = {
    '1': 'Thức Uống',
    '2': 'Tráng Miệng',
    '3': 'Bánh Ngọt'
  };
  return categoryMap[String(categoryId)] || 'Sản phẩm';
};

const createProduct = async (product) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    if (response.ok) return await response.json();
  } catch (error) {
    console.error('Error creating product:', error);
  }

  const saved = getSavedProducts() || APP_DATA.products;
  const newProduct = { ...product, id: product.id || `prod_${Date.now()}` };
  const nextProducts = [...saved, newProduct];
  saveLocalProducts(nextProducts);
  return newProduct;
};

const updateProduct = async (productId, product) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${productId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    if (response.ok) return await response.json();
  } catch (error) {
    console.error('Error updating product:', error);
  }

  const saved = getSavedProducts() || APP_DATA.products;
  const nextProducts = saved.map((item) =>
    String(item.id) === String(productId) ? { ...item, ...product } : item
  );
  saveLocalProducts(nextProducts);
  return nextProducts.find((item) => String(item.id) === String(productId)) || null;
};

const deleteProduct = async (productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${productId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) return true;
  } catch (error) {
    console.error('Error deleting product:', error);
  }

  const saved = getSavedProducts() || APP_DATA.products;
  const nextProducts = saved.filter((item) => String(item.id) !== String(productId));
  saveLocalProducts(nextProducts);
  return true;
};

const getCart = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || '[]');
  } catch (error) {
    return [];
  }
};

const saveCart = (cart) => {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
  updateCartCount();
};

const getOrders = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.orders) || '[]');
  } catch (error) {
    return [];
  }
};

const saveOrders = (orders) => {
  localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(orders));
};

const updateCartCount = () => {
  const count = getCart().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-badge').forEach((badge) => {
    badge.textContent = count;
  });
};

const renderAuthState = () => {
  const currentUser = getCurrentUser();
  document.querySelectorAll('.nav-actions').forEach((navActions) => {
    const cartLink = navActions.querySelector('.cart-icon-wrapper');
    const cartHtml = cartLink ? cartLink.outerHTML : '';
    if (currentUser) {
      navActions.innerHTML = `${cartHtml}<div class="auth-user" style="display:flex; align-items:center; gap:0.75rem;"><span style="color: var(--text-light); font-size: 0.9rem;">Xin chào, <strong>${currentUser.name || 'Khách'}</strong></span><button type="button" class="btn btn-secondary btn-sm logout-btn">Đăng xuất</button></div>`;
    } else {
      navActions.innerHTML = `${cartHtml}<div style="display: flex; gap: 0.5rem;"><a href="login.html" class="btn btn-secondary btn-sm">Đăng nhập</a><a href="register.html" class="btn btn-primary btn-sm">Đăng ký</a></div>`;
    }
  });

  document.querySelectorAll('.logout-btn').forEach((button) => {
    button.addEventListener('click', () => {
      clearCurrentUser();
      updateCartCount();
      renderAuthState();
      window.location.href = 'index.html';
    });
  });
};

const findProductByName = (name) => {
  return APP_DATA.products.find((product) => product.name.trim().toLowerCase() === name.trim().toLowerCase());
};

const getProductFromCard = (card) => {
  const nameEl = card.querySelector('.product-card-title');
  const badgeEl = card.querySelector('.product-badge');
  const imageEl = card.querySelector('.product-image');
  const priceEl = card.querySelector('.product-price');
  const name = nameEl ? nameEl.textContent.trim() : '';
  const product = findProductByName(name);
  if (product) {
    return product;
  }
  return {
    id: name.toLowerCase().replace(/\s+/g, '-'),
    name,
    category: badgeEl ? badgeEl.textContent.trim() : 'Sản phẩm',
    image: imageEl ? imageEl.src : '',
    price: priceEl ? Number(priceEl.textContent.replace(/[^\d]/g, '')) : 0,
    rating: '4.8',
    ratingCount: 0,
    description: ''
  };
};

const addItemToCart = (product, qty = 1) => {
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ ...product, quantity: qty });
  }
  saveCart(cart);
};

const setupHomePage = async () => {
  const productsGrid = document.querySelector('.products-grid');
  const searchInput = document.querySelector('.search-bar input');
  const categoryTabs = document.querySelectorAll('.category-tab');

  const loadAndRenderProducts = async () => {
    const products = await loadProducts();
    const items = products.length ? products : APP_DATA.products;

    if (!productsGrid) return;
    productsGrid.innerHTML = items
      .map((product) => `
        <article class="product-card">
          <span class="product-badge">${product.category || getCategoryName(product.categoryId)}</span>
          <a href="product-detail.html" class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image" />
          </a>
          <div class="product-card-body">
            <a href="product-detail.html"><h3 class="product-card-title">${product.name}</h3></a>
            <div style="display: flex; align-items: center; gap: 0.25rem; margin-bottom: 0.5rem; font-size: 0.85rem; color: #eab308;">
              <span>⭐</span>
              <span style="font-weight: 600; color: var(--text-dark);">${product.rating || '4.8'}</span>
              <span style="color: var(--text-light);">(${product.ratingCount || product.reviews || 0} đánh giá)</span>
            </div>
            <p class="product-card-desc">${product.description || ''}</p>
            <div class="product-card-footer">
              <span class="product-price">${formatCurrency(product.price)}</span>
              <a href="cart.html" class="btn btn-primary btn-sm">Thêm</a>
            </div>
          </div>
        </article>
      `)
      .join('');

    attachProductCardEvents();
  };

  const attachProductCardEvents = () => {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card) => {
      const addButton = card.querySelector('.product-card-footer a');
      if (!addButton) return;
      addButton.addEventListener('click', (event) => {
        event.preventDefault();
        const product = getProductFromCard(card);
        addItemToCart(product, 1);
        updateCartCount();
        alert(`Đã thêm ${product.name} vào giỏ hàng!`);
      });
    });
  };

  const filterProducts = () => {
    const searchValue = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const activeCategory = document.querySelector('.category-tab.active');
    const categoryValue = activeCategory ? activeCategory.textContent.trim().toLowerCase() : 'tất cả';
    const cards = document.querySelectorAll('.product-card');

    cards.forEach((card) => {
      const title = card.querySelector('.product-card-title')?.textContent.toLowerCase() || '';
      const category = card.querySelector('.product-badge')?.textContent.toLowerCase() || '';
      const matchesSearch = title.includes(searchValue) || category.includes(searchValue);
      const matchesCategory = categoryValue === 'tất cả' || category.includes(categoryValue);
      card.style.display = matchesSearch && matchesCategory ? 'block' : 'none';
    });
  };

  if (searchInput) {
    searchInput.addEventListener('input', filterProducts);
  }

  categoryTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
      filterProducts();
    });
  });

  await loadAndRenderProducts();
};

const setupProductDetailPage = () => {
  const addButton = document.getElementById('add-to-cart-btn');
  const qtyValue = document.querySelector('.purchase-controls .qty-val');
  const qtyButtons = document.querySelectorAll('.purchase-controls .qty-btn');
  if (!addButton || !qtyValue) return;

  let quantity = Number(qtyValue.textContent) || 1;

  qtyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.textContent.trim() === '+') {
        quantity += 1;
      } else if (button.textContent.trim() === '-' && quantity > 1) {
        quantity -= 1;
      }
      qtyValue.textContent = quantity;
    });
  });

  addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.querySelector('.detail-info-panel h1')?.textContent.trim();
    const priceText = document.querySelector('.detail-price')?.textContent.trim();
    const category = document.querySelector('.detail-info-panel span')?.textContent.trim() || 'Sản phẩm';
    const image = document.querySelector('.detail-image')?.src || '';
    const price = Number(priceText?.replace(/[^\d]/g, '')) || 0;
    const product = {
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      category,
      price,
      image,
      description: document.querySelector('.detail-description')?.textContent.trim() || '',
      rating: '4.8',
      ratingCount: 0
    };
    addItemToCart(product, quantity);
    alert(`Đã thêm ${quantity} x ${product.name} vào giỏ hàng.`);
    updateCartCount();
  });
};

const setupCartPage = () => {
  const cartWrapper = document.querySelector('.cart-table-wrapper');
  const checkoutLink = document.querySelector('.cart-summary-panel a[href="checkout.html"]');
  if (!cartWrapper || !checkoutLink) return;

  const renderCart = () => {
    const cart = getCart();
    const headingsHTML = `
      <div style="display: flex; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 0.75rem; font-weight: 600; color: var(--text-light); font-size: 0.9rem;">
        <div style="flex-grow: 1;">Sản phẩm</div>
        <div style="width: 120px; text-align: center;">Số lượng</div>
        <div style="width: 150px; text-align: right;">Tổng cộng</div>
      </div>
    `;

    const itemsHTML = cart.length
      ? cart.map((item) => `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-details">
            <a href="product-detail.html" class="cart-item-title">${item.name}</a>
            <div class="cart-item-price">${formatCurrency(item.price)}</div>
            <div style="font-size: 0.75rem; color: var(--text-light); margin-top: 0.25rem;">Kho: ${item.quantity * 10} sp</div>
          </div>
          <div class="cart-item-actions">
            <div class="qty-selector" style="transform: scale(0.9);">
              <button class="qty-btn" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
              <div class="qty-val">${item.quantity}</div>
              <button class="qty-btn">+</button>
            </div>
            <button class="btn btn-secondary btn-sm btn-remove" style="color: var(--danger); border-color: var(--border-color); padding: 0.4rem;">Xóa</button>
          </div>
          <div style="width: 150px; text-align: right; font-weight: 600; color: var(--bg-dark);">${formatCurrency(item.price * item.quantity)}</div>
        </div>
      `
      )
      : `<div class="empty-state" style="padding: 2rem 1rem; text-align: center; width: 100%; color: var(--text-light);">Giỏ hàng đang trống. Trở về <a href="index.html" style="color: var(--primary);">cửa hàng</a> để tiếp tục mua sắm.</div>`;

    cartWrapper.innerHTML = `${headingsHTML}${itemsHTML}<div style="margin-top: 1.5rem; display: flex; justify-content: space-between;"><a href="index.html" class="btn btn-secondary">← Tiếp tục mua sắm</a></div>`;

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalEl = document.querySelector('.cart-summary-panel .summary-row.total span:last-child');
    const subtotalEl = document.querySelector('.cart-summary-panel .summary-row span:last-child');
    if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
    if (totalEl) totalEl.textContent = formatCurrency(subtotal);
    checkoutLink.classList.toggle('btn-disabled', cart.length === 0);
    if (cart.length === 0) {
      checkoutLink.href = 'cart.html';
      checkoutLink.textContent = 'Giỏ hàng trống';
    } else {
      checkoutLink.href = 'checkout.html';
      checkoutLink.textContent = 'Tiến hành thanh toán';
    }

    document.querySelectorAll('.cart-item').forEach((itemCard) => {
      const productId = itemCard.dataset.id;
      const minus = itemCard.querySelector('.qty-btn:first-of-type');
      const plus = itemCard.querySelector('.qty-btn:last-of-type');
      const qtyEl = itemCard.querySelector('.qty-val');
      const removeBtn = itemCard.querySelector('.btn-remove');

      minus?.addEventListener('click', () => {
        const cart = getCart();
        const item = cart.find((entry) => entry.id === productId);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
          saveCart(cart);
          renderCart();
        }
      });

      plus?.addEventListener('click', () => {
        const cart = getCart();
        const item = cart.find((entry) => entry.id === productId);
        if (item) {
          item.quantity += 1;
          saveCart(cart);
          renderCart();
        }
      });

      removeBtn?.addEventListener('click', () => {
        const cart = getCart().filter((entry) => entry.id !== productId);
        saveCart(cart);
        renderCart();
      });
    });
  };

  renderCart();
};

const setupCheckoutPage = () => {
  const form = document.getElementById('checkout-form');
  if (!form) return;
  const currentUser = getCurrentUser();
  if (!currentUser) {
    alert('Vui lòng đăng nhập trước khi thanh toán.');
    window.location.href = 'login.html';
    return;
  }

  const itemsContainer = document.getElementById('checkout-items');
  const summaryRows = document.querySelectorAll('.summary-row');
  const cart = getCart();

  if (currentUser.name) {
    const nameInput = form.querySelector('#name');
    if (nameInput && !nameInput.value) {
      nameInput.value = currentUser.name;
    }
  }

  const renderSummary = () => {
    if (!itemsContainer) return;
    if (!cart.length) {
      itemsContainer.innerHTML = '<div class="empty-state" style="padding: 2rem 1rem; text-align: center; color: var(--text-light);">Giỏ hàng trống. Vui lòng quay lại <a href="index.html" style="color: var(--primary);">cửa hàng</a>.</div>';
      return;
    }
    itemsContainer.innerHTML = cart
      .map(
        (item, index) => `
          <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem;"><span style="display: inline-block; width: 20px; height: 20px; border-radius: 50%; background-color: var(--primary-light); color: var(--primary); text-align: center; font-size: 0.8rem; font-weight: 600;">${index + 1}</span><span style="font-weight: 500; color: var(--bg-dark);">${item.name} x${item.quantity}</span></div>
            <span style="font-weight: 600; color: var(--text-light);">${formatCurrency(item.price * item.quantity)}</span>
          </div>
        `
      )
      .join('');

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (summaryRows.length >= 3) {
      summaryRows[0].querySelector('span:last-child').textContent = formatCurrency(subtotal);
      summaryRows[1].querySelector('span:last-child').textContent = 'Miễn phí';
      summaryRows[2].querySelector('span:last-child').textContent = formatCurrency(subtotal);
    }
  };

  renderSummary();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = form.querySelector('#name')?.value.trim();
    const phone = form.querySelector('#phone')?.value.trim();
    const address = form.querySelector('#address')?.value.trim();
    const payment = form.querySelector('input[name="payment"]:checked')?.value;
    const cartItems = getCart();

    if (!cartItems.length) {
      alert('Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán.');
      window.location.href = 'cart.html';
      return;
    }

    if (!name || !phone || !address || !payment) {
      alert('Vui lòng điền đầy đủ thông tin giao hàng và phương thức thanh toán.');
      return;
    }

    const order = {
      userId: currentUser.id,
      customerName: name,
      customerPhone: phone,
      customerAddress: address,
      paymentMethod: payment,
      status: 'Đang xử lý',
      items: cartItems.map((item) => ({
        product: {
          id: item.id,
          name: item.name,
          category: item.category,
          price: item.price,
          image: item.image,
          description: item.description
        },
        quantity: item.quantity
      })),
      totalAmount: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      orderDate: new Date().toISOString()
    };

    const createdOrder = await createOrder(order);
    if (!createdOrder) {
      alert('Không thể tạo đơn hàng. Vui lòng thử lại sau.');
      return;
    }

    saveCart([]);
    updateCartCount();
    alert('Đặt hàng thành công! Đang chuyển đến trang Lịch sử mua hàng.');
    window.location.href = 'order-history.html';
  });
};

const setupOrderHistoryPage = async () => {
  const listContainer = document.getElementById('order-history-list');
  if (!listContainer) return;
  const currentUser = getCurrentUser();
  if (!currentUser) {
    listContainer.innerHTML = '<div class="empty-state" style="padding: 2rem 1rem; text-align: center; color: var(--text-light);">Bạn cần đăng nhập để xem lịch sử đặt hàng. <a href="login.html" style="color: var(--primary);">Đăng nhập ngay</a>.</div>';
    return;
  }

  const orders = await loadOrders(currentUser);

  if (!orders.length) {
    listContainer.innerHTML = '<div class="empty-state" style="padding: 2rem 1rem; text-align: center; color: var(--text-light);">Bạn chưa có đơn hàng nào. Hãy tạo đơn mới từ <a href="index.html" style="color: var(--primary);">cửa hàng</a>.</div>';
    return;
  }

  listContainer.innerHTML = orders
    .map(
      (order) => `
        <div class="order-history-card" style="margin-bottom: 1.5rem;">
          <div class="order-header">
            <div><span style="font-weight: 600; color: var(--bg-dark);">Đơn hàng ${order.id || order.orderDate}</span><span style="color: var(--text-light); font-size: 0.85rem; margin-left: 1rem;">⏰ ${new Date(order.orderDate || order.createdAt).toLocaleString('vi-VN')}</span></div>
            <span class="status-badge status-pending">${order.status}</span>
          </div>
          <div style="margin: 1rem 0;">
            <h4 style="font-size: 0.9rem; color: var(--text-light); margin-bottom: 0.5rem;">Chi tiết sản phẩm</h4>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              ${order.items
                .map(
                  (item) => `<div style="display: flex; justify-content: space-between; font-size: 0.9rem;"><span style="color: var(--text-dark);">${item.product?.name || item.name} <strong style="color: var(--primary);">x${item.quantity}</strong></span><span style="font-weight: 500; color: var(--text-light);">${formatCurrency((item.product?.price || item.price) * item.quantity)}</span></div>`
                )
                .join('')}
            </div>
          </div>
          <div style="border-top: 1px dotted var(--border-color); padding-top: 0.75rem; margin-top: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
            <div style="font-size: 0.8rem; color: var(--text-light);">📍 Giao tới: <strong>${order.customerAddress || order.address}</strong><br />📞 Liên hệ: <strong>${order.customerName || order.customer} - ${order.customerPhone || order.phone}</strong><br />💳 Thanh toán: <strong>${order.paymentMethod || order.payment}</strong></div>
            <div style="text-align: right;"><span style="font-size: 0.85rem; color: var(--text-light);">Tổng thanh toán</span><div style="font-size: 1.2rem; font-weight: 700; color: var(--primary); font-family: var(--font-heading);">${formatCurrency(order.totalAmount || order.total)}</div></div>
          </div>
        </div>
      `
    )
    .join('');
};

const renderAdminDashboard = async () => {
  if (!window.location.pathname.includes('/admin/index.html')) return;

  const [orders, users] = await Promise.all([loadOrders(), loadUsers()]);
  const totalOrders = orders.length;
  const revenue = orders.reduce((sum, order) => sum + (order.totalAmount || order.total || 0), 0);
  const orderRows = orders.slice(0, 5).map((order) => {
    const badgeClass = order.status === 'Đã hoàn thành' ? 'status-completed' : 'status-pending';
    return `
      <tr>
        <td>${order.id || order.orderDate}</td>
        <td><div style="font-weight: 500;">${order.customerName || order.customer || 'Khách hàng'}</div><span style="font-size: 0.75rem; color: var(--text-light);">${order.customerPhone || order.phone || ''}</span></td>
        <td style="font-weight: 600;">${formatCurrency(order.totalAmount || order.total || 0)}</td>
        <td><span class="status-badge ${badgeClass}" style="font-size: 0.75rem;">${order.status}</span></td>
      </tr>
    `;
  }).join('');

  const ordersBody = document.getElementById('admin-orders-dashboard-body');
  const totalOrdersEl = document.getElementById('admin-dashboard-total-orders');
  const revenueEl = document.getElementById('admin-dashboard-total-revenue');
  const usersEl = document.getElementById('admin-dashboard-user-count');

  if (ordersBody) {
    ordersBody.innerHTML = orderRows || '<tr><td colspan="4" style="text-align:center; color: var(--text-light);">Chưa có đơn hàng mới</td></tr>';
  }
  if (totalOrdersEl) totalOrdersEl.textContent = totalOrders;
  if (revenueEl) revenueEl.textContent = formatCurrency(revenue);
  if (usersEl) usersEl.textContent = users.length;

  // Render low stock warnings
  await renderLowStockWarnings();
};

const renderAdminOrdersPage = async () => {
  if (!window.location.pathname.includes('/admin/orders.html')) return;

  const orders = await loadOrders();
  const tbody = document.getElementById('admin-orders-table-body');
  if (!tbody) return;

  if (!orders.length) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--text-light);">Chưa có đơn hàng nào.</td></tr>';
    return;
  }

  tbody.innerHTML = orders
    .map((order) => {
      const badgeClass = order.status === 'Đã hoàn thành' ? 'status-completed' : order.status === 'Đã hủy' ? 'status-cancelled' : 'status-pending';
      const isFinal = order.status === 'Đã hoàn thành' || order.status === 'Đã hủy';
      const completeBtn = isFinal ? '' : `<button type="button" class="btn btn-primary btn-sm order-action-btn" data-action="complete" data-order-id="${order.id}">Hoàn thành</button>`;
      const cancelBtn = isFinal ? '' : `<button type="button" class="btn btn-secondary btn-sm order-action-btn" data-action="cancel" data-order-id="${order.id}" style="margin-left:0.5rem;">Hủy</button>`;
      return `
        <tr>
          <td>${order.id || order.orderDate}</td>
          <td>${order.customerName || order.customer || 'Khách hàng'}</td>
          <td>${formatCurrency(order.totalAmount || order.total || 0)}</td>
          <td><span class="status-badge ${badgeClass}">${order.status}</span></td>
          <td>${new Date(order.orderDate || order.createdAt).toLocaleDateString('vi-VN')}</td>
          <td>${completeBtn}${cancelBtn}</td>
        </tr>
      `;
    })
    .join('');

  tbody.querySelectorAll('.order-action-btn').forEach((button) => {
    button.addEventListener('click', async () => {
      const orderId = button.dataset.orderId;
      const action = button.dataset.action;
      const status = action === 'complete' ? 'Đã hoàn thành' : 'Đã hủy';
      const updated = await updateOrderStatus(orderId, status);
      if (!updated) {
        alert('Cập nhật trạng thái đơn hàng không thành công. Vui lòng thử lại.');
        return;
      }
      await renderAdminOrdersPage();
      await renderAdminDashboard();
    });
  });
};

const renderLowStockWarnings = async () => {
  const tbody = document.getElementById('low-stock-table-body');
  if (!tbody) return;

  const products = await loadProducts();
  const lowStockProducts = products.filter((p) => (p.stock ?? 0) < 10);

  if (!lowStockProducts.length) {
    tbody.innerHTML = '<tr><td colspan="3" style="text-align: center; color: var(--text-light);">Tất cả sản phẩm đều đủ hàng</td></tr>';
    return;
  }

  tbody.innerHTML = lowStockProducts
    .map((product) => {
      const statusClass = (product.stock ?? 0) <= 5 ? 'status-cancelled' : 'status-pending';
      const statusText = (product.stock ?? 0) <= 5 ? 'Hết hàng' : 'Sắp hết';
      return `
        <tr>
          <td>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <img src="../${product.image}" alt="${product.name}" class="table-thumbnail" />
              <span style="font-weight: 500;">${product.name}</span>
            </div>
          </td>
          <td style="font-weight: 600; color: var(--warning);">${product.stock ?? 0}</td>
          <td><span class="status-badge ${statusClass}" style="font-size: 0.7rem;">${statusText}</span></td>
        </tr>
      `;
    })
    .join('');
};

const renderAdminProductsPage = async () => {
  if (!window.location.pathname.includes('/admin/products.html')) return;

  const products = await loadProducts();
  const items = products.length ? products : APP_DATA.products;
  const container = document.getElementById('products-container');
  if (!container) return;

  if (!items.length) {
    container.innerHTML = '<div style="padding: 2rem; text-align: center; color: #999;">Không có sản phẩm nào</div>';
    return;
  }

  container.innerHTML = items.map((product) => {
    const imagePath = product.image && product.image.startsWith('http') 
      ? product.image 
      : (product.image ? `../${product.image}` : '../images/placeholder.png');
    return `
    <div class="product-row">
      <img src="${imagePath}" alt="${product.name}" class="product-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect fill=%22%23eee%22 width=%2280%22 height=%2280%22/%3E%3C/svg%3E'">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>ID: ${product.id}</p>
        <p>${(product.description || '').substring(0, 80)}...</p>
      </div>
      <div class="product-price">${formatCurrency(product.price || 0)}</div>
      <div class="product-stock">
        <p style="margin:0; font-weight:500;">${product.stock ?? 0}</p>
        <p style="font-size:0.75rem;">kho</p>
      </div>
      <div class="action-buttons">
        <button class="btn btn-secondary btn-sm edit-product-btn" data-product-id="${product.id}">Sửa</button>
        <button class="btn btn-danger btn-sm delete-product-btn" data-product-id="${product.id}">Xóa</button>
      </div>
    </div>
  `;
  }).join('');

  // Attach event listeners
  document.querySelectorAll('.edit-product-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const productId = e.target.dataset.productId;
      const product = products.find((p) => String(p.id) === String(productId));
      if (product && window.openEditProductModal) {
        window.openEditProductModal(product);
      }
    });
  });

  document.querySelectorAll('.delete-product-btn').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const productId = e.target.dataset.productId;
      if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
        const success = await deleteProduct(productId);
        if (success) {
          alert('Xóa sản phẩm thành công!');
          renderAdminProductsPage();
        } else {
          alert('Lỗi khi xóa sản phẩm');
        }
      }
    });
  });
};

const setupAdminPage = () => {
  if (!window.location.pathname.includes('/admin/')) return;
  const user = getCurrentUser();
  if (!user || user.role !== 'admin') {
    alert('Bạn cần đăng nhập tài khoản admin để truy cập trang này.');
    window.location.href = '../login.html';
    return;
  }

  renderAdminDashboard();
  renderAdminOrdersPage();
  renderAdminProductsPage();
};

const setupAuthPage = async () => {
  const form = document.getElementById('auth-form');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = form.querySelector('#email')?.value.trim();
    const password = form.querySelector('#password')?.value.trim();
    const name = form.querySelector('#name')?.value.trim();

    if (!email || !password) {
      alert('Vui lòng nhập email và mật khẩu.');
      return;
    }

    if (window.location.pathname.includes('register.html')) {
      if (!name) {
        alert('Vui lòng nhập họ và tên.');
        return;
      }

      const users = await loadUsers();
      if (users.some((user) => user.email === email)) {
        alert('Email này đã được đăng ký. Vui lòng dùng email khác.');
        return;
      }

      const savedUsers = getSavedUsers();
      const newUser = {
        id: `user_${Date.now()}`,
        email,
        password,
        name,
        role: 'user'
      };

      saveUsers([...savedUsers, newUser]);
      alert('Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.');
      window.location.href = 'login.html';
      return;
    }

    const users = await loadUsers();
    const matched = users.find((user) => user.email === email && user.password === password);

    if (!matched) {
      alert('Email hoặc mật khẩu không đúng. Vui lòng thử lại.');
      return;
    }

    setCurrentUser({
      id: matched.id,
      email: matched.email,
      name: matched.name,
      role: matched.role
    });

    if (matched.role === 'admin') {
      alert(`Đăng nhập thành công! Chào mừng quản trị viên ${matched.name}.`);
      window.location.href = 'admin/index.html';
      return;
    }

    alert(`Đăng nhập thành công! Chào mừng ${matched.name}.`);
    window.location.href = 'index.html';
  });
};

const initializeApp = () => {
  updateCartCount();
  setupHomePage();
  setupProductDetailPage();
  setupCartPage();
  setupCheckoutPage();
  setupOrderHistoryPage();
  setupAdminPage();
  setupAuthPage();
  renderAuthState();
};

document.addEventListener('DOMContentLoaded', initializeApp);
