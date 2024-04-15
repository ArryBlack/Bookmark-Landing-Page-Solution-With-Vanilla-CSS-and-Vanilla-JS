const featureBtns = document.querySelectorAll('.feature_list_btn');
const featureTabs = document.querySelectorAll('.feature_content');

for (let i = 0; i < featureBtns.length; i++) {
    const btn = featureBtns[i];
    btn.addEventListener('click', function () {
        if (i === 0) {
            this.classList.add('active');
            featureTabs[0].classList.remove('hidden');
            featureTabs[1].classList.add('hidden');
            featureTabs[2].classList.add('hidden');
            featureBtns[1].classList.remove('active');
            featureBtns[2].classList.remove('active');
        } else if (i === 1) {
            this.classList.add('active');
            featureTabs[0].classList.add('hidden');
            featureTabs[1].classList.remove('hidden');
            featureTabs[2].classList.add('hidden');
            featureBtns[0].classList.remove('active');
            featureBtns[2].classList.remove('active');
        } else {
            this.classList.add('active');
            featureTabs[0].classList.add('hidden');
            featureTabs[1].classList.add('hidden');
            featureTabs[2].classList.remove('hidden');
            featureBtns[0].classList.remove('active');
            featureBtns[1].classList.remove('active');
        }
    });
}