* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Microsoft YaHei", "PingFang SC", Arial, sans-serif;
  color: #1f2d3d;
  background: #eef2f6;
  line-height: 1.7;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  width: 92%;
  max-width: 1440px;
  margin: 0 auto;
}

/* 顶部 */
.site-header {
  background: linear-gradient(135deg, #0f547d, #247eb2);
  color: #fff;
  text-align: center;
  padding: 26px 20px 22px;
}

.site-header h1 {
  font-size: 2.25rem;
  margin-bottom: 8px;
  font-weight: 800;
}

.site-header .subtitle {
  font-size: 0.98rem;
  opacity: 0.95;
}

.site-footer {
  text-align: center;
  color: #667788;
  font-size: 0.95rem;
  padding: 18px 12px 28px;
}

/* 首页卡片网格：附件二风格 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 34px 42px;
  padding: 34px 0 44px;
}

.compact-card {
  background: #fff;
  border: 2.5px solid #3566c8;
  border-radius: 34px;
  min-height: 235px;
  display: flex;
  align-items: center;
  padding: 24px 26px 24px 18px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.compact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(53, 102, 200, 0.12);
}

.compact-photo {
  width: 160px;
  min-width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 26px;
}

.compact-photo img {
  width: 140px;
  height: 182px;
  object-fit: cover;
  display: block;
  background: #fff;
}

.compact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.compact-info h2 {
  font-size: 3rem;
  line-height: 1.1;
  color: #1f78b4;
  font-weight: 800;
  margin-bottom: 18px;
  letter-spacing: 1px;
}

.compact-info p {
  font-size: 1.22rem;
  line-height: 1.35;
  color: #000;
  font-weight: 800;
}

/* 详情页 */
.resume-wrapper {
  margin: 30px auto 50px;
  background: #fff;
  border: 1px solid #cfd9e3;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.resume-title {
  padding: 16px 18px;
  font-size: 1.35rem;
  font-weight: 700;
  color: #17324a;
  border-bottom: 1px solid #cfd9e3;
  background: #f8fbfd;
}

.resume-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.resume-table th,
.resume-table td {
  border: 1px solid #cfd9e3;
  padding: 14px 12px;
  font-size: 1rem;
  vertical-align: middle;
  word-break: break-word;
}

.resume-table th {
  width: 12%;
  background: #f7f9fb;
  font-weight: 600;
  text-align: center;
  color: #24384d;
}

.resume-table td {
  background: #fff;
}

.resume-photo-cell {
  width: 210px;
  text-align: center;
  background: #fcfdff;
}

.resume-photo-cell img {
  width: 160px;
  height: 210px;
  object-fit: contain;
  border: 1px solid #cfd9e3;
  background: #fff;
}

.section-label {
  background: #f7f9fb;
  font-weight: 700;
  text-align: left;
  color: #1b3953;
}

.long-text {
  padding: 16px 18px !important;
  line-height: 1.9;
  text-align: justify;
}

.list-content {
  padding: 14px 18px 14px 34px !important;
}

.list-content ul,
.list-content ol {
  margin: 0;
  padding-left: 20px;
}

.list-content li {
  margin-bottom: 10px;
}

.back-link {
  padding: 18px 20px 24px;
}

.back-link a {
  color: #0b5e91;
  font-weight: 600;
}

.back-link a:hover {
  text-decoration: underline;
}

.empty-state {
  background: #fff;
  border: 1px solid #cfd9e3;
  margin: 30px auto 50px;
  padding: 40px 24px;
  text-align: center;
}

.empty-state h2 {
  margin-bottom: 10px;
  color: #16344d;
}

/* 平板 */
@media (max-width: 1200px) {
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .compact-info h2 {
    font-size: 2.5rem;
  }
}

/* 手机 */
@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .compact-card {
    min-height: auto;
    padding: 20px 18px;
    border-radius: 24px;
  }

  .compact-photo {
    width: 120px;
    min-width: 120px;
    margin-right: 18px;
  }

  .compact-photo img {
    width: 100px;
    height: 132px;
  }

  .compact-info h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .compact-info p {
    font-size: 1rem;
  }

  .resume-table,
  .resume-table tbody,
  .resume-table tr,
  .resume-table th,
  .resume-table td {
    display: block;
    width: 100%;
  }

  .resume-table th {
    border-bottom: none;
    text-align: left;
  }

  .resume-photo-cell {
    width: 100%;
  }

  .resume-photo-cell img {
    width: 150px;
    height: 200px;
    margin: 0 auto;
    display: block;
  }
}
