import { useState } from "react";

function StudentList() {
    const [students, setStudents] = useState([
        { id: 1, name: "Anna" },
        { id: 2, name: "David" }
    ]);

    const newStudent = {
        id: crypto.randomUUID(),
        name: "Sarah"
    };

    return (
        <div className="student-card">
            <span className="eyebrow">STUDENT DIRECTORY</span>
            <h1>Our students</h1>
            <p className="student-caption">A little space to keep everyone together.</p>

            <div className="student-actions">
                <button className="action-button action-button-primary" onClick={() => setStudents([...students, newStudent])}>Add</button>
                <button className="action-button action-button-secondary" onClick={() => setStudents(students.filter((student) => student.id !== 2))}>Remove</button>
            </div>

            <ul className="student-list">
                {students.map((student) => (
                    <li className="student-item" key={student.id}>
                        <span className="student-name">{student.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;
