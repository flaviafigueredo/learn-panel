import './CourseList.css'
import { Course } from "../Course/Course"
import { coursesData } from '../../data/coursesData'

export function CourseList() {
    return (
        <div className='course-list-container'>
            <h1>Meus cursos</h1>
            <ul>
                {coursesData.map((course) => (
                    <Course
                        key={course.id}
                        title={course.title}
                        description={course.description}
                        image={course.image}
                    />
                ))}
            </ul>
        </div>
    )
}