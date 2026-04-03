function getResumeId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderList(items) {
  if (!items || !items.length) return "";
  return `
    <ul class="detail-list">
      ${items.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

const resumeId = getResumeId();
const resume = resumes.find(item => item.id === resumeId);
const detailContainer = document.getElementById("resume-detail");

if (!resume) {
  detailContainer.innerHTML = `
    <div class="detail-card">
      <h1>未找到该简历信息</h1>
      <p><a href="index.html">返回首页</a></p>
    </div>
  `;
} else {
  const photoHtml = resume.photo
    ? `<img src="${resume.photo}" alt="${resume.name}" class="detail-photo">`
    : `<div class="detail-photo placeholder">?</div>`;

  detailContainer.innerHTML = `
    <div class="detail-card">
      <div class="detail-header">
        <div class="detail-header-left">
          <h1>${resume.name}</h1>
          <p class="detail-grade-major">
            <strong>年级专业：</strong>${resume.gradeMajor}
          </p>
        </div>
        <div class="detail-header-right">
          ${photoHtml}
        </div>
      </div>

      <section class="detail-section">
        <h2>个人优势与自我评价</h2>
        <p>${resume.selfEvaluation}</p>
      </section>

      <section class="detail-section">
        <h2>相关经历</h2>
        ${renderList(resume.experienceList)}
      </section>

      <section class="detail-section">
        <h2>技能特长</h2>
        ${renderList(resume.skillsList)}
      </section>

      <section class="detail-section">
        <h2>参与社会实践的动机与期望</h2>
        <p>${resume.motivation}</p>
      </section>

      <div class="back-home-wrap">
        <a href="index.html" class="back-home-btn">返回首页</a>
      </div>
    </div>
  `;
}
