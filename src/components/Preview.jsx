import React from 'react';

const Preview = ({ config }) => {
  const { 
    brandName, 
    brandLogo, 
    primaryColor, 
    secondaryColor, 
    textColor, 
    backgroundColor, 
    industry,
    option,
    showSections 
  } = config;

  // Real images for professional look - Using direct IDs for stability
  const banner1 = "/quiphuc_hero_banner_1.png";
  const banner2 = "/quiphuc_collection_banner_2.png";

  const categories = [
    { title: 'Tủ nhựa', icon: '🧺' },
    { title: 'Bàn ghế', icon: '🪑' },
    { title: 'Kệ sà', icon: '📦' },
    { title: 'Giường ngủ', icon: '🛌' },
    { title: 'Võng - Giường', icon: '🎑' },
    { title: 'Sản phẩm mới', icon: '🆕' },
    { title: 'Đóng góp', icon: '🤝' },
    { title: 'Hỗ trợ', icon: '⚙️' }
  ];

  const products = [
    { name: 'Bộ bàn ghế Diamond', price: '2,450,000đ', old: '3,100,000đ', tag: 'Hot', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=400' },
    { name: 'Tủ nhựa Royal 5 tầng', price: '1,890,000đ', old: '2,400,000đ', tag: 'New', img: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=400' },
    { name: 'Kệ bếp inox 304', price: '750,000đ', old: '950,000đ', tag: '-20%', img: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80&w=400' },
    { name: 'Ghế nhựa cao cấp Qui Phuc', price: '120,000đ', old: '150,000đ', tag: '', img: 'https://images.unsplash.com/photo-1562184560-a13b74639797?auto=format&fit=crop&q=80&w=400' }
  ];

  const themeStyle = {
    '--primary': primaryColor,
    '--secondary': secondaryColor,
    '--text': textColor,
    '--bg': backgroundColor,
    color: textColor,
    backgroundColor: backgroundColor,
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div className="preview-scroll-wrapper" style={{ height: '100%', overflowY: 'auto', backgroundColor: '#f0f2f5' }}>
      <div className="haravan-theme" style={themeStyle}>
        
        {/* Top Announcement Bar */}
        <div className="top-announcement" style={{ backgroundColor: primaryColor }}>
          <div className="container-inner">
            <div className="ann-left">⭐ Miễn phí vận chuyển cho đơn hàng từ 1.000.000đ</div>
            <div className="ann-right">
              <span>Tin tức</span><span className="sep">|</span><span>Liên hệ: 1900.636.099</span><span className="sep">|</span><span>🌐 VN</span>
            </div>
          </div>
        </div>

        {/* Header Section */}
        <header className="theme-header">
          <div className="container-inner header-flex">
            <div className="logo-area">
              {brandLogo ? <img src={brandLogo} alt={brandName} /> : <h2 style={{ color: primaryColor }}>{brandName}</h2>}
            </div>
            
            <div className="search-bar">
              <input type="text" placeholder={`Tìm kiếm sản phẩm ${brandName}...`} />
              <button>🔍</button>
            </div>

            <div className="header-utilities">
              <div className="header-icon-item"><span>❤️</span><label>Yêu thích</label></div>
              <div className="header-icon-item"><span>👤</span><label>Tài khoản</label></div>
              <div className="header-icon-item"><span>🛒</span><label>Giỏ hàng</label></div>
            </div>
          </div>
        </header>

        {/* Global Nav */}
        <nav className="main-nav">
          <div className="container-inner">
            <ul className="nav-list">
                <li>TRANG CHỦ</li>
                <li>SẢN PHẨM ▾</li>
                <li>BỘ SƯU TẬP Diamond</li>
                <li>TIN TỨC</li>
                <li>CỬA HÀNG</li>
                <li>TUYỂN DỤNG</li>
            </ul>
          </div>
        </nav>

        {/* Main Sections */}
        <main className="theme-main">
          {showSections.slider && (
            <section className="hero-slider">
              <div className="hero-container-standard">
                <img src={banner1} alt="Banners" className="hero-img-full" />
                <div className="hero-content-float">
                    <span className="hero-tag" style={{ color: secondaryColor }}>40 NĂM ĐỒNG HÀNH</span>
                    <h1 className="hero-title" style={{ color: primaryColor }}>TRỌN VẸN YÊU THƯƠNG</h1>
                    <p className="hero-desc">Nội thất nhựa và inox chất lượng hàng đầu Việt Nam. Tinh tế trong từng đường nét thiết kế.</p>
                    <div className="hero-actions">
                    <button className="btn-primary" style={{ backgroundColor: primaryColor }}>Khám phá ngay</button>
                    <button className="btn-outline">Sản phẩm bán chạy</button>
                    </div>
                </div>
              </div>
            </section>
          )}

          {showSections.category && (
            <section className="category-grid-section">
                <div className="container-inner">
                    <div className="section-header">
                        <h3>DANH MỤC NỔI BẬT</h3>
                        <div className="header-underline" style={{ backgroundColor: secondaryColor }}></div>
                    </div>
                    <div className="category-flex">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="cat-item">
                                <div className="cat-icon-container">{cat.icon}</div>
                                <p className="cat-title">{cat.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
          )}

          {showSections.lookbook && (
            <section className="lookbook-section">
                <div className="container-inner">
                    <div className="lookbook-wrapper">
                        <img src={banner2} alt="Lookbook" className="lookbook-img" />
                        <div className="lookbook-info">
                            <h2 style={{ color: primaryColor }}>Góc Bếp Ấm Cúng</h2>
                            <p>Dòng sản phẩm Diamond mang nét tinh tế và bền bỉ trong từng đường nét. Thiết kế hiện đại giúp tối ưu không gian bếp nhà bạn.</p>
                            <button className="shop-look-btn">CHI TIẾT ▾</button>
                        </div>
                    </div>
                </div>
            </section>
          )}

          {showSections.collection && (
            <section className="collection-listing-section">
                <div className="container-inner">
                    <div className="section-header-flex">
                        <div className="header-text">
                             <h3>SẢN PHẨM MỚI NHẤT</h3>
                             <div className="header-underline-left" style={{ backgroundColor: secondaryColor }}></div>
                        </div>
                        <a href="#" className="see-more-link" style={{ color: primaryColor }}>Xem thêm ▾</a>
                    </div>
                    <div className="product-grid-custom">
                        {products.map((p, idx) => (
                            <div key={idx} className="product-card-premium">
                                <div className="product-media-wrapper">
                                    <img src={p.img} alt={p.name} />
                                    {p.tag && <span className="product-badge" style={{ backgroundColor: secondaryColor }}>{p.tag}</span>}
                                    <div className="product-overlay">
                                        <button>MUA NHANH</button>
                                    </div>
                                </div>
                                <div className="product-content-details">
                                    <h4 className="p-title">{p.name}</h4>
                                    <div className="p-price-area">
                                        <span className="p-price" style={{ color: secondaryColor }}>{p.price}</span>
                                        <span className="p-old">{p.old}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
          )}

          {showSections.news && (
            <section className="news-media-section">
                <div className="container-inner">
                    <div className="section-header">
                        <h3>TIN TỨC & SỰ KIỆN</h3>
                        <div className="header-underline" style={{ backgroundColor: secondaryColor }}></div>
                    </div>
                    <div className="news-grid">
                        <div className="news-card">
                            <div className="news-img"><img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=400" alt="News 1" /></div>
                            <div className="news-content">
                                <span>28/03/2026</span>
                                <h4 style={{ color: primaryColor }}>Khai trương showroom mới tại Quận 7</h4>
                                <p>Đến ngay để trải nghiệm không gian nội thất đẳng cấp...</p>
                            </div>
                        </div>
                        <div className="news-card">
                            <div className="news-img"><img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=400" alt="News 2" /></div>
                            <div className="news-content">
                                <span>25/03/2026</span>
                                <h4 style={{ color: primaryColor }}>Mẹo bảo quản đồ nhựa luôn bền đẹp</h4>
                                <p>Chia sẻ từ các chuyên gia giúp nội thất nhà bạn luôn sáng bóng...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          )}

          {showSections.trust && (
            <section className="trust-badges-bar">
                <div className="container-inner trust-flex">
                    <div className="trust-item"><span className="trust-icon">🚚</span> Miễn phí vận chuyển</div>
                    <div className="trust-item"><span className="trust-icon">🛡️</span> Thanh toán bảo mật</div>
                    <div className="trust-item"><span className="trust-icon">📦</span> Mẫu mã đa dạng</div>
                    <div className="trust-item"><span className="trust-icon">📞</span> Hỗ trợ 24/7</div>
                </div>
            </section>
          )}
        </main>

        <footer className="advanced-footer">
            <div className="container-inner footer-top-grid">
                <div className="footer-company-info">
                    <h2 style={{ color: primaryColor }}>{brandName}</h2>
                    <p>Công ty TNHH Sản Xuất Thương Mại {brandName}</p>
                    <p>Địa chỉ: 182 Lê Đại Hành, Quận 11, TP. HCM</p>
                    <p>Hotline: 1900.635.099</p>
                    <p>Email: info@{brandName.toLowerCase().replace(/\s/g, '')}.com</p>
                </div>
                <div className="footer-links-col">
                    <h4>CHĂM SÓC KHÁCH HÀNG</h4>
                    <ul>
                        <li>Chính sách vận chuyển</li>
                        <li>Chính sách bảo hành</li>
                        <li>Hướng dẫn mua hàng</li>
                        <li>Thông tin đổi trả</li>
                    </ul>
                </div>
                <div className="footer-links-col">
                    <h4>ĐĂNG KÝ NHẬN TIN</h4>
                    <p className="news-tip">Cập nhật những khuyến mãi mới nhất bằng cách để lại email của bạn.</p>
                    <div className="newsletter-advanced">
                        <input type="text" placeholder="Nhập email của bạn..." />
                        <button style={{ backgroundColor: primaryColor }}>GỬI</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                 <p>© 2024 {brandName} - Haravan Powered By Antigravity AI Assistant</p>
            </div>
        </footer>

        {/* Scoped CSS for Perfect Alignment */}
        <style dangerouslySetInnerHTML={{ __html: `
            .haravan-theme { 
                font-family: 'Inter', sans-serif; 
                background-color: #fff;
                overflow-x: hidden;
                width: 100%;
                box-sizing: border-box;
            }
            .haravan-theme * { box-sizing: border-box; }
            
            /* Strict Container */
            .container-inner {
                width: 100%;
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
            }

            .top-announcement { color: white; padding: 12px 0; font-size: 13px; }
            .top-announcement .container-inner { display: flex; justify-content: space-between; align-items: center; }
            .ann-right span { margin-left: 15px; cursor: pointer; }
            .ann-right .sep { opacity: 0.3; }

            .theme-header { padding: 30px 0; background: #fff; border-bottom: 1px solid #f0f0f0; }
            .header-flex { display: flex; align-items: center; justify-content: space-between; gap: 40px; }
            .logo-area h2 { margin: 0; letter-spacing: 2px; font-weight: 800; font-size: 28px; }
            
            .search-bar { flex: 1; max-width: 500px; display: flex; position: relative; }
            .search-bar input { width: 100%; padding: 14px 25px; border: 2px solid #004a99; border-radius: 30px; outline: none; transition: 0.3s; }
            .search-bar button { position: absolute; right: 20px; top: 12px; background: none; border: none; cursor: pointer; font-size: 18px; }
            
            .header-utilities { display: flex; gap: 25px; }
            .header-icon-item { text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; }
            .header-icon-item span { font-size: 22px; }
            .header-icon-item label { font-size: 10px; font-weight: 700; text-transform: uppercase; color: #888; margin-top: 5px; }

            .main-nav { background: #fff; border-bottom: 1px solid #f0f0f0; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 10px rgba(0,0,0,0.02); }
            .nav-list { list-style: none; display: flex; justify-content: center; gap: 50px; margin: 0; padding: 0; }
            .nav-list li { padding: 18px 0; font-size: 13px; font-weight: 700; color: #222; cursor: pointer; position: relative; }
            .nav-list li:hover::after { width: 100%; }
            .nav-list li::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 3px; background: var(--primary); transition: 0.3s; }

            .hero-slider { position: relative; width: 100%; padding: 30px 0; background-color: #f7f8fa; }
            .hero-container-standard { position: relative; overflow: hidden; border-radius: 12px; max-width: 1160px; margin: 0 auto; height: 520px; }
            .hero-img-full { width: 100%; height: 100%; object-fit: cover; }
            .hero-content-float { position: absolute; left: 60px; top: 50%; transform: translateY(-50%); max-width: 480px; background: rgba(255,255,255,0.9); padding: 50px; border-radius: 12px; backdrop-filter: blur(8px); box-shadow: 0 15px 40px rgba(0,0,0,0.1); }
            .hero-tag { font-weight: 800; font-size: 13px; display: block; margin-bottom: 15px; letter-spacing: 2px; }
            .hero-title { font-size: 42px; margin: 0 0 20px; line-height: 1.1; font-weight: 900; }
            .hero-desc { color: #555; margin-bottom: 30px; font-size: 16px; line-height: 1.6; }
            .hero-actions { display: flex; gap: 15px; }
            .hero-actions button { padding: 14px 28px; font-weight: 700; cursor: pointer; border-radius: 30px; border: none; transition: 0.3s; }
            .btn-primary { color: white; }
            .btn-outline { border: 2px solid #004a99 !important; color: #004a99; background: transparent; }
            .btn-outline:hover { background: #004a99; color: white; }

            .category-grid-section { padding: 80px 0; background-color: #fff; }
            .section-header { text-align: center; margin-bottom: 50px; }
            .section-header h3 { font-size: 28px; font-weight: 800; margin: 0; padding-bottom: 15px; letter-spacing: 1px; }
            .header-underline { width: 60px; height: 4px; border-radius: 2px; margin: 0 auto; }
            
            .category-flex { display: flex; justify-content: space-between; gap: 20px; }
            .cat-item { text-align: center; flex: 1; cursor: pointer; transition: 0.3s; }
            .cat-icon-container { width: 90px; height: 90px; background: #f8f9fa; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 36px; margin: 0 auto 18px; border: 2px solid transparent; transition: 0.3s; }
            .cat-item:hover .cat-icon-container { background: #fff; transform: translateY(-10px); box-shadow: 0 10px 20px rgba(0,0,0,0.06); border-color: var(--primary); }
            .cat-title { font-size: 14px; font-weight: 700; color: #333; }

            .lookbook-section { padding: 50px 0; }
            .lookbook-wrapper { position: relative; display: flex; align-items: center; }
            .lookbook-img { width: 100%; height: 450px; object-fit: cover; border-radius: 12px; }
            .lookbook-info { position: absolute; left: 50px; background: white; padding: 45px; border-radius: 12px; box-shadow: 0 20px 50px rgba(0,0,0,0.1); max-width: 440px; }
            .lookbook-info h2 { font-size: 32px; font-weight: 800; margin: 0 0 15px; }
            .lookbook-info p { color: #666; font-size: 15px; line-height: 1.6; margin-bottom: 25px; }
            .shop-look-btn { background: none; border: 2px solid #222; padding: 12px 28px; font-weight: 800; cursor: pointer; border-radius: 4px; transition: 0.3s; }
            .shop-look-btn:hover { background: #222; color: #fff; }

            .collection-listing-section { padding: 80px 0; }
            .section-header-flex { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; border-bottom: 1px solid #f0f0f0; padding-bottom: 20px; }
            .header-text h3 { margin: 0 0 12px; font-size: 26px; font-weight: 800; }
            .header-underline-left { width: 50px; height: 4px; border-radius: 2px; }
            .see-more-link { font-weight: 700; font-size: 14px; }

            .product-grid-custom { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; }
            .product-card-premium { background: #fff; transition: 0.4s; padding: 0; cursor: pointer; }
            .product-media-wrapper { position: relative; width: 100%; aspect-ratio: 1; overflow: hidden; border-radius: 8px; background: #f5f5f5; }
            .product-media-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s; }
            .product-card-premium:hover img { transform: scale(1.1); }
            .product-badge { position: absolute; top: 12px; left: 12px; padding: 5px 12px; color: white; font-size: 11px; font-weight: 800; border-radius: 4px; z-index: 2; }
            .product-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.08); display: flex; align-items: flex-end; justify-content: center; padding-bottom: 25px; opacity: 0; transition: 0.3s; z-index: 1; }
            .product-card-premium:hover .product-overlay { opacity: 1; }
            .product-overlay button { background: white; border: none; padding: 12px 25px; font-weight: 800; border-radius: 30px; cursor: pointer; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
            
            .product-content-details { padding: 20px 0; text-align: left; }
            .p-title { font-size: 15px; margin: 0 0 10px; font-weight: 600; color: #333; height: 42px; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical; display: -webkit-box; }
            .p-price-area { display: flex; align-items: center; gap: 12px; }
            .p-price { font-size: 18px; font-weight: 900; }
            .p-old { color: #aaa; text-decoration: line-through; font-size: 13px; }

            .news-media-section { padding: 80px 0; background: #fff; }
            .news-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
            .news-card { background: white; border: 1px solid #eee; border-radius: 12px; overflow: hidden; display: flex; transition: 0.4s; }
            .news-card:hover { transform: translateY(-8px); box-shadow: 0 15px 35px rgba(0,0,0,0.06); }
            .news-img { width: 220px; height: 100%; flex-shrink: 0; overflow: hidden; }
            .news-img img { width: 100%; height: 100%; object-fit: cover; }
            .news-content { padding: 30px; display: flex; flex-direction: column; justify-content: center; }
            .news-content span { font-size: 12px; color: #999; margin-bottom: 12px; font-weight: 600; }
            .news-content h4 { font-size: 20px; margin: 0 0 15px; line-height: 1.4; font-weight: 800; }
            .news-content p { font-size: 14px; color: #666; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

            .trust-badges-bar { padding: 50px 0; border-top: 1px solid #f0f0f0; background: #fdfdfd; margin-top: 50px; }
            .trust-flex { display: flex; justify-content: space-between; align-items: center; }
            .trust-item { font-size: 15px; font-weight: 700; color: #444; display: flex; align-items: center; gap: 12px; }
            .trust-icon { font-size: 24px; }

            .advanced-footer { background: #fcfcfc; padding: 100px 0 0; border-top: 5px solid var(--primary); }
            .footer-top-grid { display: grid; grid-template-columns: 2fr 1fr 1.5fr; gap: 60px; padding-bottom: 80px; }
            .footer-company-info h2 { font-size: 32px; font-weight: 900; margin: 0 0 25px; letter-spacing: 2px; }
            .footer-company-info p { color: #666; margin-bottom: 12px; line-height: 1.6; }
            .footer-links-col h4 { margin-bottom: 30px; font-size: 16px; font-weight: 900; position: relative; padding-bottom: 10px; }
            .footer-links-col h4::after { content: ''; position: absolute; bottom: 0; left: 0; width: 40px; height: 3px; background: var(--primary); }
            .footer-links-col ul { list-style: none; padding: 0; }
            .footer-links-col ul li { margin-bottom: 18px; color: #777; cursor: pointer; transition: 0.2s; font-size: 15px; }
            .footer-links-col ul li:hover { color: var(--primary); padding-left: 5px; }
            .news-tip { color: #777; margin-bottom: 25px; line-height: 1.6; }
            .newsletter-advanced { display: flex; overflow: hidden; border-radius: 4px; border: 1px solid #ddd; background: #fff; }
            .newsletter-advanced input { flex: 1; padding: 16px 20px; border: none; outline: none; font-size: 14px; }
            .newsletter-advanced button { color: white; border: none; padding: 0 35px; font-weight: 800; cursor: pointer; transition: 0.3s; }
            .footer-bottom { background: #111; color: #888; padding: 30px 0; text-align: center; font-size: 12px; letter-spacing: 1px; }
        ` }} />
      </div>
    </div>
  );
};

export default Preview;
