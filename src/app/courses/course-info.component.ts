import { OnInit, Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: './course-info.component.html',
})
export class CourseInfoComponent implements OnInit {
    // course: Course
    courseId: number = 0

    constructor(private activatedRoute: ActivatedRoute) {}
    ngOnInit(): void {
        // this.courseId = +this.activatedRoute.snapshot.paramMap.get('id')
    }
}
