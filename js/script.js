const member = document.querySelectorAll('.member');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function update() {
    member.forEach(m => {
        m.classList.remove("active", "left", "right");
    });

    const total = member.length;

    let left = (index - 1 + total) % total;
    let right = (index + 1) % total;

    member[index].classList.add("active");
    member[left].classList.add("left");
    member[right].classList.add("right");
}

prev.onclick = () => {
    index = (index - 1 + member.length) % member.length;
    update();
};

next.onclick = () => {
    index = (index + 1) % member.length;
    update();
};

update();