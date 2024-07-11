// 모든 .accordion 요소에 대해 각각 이벤트 리스너를 추가합니다.
document.querySelectorAll('.accordion').forEach(accordion => {
    const iconDown = accordion.querySelector('.icon'); // 아래로 향하는 아이콘
    const iconUp = accordion.querySelector('.icon2'); // 위로 향하는 아이콘
    const sidebar = accordion.nextElementSibling; // 해당 아코디언의 사이드바

    // 아래로 향하는 아이콘 클릭 시 실행되는 함수
    iconDown.addEventListener('click', () => {
        closeAllAccordions(); // 모든 아코디언을 닫습니다.
        openAccordion(iconDown, iconUp, sidebar, accordion.parentElement); // 클릭된 아코디언을 엽니다.
    });

    // 위로 향하는 아이콘 클릭 시 실행되는 함수
    iconUp.addEventListener('click', () => {
        closeAccordion(iconDown, iconUp, sidebar, accordion.parentElement); // 클릭된 아코디언을 닫습니다.
    });
});

// 모든 아코디언을 닫는 함수
function closeAllAccordions() {
    document.querySelectorAll('.accordionBox').forEach(box => {
        const iconDown = box.querySelector('.icon'); // 각 아코디언의 아래로 향하는 아이콘
        const iconUp = box.querySelector('.icon2'); // 각 아코디언의 위로 향하는 아이콘
        const sidebar = box.querySelector('.sidebar'); // 각 아코디언의 사이드바
        closeAccordion(iconDown, iconUp, sidebar, box); // 각 아코디언을 닫습니다.
    });
}

// 특정 아코디언을 여는 함수
function openAccordion(iconDown, iconUp, sidebar, accordionBox) {
    sidebar.style.transform = 'translateY(0px)'; // 사이드바를 아래로 펼칩니다.
    iconUp.style.display = 'block'; // 위로 향하는 아이콘을 표시합니다.
    iconDown.style.display = 'none'; // 아래로 향하는 아이콘을 숨깁니다.
    accordionBox.style.marginBottom = '150px'; // 아코디언 박스 아래에 공간을 추가합니다.
}

// 특정 아코디언을 닫는 함수
function closeAccordion(iconDown, iconUp, sidebar, accordionBox) {
    sidebar.style.transform = 'translateY(-100px)'; // 사이드바를 위로 숨깁니다.
    iconDown.style.display = 'block'; // 아래로 향하는 아이콘을 표시합니다.
    iconUp.style.display = 'none'; // 위로 향하는 아이콘을 숨깁니다.
    accordionBox.style.marginBottom = '50px'; // 아코디언 박스 아래의 기본 공간을 설정합니다.
}