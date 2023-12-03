// Project Status enum
export enum ProjectStatus {
  Active,
  Finished,
}

// SingleProject Class
export class SingleProject {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}
