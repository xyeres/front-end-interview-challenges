//write-your-code-implementation-here
class Assignment {
  make(builder) {
    builder.step1();
    builder.step2();
    builder.step3();
    builder.step4();
    return builder.get();
  }
}


class AssignmentBuilder {
  constructor(subject, level, dueDate) {
    this.assignment = null;
    this.subject = subject;
    this.level = level;
    this.dueDate = dueDate
  }

  step1() {
    this.assignment = new Task();
  }

  step2() {
    this.assignment.setSubject(this.subject)
  }

  step3() {
    this.assignment.setLevel(this.level)
  }

  step4() {
    this.assignment.setDueDate(this.dueDate)
  }

  get() {
    return this.assignment;
  }

}

class Task {
  constructor() {
    this.subject = null;
    this.level = null;
    this.dueDate = null;
  }
  setSubject(subject) {
    this.subject = subject;
  }
  setLevel(level) {
    this.level = level;
  }
  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }
  announcement() {
    console.log(`Your ${this.subject} assignment's difficulty level is: ${this.level}. It is due on ${this.dueDate}.`)
  }
}

try {
  var assignment = new Assignment();
  var assignmentBuilder = new AssignmentBuilder("Math", "Hard", "12th June, 2020");
  var assignmentBuilderScience = new AssignmentBuilder("Science", "East", "24th Dec, 2020");
  var mathAssignment = assignment.make(assignmentBuilder);
  var sciAssignment = assignment.make(assignmentBuilderScience);
  mathAssignment.announcement();
  sciAssignment.announcement();
} catch (e) {
  console.log(e);
}