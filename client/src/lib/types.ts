export interface University {
  name: string;
  ranking: number;
  admissionChance: number;
  fees: string;
  requirements: string;
  scholarships: string;
}

export interface UniversityMatch {
  id: number;
  email: string;
  academicLevel: string;
  preferredCountry: string;
  fieldOfStudy: string;
  currentScore: string;
  matches: University[];
  createdAt: Date;
}

export interface ConsultationBooking {
  id: number;
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  serviceType: string;
  message?: string;
  status: string;
  createdAt: Date;
}

export interface EligibilityCheck {
  id: number;
  email: string;
  targetUniversity: string;
  academicScore: string;
  englishTest?: string;
  workExperience?: string;
  eligibilityResults: {
    eligibilityPercentage: number;
    requirements: string[];
    improvements: string[];
    recommendedPrograms: string[];
  };
  createdAt: Date;
}

export interface Country {
  name: string;
  flag: string;
  duration: string;
  topUnis: string;
  fees: string;
  visa: string;
  benefits: string;
  details: {
    intakes: string;
    requirements: string;
    workRights: string;
    pathwayToPR: string;
  };
}

export interface Testimonial {
  id: string;
  url: string;
  title: string;
  description: string;
  student: {
    name: string;
    university: string;
    program: string;
  };
  thumbnail: string;
}
