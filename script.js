function escapeHtml(text) {
  if (text === null || text === undefined) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getShortLabel(person) {
  if (person.cardLabel) return person.cardLabel;

  const major = person.major || "口腔医学";
  const gradeText = person.gradeClass || "";

  const match = gradeText.match(/(\d{2}|\d{4})级/);
  if (match) {
    let grade = match[0];
    if (grade.length === 6) {
      grade = grade.slice(2);
    }
    return `${major}${grade}`;
  }

  return `${major}`;
}

function renderHomePage() {
  const cardGrid = document.getElementById("cardGrid");
  if (!cardGrid) return;

  if (!Array.isArray(resumes)) {
    cardGrid.innerHTML = "<p>数据加载失败，请检查 data.js 文件。</p>";
    return;
  }

  cardGrid.innerHTML = resumes.map(person => `
    <a class="profile-card" href="resume.html?id=${encodeURIComponent(person.id)}">
      <div class="profile-card-inner">
        <div class="profile-card-photo">
          <img src="${escapeHtml(person.photo)}" alt="${escapeHtml(person.name)}">
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
          <th>姓名</th>
          <td>${escapeHtml(person.name || "")}</td>
          <th>性别</th>
          <td>${escapeHtml(person.gender || "")}</td>
          <td class="resume-photo-cell" rowspan="3">
            <img src="${escapeHtml(person.photo)}" alt="${escapeHtml(person.name)}">
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
          <th class="section-label" colspan="5">个人经历 / 个人优势</th>
        </tr>
        <tr>
          <td class="long-text" colspan="5">${escapeHtml(person.experienceText || "")}</td>
        </tr>
        <tr>
          <th class="section-label" colspan="5">个人特长</th>
        </tr>
        <tr>
          <td class="list-content" colspan="5">
            ${renderList(person.skillsList, true)}
          </td>
        </tr>
        <tr>
          <th class="section-label" colspan="5">相关经历</th>
        </tr>
        <tr>
          <td class="list-content" colspan="5">
            ${renderList(person.relatedExperienceList, false)}
          </td>
        </tr>
        <tr>
          <th class="section-label" colspan="5">个人评价 / 参与动机</th>
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
