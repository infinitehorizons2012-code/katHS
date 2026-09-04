import React from 'react';
import { 
  BookOpen, Users, Target, ShieldCheck, 
  GraduationCap, Briefcase, Building, ScrollText, 
  Award, BrainCircuit, CheckCircle2 
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

        {/* CLO 1 */}
        <div className="clo-card fade-in">
          <div className="clo-header blue-gradient">
            <h3>📌 CLO 01: KÍNH NGỮ & XƯNG HÔ 1-1 TRONG GIAO TIẾP CÔNG SỞ</h3>
            <p><strong>Chuẩn Đầu Ra:</strong> Phân biệt chính xác và thực thi hành vi xưng hô kính ngữ giữa giao tiếp thông thường 你 (nǐ - Bạn) và giao tiếp trang trọng / kính trọng 您 (nín - Ngài/Thầy/Cô) trong môi trường công sở FDI.</p>
          </div>
          <div className="clo-body">
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

            <div className="rca-box mt-4">
              <h4>RCA Bẫy lỗi & Phương án khắc phục:</h4>
              <ul>
                <li><strong>Bẫy lỗi:</strong> Học viên quen miệng dùng 你 chào người lớn/cấp trên (Vd: 王老师，你好！).</li>
                <li><strong>Nguyên nhân gốc rễ (Root Cause):</strong> Chưa định hình tư duy vị thế văn hóa doanh nghiệp.</li>
                <li><strong>Khắc phục:</strong> Ép phản xạ công thức: <code>[Cấp trên/Họ tên + Chức danh] + 您好</code>.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CLO 2 */}
        <div className="clo-card fade-in mt-6">
          <div className="clo-header purple-gradient">
            <h3>📌 CLO 02: CHÀO HỎI TẬP THỂ & HẬU TỐ SỐ NHIỀU "们"</h3>
            <p><strong>Chuẩn Đầu Ra:</strong> Áp dụng thành thạo hậu tố 们 (men) và từ tập thể 大家 (dàjiā) để chào hỏi nhóm, tập thể đồng nghiệp hoặc lớp học.</p>
          </div>
          <div className="clo-body">
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

            <div className="rca-box mt-4">
              <h4>RCA Bẫy lỗi & Phương án khắc phục:</h4>
              <ul>
                <li><strong>Bẫy lỗi:</strong> Học viên ghép sai vị trí 们 như 们同学 hoặc chào từng người thay vì xưng tập thể.</li>
                <li><strong>Nguyên nhân gốc rễ (Root Cause):</strong> Nhầm lẫn vị trí hậu tố chỉ số nhiều (nghĩ 们 đứng trước như từ "các" trong tiếng Việt).</li>
                <li><strong>Khắc phục:</strong> Khung cố định: <code>[Danh từ/Đại từ chỉ người] + 们</code>.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CLO 3 */}
        <div className="clo-card fade-in mt-6">
          <div className="clo-header green-gradient">
            <h3>📌 CLO 03: CHUỖI PHẢN XẠ LỄ NGHI CẢM ƠN, ĐÁP LỜI & TẠM BIỆT</h3>
            <p><strong>Chuẩn Đầu Ra:</strong> Phản xạ tự nhiên chuỗi giao tiếp văn phòng: Chào hỏi → Cảm ơn & Đáp lời → Tạm biệt đúng ngữ cảnh văn hóa Trung Hoa.</p>
          </div>
          <div className="clo-body">
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

            <div className="rca-box mt-4">
              <h4>RCA Bẫy lỗi & Phương án khắc phục:</h4>
              <ul>
                <li><strong>Bẫy lỗi:</strong> Im lặng khi đối phương nói 谢谢 hoặc phát âm sai thanh điệu 再见 (thành zaijian thanh nhẹ).</li>
                <li><strong>Nguyên nhân gốc rễ (Root Cause):</strong> Thiếu phản xạ cặp thoại đóng và chưa làm chủ thanh 4 kép.</li>
                <li><strong>Khắc phục:</strong> Luyện chuỗi phản xạ 3 bước liên hoàn.</li>
              </ul>
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
