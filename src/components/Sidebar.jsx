import React from 'react';

const Sidebar = ({ config, onUpdate, onToggle }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate({ [name]: value });
  };

  const sectionsMap = {
    slider: 'Hero Slider',
    category: 'Danh mục (Icons)',
    lookbook: 'Góc bếp (Lookbook)',
    collection: 'Sản phẩm mới',
    trust: 'Vùng tin cậy (Trust)',
    news: 'Tin tức & Media',
    footer: 'Chân trang'
  };

  return (
    <div className="sidebar">
      <h1>Haravan Demo Builder</h1>
      <p className="subtitle">Mẫu Demo nhanh cho Team Sales</p>

      <div className="form-group">
        <label>Tên Thương Hiệu</label>
        <input 
          type="text" 
          name="brandName" 
          value={config.brandName} 
          onChange={handleChange} 
          placeholder="VD: Lux Mode"
        />
      </div>

      <div className="form-group">
        <label>Logo URL (Tùy chọn)</label>
        <input 
          type="text" 
          name="brandLogo" 
          value={config.brandLogo} 
          onChange={handleChange} 
          placeholder="https://example.com/logo.png"
        />
      </div>

      <div className="form-group">
        <label>Lĩnh vực</label>
        <select name="industry" value={config.industry} onChange={handleChange}>
          <option value="Home">Nội thất & Gia dụng</option>
          <option value="Fashion">Thời trang & Phụ kiện</option>
          <option value="Beauty">Mỹ phẩm & Làm đẹp</option>
          <option value="Tech">Công nghệ & Điện tử</option>
        </select>
      </div>

      <div className="form-group">
        <label>Màu sắc thương hiệu</label>
        <div className="color-input-grid">
          <div className="color-picker-wrapper">
            <input 
              type="color" 
              name="primaryColor" 
              value={config.primaryColor} 
              onChange={handleChange} 
            />
            <span>{config.primaryColor}</span>
          </div>
          <div className="color-picker-wrapper">
            <input 
              type="color" 
              name="secondaryColor" 
              value={config.secondaryColor} 
              onChange={handleChange} 
            />
            <span>{config.secondaryColor}</span>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>Mục tiêu Demo</label>
        <select name="option" value={config.option} onChange={handleChange}>
          <option value="Web Branding">Web Branding (Tập trung thương hiệu)</option>
          <option value="Web Ecommerce">Web Ecommerce (Tập trung bán hàng)</option>
        </select>
      </div>

      <div className="section-toggles">
        <label style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '12px', display: 'block' }}>Hệ thống Sections (Library)</label>
        
        {Object.keys(sectionsMap).map(section => (
          <div 
            key={section} 
            className={`toggle-item ${config.showSections[section] ? 'active' : ''}`}
            onClick={() => onToggle(section)}
          >
            <span style={{ fontSize: '12px' }}>{sectionsMap[section]}</span>
            <input type="checkbox" checked={config.showSections[section]} readOnly />
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
        <button className="save-btn" onClick={() => alert('Đã lưu cấu hình Demo! Đang tạo bản xem trước...')}>
          ⚡ TẠO DEMO NGAY
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
