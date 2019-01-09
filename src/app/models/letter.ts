import { LetterStatus } from './letter-status.enum';
export interface Letter {
  email: String;
  letterMsg: String;
  private?: Boolean;
  created_at?: Date;
  email_confirmed?: Boolean;
  status?: LetterStatus;
}
