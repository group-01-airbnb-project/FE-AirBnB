
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

export interface RegisterResponse {

  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  birth_date: string;
  address: string;
  gender: string;

}

export interface GetUser {
  Id: number;
  UserName: string;
  Email: string;
  Phone: string;
  Address: string;
  ProfilePicture: string;
  Role: string;

}

export interface GetHomeStay {
  homstay_id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  facilities: string;
  rating: number;
  image_link: string;
}

export interface CreateHomeStay {

  title: string;
  description: string;
  location: string;
  address: string,
  price: number;
  facilities: string;
}

export interface Upgrade {
  role: string;
}