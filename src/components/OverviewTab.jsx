import React from 'react';
import { 
  BookOpen, Users, Target, ShieldCheck, 
  GraduationCap, Briefcase, Building, ScrollText, 
  Award, BrainCircuit, CheckCircle2, Layers, BookType, Code 
} from 'lucide-react';

export const OverviewTab = () => {
  return (
    <div className="tab-pane active fade-in overview-container">
      {/* HEADER SECTION */}
      <div className="overview-header-card">
        <div className="course-title">
          <BookOpen size={28} className="blue-icon" />
          <h1>Bài học: Lesson 1 <span>(《新HSK教程1》第1课.pptx)</span></h1>
        </div>
        
        <div className="overview-meta-tags">
          <div className="meta-tag blue-tag">
            <Users size={16} />
            <span><strong>Đối tượng:</strong> Người học từ số 0 (Zero-Based Learners)</span>
          </div>
          <div className="meta-tag purple-tag">
            <Target size={16} />
            <span><strong>Khung chuẩn:</strong> HSK 3.0 Level 1</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: CLO MATRIX */}
      <div className="overview-section">
        <div className="section-title">
          <BrainCircuit size={24} className="purple-icon" />
          <h2>PHẦN 1: MA TRẬN PHÂN TÍCH TỔNG HỢP THEO CLO (MẮT XÍCH CHUẨN ĐẦU RA 1-1)</h2>
        </div>

        {/* ===================== CLO 1 ===================== */}
        <div className="clo-card fade-in">
          <div className="clo-header blue-gradient">
            <h3>📌 CLO 01: KÍNH NGỮ & XƯNG HÔ 1-1 TRONG GIAO TIẾP CÔNG SỞ</h3>
            <p><strong>Chuẩn Đầu Ra:</strong> Phân biệt chính xác và thực thi hành vi xưng hô kính ngữ giữa giao tiếp thông thường 你 (nǐ - Bạn) và giao tiếp trang trọng / kính trọng 您 (nín - Ngài/Thầy/Cô) trong môi trường công sở FDI.</p>
          </div>
          <div className="clo-body">
            
            {/* Tình huống & Giải phẫu */}
            <div className="info-grid">
              <div className="info-box">
                <h4 className="info-box-title"><Target size={16} /> Tình huống & Thước đo (TASK-01)</h4>
                <p><strong>Tình huống Giao tiếp:</strong> Đón tiếp nhân sự mới / Đối tác 王老师 tại sảnh văn phòng.</p>
                <p><strong>Rubric Chấp nhận:</strong> Thốt ra đúng <code>王老师，您好！</code> (Đúng biến điệu Thanh 3: nín hǎo).</p>
              </div>
              <div className="info-box">
                <h4 className="info-box-title"><GraduationCap size={16} /> Giải phẫu Năng lực (Skill-01)</h4>
                <p><strong>Tiểu năng lực:</strong> Nhận biết khoảng cách vị thế (cấp trên/thầy cô vs đồng nghiệp) để chuyển đổi từ 你 sang 您.</p>
                <p><strong>Thành tố (100% Closed Lexicon):</strong> 你 → 您. Kết hợp chức danh: 王老师 + 您好.</p>
              </div>
            </div>

            {/* Mô-đun Học tập */}
            <div className="module-box mt-4">
              <h4 className="info-box-title"><Layers size={16} /> Mô-đun Học tập (Curriculum JIT - Slides 1 - 9)</h4>
              <p><strong>[MÔ-ĐUN 1: GIỚI THIỆU & NGHỆ THUẬT CHÀO HỎI KÍNH NGỮ 1-1]</strong></p>
              <ul>
                <li><strong>Đầu ra:</strong> Chào thầy/cô và cấp trên chuẩn phong thái lịch sự.</li>
                <li><strong>Kiến thức cốt lõi:</strong> 你 (nǐ) | 好 (hǎo) | 您 (nín) | 王 (Wáng) | 老师 (lǎoshī)</li>
                <li><strong>Mẫu câu ứng dụng:</strong> 王老师，您好！ (Wáng lǎoshī, nín hǎo! - Vương lão sư, Nhẫn hảo! - Chào thầy/cô Vương!)</li>
              </ul>
              <div className="dialogue-preview mt-3 pt-3" style={{ borderTop: '1px dashed #fbcfe8' }}>
                <h5 style={{ color: '#be185d', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.95rem' }}>NỘI DUNG BÀI KHÓA 1 (TEXT 1 - 课文 1):</h5>
                <p style={{ fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '0.75rem' }}>Văn cảnh: 开学第一天，在办公室里，王一飞和AI助教小语打招呼。(On the first day of school, in the office, Wang Yifei was greeting the AI assistant Xiaoyu).</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <div>
                    <strong>👤 王一飞 (Wáng Yīfēi - Vương Nhất Phi):</strong><br/>
                    AI小语，你好！ (AI Xiǎoyǔ, nǐ hǎo! - AI Xiǎoyǔ, Nhĩ hảo! - Xin chào AI Tiểu Ngữ!)
                  </div>
                  <div>
                    <strong>🤖 小语 (Xiǎoyǔ - Tiểu Ngữ):</strong><br/>
                    王老师，你好！ (Wáng lǎoshī, nǐ hǎo! - Vương lão sư, Nhĩ hảo! - Xin chào thầy/cô Vương!)
                  </div>
                </div>
              </div>
            </div>

            {/* RCA */}
            <div className="rca-box mt-4">
              <h4 className="info-box-title"><ShieldCheck size={16} /> RCA Bẫy lỗi & Phương án khắc phục</h4>
              <ul>
                <li><strong>Đơn vị kiểm tra:</strong> Phân biệt 你 (nǐ) vs 您 (nín).</li>
                <li><strong>Bẫy lỗi:</strong> Học viên quen miệng dùng 你 chào người lớn/cấp trên (Vd: 王老师，你好！).</li>
                <li><strong>Root Cause:</strong> Chưa định hình tư duy vị thế văn hóa doanh nghiệp.</li>
                <li><strong>Khắc phục:</strong> Ép phản xạ công thức: <code>[Cấp trên/Họ tên + Chức danh] + 您好</code>.</li>
              </ul>
            </div>

            {/* Tiến trình Năng lực */}
            <div className="competency-box mt-4">
              <h4 className="info-box-title"><CheckCircle2 size={16} /> Tiến trình Năng lực</h4>
              <div className="steps-container">
                <span className="step-badge">🌱 Nhận biết: Phân biệt 你 / 您</span>
                <span className="step-badge">🌿 Thông hiểu: Ghép 王老师 + 您好</span>
                <span className="step-badge">🌸 Vận dụng: Chào đúng kính ngữ ngữ cảnh công sở</span>
                <span className="step-badge">🍎 Thành thục: Tự động chuyển đổi kính ngữ khi gặp cấp trên</span>
              </div>
            </div>

            {/* Từ vựng & Ngữ pháp */}
            <div className="info-grid mt-4">
              <div className="info-box vocab-list-box">
                <h4 className="info-box-title"><BookType size={16} /> Danh mục Từ vựng tích lũy</h4>
                <ul>
                  <li><strong>你</strong> (nǐ - Nhĩ - Bạn / Anh / Chị)</li>
                  <li><strong>好</strong> (hǎo - Hảo - Tốt / Khỏe)</li>
                  <li><strong>你好</strong> (nǐ hǎo - Nhĩ hảo - Xin chào)</li>
                  <li><strong>王</strong> (Wáng - Vương - Họ Vương)</li>
                  <li><strong>老师</strong> (lǎoshī - Lão sư - Thầy/Cô giáo)</li>
                  <li><strong>王老师</strong> (Wáng lǎoshī - Thầy/Cô giáo Vương)</li>
                  <li><strong>您</strong> (nín - Nhẫn - Ngài / Thầy / Cô)</li>
                </ul>
              </div>
              <div className="info-box grammar-list-box">
                <h4 className="info-box-title"><Code size={16} /> Cấu trúc Ngữ pháp</h4>
                <div className="grammar-card">
                  <h5>[Công thức 1: Cấu trúc Chào hỏi Cơ bản & Kính ngữ]</h5>
                  <code>[Đối tượng nhận lời chào] + 好</code>
                  <p><strong>Ví dụ ứng dụng:</strong></p>
                  <ul>
                    <li>你好 (Xin chào)</li>
                    <li>您好 (Xin chào ngài/thầy/cô)</li>
                    <li>大家好 (Chào mọi người)</li>
                    <li>王老师好 (Chào thầy/cô Vương)</li>
                    <li>同学们好 (Chào các bạn học)</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ===================== CLO 2 ===================== */}
        <div className="clo-card fade-in mt-6">
          <div className="clo-header purple-gradient">
            <h3>📌 CLO 02: CHÀO HỎI TẬP THỂ & HẬU TỐ SỐ NHIỀU "们"</h3>
            <p><strong>Chuẩn Đầu Ra:</strong> Áp dụng thành thạo hậu tố 们 (men - Môn) và từ tập thể 大家 (dàjiā) để chào hỏi nhóm, tập thể đồng nghiệp hoặc lớp học.</p>
          </div>
          <div className="clo-body">
            
            {/* Tình huống & Giải phẫu */}
            <div className="info-grid">
              <div className="info-box">
                <h4 className="info-box-title"><Target size={16} /> Tình huống & Thước đo (TASK-02)</h4>
                <p><strong>Tình huống Giao tiếp:</strong> Trình bày đầu buổi họp team / workshop doanh nghiệp.</p>
                <p><strong>Rubric Chấp nhận:</strong> Thốt ra đúng <code>大家好！</code> hoặc <code>同学们好！</code>.</p>
              </div>
              <div className="info-box">
                <h4 className="info-box-title"><GraduationCap size={16} /> Giải phẫu Năng lực (Skill-02)</h4>
                <p><strong>Tiểu năng lực:</strong> Ghép hậu tố số nhiều 们 vào danh từ chỉ người và sử dụng đại từ tập thể 大家.</p>
                <p><strong>Thành tố (100% Closed Lexicon):</strong> 你 → 你们; 同学 → 同学们; 大家.</p>
              </div>
            </div>

            {/* Mô-đun Học tập */}
            <div className="module-box mt-4">
              <h4 className="info-box-title"><Layers size={16} /> Mô-đun Học tập (Curriculum JIT - Slides 10 - 23)</h4>
              <p><strong>[MÔ-ĐUN 2: CHÀO TẬP THỂ & QUY TẮC SỐ NHIỀU "们"]</strong></p>
              <ul>
                <li><strong>Đầu ra:</strong> Bắt đầu cuộc họp nhóm / chào tập thể bạn học.</li>
                <li><strong>Kiến thức cốt lõi:</strong> 大家 (dàjiā) | 学生 (xuéshēng) | 同学 (tóngxué) | 们 (men)</li>
                <li><strong>Mẫu câu ứng dụng:</strong> 大家好！ (dàjiā hǎo! - Đại gia hảo! - Chào mọi người!) | 同学们好！ (tóngxuémen hǎo! - Đồng học môn hảo! - Chào các bạn học!)</li>
              </ul>
              <div className="dialogue-preview mt-3 pt-3" style={{ borderTop: '1px dashed #fbcfe8' }}>
                <h5 style={{ color: '#be185d', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.95rem' }}>NỘI DUNG BÀI KHÓA 2 (TEXT 2 - 课文 2):</h5>
                <p style={{ fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Văn cảnh: 开学第一天，课堂上，学生们学习打招呼用语。(On the first day of school, in class, the students were learning greeting expressions).</p>
                <p style={{ background: '#fdf4ff', padding: '0.5rem', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '0.75rem', borderLeft: '3px solid #d946ef' }}>
                  <strong>Mẹo Tiểu Ngữ (小语助力 - Xiaoyu's Tip):</strong> “您”，敬称，对年长者或尊敬的人使用。 ("您" is an honorific pronoun used to address elders or individuals you respect).
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <div>
                    <strong>👤 王一飞 (Wáng Yīfēi - Vương Nhất Phi):</strong><br/>
                    大家好！ (Dàjiā hǎo! - Đại gia hảo! - Chào mọi người!)
                  </div>
                  <div>
                    <strong>👥 学生们 (Xuéshēngmen - Học sinh môn - Các học sinh):</strong><br/>
                    老师，您好！ (Lǎoshī, nín hǎo! - Lão sư, Nhẫn hảo! - Chào thầy/cô!)
                  </div>
                  <div>
                    <strong>🤖 小语 (Xiǎoyǔ - Tiểu Ngữ):</strong><br/>
                    你们好！ (Nǐmen hǎo! - Nhĩ môn hảo! - Chào các bạn!)
                  </div>
                  <div>
                    <strong>👥 学生们 (Xuéshēngmen - Học sinh môn - Các học sinh):</strong><br/>
                    你好，小语！ (Nǐ hǎo, Xiǎoyǔ! - Nhĩ hảo, Tiểu Ngữ! - Chào Tiểu Ngữ!)
                  </div>
                </div>
              </div>
            </div>

            {/* RCA */}
            <div className="rca-box mt-4">
              <h4 className="info-box-title"><ShieldCheck size={16} /> RCA Bẫy lỗi & Phương án khắc phục</h4>
              <ul>
                <li><strong>Đơn vị kiểm tra:</strong> Sử dụng 大家 và 们.</li>
                <li><strong>Bẫy lỗi:</strong> Học viên ghép sai vị trí 们 như 们同学 hoặc chào từng người thay vì xưng tập thể.</li>
                <li><strong>Root Cause:</strong> Nhầm lẫn vị trí hậu tố chỉ số nhiều (nghĩ 们 đứng trước như từ "các" trong tiếng Việt).</li>
                <li><strong>Khắc phục:</strong> Khung cố định: <code>[Danh từ/Đại từ chỉ người] + 们</code>.</li>
              </ul>
            </div>

            {/* Tiến trình Năng lực */}
            <div className="competency-box mt-4">
              <h4 className="info-box-title"><CheckCircle2 size={16} /> Tiến trình Năng lực</h4>
              <div className="steps-container">
                <span className="step-badge">🌱 Nhận biết: Thuộc từ 大家 / 们</span>
                <span className="step-badge">🌿 Thông hiểu: Nắm vị trí 们 đứng sau danh từ chỉ người</span>
                <span className="step-badge">🌸 Vận dụng: Phát ngôn thành thạo 大家好 / 同学们好</span>
                <span className="step-badge">🍎 Thành thục: Quản lý giao tiếp và khởi động họp nhóm</span>
              </div>
            </div>

            {/* Từ vựng & Ngữ pháp */}
            <div className="info-grid mt-4">
              <div className="info-box vocab-list-box">
                <h4 className="info-box-title"><BookType size={16} /> Danh mục Từ vựng tích lũy</h4>
                <ul>
                  <li><strong>大家</strong> (dàjiā - Mọi người)</li>
                  <li><strong>学生</strong> (xuéshēng - Học sinh/Sinh viên)</li>
                  <li><strong>同学</strong> (tóngxué - Bạn học)</li>
                  <li><strong>们</strong> (men - Các / Hậu tố số nhiều)</li>
                  <li><strong>你们</strong> (nǐmen - Các bạn)</li>
                </ul>
              </div>
              <div className="info-box grammar-list-box">
                <h4 className="info-box-title"><Code size={16} /> Cấu trúc Ngữ pháp</h4>
                <div className="grammar-card">
                  <h5>[Công thức 2: Hậu tố Biểu đạt Số nhiều Chỉ người]</h5>
                  <code>[Đại từ / Danh từ chỉ người] + 们</code>
                  <p><strong>Ví dụ ứng dụng:</strong></p>
                  <ul>
                    <li>你们 (Các bạn)</li>
                    <li>同学们 (Các bạn học)</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ===================== CLO 3 ===================== */}
        <div className="clo-card fade-in mt-6">
          <div className="clo-header green-gradient">
            <h3>📌 CLO 03: CHUỖI PHẢN XẠ LỄ NGHI CẢM ƠN, ĐÁP LỜI & TẠM BIỆT</h3>
            <p><strong>Chuẩn Đầu Ra:</strong> Phản xạ tự nhiên chuỗi giao tiếp văn phòng: Chào hỏi → Cảm ơn & Đáp lời → Tạm biệt đúng ngữ cảnh văn hóa Trung Hoa.</p>
          </div>
          <div className="clo-body">
            
            {/* Tình huống & Giải phẫu */}
            <div className="info-grid">
              <div className="info-box">
                <h4 className="info-box-title"><Target size={16} /> Tình huống & Thước đo (TASK-03)</h4>
                <p><strong>Tình huống Giao tiếp:</strong> Khép lại buổi giao dịch / hỗ trợ đồng nghiệp.</p>
                <p><strong>Rubric Chấp nhận:</strong> Thực hiện chuẩn thoại 3 bước: <code>谢谢！</code> → <code>不客气！</code> → <code>再见！</code>.</p>
              </div>
              <div className="info-box">
                <h4 className="info-box-title"><GraduationCap size={16} /> Giải phẫu Năng lực (Skill-03 & 04)</h4>
                <p><strong>Tiểu năng lực:</strong> Kích hoạt cặp thoại cảm ơn và đáp lời lịch sự không cần suy nghĩ và phát âm chuẩn ngữ điệu tạm biệt.</p>
                <p><strong>Thành tố (100% Closed Lexicon):</strong> 谢谢 / 谢谢你 / 谢谢大家 → 不客气 → 再见.</p>
              </div>
            </div>

            {/* Mô-đun Học tập */}
            <div className="module-box mt-4">
              <h4 className="info-box-title"><Layers size={16} /> Mô-đun Học tập (Curriculum JIT - Slides 24 - 33)</h4>
              <p><strong>[MÔ-ĐUN 3: THỰC THI CHUỖI CẢM ƠN, ĐÁP LỜI & TẠM BIỆT]</strong></p>
              <ul>
                <li><strong>Đầu ra:</strong> Khép lại chuỗi giao tiếp lịch sự chuẩn văn hóa văn phòng.</li>
                <li><strong>Kiến thức cốt lõi:</strong> 谢谢 (xièxie) | 不客气 (bú kèqi) | 同学 (tóngxué) | 再见 (zàijiàn)</li>
                <li><strong>Mẫu câu ứng dụng:</strong> 谢谢大家！ (xièxie dàjiā! - Tạ tạ đại gia! - Cảm ơn mọi người!) → 不客气！ (bú kèqi! - Bất khách khí! - Không có gì!) → 再见！ (zàijiàn! - Tái kiến! - Tạm biệt!)</li>
              </ul>
              <div className="dialogue-preview mt-3 pt-3" style={{ borderTop: '1px dashed #fbcfe8' }}>
                <h5 style={{ color: '#be185d', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.95rem' }}>NỘI DUNG BÀI KHÓA 3 (TEXT 3 - 课文 3):</h5>
                <p style={{ fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '0.75rem' }}>Văn cảnh: 开学第一天，课堂上，学生们学习致谢语、告别语。(On the first day of school, in class, the students were learning expressions of gratitude and farewell).</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <div>
                    <strong>👥 学生们 (Xuéshēngmen - Học sinh môn - Các học sinh):</strong><br/>
                    谢谢！ (Xièxie! - Tạ tạ! - Cảm ơn!)
                  </div>
                  <div>
                    <strong>🤖 小语 (Xiǎoyǔ - Tiểu Ngữ):</strong><br/>
                    不客气！ (Bú kèqi! - Bất khách khí! - Không có gì!)
                  </div>
                  <div>
                    <strong>👤 王一飞 (Wáng Yīfēi - Vương Nhất Phi):</strong><br/>
                    同学们，再见！ (Tóngxuémen, zàijiàn! - Đồng học môn, Tái kiến! - Chào tạm biệt các bạn học!)
                  </div>
                  <div>
                    <strong>👥 学生们 (Xuéshēngmen - Học sinh môn - Các học sinh):</strong><br/>
                    老师，再见！ (Lǎoshī, zàijiàn! - Lão sư, Tái kiến! - Chào tạm biệt thầy/cô!)
                  </div>
                </div>
              </div>
            </div>

            {/* RCA */}
            <div className="rca-box mt-4">
              <h4 className="info-box-title"><ShieldCheck size={16} /> RCA Bẫy lỗi & Phương án khắc phục</h4>
              <ul>
                <li><strong>Đơn vị kiểm tra:</strong> Phản xạ 谢谢 → 不客气 → 再见.</li>
                <li><strong>Bẫy lỗi:</strong> Im lặng khi đối phương nói 谢谢 hoặc phát âm sai thanh điệu 再见.</li>
                <li><strong>Root Cause:</strong> Thiếu phản xạ cặp thoại đóng và chưa làm chủ thanh 4 kép.</li>
                <li><strong>Khắc phục:</strong> Luyện chuỗi phản xạ 3 bước liên hoàn.</li>
              </ul>
            </div>

            {/* Tiến trình Năng lực */}
            <div className="competency-box mt-4">
              <h4 className="info-box-title"><CheckCircle2 size={16} /> Tiến trình Năng lực</h4>
              <div className="steps-container">
                <span className="step-badge">🌱 Nhận biết: Thuộc 3 cụm thoại 谢谢, 不客气, 再见</span>
                <span className="step-badge">🌿 Thông hiểu: Hiểu logic cặp đối thoại cảm ơn - đáp lời</span>
                <span className="step-badge">🌸 Vận dụng: Phản xạ đúng lượt thoại trong giao dịch</span>
                <span className="step-badge">🍎 Thành thục: Giao tiếp văn minh, tự nhiên chuẩn văn hóa</span>
              </div>
            </div>

            {/* Từ vựng & Ngữ pháp */}
            <div className="info-grid mt-4">
              <div className="info-box vocab-list-box">
                <h4 className="info-box-title"><BookType size={16} /> Danh mục Từ vựng tích lũy</h4>
                <ul>
                  <li><strong>谢谢</strong> (xièxie - Cảm ơn)</li>
                  <li><strong>不客气</strong> (bú kèqi - Không có gì)</li>
                  <li><strong>再见</strong> (zàijiàn - Tạm biệt)</li>
                </ul>
              </div>
              <div className="info-box grammar-list-box">
                <h4 className="info-box-title"><Code size={16} /> Cấu trúc Ngữ pháp</h4>
                <div className="grammar-card mb-2">
                  <h5>[Công thức 3: Chuỗi Thoại Cảm ơn & Đáp lời]</h5>
                  <p>Lượt 1: 谢谢 / 谢谢你 / 谢谢大家</p>
                  <p>Lượt 2: 不客气</p>
                </div>
                <div className="grammar-card">
                  <h5>[Công thức 4: Cụm Thoại Tạm biệt]</h5>
                  <p>再见</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 2: MICRO-CREDENTIALS */}
      <div className="overview-section mt-8">
        <div className="section-title">
          <Award size={24} className="orange-icon" />
          <h2>PHẦN 2: CHỨNG CHỈ VI MÔ NỐI LIỀN THỊ TRƯỜNG LAO ĐỘNG (CREDENTIALS TO WORKFORCE)</h2>
        </div>

        <div className="table-responsive">
          <table className="credentials-table">
            <thead>
              <tr>
                <th>Huy hiệu Vi mô (Micro-Badge)</th>
                <th>Tiêu chuẩn Kỹ năng</th>
                <th>Tiêu chí Xác minh</th>
                <th>Giá trị Ứng dụng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>MB-01: Workplace Etiquette Starter</strong></td>
                <td>Thành thục kỹ năng chào hỏi kính ngữ và giao tiếp lễ nghi ban đầu với người Trung Quốc.</td>
                <td>Bào chế 100% thoại chính xác trong tình huống đóng vai giao tiếp 1-1 với cấp trên.</td>
                <td>Đảm bảo tính chuyên nghiệp cho Lễ tân, Trợ lý, HR khi đón tiếp nhân sự/chuyên gia TQ.</td>
              </tr>
              <tr>
                <td><strong>MB-02: Team Meeting Facilitator - Level 1</strong></td>
                <td>Thành thục biểu đạt chào nhóm, chào tập thể và xưng hô số nhiều trong họp hành.</td>
                <td>Thực thi bài nói mở đầu họp team 30 giây dùng đúng 大家好 và 同学们.</td>
                <td>Năng lực điều phối cuộc họp, hội thảo nội bộ trong doanh nghiệp FDI.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h3 style={{ fontSize: '1.2rem', color: '#1e293b', marginBottom: '1rem', fontWeight: 'bold' }}>5.2 Ba Tình huống Ứng dụng Thực chiến tại Doanh nghiệp FDI / Xuất nhập khẩu / Nhân sự</h3>
          
          <div className="scenario-card mb-4" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem' }}>
            <h4 style={{ color: '#0f172a', fontWeight: 'bold', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🏢 Tình huống 1: Bộ phận Lễ tân / Trợ lý Doanh nghiệp FDI đón tiếp Giám đốc/Chuyên gia người Trung Quốc</h4>
            <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#475569' }}>Kịch bản: Chuyên gia 王老师 (Wáng lǎoshī - Vương lão sư) vừa bước vào văn phòng công ty. Nhân sự Lễ tân thực hiện quy trình đón tiếp.</p>
            <div style={{ background: 'white', padding: '1rem', borderRadius: '6px', border: '1px dashed #cbd5e1' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#334155' }}>Chuỗi hội thoại chuẩn (100% Closed Lexicon):</p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Lễ tân:</strong> 王老师，您好！ (Wáng lǎoshī, nín hǎo! - Vương lão sư, Nhẫn hảo! - Chào thầy/cô Vương!)</li>
                <li><strong>Chuyên gia:</strong> 你好！ (nǐ hǎo! - Nhĩ hảo! - Chào bạn!)</li>
                <li><strong>Lễ tân:</strong> 谢谢您！ (xièxie nín! - Tạ tạ nhẫn! - Cảm ơn thầy/cô!)</li>
                <li><strong>Chuyên gia:</strong> 不客气！ (bú kèqi! - Bất khách khí! - Không có gì!)</li>
                <li style={{ marginTop: '0.5rem', color: '#64748b' }}><em>Khi Chuyên gia ra về:</em> 王老师，再见！ (Wáng lǎoshī, zàijiàn! - Vương lão sư, Tái kiến! - Tạm biệt thầy/cô Vương!)</li>
              </ul>
            </div>
          </div>
          
          <div className="scenario-card mb-4" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem' }}>
            <h4 style={{ color: '#0f172a', fontWeight: 'bold', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>👥 Tình huống 2: Trưởng nhóm Nhân sự (HR Manager) khai mạc Buổi Đào tạo / Workshop Nội bộ</h4>
            <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#475569' }}>Kịch bản: Trưởng nhóm đứng trước toàn thể nhân viên và học viên Trung Quốc - Việt Nam để bắt đầu buổi workshop.</p>
            <div style={{ background: 'white', padding: '1rem', borderRadius: '6px', border: '1px dashed #cbd5e1' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#334155' }}>Chuỗi hội thoại chuẩn (100% Closed Lexicon):</p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>HR Manager:</strong> 大家好！ (dàjiā hǎo! - Đại gia hảo! - Chào mọi người!)</li>
                <li><strong>Toàn thể phòng:</strong> 老师好！ (lǎoshī hǎo! - Lão sư hảo! - Chào thầy/cô!)</li>
                <li><strong>HR Manager:</strong> 同学们好！ (tóngxuémen hǎo! - Đồng học môn hảo! - Chào các bạn học!)</li>
                <li><strong>Toàn thể phòng:</strong> 谢谢老师！ (xièxie lǎoshī! - Tạ tạ lão sư! - Cảm ơn thầy/cô!)</li>
                <li><strong>HR Manager:</strong> 不客气！ (bú kèqi! - Bất khách khí! - Không có gì!)</li>
              </ul>
            </div>
          </div>

          <div className="scenario-card mb-4" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem' }}>
            <h4 style={{ color: '#0f172a', fontWeight: 'bold', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📦 Tình huống 3: Nhân sự Xuất Nhập khẩu Bàn giao Hồ sơ và Tạm biệt Đội ngũ Đối tác</h4>
            <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#475569' }}>Kịch bản: Nhân sự XNK bàn giao xong chứng từ giao nhận hàng hóa cho nhóm đại diện đối tác 你们 (nǐmen - Nhĩ môn - Các bạn).</p>
            <div style={{ background: 'white', padding: '1rem', borderRadius: '6px', border: '1px dashed #cbd5e1' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#334155' }}>Chuỗi hội thoại chuẩn (100% Closed Lexicon):</p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Nhân sự XNK:</strong> 谢谢你们！ (xièxie nǐmen! - Tạ tạ nhĩ môn! - Cảm ơn các bạn!)</li>
                <li><strong>Đội ngũ đối tác:</strong> 不客气！ (bú kèqi! - Bất khách khí! - Không có gì!)</li>
                <li><strong>Nhân sự XNK:</strong> 再见！ (zàijiàn! - Tái kiến! - Tạm biệt / Hẹn gặp lại!)</li>
                <li><strong>Đội ngũ đối tác:</strong> 再见！ (zàijiàn! - Tái kiến! - Tạm biệt!)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: ADAPTIVE QUESTION BANK */}
      <div className="overview-section mt-8 mb-8">
        <div className="section-title">
          <ScrollText size={24} className="red-icon" />
          <h2>PHẦN 3: NGÂN HÀNG BÀI THI THÍCH ỨNG CHUẨN MA TRẬN 12 CÂU</h2>
        </div>
        
        <div className="info-banner mb-6">
          <ShieldCheck size={20} className="green-icon" />
          <div>
            <strong>Cấu trúc Ma trận Thống nhất:</strong> 4 Cấp độ Tiến trình Năng lực (Nhận biết → Thông hiểu → Vận dụng → Thành thục) × 3 Chuẩn Đầu Ra (CLO-1, CLO-2, CLO-3) = Đúng 12 Câu hỏi Thích ứng.<br/>
            <strong>Rào cản tuyệt đối:</strong> 100% câu hỏi, đáp án tuân thủ Closed Lexicon Bài 1.
          </div>
        </div>

        <div className="table-responsive">
          <table className="matrix-table">
            <thead>
              <tr>
                <th>Cấp độ Tiến trình</th>
                <th>Mã câu hỏi</th>
                <th>Thuộc CLO</th>
                <th>Dạng bài</th>
                <th>Mục tiêu Đánh giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="3" className="level-cell"><span className="level-badge level-1">🌱 Nhận biết</span></td>
                <td>Câu 1.1</td><td>CLO-1 (Kính ngữ 1-1)</td><td>Trắc nghiệm</td><td>Nhận diện đại từ kính ngữ 您</td>
              </tr>
              <tr>
                <td>Câu 1.2</td><td>CLO-2 (Chào tập thể)</td><td>Trắc nghiệm</td><td>Nhận diện đại từ tập thể 大家</td>
              </tr>
              <tr>
                <td>Câu 1.3</td><td>CLO-3 (Chuỗi Lễ nghi)</td><td>Trắc nghiệm</td><td>Nhận diện cụm từ đáp lời 不客气</td>
              </tr>
              
              <tr>
                <td rowSpan="3" className="level-cell"><span className="level-badge level-2">🌿 Thông hiểu</span></td>
                <td>Câu 2.1</td><td>CLO-1 (Kính ngữ 1-1)</td><td>Trắc nghiệm</td><td>Thông hiểu ngữ cảnh kính ngữ 王老师，您好！</td>
              </tr>
              <tr>
                <td>Câu 2.2</td><td>CLO-2 (Chào tập thể)</td><td>Trắc nghiệm</td><td>Thông hiểu vị trí hậu tố số nhiều 们</td>
              </tr>
              <tr>
                <td>Câu 2.3</td><td>CLO-3 (Chuỗi Lễ nghi)</td><td>Trắc nghiệm</td><td>Thông hiểu phản xạ kết thúc giao tiếp 再见</td>
              </tr>

              <tr>
                <td rowSpan="3" className="level-cell"><span className="level-badge level-3">🌸 Vận dụng</span></td>
                <td>Câu 3.1</td><td>CLO-1 (Kính ngữ 1-1)</td><td>Điền từ</td><td>Vận dụng điền kính ngữ 您好</td>
              </tr>
              <tr>
                <td>Câu 3.2</td><td>CLO-2 (Chào tập thể)</td><td>Điền từ</td><td>Vận dụng điền từ chào tập thể 大家好</td>
              </tr>
              <tr>
                <td>Câu 3.3</td><td>CLO-3 (Chuỗi Lễ nghi)</td><td>Sắp xếp</td><td>Sắp xếp tiến trình thoại 3 bước</td>
              </tr>

              <tr>
                <td rowSpan="3" className="level-cell"><span className="level-badge level-4">🍎 Thành thục</span></td>
                <td>Câu 4.1</td><td>CLO-1 (Kính ngữ 1-1)</td><td>Phân tích RCA</td><td>Chẩn đoán & sửa lỗi kính ngữ 你 vs 您</td>
              </tr>
              <tr>
                <td>Câu 4.2</td><td>CLO-2 (Chào tập thể)</td><td>Phân tích RCA</td><td>Chẩn đoán & sửa lỗi vị trí 们</td>
              </tr>
              <tr>
                <td>Câu 4.3</td><td>CLO-3 (Chuỗi Lễ nghi)</td><td>Kịch bản thực chiến</td><td>Xây dựng kịch bản 3 bước hoàn chỉnh</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
