const btns = document.querySelectorAll('.question_section');

const icons = document.querySelectorAll('.faq_icon');
for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.addEventListener('click', function () {
        let answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icons[i].classList.remove('faq_icon_active');
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icons[i].classList.add('faq_icon_active');
        }
    });
}