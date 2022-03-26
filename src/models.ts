export interface DogModel {
  bred_for: string;
  breed_group: string;
  height: { imperial: string; metric: string };
  id: number;
  image: { id: string; width: number; height: number; url: string };
  life_span: string;
  name: string;
  origin: string;
  temperament: string;
  weight: { imperial: string; metric: string };
}
