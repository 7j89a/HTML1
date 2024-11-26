// بيانات الوحدات والحصص
const data = [
    {
        unit: "الوحدة الأولى",
        lessons: [
            {
                title: "لملمة أفكار التفاضل",
                iframe: "https://iframe.mediadelivery.net/embed/344329/7657e388-1a4a-4e4f-b36f-bfbc4e445ee3?autoplay=true"
            },
            {
                title: "مكثف التطبيق الهندسي - الجزء الأول",
                iframe: "https://iframe.mediadelivery.net/embed/344329/fd553477-fd2c-41e7-9d0c-6ba4aafebe97?autoplay=true"
            },
            {
                title: "مكثف التطبيق الهندسي - الجزء الثاني",
                iframe: "https://iframe.mediadelivery.net/embed/344329/4afc0610-8c0e-4264-8f5e-6b674784c776?autoplay=true"
            }
        ]
    },
    { 
        unit: "الوحدة الثانية", 
        lessons: [] 
    },
    { 
        unit: "الوحدة الثالثة", 
        lessons: [] 
    }
];

// عرض الصفحة الرئيسية
function renderHome() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h2>الوحدات</h2>
        <div class="unit-list">
            ${data.map((unit, index) => `
                <div class="card">
                    <h3>${unit.unit}</h3>
                    <button onclick="renderUnit(${index})">عرض الحصص</button>
                </div>
            `).join('')}
        </div>
    `;
}

// عرض الوحدة
function renderUnit(index) {
    const app = document.getElementById('app');
    const unit = data[index];
    app.innerHTML = `
        <h2>${unit.unit}</h2>
        ${unit.lessons.length > 0
            ? unit.lessons.map(lesson => `
                <div class="card">
                    <h3>${lesson.title}</h3>
                    <button onclick="showLesson('${lesson.iframe}', '${lesson.title}')">عرض الحصة</button>
                </div>
            `).join('')
            : '<p>لا توجد حصص لهذه الوحدة.</p>'}
        <button class="back-button" onclick="renderHome()">عودة</button>
    `;
}

// عرض الحصة مع اسمها كعنوان فوق الفيديو
function showLesson(iframe, title) {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="video-container">
            <h2>${title}</h2> <!-- اسم الحصة -->
            <iframe src="${iframe}" allowfullscreen></iframe>
        </div>
        <button class="back-button" onclick="renderUnit(${getCurrentUnitIndex()})">عودة</button>
    `;
}

// حفظ مؤشر الوحدة الحالية
let currentUnitIndex = -1;

// عرض الوحدة وحفظ مؤشرها
function renderUnit(index) {
    currentUnitIndex = index; // حفظ المؤشر
    const app = document.getElementById('app');
    const unit = data[index];
    app.innerHTML = `
        <h2>${unit.unit}</h2>
        ${unit.lessons.length > 0
            ? unit.lessons.map(lesson => `
                <div class="card">
                    <h3>${lesson.title}</h3>
                    <button onclick="showLesson('${lesson.iframe}', '${lesson.title}')">عرض الحصة</button>
                </div>
            `).join('')
            : '<p>لا توجد حصص لهذه الوحدة.</p>'}
        <button class="back-button" onclick="renderHome()">عودة</button>
    `;
}

// جلب مؤشر الوحدة الحالية
function getCurrentUnitIndex() {
    return currentUnitIndex;
}

// تحميل الصفحة الرئيسية عند بداية التشغيل
renderHome();
