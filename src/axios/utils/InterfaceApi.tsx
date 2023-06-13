export interface LoginResponse {
    data: {
      accessToken: string;
      user: {
        UserName: string;
        Email: string;
        Phone: string;
        Address: string;
        role: string;
        ProfilePicture: string;
      };
      message: string;
    }
  }

  export interface RegisterResponse{
    
      first_name: string;
      last_name: string;
      email: string;
      password: string;
      phone: string;
      birth_date: string;
      address: string;
      gender: string;
    
  }