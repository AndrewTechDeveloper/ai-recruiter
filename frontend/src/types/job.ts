import { Action } from 'typescript-fsa';

export const STEP_FORWARD = 'STEP_FORWARD';
export const STEP_BACKWARD = 'STEP_BACKWARD';
export const LOADING = 'LOADING';
export const GET_COLLEGES_SUCCESS = 'GET_COLLEGES_SUCCESS';
export const GET_FACULTIES_SUCCESS = 'GET_FACULTIES_SUCCESS';
export const CONNECTION_FAILURE = 'CONNECTION_FAILURE';
export const SCHOOL = 'SCHOOL';
export const FACULTY = 'FACULTY';
export const AGE = 'AGE';
export const GENDER = 'GENDER';
export const SKILL = 'SKILL';
export const HOBBY = 'HOBBY';
export const CARRER = 'CAREER';
export const SOCIETY = 'SOCIETY';

export interface JobState {
  activeStep: number;
  isLoading: boolean;
  school: string;
  faculty: string;
  age: number;
  gender: number;
  skill: string;
  hobby: string;
  career: string;
  society: string;
  company: string;
  colleges: string[];
  faculties: string[];
}
export type JobDispatchProps = {
  stepForward?: () => Action<number>;
  stepBackward?: () => Action<number>;
  getColleges?: () => Action<any>;
  ageStatus?: (
    e: React.FormEvent<HTMLInputElement>,
  ) => Action<React.FormEvent<HTMLInputElement>>;
  genderStatus?: (val: string) => Action<string>;
  schoolChange?: (val: string) => Action<string>;
  facultyStatus?: (e: string) => Action<string>;
};
export type DispatchProps = {
  jobDispatch: JobDispatchProps;
};
interface StepBackword {
  type: typeof STEP_BACKWARD;
  activeStep: number;
}
interface StepForward {
  type: typeof STEP_FORWARD;
  activeStep: number;
}
interface Loading {
  type: typeof LOADING;
  loading: boolean;
}
interface ConnectionFailure {
  type: typeof CONNECTION_FAILURE;
}
interface GetCollegesSuccess {
  type: typeof GET_COLLEGES_SUCCESS;
  colleges: string[];
}
interface GetFacultiesSuccess {
  type: typeof GET_FACULTIES_SUCCESS;
  faculties: string[];
}
interface SchoolStatus {
  type: typeof SCHOOL;
  school: string;
}
interface GenderStatus {
  type: typeof GENDER;
  gender: string;
}
interface AgeStatus {
  type: typeof AGE;
  age: string;
}
interface FacultyStatus {
  type: typeof FACULTY;
  faculty: string;
}

export type ActionTypes =
  | StepForward
  | StepBackword
  | Loading
  | ConnectionFailure
  | GetCollegesSuccess
  | GetFacultiesSuccess
  | SchoolStatus
  | GenderStatus
  | AgeStatus
  | FacultyStatus;
