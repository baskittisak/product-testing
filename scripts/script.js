document.addEventListener("DOMContentLoaded", () => {
    // Handle collapse menu
    const coll = document.getElementsByClassName("menu-collapse-container");
    for (const item of coll) {
        item.addEventListener("click", function () {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            const chevron = this.querySelector('.bx.bxs-chevron-right');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                chevron.style.transform = "rotate(0deg)";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                chevron.style.transform = "rotate(90deg)";
            }
        });
    }

    // Handle link menu
    const menuLinks = document.querySelectorAll('a');

    const updateActiveMenu = (hash) => {
        menuLinks.forEach(link => {
            link.classList.toggle('menu-active', link.getAttribute('href') === `#${hash}`);
        });
    };

    // Dynamic page loading based on hash
    const loadPage = (hash) => {
        let page = '';

        if (hash === 'home') {
            page = `pages/${hash}.html`;
        } else if (hash.includes('create')) {
            const section = hash.split('/')[0];
            page = `pages/${section}/create.html`;
        } else {
            page = `pages/${hash}/index.html`;
        }

        const content = document.getElementById('content');

        fetch(page)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
                updateActiveMenu(hash);
            })
            .catch(error => {
                console.error('Error loading content:', error);
                content.innerHTML = 'ไม่สามารถโหลดข้อมูล';
            });
    };

    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const href = this.getAttribute('href')?.replace('#', '');
            if (!href) return;

            history.pushState({ page: href }, '', `#${href}`);
            loadPage(href);
        });
    });

    // Handle initial page or refresh
    const initialHash = window.location.hash.replace('#', '') || 'home';
    loadPage(initialHash);

    // Handle popstate for back/forward navigation
    window.addEventListener('popstate', () => {
        const currentHash = window.location.hash.replace('#', '') || 'home';
        loadPage(currentHash);
    });
});

// Handle add test list
let testCount = 1;

const addTestForm = () => {
    const newSubForm = document.createElement("div");
    newSubForm.classList.add("sub-form-container");

    newSubForm.setAttribute("data-id", `test-${testCount}`);

    const title = document.createElement("h4");
    title.classList.add("sub-form-title");
    title.textContent = `รายการทดสอบ ${testCount}`;

    const formColumn1 = createFormColumn("รหัสรายการ", "text", "กรอกรหัสรายการ");

    const formColumn2 = document.createElement("div");
    formColumn2.classList.add("form-column");
    formColumn2.appendChild(createLabel("ชื่อรายการทดสอบ"));
    formColumn2.appendChild(createSearchInput("text", "กรอกชื่อรายการทดสอบ"));
    formColumn2.appendChild(createLabel("ชื่อรายการทดสอบ (ภาษาอังกฤษ)"));
    formColumn2.appendChild(createSearchInput("text", "กรอกชื่อรายการทดสอบ (ภาษาอังกฤษ)"));

    const formColumn3 = createSelectColumn("หน่วยงานที่รับผิดชอบ", [
        { value: "", label: "เลือกหน่วยงานที่รับผิดชอบ", disabled: true },
        { value: "national-office-technology-innovation", label: "สำนักงานบริหารการพัฒนาเทคโนโลยีและนวัตกรรมแห่งชาติ" },
        { value: "cyber-data-security-center", label: "ศูนย์ความปลอดภัยด้านข้อมูลและไซเบอร์" },
        { value: "institute-human-resource-education", label: "สถาบันพัฒนาทรัพยากรมนุษย์และการศึกษา" },
        { value: "department-energy-environment-management", label: "กรมส่งเสริมการบริหารจัดการพลังงานและสิ่งแวดล้อม" }
    ]);

    const formColumn4 = createFormColumn("ราคา", "number", "กรอกราคา");
    formColumn4.appendChild(createLabel("ระยะเวลาดำเนินงาน (วัน)"));
    formColumn4.appendChild(createSearchInput("number", "กรอกระยะเวลาดำเนินงาน (วัน)"));

    const formColumn5 = createRadioColumn("ประเภทรายการทดสอบ", [
        { value: "mandatory", label: "Mandatory" },
        { value: "optional", label: "Optional" }
    ]);

    const formColumn6 = createCheckboxColumn("มาตรฐาน ISO 17025", "ได้การรับรองมาตรฐาน ISO 17025");

    const formColumn7 = createTextAreaColumn("หมายเหตุ", "กรอกหมายเหตุ");

    const formColumn8 = createRadioColumn("สถานะการให้บริการ", [
        { value: "available", label: "ให้บริการ" },
        { value: "not-available", label: "งดให้บริการ" }
    ]);

    const formColumn9 = createTextAreaColumn("สาเหตุการงดให้บริการ", "กรอกสาเหตุการงดให้บริการ");

    const formButton = document.createElement("div");
    const deleteButton = document.createElement("button");
    formButton.classList.add("form-button");
    deleteButton.classList.add("button", "primary-button");
    deleteButton.innerHTML = "<i class='bx bx-trash'></i>";
    deleteButton.addEventListener("click", () => {
        newSubForm.remove();
        updateTestCount();
    });

    newSubForm.appendChild(title);
    newSubForm.appendChild(formColumn1);
    newSubForm.appendChild(formColumn2);
    newSubForm.appendChild(formColumn3);
    newSubForm.appendChild(formColumn4);
    newSubForm.appendChild(formColumn5);
    newSubForm.appendChild(formColumn6);
    newSubForm.appendChild(formColumn7);
    newSubForm.appendChild(formColumn8);
    newSubForm.appendChild(formColumn9);
    newSubForm.appendChild(formButton);
    formButton.appendChild(deleteButton);

    document.getElementById("testFormContainer").appendChild(newSubForm);

    testCount++;
};

const updateTestCount = () => {
    const testForms = document.querySelectorAll(".sub-form-container");
    testCount = testForms.length + 1;
};

const createFormColumn = (labelText, inputType, placeholderText) => {
    const formColumn = document.createElement("div");
    formColumn.classList.add("form-column");
    formColumn.appendChild(createLabel(labelText));

    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add("search-input");
    inputWrapper.appendChild(createInput(inputType, placeholderText));
    formColumn.appendChild(inputWrapper);

    return formColumn;
};

const createLabel = (text) => {
    const label = document.createElement("p");
    label.textContent = text;
    return label;
};

const createInput = (type, placeholder) => {
    const input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    return input;
};

const createSearchInput = (type, placeholder) => {
    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add("search-input");
    const input = createInput(type, placeholder);
    inputWrapper.appendChild(input);
    return inputWrapper;
};

const createSelectColumn = (labelText, options) => {
    const formColumn = document.createElement("div");
    formColumn.classList.add("form-column");
    formColumn.appendChild(createLabel(labelText));

    const selectWrapper = document.createElement("div");
    selectWrapper.classList.add("search-input");

    const select = document.createElement("select");
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.disabled = option.disabled || false;
        optionElement.selected = option.selected || false;
        optionElement.textContent = option.label;
        select.appendChild(optionElement);
    });

    selectWrapper.appendChild(select);
    formColumn.appendChild(selectWrapper);

    return formColumn;
};

const createRadioColumn = (labelText, options) => {
    const formColumn = document.createElement("div");
    formColumn.classList.add("form-column");
    formColumn.appendChild(createLabel(labelText));

    const radioWrapper = document.createElement("div");
    radioWrapper.classList.add("search-input");

    options.forEach(option => {
        const radio = document.createElement("label");
        radio.classList.add("radio");
        radio.innerHTML = `
            <input type="radio" name="${labelText}-${testCount}" value="${option.value}" />
            <span></span>
            ${option.label}
        `;
        radioWrapper.appendChild(radio);
    });

    formColumn.appendChild(radioWrapper);
    return formColumn;
};

const createCheckboxColumn = (labelText, checkboxLabel) => {
    const formColumn = document.createElement("div");
    formColumn.classList.add("form-column");
    formColumn.appendChild(createLabel(labelText));

    const checkboxWrapper = document.createElement("div");
    checkboxWrapper.classList.add("search-input");

    const checkbox = document.createElement("label");
    checkbox.classList.add("checkbox");
    checkbox.innerHTML = `
        <input type="checkbox" value="yes">
        <span></span>
        ${checkboxLabel}
    `;
    checkboxWrapper.appendChild(checkbox);
    formColumn.appendChild(checkboxWrapper);

    return formColumn;
};

const createTextAreaColumn = (labelText, placeholderText) => {
    const formColumn = document.createElement("div");
    formColumn.classList.add("form-column");
    formColumn.appendChild(createLabel(labelText));

    const textareaWrapper = document.createElement("div");
    textareaWrapper.classList.add("search-input");

    const textarea = document.createElement("textarea");
    textarea.placeholder = placeholderText;
    textareaWrapper.appendChild(textarea);
    formColumn.appendChild(textareaWrapper);

    return formColumn;
};

// Handle upload file
const updateFile = (event) => {
    const fileName = event.target.files[0] ? event.target.files[0].name : 'ยังไม่ได้เลือกไฟล์';
    document.getElementById('file-name').textContent = fileName;
}