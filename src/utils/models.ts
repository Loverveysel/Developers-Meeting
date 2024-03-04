
export type User = {
    email: string | null | undefined
    firstName: string,
    secondName?: string | null,
    country: string,
    phoneNumber: string,
    educationExperience: string,
    domains: string[],
    programmingLanguages: string[],
    profilePicture?: string | null | undefined,
    posts: Post[]
  }
  
export  interface Post {
    id: string;
    slug: string;
    title: string;
    body: string;
    author: User;
    authorId: string;
    comments: Comment[]; // Assuming you have a Comment type or interface
  }
  
export  interface Comment {
    id: string;
    comment: string;
    post: Post;
    postId: string;
  }