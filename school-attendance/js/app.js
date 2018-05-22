(function () {

    let helpers = (() => {
        return {
            getRandom: () => {
                return (Math.random() >= 0.5);
            },

            fillLocalStorageWithStudents: (students, lessonNum) => {
                for (const student of students) {
                    for (let i = 0; i < lessonNum; i++) {
                        student.attendance.push(helpers.getRandom());
                    }
                }
                localStorage.students = JSON.stringify(students);
                return students;
            }
        }
    })();

    let model = (() => {
        let students = [
            {id: 1, name: 'Slappy the Frog', attendance: []},
            {id: 2, name: 'Lilly the Lizard', attendance: []},
            {id: 3, name: 'Paulrus the Walrus', attendance: []},
            {id: 4, name: 'Gregory the Goat', attendance: []},
            {id: 5, name: 'Adam the Anaconda', attendance: []}
        ];

        const lessonNum = 12;

        return {
            getStudents: () => {
                return localStorage.students ? JSON.parse(localStorage.students) : (helpers.fillLocalStorageWithStudents(students, lessonNum));
            },

            saveStudents: (students) => {
                localStorage.students = JSON.stringify(students);
            }
        };
    })();

    let view = (() => {
        let headerTemplate = (students) => {
            let lessonNums = students[0].attendance.reduce((total, nextItem, index) => {
                return total + `<th>${index + 1}</th>`;
            }, '');

            return `<thead>
                        <tr>
                            <th class="name-col">Student Name</th>
                            ${lessonNums}
                            <th class="miss-clo">Days Missed-col</th>
                        </tr>
                    </thead>`;
        };

        let rowTemplate = (student) => {
            let attendCheckboxes = student.attendance.reduce((total, nextItem, index) => {
                let value = nextItem ? 'checked' : '';
                return total + `<td class="attend-col"><input type="checkbox"${value}></td>`
            }, '');
            let missedLessons = student.attendance.filter((item) => {return !item});

            return `<tr class="student" id="${student.id}">
                <td class="name-col">${student.name}</td>
                ${attendCheckboxes}
                <td class="missed-col">${missedLessons.length}</td>
            </tr>`;
        };

        let bodyTemplare = (students) => {
            let studentRows = students.map((student) => {
                return rowTemplate(student);
            });
            return `<tbody>
                    ${studentRows.join('')}
                </tbody>`;
        };

        return {
            render: (students) => {
                let entireHtml = headerTemplate(students) + bodyTemplare(students);
                let table = document.getElementById('students-table');

                table.innerHTML = entireHtml;

                let checkboxes = table.getElementsByTagName('input');
                for (const checkbox of checkboxes) {
                    checkbox.addEventListener('click', controller.recalculateRow);
                }
            }
        }; 
    })();

    let controller = ( () => {
        let students = model.getStudents();

        return {
            init: () => {
                view.render(students);
            },

            recalculateRow: function () {
                let parentRow = $(this).parent().parent();
                let studentId = +parentRow.prop('id');
                let missedElem = parentRow.find('td.missed-col');
                let selectedRowCheckboxes = parentRow.find('td input');
                let missedValue = 0;

                selectedRowCheckboxes.each((index, elem) => {
                    let checked = $(elem).prop('checked');

                    if (!checked) {
                        missedValue++;
                    }
                    let student = students.filter((st) => {
                        return st.id === studentId;
                    })[0];
                    student.attendance[index] = checked;
                });

                missedElem.text(missedValue);
                model.saveStudents(students);
            }
        }
    })();
    controller.init();
}());

