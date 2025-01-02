import { PRODUCT_GROUPS } from "./data.js";

export const mapProductGroupTable = () => {
    const productGroups = PRODUCT_GROUPS;
    const tableBody = document.getElementById('productGroupTable');

    productGroups.forEach(group => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${group.productGroupId}</td>
        <td>${group.productGroupName}</td>
        <td>${group.productGroupNameEn}</td>
        <td>${group.productType}</td>
        <td><span class="status-${group.serviceStatus === 'ให้บริการ' ? 'available' : 'not-available'}">${group.serviceStatus}</span></td>
        <td>
          <div class="action-button">
            <button class="button primary-button"><i class='bx bx-edit'></i></button>
            <button class="button primary-button"><i class='bx bx-trash'></i></button>
          </div>
        </td>
      `;

      tableBody.appendChild(row);
    });
}