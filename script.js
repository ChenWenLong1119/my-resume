const container = document.getElementById("resume-list");

if (container) {
  container.innerHTML = resumes.map(resume => {
    const avatarHtml = resume.photo
      ? `<img src="${resume.photo}" alt="${resume.name}" class="resume-card-photo">`
      : `<div class="resume-card-photo placeholder">?</div>`;

    return `
      <a class="resume-card" href="resume.html?id=${resume.id}">
        <div class="resume-card-left">
          ${avatarHtml}
        </div>
        <div class="resume-card-right">
          <h2>${resume.name}</h2>
          <p>${resume.cardLabel}</p>
        </div>
      </a>
    `;
  }).join("");
}
