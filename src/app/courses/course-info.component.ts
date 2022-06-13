import { OnInit, Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CourseService } from './course.service'
import { Course } from './course'

@Component({
    templateUrl: './course-info.component.html',
})
export class CourseInfoComponent implements OnInit {
    course: Course
    // courseId: number = 0

    constructor(
        private activatedRoute: ActivatedRoute,
        private courseService: CourseService
    ) {}
    ngOnInit(): void {

        this.courseId = +Number(this.activatedRoute.snapshot.paramMap.get('id'))

    }
}
