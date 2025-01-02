const updateFile = (event) => {
    const fileName = event.target.files[0] ? event.target.files[0].name : 'ยังไม่ได้เลือกไฟล์';
    document.getElementById('fileName').textContent = fileName;
}