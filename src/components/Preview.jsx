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

  // Simulate industry-specific images
  const images = {
    Fashion: {
      hero: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200',
      product1: 'https://images.unsplash.com/photo-1539109132384-51af51d7bbda?auto=format&fit=crop&q=80&w=400',
      product2: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=400',
      product3: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&q=80&w=400',
    },
    Beauty: {
      hero: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200',
      product1: 'https://images.unsplash.com/photo-1556228578-8c199589d972?auto=format&fit=crop&q=80&w=400',
      product2: 'https://images.unsplash.com/photo-1596462502278-27bfaf426a23?auto=format&fit=crop&q=80&w=400',
      product3: 'https://images.unsplash.com/photo-1512496011220-42eca330c822?auto=format&fit=crop&q=80&w=400',
    },
    Tech: {
      hero: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      product1: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=400',
      product2: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400',
      product3: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400',
    }
  }[industry] || {
    hero: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
    product1: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=400',
    product2: 'https://images.unsplash.com/photo-1542291026-7eec264c2745?auto=format&fit=crop&q=80&w=400',
    product3: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=400',
  };

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
    <div className="preview-scroll-wrapper" style={{ height: '100%', overflowY: 'auto', backgroundColor: '#fff' }}>
      <div className="haravan-theme" style={themeStyle}>
      {/* Header */}
      <header className="theme-header">
        <div className="container">
          <div className="logo">
            {brandLogo ? <img src={brandLogo} alt={brandName} /> : <h2>{brandName}</h2>}
          </div>
          <nav>
            <a href="#">TRANG CHỦ</a>
            <a href="#">SẢN PHẨM</a>
            <a href="#">BỘ SƯU TẬP</a>
            <a href="#">LIÊN HỆ</a>
          </nav>
          <div className="header-icons">
            <span>🔍</span>
            <span>🛒 (0)</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {showSections.slider && (
          <section className={`hero-section ${option === 'Web Branding' ? 'full-height' : ''}`}>
             <div className="hero-content">
                <span className="subtitle">NEW ARRIVAL</span>
                <h1>{option === 'Web Branding' ? 'STORY OF BRAND' : 'SHOP THE NEW COLLECTION'}</h1>
                <p>Khám phá phong cách riêng của bạn với bộ sưu tập mới nhất từ {brandName}.</p>
                <button className="btn-primary">XEM NGAY</button>
             </div>
             <img src={images.hero} alt="Hero" />
          </section>
        )}

        {showSections.banner && (
          <section className="banner-grid container">
            <div className="banner-item">
              <img src={images.product1} alt="Banner 1" />
              <div className="banner-text">
                <h3>Bestsellers</h3>
                <a href="#">Sản phẩm bán chạy nhất</a>
              </div>
            </div>
            <div className="banner-item">
              <img src={images.product2} alt="Banner 2" />
              <div className="banner-text">
                <h3>New Trend</h3>
                <a href="#">Xu hướng năm 2024</a>
              </div>
            </div>
          </section>
        )}

        {showSections.collection && (
          <section className="collection-section container">
            <div className="section-title">
              <h3>{option === 'Web Ecommerce' ? 'DEAL TRONG NGÀY' : 'SẢN PHẨM NỔI BẬT'}</h3>
              <a href="#">Xem tất cả</a>
            </div>
            <div className="product-grid">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="product-card">
                   <div className="img-wrapper">
                     <img src={images[`product${(i % 3) + 1}`]} alt={`Product ${i}`} />
                     <button className="add-to-cart">MUA NGAY</button>
                   </div>
                   <h4>Sản phẩm cao cấp #{i}</h4>
                   <p className="price">990,000đ <span className="old-price">1,200,000đ</span></p>
                 </div>
               ))}
            </div>
          </section>
        )}

        {showSections.policy && (
          <section className="policy-section container">
            <div className="policy-item">
              <span className="icon">🚚</span>
              <div>
                <h5>Giao hàng nhanh</h5>
                <p>Miễn phí toàn quốc</p>
              </div>
            </div>
            <div className="policy-item">
              <span className="icon">🔄</span>
              <div>
                <h5>Đổi trả dễ dàng</h5>
                <p>Trong vòng 7 ngày</p>
              </div>
            </div>
            <div className="policy-item">
              <span className="icon">💳</span>
              <div>
                <h5>Thanh toán an toàn</h5>
                <p>100% bảo mật</p>
              </div>
            </div>
          </section>
        )}
      </main>

      {showSections.footer && (
        <footer className="theme-footer">
          <div className="container">
            <div className="footer-col">
              <h4>Về {brandName}</h4>
              <p>Thương hiệu đại diện cho sự tinh tế và đẳng cấp.</p>
            </div>
            <div className="footer-col">
              <h4>Hỗ trợ</h4>
              <ul>
                <li>Chính sách mua hàng</li>
                <li>Câu hỏi thường gặp</li>
                <li>Hướng dẫn chọn size</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Bản tin</h4>
              <p>Đăng ký nhận khuyến mãi</p>
              <div className="newsletter">
                <input type="text" placeholder="Email của bạn" />
                <button>→</button>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <p>© 2024 {brandName}. Haravan Demo Powerd by Antigravity</p>
          </div>
        </footer>
      )}

      {/* Styled JSX for the preview */}
      <style dangerouslySetInnerHTML={{ __html: `
        .haravan-theme { 
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        
        .theme-header { border-bottom: 1px solid #eee; padding: 20px 0; background: #fff; position: sticky; top: 0; z-index: 100; }
        .theme-header .container { display: flex; justify-content: space-between; align-items: center; }
        .theme-header nav a { margin: 0 15px; text-decoration: none; color: #333; font-weight: 500; font-size: 13px; }
        .theme-header h2 { font-family: 'Outfit', sans-serif; letter-spacing: 2px; }
        .theme-header img { max-height: 40px; }
        
        .hero-section { position: relative; height: 500px; display: flex; align-items: center; overflow: hidden; }
        .hero-section.full-height { height: 700px; }
        .hero-section img { position: absolute; width: 100%; height: 100%; object-fit: cover; z-index: 1; }
        .hero-content { position: relative; z-index: 2; padding: 0 60px; max-width: 600px; color: #fff; }
        .hero-content h1 { font-size: 48px; font-family: 'Outfit', sans-serif; margin: 10px 0; }
        .hero-content .subtitle { letter-spacing: 3px; font-weight: 600; font-size: 14px; }
        .btn-primary { background: var(--primary); color: #fff; border: none; padding: 12px 30px; font-weight: 600; cursor: pointer; margin-top: 20px; transition: 0.3s; }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-2px); }
        
        .banner-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin: 60px auto; }
        .banner-item { position: relative; border-radius: 8px; overflow: hidden; height: 350px; }
        .banner-item img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
        .banner-item:hover img { transform: scale(1.05); }
        .banner-text { position: absolute; bottom: 30px; left: 30px; color: #fff; }
        .banner-text h3 { font-size: 24px; margin-bottom: 5px; }
        .banner-text a { color: #fff; font-size: 13px; border-bottom: 1px solid #fff; text-decoration: none; padding-bottom: 2px; }
        
        .section-title { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
        .section-title h3 { font-size: 24px; font-family: 'Outfit', sans-serif; }
        .section-title a { color: var(--primary); text-decoration: none; font-size: 14px; }
        
        .product-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 60px; }
        .product-card .img-wrapper { position: relative; overflow: hidden; border-radius: 12px; aspect-ratio: 3/4; border: 1px solid #f1f1f1; margin-bottom: 15px; }
        .product-card img { width: 100%; height: 100%; object-fit: cover; transition: 0.3s; }
        .product-card:hover img { transform: scale(1.05); }
        .add-to-cart { position: absolute; bottom: -50px; left: 10px; right: 10px; background: #fff; border: none; padding: 10px; font-size: 12px; font-weight: 600; transition: 0.3s; cursor: pointer; }
        .product-card:hover .add-to-cart { bottom: 10px; }
        .product-card h4 { font-size: 15px; color: #333; margin-bottom: 5px; }
        .price { font-weight: 700; color: var(--primary); }
        .old-price { text-decoration: line-through; color: #999; font-weight: 400; font-size: 13px; margin-left: 10px; }
        
        .policy-section { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 40px 0; border-top: 1px solid #eee; }
        .policy-item { display: flex; align-items: center; gap: 15px; }
        .policy-item .icon { font-size: 32px; }
        .policy-item h5 { font-size: 15px; margin-bottom: 2px; }
        .policy-item p { font-size: 13px; color: #666; }
        
        .theme-footer { background: #fafafa; padding: 60px 0 20px; border-top: 1px solid #eee; margin-top: 60px; }
        .theme-footer .container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 60px; }
        .theme-footer h4 { margin-bottom: 20px; font-size: 16px; }
        .theme-footer ul { list-style: none; }
        .theme-footer ul li { margin-bottom: 10px; color: #666; font-size: 14px; cursor: pointer; }
        .newsletter { display: flex; margin-top: 15px; }
        .newsletter input { flex: 1; padding: 10px; border: 1px solid #ddd; outline: none; }
        .newsletter button { background: var(--primary); color: #fff; border: none; padding: 0 15px; cursor: pointer; }
        .bottom-footer { text-align: center; margin-top: 60px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 12px; }
        
        /* Web Branding Styles */
        ${option === 'Web Branding' ? `
          .hero-content { background: rgba(0,0,0,0.4); padding: 40px; border-radius: 4px; backdrop-filter: blur(5px); }
          .section-title { text-align: center; justify-content: center; flex-direction: column; gap: 10px; margin-bottom: 50px; }
          .section-title h3 { font-size: 32px; }
          .product-grid { gap: 40px; }
        ` : ''}
      ` }} />
    </div>
    </div>
  );
};

export default Preview;
