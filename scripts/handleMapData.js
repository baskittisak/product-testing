import { PRODUCT_GROUPS, RESPONSIBLE_AGENCY, PRODUCTS, FEE_DATA } from "./data.js";

export const mapProductGroupTable = () => {
    const productGroups = PRODUCT_GROUPS;
    const productGroupTable = document.getElementById('productGroupTable');

    productGroups.forEach(group => {
      const row = document.createElement('tr');
      const statusClass =
        group.serviceStatus === "ให้บริการ" ? "status-available" : "status-not-available";

      row.innerHTML = `
        <td>${group.productGroupId}</td>
        <td>${group.productGroupName}</td>
        <td>${group.productGroupNameEn}</td>
        <td>${group.productType}</td>
        <td><span class="${statusClass}">${group.serviceStatus}</span></td>
        <td>
          <div class="action-button">
            <button class="button primary-button" onclick="window.location.assign('/#product-group/#edit/${group.productGroupId}')"><i class='bx bx-edit'></i></button>
            <button class="button primary-button"><i class='bx bx-trash'></i></button>
          </div>
        </td>
      `;

      productGroupTable.appendChild(row);
    });
}

export const mapProductTable = () => {
  const products = PRODUCTS;
  const productTable = document.getElementById('productTable');

  products.forEach(product => {
    const row = document.createElement('tr');
    const statusClass =
      product.serviceStatus === "ให้บริการ" ? "status-available" : "status-not-available";

    row.innerHTML = `
      <td>${product.productGroup}</td>
      <td>${product.productCode}</td>
      <td>${product.productName}</td>
      <td>${product.productNameEn}</td>
      <td><span class="${statusClass}">${product.serviceStatus}</span></td>
      <td>
        <div class="action-button">
          <button class="button primary-button" onclick="window.location.assign('/#product/#edit/${product.productCode}')"><i class='bx bx-edit'></i></button>
          <button class="button primary-button"><i class='bx bx-trash'></i></button>
        </div>
      </td>
    `;

    productTable.appendChild(row);
  });
};

export const mapFeeTable = () => {
  const feeData = FEE_DATA;
  const feeTable = document.getElementById('feeTable');

  feeData.forEach(fee => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${fee.date}</td>
      <td>${fee.improvementDetail}</td>
      <td><a href="${fee.document}" target="_blank">ดาวน์โหลดเอกสาร</a></td>
      <td>
          <div class="action-button">
              <button class="button primary-button" onclick="window.location.assign('/#fee-management/#edit/${fee.id}')"><i class='bx bx-edit'></i></button>
              <button class="button primary-button"><i class='bx bx-trash'></i></button>
          </div>
      </td>
    `;


    feeTable.appendChild(row);
  });
};


export const mapResponsibleAgencySelect = () => {
  const responsibleAgency = RESPONSIBLE_AGENCY;
  const responsibleAgencySelect = document.getElementById('responsibleAgencySelect');

  responsibleAgency.forEach(agency => {
      const option = document.createElement('option');
      option.value = agency.value;
      option.textContent = agency.name;
      responsibleAgencySelect.appendChild(option);
  });
}

export const mapProductGroupSelect = () => {
const productGroups = PRODUCT_GROUPS;
const productGroupSelect = document.getElementById('productGroupSelect');

productGroups.forEach(group => {
    const option = document.createElement('option');
    option.value = group.productGroupNameEn;
    option.textContent = group.productGroupName;
    productGroupSelect.appendChild(option);
});
}

export const mapProductGroupForm = (productGroupId) => {
  const productGroup = PRODUCT_GROUPS.find((group) => group.productGroupId === productGroupId);

  const idProductGroup = document.querySelectorAll('span[class="id-product-group"]');
  idProductGroup.forEach((span) => {
    const textNode = document.createTextNode(productGroup.productGroupId);
    span.appendChild(textNode);
  });

  document.querySelector('input[placeholder="กรอกรหัสกลุ่มผลิตภัณฑ์"]').value = productGroup.productGroupId;
  document.querySelector('input[placeholder="กรอกชื่อกลุ่มผลิตภัณฑ์"]').value = productGroup.productGroupName;
  document.querySelector('input[placeholder="กรอกชื่อกลุ่มผลิตภัณฑ์ (ภาษาอังกฤษ)"]').value = productGroup.productGroupNameEn;


  const productTypeRadio = document.querySelectorAll('input[name="type-product-group"]');
  productTypeRadio.forEach(radio => {
      if (radio.value === (productGroup.productType === "ทดสอบ" ? "testing" : "comparison")) {
          radio.checked = true;
      }
  });

  const responsibleAgencySelect = document.getElementById("responsibleAgencySelect");
  const option = document.createElement("option");
  option.value = productGroup.responsibleAgency;
  option.textContent = productGroup.responsibleAgency;
  responsibleAgencySelect.appendChild(option);
  responsibleAgencySelect.value = productGroup.responsibleAgency;

  const serviceStatusRadio = document.querySelectorAll('input[name="status-product-group"]');
  serviceStatusRadio.forEach(radio => {
      if (radio.value === (productGroup.serviceStatus === "ให้บริการ" ? "available" : "not-available")) {
          radio.checked = true;
      }
  });

  document.querySelector('textarea[placeholder="กรอกสาเหตุการงดให้บริการ"]').value = productGroup.reason;
}