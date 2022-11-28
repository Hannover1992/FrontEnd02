import {ProjectsInterface} from "./projects.interface";
import {ProjectInterface} from "../project/project.interface";
import {Project} from "../project/project";

export class Projects implements ProjectsInterface {
  projects: Project[];
  constructor(projects: ProjectInterface[] = []) {
    this.projects = projects;
  }
}
