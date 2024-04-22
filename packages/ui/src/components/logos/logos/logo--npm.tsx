import { LogoComponent } from '../SvgLogo';

const Npm = ({ width, height }: LogoComponent) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 220" width={width} height={height}>
    <path d="m2.48,0h540v180h-270v30h-120v-30H2.48V0Zm30,150h60V60h30v90h30V30H32.48v120ZM182.48,30v150h60v-30h60V30h-120Zm60,30h30v60h-30v-60Zm90-30v120h60V60h30v90h30V60h30v90h30V30h-180Z" fill="#cc3937" />
    <polygon points="32.48 150 92.48 150 92.48 60 122.48 60 122.48 150 152.48 150 152.48 30 32.48 30 32.48 150" fill="#fff" />
    <path d="m182.48,30v150h60v-30h60V30h-120Zm90,90h-30v-60h30v60Z" fill="#fff" />
    <polygon points="332.48 30 332.48 150 392.48 150 392.48 60 422.48 60 422.48 150 452.48 150 452.48 60 482.48 60 482.48 150 512.48 150 512.48 30 332.48 30" fill="#fff" />
  </svg>
);
export default Npm;
