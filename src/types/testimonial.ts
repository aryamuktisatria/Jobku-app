export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  created_at: string;
  is_approved: boolean;
}

export interface TestimonialFormData {
  name: string;
  comment: string;
  rating: number;
}