let groupsData = [];

// элементы
const groupsList = document.getElementById('groupsList');
const searchInput = document.getElementById('groupSearch');
const lunchTimeEl = document.getElementById('lunchTime');
const lunchStatusEl = document.getElementById('lunchStatus');

// загрузка JSON
fetch('groups.json')
    .then(res => res.json())
    .then(data => {
        groupsData = data.groups;
        renderGroups(groupsData);
    });

// отрисовка групп
function renderGroups(groups) {
    groupsList.innerHTML = '';

    groups.forEach(group => {
        const div = document.createElement('div');
        div.className = 'group-item';
        div.textContent = group.name;

        div.addEventListener('click', () => selectGroup(group));

        groupsList.appendChild(div);
    });
}

// выбор группы
function selectGroup(group) {
    lunchTimeEl.textContent = group.lunchTime;

    lunchStatusEl.textContent = group.isFree ? 'Бесплатно' : 'Платно';
    lunchStatusEl.className = 'status ' + (group.isFree ? 'free' : 'paid');
}

// поиск
searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();

    const filtered = groupsData.filter(group =>
        group.name.toLowerCase().includes(value)
    );

    renderGroups(filtered);
});
