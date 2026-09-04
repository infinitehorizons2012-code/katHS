import React from 'react';
import { 
  BookOpen, Users, Target, ShieldCheck, 
  GraduationCap, Briefcase, Building, ScrollText, 
  Award, BrainCircuit, CheckCircle2, Layers, BookType, Code, Lock 
} from 'lucide-react';

const Lesson1Overview = () => {
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

const Lesson2Overview = () => {
  return (
    <div className="tab-pane active fade-in overview-container">
      <div className="overview-header-card">
        <div className="course-title">
          <BookOpen size={28} className="blue-icon" />
          <h1>Bài học: Lesson 2 <span>(《新HSK教程1》第2课 我叫李文.pptx)</span></h1>
        </div>
        <div className="overview-meta-tags">
          <div className="meta-tag blue-tag"><Users size={16} /><span><strong>Đối tượng:</strong> Người học từ số 0 (Zero-Based Learners)</span></div>
          <div className="meta-tag purple-tag"><Target size={16} /><span><strong>Khung chuẩn:</strong> HSK 3.0 Level 1</span></div>
        </div>
      </div>
      
      {/* SECTION 1 */}
      <div className="overview-section">
        <div className="section-title"><BrainCircuit size={24} className="purple-icon" /><h2>PHẦN 1: MA TRẬN PHÂN TÍCH TỔNG HỢP THEO CLO (MẮT XÍCH CHUẨN ĐẦU RA 1-1)</h2></div>
        
        {/* ===================== CLO 1 ===================== */}
        <div className="clo-card fade-in">
          <div className="clo-header blue-gradient">
            <h3>📌 CLO 01: HỎI VÀ TỰ GIỚI THIỆU HỌ TÊN TRONG GIAO TIẾP DÂN SỰ & CÔNG SỞ</h3>
            <p><strong>Chuẩn Đầu Ra:</strong> Phân biệt cấu trúc trật tự từ tiếng Trung [Chủ ngữ] + 叫 + [Tên] để hỏi tên lịch sự 请问，你叫什么名字？ (Qǐngwèn, nǐ jiào shénme míngzi?) và tự giới thiệu bản thân 我叫... (Wǒ jiào...) trong môi trường công sở FDI và đối ngoại.</p>
          </div>
          <div className="clo-body">
            
            {/* Tình huống & Giải phẫu */}
            <div className="info-grid">
              <div className="info-box">
                <h4 className="info-box-title"><Target size={16} /> Tình huống & Thước đo (TASK-01)</h4>
                <p><strong>Tình huống Giao tiếp:</strong> Bàn giao danh thiếp / làm quen đồng nghiệp mới 李文 (Lǐ Wén - Lý Văn) tại phòng họp hoặc lớp đào tạo nội bộ.</p>
                <p><strong>Rubric Chấp nhận:</strong> Phát ngôn đúng ngữ điệu câu hỏi lịch sự <code>请问，你叫什么名字？</code> và đáp chuẩn phản xạ <code>我叫李文。</code>.</p>
              </div>
              <div className="info-box">
                <h4 className="info-box-title"><GraduationCap size={16} /> Giải phẫu Năng lực (Skill-01)</h4>
                <p><strong>Tiểu năng lực:</strong> Sử dụng từ lịch sự 请问 kết hợp với đại từ nghi vấn 什么 và danh từ 名字 để đặt câu hỏi danh tính chính xác.</p>
                <p><strong>Thành tố (100% Closed Lexicon):</strong> 请问, 叫, 什么, 名字, 我.</p>
              </div>
            </div>

            {/* Mô-đun Học tập */}
            <div className="module-box mt-4">
              <h4 className="info-box-title"><Layers size={16} /> Mô-đun Học tập (Curriculum JIT - Slides 1 - 16)</h4>
              <p><strong>[MÔ-ĐUN 1: NGHỆ THUẬT HỎI TÊN LỊCH SỰ & TỰ GIỚI THIỆU BẢN THÂN]</strong></p>
              <ul>
                <li><strong>Đầu ra:</strong> Tự tin mở lời hỏi tên đồng nghiệp/đối tác và giới thiệu họ tên cá nhân chuẩn xác.</li>
                <li><strong>Kiến thức cốt lõi:</strong> 请问 (qǐngwèn) | 你 (nǐ) | 叫 (jiào) | 什么 (shénme) | 名字 (míngzi) | 我 (wǒ)</li>
                <li><strong>Mẫu câu ứng dụng:</strong> 请问，你叫什么名字？ → 我叫李文。</li>
              </ul>
              <div className="dialogue-preview mt-3 pt-3" style={{ borderTop: '1px dashed #fbcfe8' }}>
                <h5 style={{ color: '#be185d', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.95rem' }}>NỘI DUNG BÀI KHÓA 1 (TEXT 1 - 课文 1):</h5>
                <p style={{ fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '0.75rem' }}>Văn cảnh: 在教室里，王一飞在认识学生。(In the classroom, Wang Yifei was getting to know the students).</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <div>
                    <strong>👤 王一飞 (Wáng Yīfēi - Vương Nhất Phi):</strong><br/>
                    请问，你叫什么名字？ (Qǐngwèn, nǐ jiào shénme míngzi? - Thỉnh vấn, nhĩ khiếu thập ma danh tự? - Xin hỏi, bạn tên là gì?)
                  </div>
                  <div>
                    <strong>👤 李文 (Lǐ Wén - Lý Văn):</strong><br/>
                    我叫李文。 (Wǒ jiào Lǐ Wén. - Ngã khiếu Lý Văn. - Tôi tên là Lý Văn.)
                  </div>
                </div>
              </div>
            </div>

            {/* RCA */}
            <div className="rca-box mt-4">
              <h4 className="info-box-title"><ShieldCheck size={16} /> RCA Bẫy lỗi & Phương án khắc phục</h4>
              <ul>
                <li><strong>Đơn vị kiểm tra:</strong> Đặt từ nghi vấn 什么 đúng vị trí bổ ngữ trước danh từ 名字.</li>
                <li><strong>Bẫy lỗi:</strong> Học viên bị ảnh hưởng bởi ngữ pháp tiếng Anh/Việt đặt 什么 ở cuối câu 你叫名字什么？.</li>
                <li><strong>Root Cause:</strong> Nhầm lẫn trật tự từ bổ ngữ tiếng Trung.</li>
                <li><strong>Khắc phục:</strong> Ép khung phản xạ cố định: <code>[Chủ ngữ] + 叫什么名字？</code>.</li>
              </ul>
            </div>

            {/* Tiến trình Năng lực */}
            <div className="competency-box mt-4">
              <h4 className="info-box-title"><CheckCircle2 size={16} /> Tiến trình Năng lực</h4>
              <div className="steps-container">
                <span className="step-badge">🌱 Nhận biết: Thuộc 6 từ vựng 请问, 你, 叫, 什么, 名字, 我</span>
                <span className="step-badge">🌿 Thông hiểu: Nắm vững trật tự đại từ nghi vấn 什么 đứng trước 名字</span>
                <span className="step-badge">🌸 Vận dụng: Đặt câu hỏi và giới thiệu bản thân trong giao tế</span>
                <span className="step-badge">🍎 Thành thục: Tự động mở lời giao tiếp dân sự chuẩn tác phong văn minh</span>
              </div>
            </div>

            {/* Từ vựng & Ngữ pháp */}
            <div className="info-grid mt-4">
              <div className="info-box vocab-list-box">
                <h4 className="info-box-title"><BookType size={16} /> Danh mục Từ vựng tích lũy</h4>
                <ul>
                  <li><strong>请问</strong> (qǐngwèn - Xin hỏi)</li>
                  <li><strong>你</strong> (nǐ - Bạn / Anh / Chị)</li>
                  <li><strong>叫</strong> (jiào - Gọi là / Tên là)</li>
                  <li><strong>什么</strong> (shénme - Cái gì)</li>
                  <li><strong>名字</strong> (míngzi - Tên)</li>
                  <li><strong>我</strong> (wǒ - Tôi)</li>
                  <li><strong>李文</strong> (Lǐ Wén - Lý Văn)</li>
                </ul>
              </div>
              <div className="info-box grammar-list-box">
                <h4 className="info-box-title"><Code size={16} /> Cấu trúc Ngữ pháp</h4>
                <div className="grammar-card">
                  <h5>[Công thức 1: Cấu trúc Hỏi và Giới thiệu Tên]</h5>
                  <code>Hỏi: 请问 + 你/您 + 叫 + 什么 + 名字？</code><br/>
                  <code>Đáp: 我 + 叫 + [Họ tên]</code>
                  <p className="mt-2"><strong>Ví dụ ứng dụng:</strong></p>
                  <ul>
                    <li>请问，你叫什么名字？</li>
                    <li>我叫李文。</li>
                    <li>我叫白家月。</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ===================== CLO 2 ===================== */}
        <div className="clo-card fade-in mt-6">
          <div className="clo-header purple-gradient">
            <h3>📌 CLO 02: BÀY TỎ PHÁN ĐOÁN KHẲNG ĐỊNH/PHỦ ĐỊNH & THỰC THI CHUỖI XIN LỖI - ĐÁP LỜI</h3>
            <p><strong>Chuẩn Đầu Ra:</strong> Phân biệt động từ phán đoán 是 (shì - là) và dạng phủ định 不是 (bú shì - không phải là); đồng thời thực thi phản xạ cặp thoại xin lỗi 对不起 → đáp lời 没关系 / 没事 khi xảy ra nhầm lẫn trong công việc.</p>
          </div>
          <div className="clo-body">
            
            {/* Tình huống & Giải phẫu */}
            <div className="info-grid">
              <div className="info-box">
                <h4 className="info-box-title"><Target size={16} /> Tình huống & Thước đo (TASK-02)</h4>
                <p><strong>Tình huống Giao tiếp:</strong> Nhận nhầm đồng nghiệp/đối tác 陈天中 và 白家月 tại hành lang công ty.</p>
                <p><strong>Rubric Chấp nhận:</strong> Phát ngôn đúng khẳng định/phủ định <code>我是学生 / 不是</code> và hoàn thành chuỗi thoại <code>对不起！</code> → <code>没关系！</code>.</p>
              </div>
              <div className="info-box">
                <h4 className="info-box-title"><GraduationCap size={16} /> Giải phẫu Năng lực (Skill-02)</h4>
                <p><strong>Tiểu năng lực:</strong> Thực thi phán đoán danh tính và kích hoạt chuỗi thoại xin lỗi - đáp lời khách khí.</p>
                <p><strong>Thành tố (100% Closed Lexicon):</strong> 不, 是, 对不起, 没关系, 没事.</p>
              </div>
            </div>

            {/* Mô-đun Học tập */}
            <div className="module-box mt-4">
              <h4 className="info-box-title"><Layers size={16} /> Mô-đun Học tập (Curriculum JIT - Slides 17 - 25)</h4>
              <p><strong>[MÔ-ĐUN 2: CẤU TRÚC PHÁN ĐOÁN "是/不是" & CHUỖI XIN LỖI "对不起 - 没关系"]</strong></p>
              <ul>
                <li><strong>Đầu ra:</strong> Xác nhận thông tin nhân sự và xử lý nhầm lẫn lịch sự chuẩn tác phong công sở.</li>
                <li><strong>Kiến thức cốt lõi:</strong> 不 (bù) | 是 (shì) | 对不起 (duìbuqǐ) | 没关系 (méi guānxi) | 没事 (méishì)</li>
                <li><strong>Mẫu câu ứng dụng:</strong> 对不起！ → 没关系！ / 没事！</li>
              </ul>
              <div className="dialogue-preview mt-3 pt-3" style={{ borderTop: '1px dashed #fbcfe8' }}>
                <h5 style={{ color: '#be185d', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.95rem' }}>NỘI DUNG BÀI KHÓA 2 (TEXT 2 - 课文 2):</h5>
                <p style={{ fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '0.75rem' }}>Văn cảnh: 在校园里，陈天中和白家月打招呼时认错了人。(On campus, Chen Tianzhong greeted Bai Jiayue but mistook her for someone else).</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <div>
                    <strong>👤 陈天中 (Chén Tiānzhōng - Trần Thiên Trung):</strong><br/>
                    对不起！ (Duìbuqǐ! - Đối bất khởi! - Xin lỗi!)
                  </div>
                  <div>
                    <strong>👤 白家月 (Bái Jiāyuè - Bạch Gia Nguyệt):</strong><br/>
                    没关系！ (Méi guānxi! - Một quan hệ! - Không sao!) / 没事！ (Méishì! - Một sự! - Không sao!)
                  </div>
                </div>
              </div>
            </div>

            {/* RCA */}
            <div className="rca-box mt-4">
              <h4 className="info-box-title"><ShieldCheck size={16} /> RCA Bẫy lỗi & Phương án khắc phục</h4>
              <ul>
                <li><strong>Đơn vị kiểm tra:</strong> Phân biệt biến điệu của 不 (bù → bú trước thanh 4) và phản xạ câu đáp lại lời xin lỗi.</li>
                <li><strong>Bẫy lỗi:</strong> Học viên quen miệng đọc bù shì sai thanh điệu hoặc im lặng không biết đáp lại.</li>
                <li><strong>Root Cause:</strong> Quên quy tắc biến điệu phó từ phủ định 不 và thiếu cặp thoại phản xạ đóng.</li>
                <li><strong>Khắc phục:</strong> Luyện biến điệu <code>bú shì</code> và chuỗi liên hoàn <code>对不起 → 没关系</code>.</li>
              </ul>
            </div>

            {/* Tiến trình Năng lực */}
            <div className="competency-box mt-4">
              <h4 className="info-box-title"><CheckCircle2 size={16} /> Tiến trình Năng lực</h4>
              <div className="steps-container">
                <span className="step-badge">🌱 Nhận biết: Thuộc 5 từ vựng 不, 是, 对不起, 没关系, 没事</span>
                <span className="step-badge">🌿 Thông hiểu: Độc lập đọc đúng biến điệu bú shì</span>
                <span className="step-badge">🌸 Vận dụng: Phản xạ chính xác câu đáp 没关系 / 没事</span>
                <span className="step-badge">🍎 Thành thục: Xử lý nhầm lẫn giao tế với tác phong điềm tĩnh</span>
              </div>
            </div>

            {/* Từ vựng & Ngữ pháp */}
            <div className="info-grid mt-4">
              <div className="info-box vocab-list-box">
                <h4 className="info-box-title"><BookType size={16} /> Danh mục Từ vựng tích lũy</h4>
                <ul>
                  <li><strong>不</strong> (bù - Không)</li>
                  <li><strong>是</strong> (shì - Là)</li>
                  <li><strong>对不起</strong> (duìbuqǐ - Xin lỗi)</li>
                  <li><strong>没关系</strong> (méi guānxi - Không sao)</li>
                  <li><strong>没事</strong> (méishì - Không sao)</li>
                  <li><strong>陈天中</strong> (Chén Tiānzhōng)</li>
                  <li><strong>白家月</strong> (Bái Jiāyuè)</li>
                </ul>
              </div>
              <div className="info-box grammar-list-box">
                <h4 className="info-box-title"><Code size={16} /> Cấu trúc Ngữ pháp</h4>
                <div className="grammar-card mb-2">
                  <h5>[Công thức 2: Phán đoán Khẳng định & Phủ định với 是 / 不]</h5>
                  <code>Khẳng định: [Chủ ngữ] + 是 + [Danh từ]</code><br/>
                  <code>Phủ định: [Chủ ngữ] + 不是 + [Danh từ]</code>
                  <p className="mt-2"><strong>Ví dụ:</strong> 我是学生 / 我不是老师</p>
                </div>
                <div className="grammar-card">
                  <h5>[Công thức 3: Chuỗi Thoại Xin lỗi & Đáp lời]</h5>
                  <code>Lượt 1: 对不起</code><br/>
                  <code>Lượt 2: 没关系 / 没事</code>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ===================== CLO 3 ===================== */}
        <div className="clo-card fade-in mt-6">
          <div className="clo-header orange-gradient">
            <h3>📌 CLO 03: BIỂU ĐẠT THIỆN CHÍ QUEN BIẾT VÀ SỬ DỤNG PHÓ TỪ "很" / "也"</h3>
            <p><strong>Chuẩn Đầu Ra:</strong> Thực thi thành thạo mẫu câu xã giao thể hiện thiện chí khi mới quen biết 很高兴认识你！ và sử dụng phó từ 也 (yě - cũng) để phản hồi 我也很高兴认识你！.</p>
          </div>
          <div className="clo-body">
            
            {/* Tình huống & Giải phẫu */}
            <div className="info-grid">
              <div className="info-box">
                <h4 className="info-box-title"><Target size={16} /> Tình huống & Thước đo (TASK-03)</h4>
                <p><strong>Tình huống Giao tiếp:</strong> Lần đầu gặp mặt đối tác 李文 và 白家月 tại sự kiện giao thương.</p>
                <p><strong>Rubric Chấp nhận:</strong> Phát ngôn trôi chảy câu xã giao <code>很高兴认识你！</code> và đáp lại đúng phó từ 也 → <code>我也很高兴认识你！</code>.</p>
              </div>
              <div className="info-box">
                <h4 className="info-box-title"><GraduationCap size={16} /> Giải phẫu Năng lực (Skill-03 & 04)</h4>
                <p><strong>Tiểu năng lực:</strong> Kết hợp phó từ chỉ mức độ 很 với tính từ 高兴 và động từ 认识; sử dụng phó từ 也 đặt trước động từ/tính từ để thể hiện sự đồng điệu.</p>
                <p><strong>Thành tố (100% Closed Lexicon):</strong> 很, 高兴, 认识, 也.</p>
              </div>
            </div>

            {/* Mô-đun Học tập */}
            <div className="module-box mt-4">
              <h4 className="info-box-title"><Layers size={16} /> Mô-đun Học tập (Curriculum JIT - Slides 27 - 36)</h4>
              <p><strong>[MÔ-ĐUN 3: XÃ GIAO KHI MỚI QUEN "很高兴认识你" & PHÓ TỪ "很/也"]</strong></p>
              <ul>
                <li><strong>Đầu ra:</strong> Bày tỏ sự vinh hạnh và thiện chí thiết lập mối quan hệ hợp tác ban đầu.</li>
                <li><strong>Kiến thức cốt lõi:</strong> 很 (hěn) | 高兴 (gāoxìng) | 认识 (rènshi) | 也 (yě)</li>
                <li><strong>Mẫu câu ứng dụng:</strong> 很高兴认识你！ → 我也很高兴认识你！</li>
              </ul>
              <div className="dialogue-preview mt-3 pt-3" style={{ borderTop: '1px dashed #fbcfe8' }}>
                <h5 style={{ color: '#be185d', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.95rem' }}>NỘI DUNG BÀI KHÓA 3 (TEXT 3 - 课文 3):</h5>
                <p style={{ fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '0.75rem' }}>Văn cảnh: 在校园里，李文和白家月第一次相遇。(Li Wen and Bai Jiayue met for the first time on campus).</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <div>
                    <strong>👤 李文 (Lǐ Wén - Lý Văn):</strong><br/>
                    你好！我叫李文。 (Nǐ hǎo! Wǒ jiào Lǐ Wén.)
                  </div>
                  <div>
                    <strong>👤 白家月 (Bái Jiāyuè - Bạch Gia Nguyệt):</strong><br/>
                    你好！我叫白家月。很高兴认识你！ (Nǐ hǎo! Wǒ jiào Bái Jiāyuè. Hěn gāoxìng rènshi nǐ!)
                  </div>
                  <div>
                    <strong>👤 李文 (Lǐ Wén - Lý Văn):</strong><br/>
                    我也很高兴认识你！ (Wǒ yě hěn gāoxìng rènshi nǐ!)
                  </div>
                </div>
              </div>
            </div>

            {/* RCA */}
            <div className="rca-box mt-4">
              <h4 className="info-box-title"><ShieldCheck size={16} /> RCA Bẫy lỗi & Phương án khắc phục</h4>
              <ul>
                <li><strong>Đơn vị kiểm tra:</strong> Vị trí phó từ 也 (yě) đứng trước phó từ 很 (hěn).</li>
                <li><strong>Bẫy lỗi:</strong> Ghép sai trật tự phó từ kép thành 我很高兴也认识你.</li>
                <li><strong>Root Cause:</strong> Ảnh hưởng bởi trật tự từ tiếng Việt ("Tôi rất vui cũng quen biết bạn").</li>
                <li><strong>Khắc phục:</strong> Công thức cố định: <code>[Chủ ngữ] + 也 + 很 + [Tính từ]</code>.</li>
              </ul>
            </div>

            {/* Tiến trình Năng lực */}
            <div className="competency-box mt-4">
              <h4 className="info-box-title"><CheckCircle2 size={16} /> Tiến trình Năng lực</h4>
              <div className="steps-container">
                <span className="step-badge">🌱 Nhận biết: Thuộc 4 từ vựng 很, 高兴, 认识, 也</span>
                <span className="step-badge">🌿 Thông hiểu: Hiểu trật tự phó từ 也 đứng trước 很</span>
                <span className="step-badge">🌸 Vận dụng: Nói trôi chảy câu chào thiện chí 很高兴认识你！</span>
                <span className="step-badge">🍎 Thành thục: Phản xạ tự nhiên chuỗi xã giao ngoại giao công sở</span>
              </div>
            </div>

            {/* Từ vựng & Ngữ pháp */}
            <div className="info-grid mt-4">
              <div className="info-box vocab-list-box">
                <h4 className="info-box-title"><BookType size={16} /> Danh mục Từ vựng tích lũy</h4>
                <ul>
                  <li><strong>很</strong> (hěn - Rất)</li>
                  <li><strong>高兴</strong> (gāoxìng - Vui mừng)</li>
                  <li><strong>认识</strong> (rènshi - Quen biết)</li>
                  <li><strong>也</strong> (yě - Cũng)</li>
                </ul>
              </div>
              <div className="info-box grammar-list-box">
                <h4 className="info-box-title"><Code size={16} /> Cấu trúc Ngữ pháp</h4>
                <div className="grammar-card">
                  <h5>[Công thức 4: Bày tỏ Vui mừng khi Quen biết]</h5>
                  <code>Người A: 很高兴认识你！</code><br/>
                  <code>Người B: 我也很高兴认识你！</code>
                  <p className="mt-2"><strong>Ví dụ ứng dụng:</strong></p>
                  <ul>
                    <li>认识你，很高兴！ (Quen biết bạn, tôi rất vui!)</li>
                    <li>我也很高兴认识你！ (Tôi cũng rất vui được quen biết bạn!)</li>
                  </ul>
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
                <th>Tiêu chuẩn Kỹ năng Đạt được</th>
                <th>Tiêu chí Xác minh (Verification Criteria)</th>
                <th>Giá trị Ứng dụng Thị trường Lao động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>MB-03: Self-Introduction & Identity Specialist</strong></td>
                <td>Thành thục kỹ năng hỏi tên lịch sự, tự giới thiệu danh tính và khẳng định phán đoán nghề nghiệp</td>
                <td>Bào chế 100% thoại chính xác trong đoạn hỏi tên và giới thiệu bản thân 45 giây với đối tác</td>
                <td>Đảm bảo tính chuẩn xác cho nhân sự Lễ tân, Trợ lý, Sales khi làm quen khách hàng và đối tác Trung Quốc.</td>
              </tr>
              <tr>
                <td><strong>MB-04: Professional Courtesy & Networking Practitioner</strong></td>
                <td>Thành thục thực thi chuỗi xin lỗi - đáp lời khách khí và phát ngôn xã giao khi mới quen biết</td>
                <td>Thực thi đoạn hội thoại giao tế 1 phút sử dụng đúng 对不起 → 没关系 và 很高兴认识你 → 我也很高兴</td>
                <td>Đảm bảo năng lực thiết lập quan hệ ngoại giao, tham gia networking tại các hội chợ thương mại và sự kiện FDI.</td>
              </tr>
            </tbody>
          </table>
        </div>

                <div className="mt-8">
          <h3 style={{ fontSize: '1.2rem', color: '#1e293b', marginBottom: '1rem', fontWeight: 'bold' }}>5.2 Ba Tình huống Ứng dụng Thực chiến tại Doanh nghiệp FDI / Xuất nhập khẩu / Nhân sự</h3>
          
          <div className="scenario-card mb-4" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem' }}>
            <h4 style={{ color: '#0f172a', fontWeight: 'bold', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🏢 Tình huống 1: Nhân sự Lễ tân / Trợ lý Doanh nghiệp FDI Hỏi Tên và Đón Tiếp Khách Hàng</h4>
            <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#475569' }}>Kịch bản: Nhân sự Lễ tân chủ động hỏi tên khách hàng mới đến văn phòng và giới thiệu tên mình.</p>
            <div style={{ background: 'white', padding: '1rem', borderRadius: '6px', border: '1px dashed #cbd5e1' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#334155' }}>Chuỗi hội thoại chuẩn (100% Closed Lexicon):</p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Lễ tân:</strong> 您好！请问，您叫什么名字？ (Nín hǎo! Qǐngwèn, nín jiào shénme míngzi? - Xin chào ngài! Xin hỏi, ngài tên là gì?)</li>
                <li><strong>Đối tác:</strong> 你好！我叫李文。 (Nǐ hǎo! Wǒ jiào Lǐ Wén. - Xin chào! Tôi tên là Lý Văn.)</li>
                <li><strong>Lễ tân:</strong> 李文先生，很高兴认识你！ (Lǐ Wén xiānsheng, hěn gāoxìng rènshi nǐ! - Anh Lý Văn, rất vui được quen biết anh!)</li>
                <li><strong>Đối tác:</strong> 我也很高兴认识你！ (Wǒ yě hěn gāoxìng rènshi nǐ! - Tôi cũng rất vui được quen biết bạn!)</li>
              </ul>
            </div>
          </div>
          
          <div className="scenario-card mb-4" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem' }}>
            <h4 style={{ color: '#0f172a', fontWeight: 'bold', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>👥 Tình huống 2: Quản lý Nhân sự (HR) Xử lý Nhầm lẫn Thông tin Nhân sự Mới</h4>
            <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#475569' }}>Kịch bản: Quản lý HR tại phòng họp gọi tên nhân sự mới nhưng bị nhầm với người khác.</p>
            <div style={{ background: 'white', padding: '1rem', borderRadius: '6px', border: '1px dashed #cbd5e1' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#334155' }}>Chuỗi hội thoại chuẩn (100% Closed Lexicon):</p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>HR Manager:</strong> 请问，你是白家月吗？ (Qǐngwèn, nǐ shì Bái Jiāyuè ma? - Xin hỏi, bạn có phải là Bạch Gia Nguyệt không?)</li>
                <li><strong>Nhân viên:</strong> 不是，我不是白家月，我叫李文。 (Bú shì, wǒ bú shì Bái Jiāyuè, wǒ jiào Lǐ Wén. - Không phải, tôi không phải là Bạch Gia Nguyệt, tôi tên là Lý Văn.)</li>
                <li><strong>HR Manager:</strong> 对不起！ (Duìbuqǐ! - Xin lỗi!)</li>
                <li><strong>Nhân viên:</strong> 没关系！ / 没事！ (Méi guānxi! / Méishì! - Không sao!)</li>
              </ul>
            </div>
          </div>

          <div className="scenario-card mb-4" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem' }}>
            <h4 style={{ color: '#0f172a', fontWeight: 'bold', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📦 Tình huống 3: Nhân sự Xuất Nhập khẩu Kết nối Giao thương tại Hội chợ Trade Fair</h4>
            <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#475569' }}>Kịch bản: Nhân sự XNK gặp đại diện công ty đối tác Trung Quốc 陈天中 tại gian hàng hội chợ.</p>
            <div style={{ background: 'white', padding: '1rem', borderRadius: '6px', border: '1px dashed #cbd5e1' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#334155' }}>Chuỗi hội thoại chuẩn (100% Closed Lexicon):</p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Nhân sự XNK:</strong> 你好！我是学生。请问，你叫什么名字？ (Nǐ hǎo! Wǒ shì xuéshēng. Qǐngwèn, nǐ jiào shénme míngzi? - Xin chào! Tôi là học sinh. Xin hỏi, bạn tên là gì?)</li>
                <li><strong>Đối tác:</strong> 你好！我叫陈天中。 (Nǐ hǎo! Wǒ jiào Chén Tiānzhōng. - Xin chào! Tôi tên là Trần Thiên Trung.)</li>
                <li><strong>Nhân sự XNK:</strong> 陈老师，很高兴认识你！ (Chén lǎoshī, hěn gāoxìng rènshi nǐ! - Thầy Trần, rất vui được quen biết thầy!)</li>
                <li><strong>Đối tác:</strong> 我也很高兴认识你！ (Wǒ yě hěn gāoxìng rènshi nǐ! - Tôi cũng rất vui được quen biết bạn!)</li>
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
            <strong>Rào cản tuyệt đối:</strong> 100% câu hỏi, đáp án tuân thủ Closed Lexicon Bài 1 + 2 (28 từ vựng).
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
                <td>Câu 1.1</td><td>CLO-1 (Hỏi & Giới thiệu tên)</td><td>Trắc nghiệm</td><td>Nhận diện đại từ nghi vấn 什么</td>
              </tr>
              <tr>
                <td>Câu 1.2</td><td>CLO-2 (Phán đoán & Xin lỗi)</td><td>Trắc nghiệm</td><td>Nhận diện cụm từ xin lỗi 对不起</td>
              </tr>
              <tr>
                <td>Câu 1.3</td><td>CLO-3 (Phó từ & Quen biết)</td><td>Trắc nghiệm</td><td>Nhận diện tính từ cảm xúc 高兴</td>
              </tr>
              
              <tr>
                <td rowSpan="3" className="level-cell"><span className="level-badge level-2">🌿 Thông hiểu</span></td>
                <td>Câu 2.1</td><td>CLO-1 (Hỏi & Giới thiệu tên)</td><td>Trắc nghiệm</td><td>Thông hiểu trật tự từ câu hỏi tên 叫什么名字</td>
              </tr>
              <tr>
                <td>Câu 2.2</td><td>CLO-2 (Phán đoán & Xin lỗi)</td><td>Trắc nghiệm</td><td>Thông hiểu cặp thoại 对不起 → 没关系</td>
              </tr>
              <tr>
                <td>Câu 2.3</td><td>CLO-3 (Phó từ & Quen biết)</td><td>Trắc nghiệm</td><td>Thông hiểu động từ giao tế 认识</td>
              </tr>

              <tr>
                <td rowSpan="3" className="level-cell"><span className="level-badge level-3">🌸 Vận dụng</span></td>
                <td>Câu 3.1</td><td>CLO-1 (Hỏi & Giới thiệu tên)</td><td>Điền từ</td><td>Vận dụng điền đại từ 什么 và 我</td>
              </tr>
              <tr>
                <td>Câu 3.2</td><td>CLO-2 (Phán đoán & Xin lỗi)</td><td>Điền từ</td><td>Vận dụng điền phó từ phủ định 不 trong 不是</td>
              </tr>
              <tr>
                <td>Câu 3.3</td><td>CLO-3 (Phó từ & Quen biết)</td><td>Chọn câu đáp</td><td>Vận dụng câu đáp phó từ 也 → 我也很高兴</td>
              </tr>

              <tr>
                <td rowSpan="3" className="level-cell"><span className="level-badge level-4">🍎 Thành thục</span></td>
                <td>Câu 4.1</td><td>CLO-1 (Hỏi & Giới thiệu tên)</td><td>Phân tích RCA</td><td>Chẩn đoán & sửa lỗi trùng lặp 是叫</td>
              </tr>
              <tr>
                <td>Câu 4.2</td><td>CLO-2 (Phán đoán & Xin lỗi)</td><td>Phân tích RCA</td><td>Chẩn đoán & sửa bẫy nhầm lẫn 不客气 vs 没关系</td>
              </tr>
              <tr>
                <td>Câu 4.3</td><td>CLO-3 (Phó từ & Quen biết)</td><td>Kịch bản thực chiến</td><td>Xây dựng kịch bản giao tế ngoại giao 3 bước</td>
              </tr>
            </tbody>
          </table>
        </div>

<div className="closed-lexicon-box mt-8 fade-in" style={{ background: '#fff1f2', border: '1px solid #fda4af', borderRadius: '8px', padding: '1.5rem' }}>
          <h3 style={{ color: '#be185d', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
            <Lock size={20} /> 🔒 CLOSED LEXICON KHẾP KÍN & DANH MỤC CẤU TRÚC NGỮ PHÁP (BẮT BUỘC TUÂN THỦ DÀNH CHO NGÂN HÀNG ĐỀ THI BÀI 2)
          </h3>
          <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#881337', fontSize: '0.95rem' }}>
            <strong>Ghi chú bắt buộc:</strong> Ngân hàng đề thi phải chú ý tuân thủ tuyệt đối danh mục từ vựng và mẫu câu tích lũy dưới đây vì người mới học từ số 0 tính đến Bài 2 chỉ có vốn liếng tích lũy khép kín như sau:
          </p>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: '#9f1239', fontWeight: 'bold', marginBottom: '0.5rem' }}>1.1 Danh mục Tập đóng Từ vựng Tích lũy (Lessons 1 + 2 Closed Lexicon - 28 Đơn vị)</h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem' }}>
              <div style={{ background: 'white', padding: '1rem', borderRadius: '6px', border: '1px dashed #fecdd3' }}>
                <p style={{ fontWeight: 'bold', color: '#be185d', marginBottom: '0.5rem', borderBottom: '1px solid #ffe4e6', paddingBottom: '0.25rem' }}>Từ vựng tích lũy Bài 1 (15 đơn vị):</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4c0519', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <li><strong>你</strong> (nǐ - Bạn)</li>
                  <li><strong>好</strong> (hǎo - Tốt / Khỏe)</li>
                  <li><strong>你好</strong> (nǐ hǎo - Xin chào)</li>
                  <li><strong>王</strong> (Wáng - Họ Vương)</li>
                  <li><strong>老师</strong> (lǎoshī - Lão sư / Thầy cô)</li>
                  <li><strong>王老师</strong> (Wáng lǎoshī - Thầy/Cô Vương)</li>
                  <li><strong>大家</strong> (dàjiā - Mọi người)</li>
                  <li><strong>学生</strong> (xuéshēng - Học sinh)</li>
                  <li><strong>们</strong> (men - Các / Hậu tố số nhiều)</li>
                  <li><strong>您</strong> (nín - Ngài / Thầy / Cô)</li>
                  <li><strong>你们</strong> (nǐmen - Các bạn)</li>
                  <li><strong>谢谢</strong> (xièxie - Cảm ơn)</li>
                  <li><strong>不客气</strong> (bú kèqi - Không có gì)</li>
                  <li><strong>同学</strong> (tóngxué - Bạn học)</li>
                  <li><strong>再见</strong> (zàijiàn - Tạm biệt)</li>
                </ul>
              </div>

              <div style={{ background: 'white', padding: '1rem', borderRadius: '6px', border: '1px dashed #fecdd3' }}>
                <p style={{ fontWeight: 'bold', color: '#be185d', marginBottom: '0.5rem', borderBottom: '1px solid #ffe4e6', paddingBottom: '0.25rem' }}>Từ vựng bài mới (Bài 2 - Core Lexicon 13 đơn vị):</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4c0519', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <li><strong>请问</strong> (qǐngwèn - Xin hỏi)</li>
                  <li><strong>叫</strong> (jiào - Gọi là)</li>
                  <li><strong>什么</strong> (shénme - Cái gì)</li>
                  <li><strong>名字</strong> (míngzi - Tên)</li>
                  <li><strong>我</strong> (wǒ - Tôi)</li>
                  <li><strong>不</strong> (bù - Không)</li>
                  <li><strong>是</strong> (shì - Là)</li>
                  <li><strong>对不起</strong> (duìbuqǐ - Xin lỗi)</li>
                  <li><strong>没关系</strong> (méi guānxi - Không sao)</li>
                  <li><strong>没事</strong> (méishì - Không sao)</li>
                  <li><strong>很</strong> (hěn - Rất)</li>
                  <li><strong>高兴</strong> (gāoxìng - Vui mừng)</li>
                  <li><strong>认识</strong> (rènshi - Quen biết)</li>
                  <li><strong>也</strong> (yě - Cũng)</li>
                </ul>
                <p style={{ marginTop: '0.75rem', fontStyle: 'italic', fontSize: '0.85rem', color: '#9f1239' }}>
                  (Tên riêng tích lũy: 李文 Lǐ Wén, 陈天中 Chén Tiānzhōng, 白家月 Bái Jiāyuè, AI小语 AI Xiǎoyǔ)
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#9f1239', fontWeight: 'bold', marginBottom: '0.75rem' }}>1.2 Danh mục Cấu trúc Ngữ pháp Khép kín Bài 2</h4>
            <p style={{ fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '0.75rem', color: '#4c0519' }}>Tất cả các mô hình câu được giới hạn hoàn toàn trong các công thức toán học phẳng dưới đây:</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="grammar-card" style={{ background: 'white' }}>
                <h5 style={{ color: '#be185d' }}>[Công thức 1: Cấu trúc Hỏi và Giới thiệu Tên]</h5>
                <code>Hỏi: 请问 + 你/您 + 叫 + 什么 + 名字？</code><br/>
                <code>Đáp: 我 + 叫 + [Họ tên]</code>
                <p className="mt-2" style={{ fontSize: '0.9rem' }}><strong>Ví dụ:</strong><br/>- 请问，你叫什么名字？<br/>- 我叫李文。</p>
              </div>

              <div className="grammar-card" style={{ background: 'white' }}>
                <h5 style={{ color: '#be185d' }}>[Công thức 2: Khẳng định & Phủ định với 是/不]</h5>
                <code>Khẳng định: [Chủ ngữ] + 是 + [Danh từ]</code><br/>
                <code>Phủ định: [Chủ ngữ] + 不是 + [Danh từ]</code>
                <p className="mt-2" style={{ fontSize: '0.9rem' }}><strong>Ví dụ:</strong><br/>- 我是学生。<br/>- 我不是老师。</p>
              </div>

              <div className="grammar-card" style={{ background: 'white' }}>
                <h5 style={{ color: '#be185d' }}>[Công thức 3: Chuỗi Xin lỗi & Đáp lời]</h5>
                <code>Lượt 1 (Xin lỗi): 对不起</code><br/>
                <code>Lượt 2 (Đáp lời): 没关系 / 没事</code>
              </div>

              <div className="grammar-card" style={{ background: 'white' }}>
                <h5 style={{ color: '#be185d' }}>[Công thức 4: Bày tỏ Vui mừng & Phó từ 也/很]</h5>
                <code>Người A: 很高兴认识你！</code><br/>
                <code>Người B: 我也很高兴认识你！</code>
              </div>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};
export const OverviewTab = ({ lessonId }) => {
  if (lessonId === 'hsk1-lesson2') return <Lesson2Overview />;
  return <Lesson1Overview />;
};
