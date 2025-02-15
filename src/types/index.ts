// User Types
export interface User {
    id: string;
    email: string;
    displayName: string;
    role: 'admin' | 'user';
    createdAt: Date;
    profileImage?: string;
  }
  
  // Course Types
  export interface Course {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    author: string;
    modules: CourseModule[];
    featured: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface CourseModule {
    id: string;
    title: string;
    content: string;
    order: number;
    resources: Resource[];
  }
  
  // Event Types
  export interface Event {
    id: string;
    title: string;
    description: string;
    date: Date;
    location: string;
    type: 'online' | 'in-person';
    capacity: number;
    registeredUsers: string[]; // User IDs
  }
  
  // Tool Types
  export interface ToolData {
    id: string;
    userId: string;
    toolType: ToolType;
    data: any; // Specific to each tool
    createdAt: Date;
    lastModified: Date;
  }
  
  export type ToolType = 
    | 'financial-planner'
    | 'lifetime-calculator'
    | 'plan-of-attack'
    | 'outreach-tracker'
    | 'audience-calculator'
    | 'lead-generator';
  
  // Feed Types
  export interface Post {
    id: string;
    userId: string;
    content: string;
    media?: string[];
    likes: string[]; // User IDs
    comments: Comment[];
    createdAt: Date;
  }
  
  export interface Comment {
    id: string;
    userId: string;
    content: string;
    createdAt: Date;
  }