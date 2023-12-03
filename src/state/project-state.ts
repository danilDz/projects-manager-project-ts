import { SingleProject, ProjectStatus } from "../models/single-project.js";

// Listener type
type Listener<T> = (items: T[]) => void;

// Project State Management
abstract class State<T> {
  protected listeners: Listener<T>[] = [];

  public addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

export class ProjectState extends State<SingleProject> {
  private projects: SingleProject[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new ProjectState();
    return this.instance;
  }

  public addProject(title: string, description: string, people: number) {
    const newProject = new SingleProject(
      Math.random().toString(),
      title,
      description,
      people,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    this.updateListeners();
  }

  public moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((project) => project.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listener of this.listeners) {
      listener(this.projects.slice());
    }
  }
}

export const projectState = ProjectState.getInstance();
