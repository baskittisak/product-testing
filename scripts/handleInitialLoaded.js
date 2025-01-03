import { 
    mapProductGroupTable,
    mapProductTable,
    mapFeeTable,
    mapResponsibleAgencySelect,
    mapProductGroupSelect,
    mapProductGroupForm,
    mapProductForm,
    mapFeeForm
} from "./handleMapData.js";

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
        const isHome = hash === 'home';
        const isCreate = hash.includes('create');
        const isEdit = hash.includes('edit');

        if (isHome) {
            page = `pages/${hash}.html`;
        } else if (isCreate) {
            const section =  hash.split('/')[0];
            page = `pages/${section}/create.html`;
        } else if (isEdit) {
            const section =  hash.split('/')[0];
            page = `pages/${section}/edit.html`;
        } else {
            page = `pages/${hash}/index.html`;
        }

        const content = document.getElementById('content');

        fetch(page)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
                const section =  hash.split('/')[0];
                if (!isHome && !isCreate && !isEdit) {
                    selectedFunctionMapTable(section);
                } else if (isCreate || isEdit) {
                    const id = isEdit && hash.split('#edit/')[1];
                    selectedFunctionMapForm(section, id);
                }
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


const selectedFunctionMapTable = (section) => {
    switch (section) {
        case "product":
            mapProductGroupSelect();
            mapProductTable();
            break;
        case "product-group":
            mapProductGroupTable();
            break;
        case "fee-management":
            mapFeeTable();
            break;
        default:
            break;
    }
}

const selectedFunctionMapForm = (section, id) => {
    switch (section) {
        case "product":
            mapProductGroupSelect();
            id && mapProductForm(id);
            break;
        case "product-group":
            mapResponsibleAgencySelect();
            id && mapProductGroupForm(id);
            break;
        case "fee-management":
            id && mapFeeForm(id);
            break;
        default:
            break;
    }
}