export interface PlanItem {
  name: string;
  calories: number;
}

export interface PlanSection {
  heading: string;
  options: PlanItem[];
}