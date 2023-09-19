// animate icons in the skills section upon clicking
const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
    // 0: Stop, 1: Rotate, 2: Bounce
    let animationState = 0; 

    skill.addEventListener('click', () => {
        if (animationState === 0) {
            skill.classList.add('rotate');
            animationState = 1;
        } else if (animationState === 1) {
            skill.classList.remove('rotate');
            skill.classList.add('bounce');
            animationState = 2;
        } else if (animationState === 2) {
            skill.classList.remove('bounce');
            animationState = 0;
        }
    });
});
