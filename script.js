const currentLevel = document.getElementById('currentLevel');
const targetLevel = document.getElementById('targetLevel');
const serviceType = document.getElementById('serviceType');
const priceResult = document.getElementById('priceResult');
const quickForm = document.getElementById('quickForm');

function formatVND(value) {
  return `${Math.max(0, Math.round(value)).toLocaleString('vi-VN')}đ`;
}

function updateEstimate() {
  const current = Number(currentLevel.value || 0);
  const target = Number(targetLevel.value || 0);
  const unitPrice = Number(serviceType.value || 0);
  const gap = Math.max(0, target - current);
  const estimated = gap * unitPrice;
  priceResult.textContent = `Chi phí ước tính: ${formatVND(estimated)}`;
}

[currentLevel, targetLevel, serviceType].forEach((el) => {
  if (el) el.addEventListener('input', updateEstimate);
});

if (quickForm) {
  quickForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Đăng ký thành công! Admin sẽ liên hệ báo giá trong ít phút.');
    quickForm.reset();
    updateEstimate();
  });
}

updateEstimate();
