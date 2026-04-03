function escapeHtml(text) {
  if (text === null || text === undefined) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderPhoto(photo, name, className) {
  if (photo && String(photo).trim()) {
    return `<img src="${escapeHtml(photo)}" alt="${escapeHtml(name || "")}">`;
  }
  return `<div class="photo-placeholder">？</div>`;
}

function getShortLabel(person) {
  if (person.cardLabel && String(person.cardLabel).trim()) {
    return person.cardLabel;
  }
  return `${person.major || ""}${person.grade || ""}`;
}

function renderHomePage() {
  const cardGrid = document.getElementById("cardGrid");
  if (!cardGrid) return;

  if (typeof resumes === "undefined" || !Array.isArray(resumes)) {
    cardGrid.innerHTML = "<p>数据加载失败，请检查 data.js 文件。</p>";
    return;
  }

  cardGrid.innerHTML = resumes.map(person => `
    <a class="profile-card" href="resume.html?id=${encodeURIComponent(person.id)}">
      <div class="profile-card-inner">
        <div class="profile-card-photo">
          ${renderPhoto(person.photo, person.name)}
        </div>
        <div class="profile-card-text">
          <h2>${escapeHtml(person.name)}</h2>
          <p>${escapeHtml(getShortLabel(person))}</p>
        </div>
      </div>
    </a>
  `).join("");
}

function getResumeById(id) {
  if (typeof resumes === "undefined" || !Array.isArray(resumes)) return null;
  return resumes.find(item => item.id === id);
}

function renderList(list, ordered = false) {
  if (!list || !list.length) return "<p>暂无</p>";
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>${list.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</${tag}>`;
}

function renderDetailPage() {
  const container = document.getElementById("resumeContainer");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const person = getResumeById(id);

  if (!person) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>未找到该简历</h2>
        <p>请返回首页重新选择对应人员。</p>
        <div class="back-link">
          <a href="index.html">← 返回简历总览</a>
        </div>
      </div>
    `;
    return;
  }

  document.title = `${person.name} - 个人简历`;

  container.innerHTML = `
    <div class="resume-wrapper">
      <div class="resume-title">个人简历</div>

      <table class="resume-table">
        <tr>
          <th style="width: 12%;">姓名</th>
          <td style="width: 18%;">${escapeHtml(person.name || "")}</td>
          <th style="width: 12%;">性别</th>
          <td style="width: 26%;">${escapeHtml(person.gender || "")}</td>
          <td class="resume-photo-cell" rowspan="3">
            <div class="resume-photo-box">
              ${renderPhoto(person.photo, person.name)}
            </div>
          </td>
        </tr>
        <tr>
          <th>专业</th>
          <td>${escapeHtml(person.major || "")}</td>
          <th>学号</th>
          <td>${escapeHtml(person.studentId || "")}</td>
        </tr>
        <tr>
          <th>联系方式</th>
          <td>${escapeHtml(person.phone || "")}</td>
          <th>电子邮箱</th>
          <td>${escapeHtml(person.email || "")}</td>
        </tr>
        <tr>
          <th>年级班级</th>
          <td colspan="4">${escapeHtml(person.gradeClass || "")}</td>
        </tr>
        <tr>
          <th class="section-title" colspan="5">个人经历</th>
        </tr>
        <tr>
          <td class="long-text" colspan="5">${escapeHtml(person.experienceText || "")}</td>
        </tr>
        <tr>
          <th class="section-title" colspan="5">个人特长</th>
        </tr>
        <tr>
          <td class="list-content" colspan="5">
            ${renderList(person.skillsList, true)}
          </td>
        </tr>
        <tr>
          <th class="section-title" colspan="5">个人评价</th>
        </tr>
        <tr>
          <td class="long-text" colspan="5">${escapeHtml(person.evaluationText || "")}</td>
        </tr>
      </table>

      <div class="back-link">
        <a href="index.html">← 返回简历总览</a>
      </div>
    </div>
  `;
}

renderHomePage();
renderDetailPage();
