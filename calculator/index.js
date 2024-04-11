const result = document.querySelector('.result'); // result 요소 선택
let formula = []; // 수식을 저장할 배열

// calculate function
function calculate(e) {
    const value = e.target.innerText; // 클릭된 버튼의 텍스트 값을 가져옵니다.

    // 클릭된 버튼의 값에 따라 동작을 구분합니다.
    if (value === '=') {
        // '=' 버튼 클릭 시, 현재 수식을 평가하여 결과를 출력합니다.
        const data = eval(formula.join('')) || '';
        result.innerText = data;
        formula = [data.toString()]; // 계산 결과를 다음 계산에 사용할 수 있도록 수식을 설정합니다.
    } else if (value === 'C') {
        // 'C' 버튼 클릭 시, 수식을 초기화하고 결과를 지웁니다.
        formula = [];
        result.innerText = '';
    } else if (value === '<-') {
        // '<-' 버튼 클릭 시, 수식의 마지막 문자를 삭제합니다.
        formula.pop();
        result.innerText = formula.join(''); // 수정된 수식을 결과에 반영합니다.
    } else {
        // 숫자 또는 기호 버튼을 클릭한 경우, 해당 값을 수식에 추가합니다.
        formula.push(value);
        result.innerText = formula.join(''); // 수정된 수식을 결과에 반영합니다.
    }
}

// append event
const numButtons = document.querySelectorAll('.key-wrap div');
const calcButtons = document.querySelectorAll('.calc-wrap div');

numButtons.forEach(button => {
    button.addEventListener('click', calculate);
});

calcButtons.forEach(button => {
    button.addEventListener('click', calculate);
});