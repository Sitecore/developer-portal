export interface PersonaKey {
  ProfileKey: ProfileKey;
  value: number;
}

export interface PersonaType {
  Name: string;
  Description: string;
  CommonAttributes: string[];
  ImageUrl: string;
  PersonaKeys: PersonaKey[];
}

export interface ProfileCard {
  Name: string;
  Description: string;
  ImageUrl: string;
  PersonaKeys: PersonaKey[];
}

export interface ProfileKey {
  name: string;
}
