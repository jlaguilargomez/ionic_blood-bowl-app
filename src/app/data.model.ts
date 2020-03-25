import { NumberSymbol } from '@angular/common';

export interface SkillData {
  description: string;
  name_en: string;
  name_es: string;
  type: string;
}

export interface TeamData {
  id: string;
  logo: string;
  overview: string;
  players: PlayerData[];
  strengths: string[];
  team: string;
  'team-img': string;
  weaknesses: string[];
}

export interface PlayerData {
  cost: number;
  improvements: {
    double: string[];
    normal: string[];
  };
  max: number;
  position: string;
  skills: string[];
  stats: PlayerStats;
}

export interface PlayerStats {
  ag: number;
  av: number;
  ma: number;
  st: number;
}
