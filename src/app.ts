/// <reference path="components/project-list.ts" />
/// <reference path="components/project-input.ts" />

namespace App {
  const projectInput = new ProjectInput();
  const activeProjectList = new ProjectList("active");
  const finishedProjectList = new ProjectList("finished");
}
